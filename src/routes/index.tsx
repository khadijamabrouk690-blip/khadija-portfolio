import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Database,
  Workflow,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Counter } from "@/components/Counter";
import portrait from "@/assets/khadija-transparent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eng Khadija Mabrouk | Data Engineer & Analytics Specialist" },
      {
        name: "description",
        content:
          "Freelance data engineer building automated ETL pipelines, clean data architecture and Power BI analytics that turn raw data into strategic intelligence.",
      },
      {
        property: "og:title",
        content: "Eng Khadija Mabrouk | Data Engineer & Analytics Specialist",
      },
      {
        property: "og:description",
        content:
          "Automated ETL pipelines, clean data architecture and business analytics by Eng Khadija Mabrouk.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/khadijamabrouk690-blip";
const LINKEDIN = "https://www.linkedin.com/in/khadija-mabrouk-9b2700321/";
const EMAIL = "khadijamabrouk690@gmail.com";

const stats = [
  { value: 100, suffix: "%", label: "Data accuracy across automated ETL pipelines" },
  { value: 10, suffix: "K+", label: "Rows cleaned, transformed & validated" },
  { value: 0, suffix: "%", label: "Near-zero pipeline downtime", prefix: "~" },
  { value: 30, suffix: "%+", label: "Faster insight generation for decisions" },
];

const stack = [
  "Python",
  "Pandas",
  "NumPy",
  "SQL",
  "SQL Server (SSMS)",
  "ETL Pipelines",
  "Power BI",
  "Matplotlib",
  "Seaborn",
  "Git / GitHub",
];

const projects = [
  {
    icon: Database,
    tag: "Data Analysis & Retail Insights",
    title: "Retail Sales Analysis with Pandas (2020-2021)",
    description:
      "End-to-end retail sales analysis (2020-2021) with Pandas: data cleaning, 15 business questions, and Matplotlib/Seaborn visualizations for sales, retailers, products & regions.",
    href: "https://github.com/khadijamabrouk690-blip/retail-sales-analysis-pandas",
    cta: "View GitHub Repo",
  },
  {
    icon: Workflow,
    tag: "ETL Pipeline & Flask Dashboard",
    title: "Sales ETL Pipeline with Flask Dashboard",
    description:
      "Sales ETL pipeline (CSV + Parquet + URL) with Pandas, loaded to SQL Server and served via Flask dashboard.",
    href: "https://github.com/khadijamabrouk690-blip/sales-etl-flask-dashboard",
    cta: "View GitHub Repo",
  },
];

function DataStreams() {
  const lines = [8, 18, 27, 41, 56, 68, 79, 91];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {lines.map((left, i) => (
        <span
          key={left}
          className="stream-line"
          style={{
            left: `${left}%`,
            animationDelay: `${i * 1.1}s`,
            animationDuration: `${7 + (i % 4) * 1.6}s`,
          }}
        />
      ))}
    </div>
  );
}

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Toaster />
      <div className="pointer-events-none absolute inset-0 grid-canvas" aria-hidden />
      <DataStreams />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <span className="text-sm font-semibold tracking-[0.25em] uppercase text-gradient">
          K. Mabrouk
        </span>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="story-link hover:text-foreground">About</a>
          <a href="#projects" className="story-link hover:text-foreground">Projects</a>
          <a href="#contact" className="story-link hover:text-foreground">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pt-8 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-14">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs tracking-wide text-primary">
            <Sparkles className="size-3.5" />
            Data Engineer & Analytics Specialist
          </span>
          <h1 className="mt-6 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Engineering Scalable Data Pipelines &{" "}
            <span className="text-gradient">Transforming Raw Data</span> into Strategic
            Intelligence.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Empowering businesses through clean data architecture, automated ETL workflows,
            and actionable business analytics.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="hero">
              <a href="#projects">
                Explore My Projects <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outlineGlow">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="pointer-events-none absolute bottom-10 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96"
            style={{ background: "var(--gradient-primary)", opacity: 0.18 }}
            aria-hidden
          />
          <img
            src={portrait}
            alt="Eng Khadija Mabrouk, freelance data engineer"
            width={1024}
            height={1280}
            className="relative w-[280px] animate-float object-contain drop-shadow-2xl sm:w-[360px] lg:w-[440px]"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-8 text-center">
              <p className="text-3xl font-bold text-gradient sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
              </p>
              <p className="mt-3 text-sm leading-snug text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About <span className="text-gradient">Khadija</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I design and build the data backbone businesses rely on — from extraction and
              rigorous cleaning to automated pipelines, well-modelled relational databases,
              and visual analytics that leaders actually use. Every dataset I touch leaves
              structured, validated, and decision-ready.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              My focus is precision and repeatability: transformations that run themselves,
              schemas that scale, and dashboards that answer the question before it's asked.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary">
              Core Tech Stack
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {stack.map((t) => (
                <span
                  key={t}
                  className="surface-card rounded-xl px-4 py-2.5 text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Selected work across analysis, pipelines and business intelligence.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="surface-card flex flex-col rounded-2xl p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <p.icon className="size-5" />
              </span>
              <p className="mt-6 text-xs font-medium tracking-wide text-accent uppercase">
                {p.tag}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <Button asChild variant="outlineGlow" size="sm" className="mt-7 self-start">
                <a href={p.href} target="_blank" rel="noreferrer">
                  {p.cta} <ExternalLink className="size-3.5" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's build your <span className="text-gradient">data layer</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Share a short brief and I'll reply with an approach, timeline and next steps.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Linkedin, label: "LinkedIn", value: "khadija-mabrouk", href: LINKEDIN },
                { icon: Github, label: "GitHub", value: "khadijamabrouk690-blip", href: GITHUB },
                { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="surface-card flex items-center gap-4 rounded-xl p-4"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <c.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">{c.label}</span>
                    <span className="block text-sm font-medium break-all">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            className="surface-card space-y-5 rounded-2xl p-7"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Thanks! Your brief was noted — email me directly to follow up.");
            }}
          >
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
              <Input id="name" required placeholder="Your name" className="mt-2" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
              <Input id="email" type="email" required placeholder="you@company.com" className="mt-2" />
            </div>
            <div>
              <label htmlFor="brief" className="text-sm text-muted-foreground">Project brief</label>
              <Textarea id="brief" required rows={5} placeholder="What data problem are you solving?" className="mt-2" />
            </div>
            <Button type="submit" variant="hero" className="w-full">
              {sent ? "Message noted" : "Send Project Brief"}
            </Button>
          </form>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Eng Khadija Mabrouk — Data Engineer & Analytics Specialist
      </footer>
    </main>
  );
}
