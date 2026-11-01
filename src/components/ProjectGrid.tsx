"use client";

import { useState } from "react";
import type { Project } from "@/lib/content";

/** Project cards with category filters. Featured projects come first and span two columns. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const [all, setAll] = useState(false);
  const list = projects
    .filter((p) => active === "All" || p.category === active)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
  // Long lists start with the first 9; the rest is one tap away.
  const shown = all ? list : list.slice(0, 9);
  const count = (cat: string) => (cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {categories.map((cat) => (
          <button key={cat} aria-pressed={active === cat} onClick={() => { setActive(cat); setAll(false); }}>
            {cat} <span className="count">{count(cat)}</span>
          </button>
        ))}
      </div>
      <div className="projects">
        {shown.map((p) => (
          <article key={p.id} className={`card${p.featured ? " featured" : ""}`}>
            {p.image ? (
              <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />
            ) : (
              <div className="card-placeholder" aria-hidden="true">{p.title.slice(0, 1)}</div>
            )}
            <div className="card-body">
              <p className="eyebrow">{p.category}</p>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="tags">
                {p.tech.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
              <div className="row">
                {p.demo && <a className="btn primary small" href={p.demo} target="_blank" rel="noreferrer">Live site</a>}
                {p.github && <a className="btn small" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
      {list.length > shown.length && (
        <div className="more">
          <button className="btn" onClick={() => setAll(true)}>Show all {list.length} projects</button>
        </div>
      )}
    </>
  );
}
