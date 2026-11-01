/** Everything the public site shows. The admin panel edits this one document. */
export interface Link {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  id: string;
  name: string;
  items: string[];
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface SiteContent {
  profile: {
    name: string;
    headline: string;
    intro: string;
    about: string[];
    location: string;
    email: string;
    photo: string;
    cvUrl: string;
  };
  links: Link[];
  stats: Stat[];
  projects: Project[];
  experience: Experience[];
  skills: SkillGroup[];
  awards: string[];
  /** Ids of built-in projects and links the owner deleted, so they don't come back from the defaults. */
  removed?: string[];
}

export const defaultContent: SiteContent = {
  profile: {
    name: "Jaloliddin Kulmatov",
    headline: "AI / ML Engineer · Full-Stack Developer · Founder of ICOM",
    intro:
      "Engineering student at Jeonbuk National University. I build AI products and web apps that help people learn, work and live in a new country.",
    about: [
      "I'm from Uzbekistan and study International Engineering and Science at Jeonbuk National University in Korea, on a full scholarship. This semester I'm on exchange at Universiti Malaya.",
      "I'm passionate about science and technology, with a strong interest in web development, machine learning, data science and problem-solving.",
      "I founded ICOM, an AI platform for international students in Korea. It earned a patent and a conference paper.",
    ],
    location: "Jeonju, South Korea",
    email: "jaloliddinqulmatov12@gmail.com",
    photo: "/photo.jpg",
    cvUrl: "/cv.pdf",
  },
  links: [
    { label: "GitHub", url: "https://github.com/Jaloliddin-Kulmatov" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jaloliddin-kulmatov/" },
    { label: "Telegram", url: "https://t.me/JaloliddinKulmatov" },
  ],
  stats: [
    { id: "gpa", value: "4.47/4.5", label: "GPA, full scholarship" },
    { id: "rank", value: "1st of 69", label: "international students in Engineering" },
    { id: "patent", value: "Patent", label: "from the ICOM project" },
    { id: "paper", value: "Paper", label: "2026 Summer Conference" },
  ],
  projects: [
    {"id": "shifokor", "title": "Shifokor", "category": "AI & Full-Stack", "summary": "Team project. Find a doctor in Uzbekistan, compare prices before you go, and get an online consultation by chat, audio or video call, with photos, online payment (Payme, Click) and reviews only from real patients. In Uzbek, Russian and English.", "tech": ["Next.js", "TypeScript", "PostgreSQL", "WebRTC", "Telegram bot"], "image": "/projects/shifokor.jpg", "github": "https://github.com/Jaloliddin-Kulmatov/shifokor-site", "demo": "https://shifokor-site.vercel.app", "featured": true},
    {"id": "storyling", "title": "Storyling", "category": "AI & Full-Stack", "summary": "Learn a language by reading stories at your level: 10 languages, 326 stories with audio, tap any word for its meaning, flashcards, games, mock exams, accounts and a leaderboard. Web, iOS and Android from one codebase.", "tech": ["Next.js", "React Native", "TypeScript", "Neon Postgres", "Groq LLM"], "image": "/projects/storyling.jpg", "github": "https://github.com/Jaloliddin-Kulmatov/storyling", "demo": "https://storyling.vercel.app", "featured": true},
    {
      id: "icom",
      title: "ICOM",
      category: "AI & Full-Stack",
      summary:
        "Platform for international students in Korea: chat, internships, visa and housing guides, banking and an AI assistant. Internship posts are collected and translated with AI twice a day.",
      tech: ["Next.js", "TypeScript", "Flask", "PostgreSQL", "Groq LLM"],
      image: "/projects/icom.jpg",
      github: "https://github.com/Jaloliddin-Kulmatov/ICOM-v1",
      demo: "https://icom.ai.kr",
      featured: true,
    },
    {
      id: "talaba",
      title: "TALABA",
      category: "AI & Full-Stack",
      summary:
        "ICOM for students in Uzbekistan, in Uzbek: community, jobs, university admission help, housing, scholarships and an AI assistant.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Python"],
      image: "/projects/talaba.jpg",
      github: "https://github.com/Jaloliddin-Kulmatov/talaba_new",
      demo: "https://talaba-zeta.vercel.app",
      featured: true,
    },
    {
      id: "nori",
      title: "Nori (노리다)",
      category: "AI & Full-Stack",
      summary: "Upload an English CV and get a Korean-style résumé PDF. AI translates and reorganizes it for jobs in Korea.",
      tech: ["Flask", "Groq LLM", "pdfplumber", "ReportLab"],
      image: "",
      github: "https://github.com/Jaloliddin-Kulmatov/Nori",
      demo: "",
      featured: false,
    },
    {
      id: "voicemimic",
      title: "VoiceMimic",
      category: "AI & Full-Stack",
      summary: "Record or upload a short voice clip, type any text, and hear it in that voice with XTTS-v2 voice cloning.",
      tech: ["Python", "Flask", "XTTS-v2", "JavaScript"],
      image: "",
      github: "https://github.com/Jaloliddin-Kulmatov/voice-mimic",
      demo: "",
      featured: false,
    },
    {
      id: "ctest",
      title: "C-Test Trainer",
      category: "Tools & Websites",
      summary:
        "Practice site for the German onSET test: 4 full timed tests, 24 grammar topics, 593 vocabulary words, a mistake notebook and progress charts.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/projects/ctest.jpg",
      github: "https://github.com/Jaloliddin-Kulmatov/ctest-trainer",
      demo: "https://ctest-trainer-eight.vercel.app",
      featured: true,
    },
    {
      id: "scaps",
      title: "SCAPS IV Extractor",
      category: "Research",
      summary:
        "Research tool from the JBNU Solar Cell Lab: turns SCAPS-1D simulation files into one Excel table (Voc, Jsc, FF, PCE). Runs in the browser.",
      tech: ["JavaScript", "Python", "FastAPI"],
      image: "/projects/scaps.jpg",
      github: "https://github.com/Jaloliddin-Kulmatov/Scaps_data_parameters",
      demo: "https://scaps-data-1b9a.vercel.app",
      featured: false,
    },
    {
      id: "findme",
      title: "Find_me",
      category: "Tools & Websites",
      summary: "Finds where a username exists across 40+ websites, with Python serverless functions on Vercel.",
      tech: ["Python", "Serverless", "JavaScript"],
      image: "/projects/findme.jpg",
      github: "https://github.com/Jaloliddin-Kulmatov/Find_me",
      demo: "https://find-me-sandy.vercel.app",
      featured: false,
    },
    {
      id: "blog",
      title: "Flask Blog",
      category: "Tools & Websites",
      summary: "Blog platform with login, admin roles, a rich-text editor, comments and a contact form. PostgreSQL on Render.",
      tech: ["Flask", "PostgreSQL", "Bootstrap"],
      image: "/projects/blog_web.jpg",
      github: "https://github.com/Jaloliddin-Kulmatov/Kulmatovs_blog_v2",
      demo: "",
      featured: false,
    },
    {
      id: "foodreels",
      title: "Food Reels",
      category: "Tools & Websites",
      summary: "Hackathon prototype: watch short food videos and order the dish without leaving the feed.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/projects/food_real.jpg",
      github: "https://github.com/Jaloliddin-Kulmatov/Food_Reel",
      demo: "",
      featured: false,
    },
    {
      id: "regression",
      title: "Multivariable Regression",
      category: "Data & ML",
      summary: "House price valuation model with multivariable regression on the Boston housing data.",
      tech: ["Python", "scikit-learn", "Pandas", "Jupyter"],
      image: "",
      github: "https://github.com/Jaloliddin-Kulmatov/Multivariable_Regression",
      demo: "",
      featured: false,
    },
    {"id": "internpath", "title": "Intern_Path", "category": "Tools & Websites", "summary": "Team project (Universiti Malaya, WIA2006): internship matching for computer science students in Malaysia, with Google sign-in and a scheduled job scraper.", "tech": ["HTML", "JavaScript", "Supabase"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/intern-path", "demo": "https://intern-path-lime.vercel.app", "featured": false},
    {"id": "challenge", "title": "Challenge Tracker", "category": "Tools & Websites", "summary": "Track any challenge (running, studying, reading, workouts) with an automatic schedule, honest statistics, streaks, charts and share links. Built mobile-first.", "tech": ["Next.js", "TypeScript", "PostgreSQL", "Drizzle"], "image": "/projects/challenge.jpg", "github": "https://github.com/Jaloliddin-Kulmatov/Challenge_Tracker", "demo": "https://challenge-tracker-bay.vercel.app", "featured": false},
    {"id": "cosmetic", "title": "Liber Cosmetic", "category": "Tools & Websites", "summary": "Online cosmetics shop and consultation for a clinic: orders with delivery, a skin questionnaire with photos, and a staff panel for products, orders and patient records.", "tech": ["JavaScript", "Serverless", "Postgres"], "image": "/projects/cosmetic.jpg", "github": "https://github.com/Jaloliddin-Kulmatov/Cosmetic", "demo": "https://cosmetic-ten-kappa.vercel.app", "featured": false},
    {"id": "cafes", "title": "Cafés website", "category": "Tools & Websites", "summary": "Flask site listing cafés with Wi-Fi and power ratings; add a café through a validated form.", "tech": ["Flask", "WTForms", "Bootstrap"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Cafes_website", "demo": "", "featured": false},
    {"id": "movies", "title": "Movie ranking", "category": "Tools & Websites", "summary": "Flask app for a personal top-10 movie list: add, rate, review and re-rank, stored with SQLAlchemy.", "tech": ["Flask", "SQLAlchemy", "Bootstrap"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Movies_ranking_website", "demo": "", "featured": false},
    {"id": "restapi", "title": "REST API", "category": "Tools & Websites", "summary": "A small RESTful API with Flask and SQLAlchemy: get, search, add, update and delete records as JSON.", "tech": ["Flask", "SQLAlchemy", "REST"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Personal_Restful_API", "demo": "", "featured": false},
    {"id": "travelbot", "title": "AI travel chatbot", "category": "AI experiments", "summary": "Chatbot that answers travel questions in a multi-turn conversation with the OpenAI API (gpt-4o-mini).", "tech": ["Python", "OpenAI API"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/AI_travel_chatbot_OpenAI", "demo": "", "featured": false},
    {"id": "medical", "title": "Medical transcriptions", "category": "AI experiments", "summary": "Reads medical transcriptions and extracts the patient's age and recommended treatment with the OpenAI API, into a table.", "tech": ["Python", "OpenAI API", "Pandas"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Medical_Transcriptions_with_the_OpenAI_API", "demo": "", "featured": false},
    {"id": "embeddings", "title": "Semantic search with embeddings", "category": "AI experiments", "summary": "Embeds product descriptions with text-embedding-3-small and finds the closest matches to a search.", "tech": ["Python", "OpenAI embeddings"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Embedding_with_OpenAI_API", "demo": "", "featured": false},
    {"id": "huggingface", "title": "Hugging Face pipelines", "category": "AI experiments", "summary": "Text generation and other tasks with Hugging Face transformers pipelines.", "tech": ["Python", "Transformers"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Hugging_Face", "demo": "", "featured": false},
    {"id": "trends", "title": "Tesla price vs search trends", "category": "Data & ML", "summary": "Compares Tesla's stock price with Google search interest over time in one chart.", "tech": ["Python", "Pandas", "Matplotlib"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Price_vs_search_trend_data_analyze", "demo": "", "featured": false},
    {"id": "flights", "title": "Cheapest flight finder", "category": "Automation & APIs", "summary": "Checks flight prices to many cities and sends an alert when a flight is cheaper than the price you set.", "tech": ["Python", "Flight API", "Google Sheets", "SMTP"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Cheepest_flight_finder", "demo": "", "featured": false},
    {"id": "amazon", "title": "Amazon price alert", "category": "Automation & APIs", "summary": "Scrapes a product page and emails you when the price drops below your target.", "tech": ["Python", "BeautifulSoup", "SMTP"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Amazon_price_alert", "demo": "", "featured": false},
    {"id": "iss", "title": "ISS overhead notifier", "category": "Automation & APIs", "summary": "Emails you when the International Space Station is above you and it is dark enough to see it.", "tech": ["Python", "Open Notify API", "Sunrise-Sunset API"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/ISS_Tracker_with_API", "demo": "", "featured": false},
    {"id": "rain", "title": "Rain alert", "category": "Automation & APIs", "summary": "Checks the weather forecast and sends an SMS if it will rain today.", "tech": ["Python", "OpenWeather API", "Twilio"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/rain_alert", "demo": "", "featured": false},
    {"id": "stocks", "title": "Stock news alert", "category": "Automation & APIs", "summary": "When a stock moves a lot in a day, sends an SMS with the top news headlines about the company.", "tech": ["Python", "Alpha Vantage", "News API", "Twilio"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/stock_news_api_project", "demo": "", "featured": false},
    {"id": "workout", "title": "Workout tracker", "category": "Automation & APIs", "summary": "Type what you did in plain English, such as “ran 5 km”; it works out the exercise and calories and logs them to Google Sheets.", "tech": ["Python", "Nutritionix API", "Sheety"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Workout_tracker", "demo": "", "featured": false},
    {"id": "habit", "title": "Habit tracker", "category": "Automation & APIs", "summary": "Logs a daily habit to a Pixela graph through its API, like a GitHub contribution chart.", "tech": ["Python", "Pixela API"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/habit_tracker", "demo": "", "featured": false},
    {"id": "linkedin", "title": "LinkedIn auto-apply", "category": "Automation & APIs", "summary": "Selenium bot that searches LinkedIn jobs and applies to Easy Apply listings.", "tech": ["Python", "Selenium"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Linkedin_jobs_apply", "demo": "", "featured": false},
    {"id": "billboard", "title": "Billboard to Spotify", "category": "Automation & APIs", "summary": "Pick a date, and it scrapes that week's Billboard Hot 100 and makes a Spotify playlist of the songs.", "tech": ["Python", "BeautifulSoup", "Spotify API"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Playlist_Billboard_Hot_100", "demo": "", "featured": false},
    {"id": "snake", "title": "Snake", "category": "Games", "summary": "The classic Snake game with levels and a scoreboard.", "tech": ["Python", "Turtle"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Snake_game", "demo": "", "featured": false},
    {"id": "pong", "title": "Pong", "category": "Games", "summary": "Two-player Pong with paddles, a ball that speeds up, and a scoreboard.", "tech": ["Python", "Turtle"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Pong_game", "demo": "", "featured": false},
    {"id": "crossing", "title": "Turtle crossing", "category": "Games", "summary": "Frogger-style game: get the turtle across a road of faster and faster cars.", "tech": ["Python", "Turtle"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/turtle_crossing_game", "demo": "", "featured": false},
    {"id": "states", "title": "U.S. States quiz", "category": "Games", "summary": "Name all 50 U.S. states on a map; the ones you missed are saved to a CSV to learn.", "tech": ["Python", "Turtle", "Pandas"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/us_states_game", "demo": "", "featured": false},
    {"id": "quizzler", "title": "Quizzler", "category": "Games", "summary": "True-or-false quiz app with a Tkinter interface.", "tech": ["Python", "Tkinter"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/quizzler_app_with_API", "demo": "", "featured": false},
    {"id": "blackjack", "title": "Blackjack", "category": "Games", "summary": "Blackjack against the computer in the terminal.", "tech": ["Python"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Blackjack_game", "demo": "", "featured": false},
    {"id": "higherlower", "title": "Higher or lower", "category": "Games", "summary": "Guess which of two accounts has more followers and keep your streak going.", "tech": ["Python"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Higher_lower_game", "demo": "", "featured": false},
    {"id": "hangman", "title": "Hangman", "category": "Games", "summary": "Classic Hangman in the terminal.", "tech": ["Python"], "image": "", "github": "https://github.com/Jaloliddin-Kulmatov/Hangman", "demo": "", "featured": false},
  ],
  experience: [
    {
      id: "icom",
      role: "Founder & Full-Stack Developer",
      org: "ICOM (icom.ai.kr)",
      period: "Apr 2026 – Present",
      bullets: [
        "Built the whole platform by myself for international students in Korea.",
        "Reached 50+ users at JBNU. Got a patent. Wrote a conference paper with Prof. Aaron Snowberger.",
      ],
    },
    {
      id: "lab",
      role: "Undergraduate Research Assistant",
      org: "Solar Cell Lab, JBNU",
      period: "2026 (4 months)",
      bullets: [
        "Helped PhD students simulate and improve solar cells in COMSOL and PC1D.",
        "Built SCAPS IV Extractor to turn simulation files into Excel tables.",
      ],
    },
    {
      id: "freelance",
      role: "Python & Full-Stack Developer",
      org: "Freelance and personal projects",
      period: "Mar 2025 – Present",
      bullets: ["Built 50+ apps and websites, including an object detection system and a strawberry ripeness classifier."],
    },
    {
      id: "ielts",
      role: "IELTS Teacher & Content Manager",
      org: "5 Skills Educational Center, Uzbekistan",
      period: "May 2024 – Feb 2025",
      bullets: ["Made lessons for each student and ran full mock exams. Helped translate and edit IELTS books."],
    },
  ],
  skills: [
    { id: "prog", name: "Programming", items: ["Python", "TypeScript", "JavaScript", "C", "C++", "SQL"] },
    { id: "ai", name: "AI / ML", items: ["LLM APIs (OpenAI, Groq)", "Function calling", "Embeddings", "Hugging Face", "Computer vision", "scikit-learn"] },
    { id: "web", name: "Web", items: ["Next.js", "React", "Tailwind", "Flask", "FastAPI", "PostgreSQL", "REST APIs"] },
    { id: "data", name: "Data", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly"] },
    { id: "lang", name: "Languages", items: ["Uzbek (native)", "English (IELTS 7.5)", "Korean (TOPIK 4)", "Russian", "German (beginner)"] },
  ],
  awards: [
    "Paper: “Design and Implementation of an AI-Assisted Information and Community Platform for International Students in Korea”, 2026 Summer Conference",
    "Patent from the ICOM project (2026)",
    "JBNU President's Award: perfect 4.5/4.5 GPA for a full year",
    "Winner, UNOSD Summer Camp, Seoul (2026)",
    "Finalist, regional AI Hackathon, South Korea",
    "Fellow, Silk Road Health Data Science Fellowship (Feb–Aug 2026)",
  ],
};
