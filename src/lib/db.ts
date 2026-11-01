import { neon } from "@neondatabase/serverless";
import { defaultContent, type SiteContent } from "./content";

/**
 * Content lives in one row of one table in Neon Postgres:
 *   site_content(id int primary key, data jsonb, updated_at timestamptz)
 * Without DATABASE_URL the site shows the defaults from content.ts (handy for local preview).
 */
const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;

async function ensureTable() {
  if (!sql) return;
  await sql`create table if not exists site_content (
    id int primary key,
    data jsonb not null,
    updated_at timestamptz not null default now()
  )`;
}

export async function getContent(): Promise<SiteContent> {
  if (!sql) return defaultContent;
  try {
    await ensureTable();
    const rows = (await sql`select data from site_content where id = 1`) as { data: SiteContent }[];
    if (!rows[0]) return defaultContent;
    // Merge with defaults so new fields added in code always have a value,
    // and so projects and links added in code appear even after the admin has saved once.
    const data = { ...defaultContent, ...rows[0].data };
    const removed = new Set(data.removed ?? []);
    const projectIds = new Set(data.projects.map((p) => p.id));
    const linkUrls = new Set(data.links.map((l) => l.url));
    const certIds = new Set((data.certificates ?? []).map((c) => c.id));
    return {
      ...data,
      projects: [...data.projects, ...defaultContent.projects.filter((p) => !projectIds.has(p.id) && !removed.has(p.id))],
      certificates: [...(data.certificates ?? []), ...defaultContent.certificates.filter((c) => !certIds.has(c.id) && !removed.has(`cert:${c.id}`))],
      links: [...data.links, ...defaultContent.links.filter((l) => !linkUrls.has(l.url) && !removed.has(`link:${l.url}`))],
    };
  } catch (err) {
    console.error("Could not read content, showing defaults:", err);
    return defaultContent;
  }
}

export async function saveContent(data: SiteContent): Promise<void> {
  if (!sql) throw new Error("DATABASE_URL is not set, so changes can't be saved.");
  await ensureTable();
  await sql`insert into site_content (id, data, updated_at)
            values (1, ${JSON.stringify(data)}::jsonb, now())
            on conflict (id) do update set data = excluded.data, updated_at = now()`;
}

export const canSave = () => !!sql;
