# Elite Systems Builder — Roadmap

Mentor: KERN. Method: problem-first — every concept shows up because a client's job demands it, never in the abstract.

**Starting point: zero.** Nothing is assumed going in — not a tag, not a command, not a term. Every concept gets taught, in the smallest unit that makes sense, before it's ever typed. Nothing is left for Sora to guess or look up alone.

## The loop, every phase

1. **CLIENT BRIEF** — what a real client would actually say, in their words, not a spec.
2. **THE PROBLEM** — what that brief actually demands, technically.
3. **THE BUILD** — an ordered plan, broken into single concepts, diagrams where they earn their place.
4. **HANDS-ON** — one concept at a time: KERN explains what it is and why it's needed, then Sora types it. No solo attempts before the concept has been taught.
5. **REVIEW** — the real code gets read, not described.
6. **SHIP** — it runs, live, the way the client would see it.

## Phases

| # | Folder | Focus | Deliverable |
|---|---|---|---|
| 1 | `01-web-fundamentals` | HTML, CSS, JS — taught from the first tag, no prior knowledge assumed — plus Git/GitHub | Landing page, built piece by piece |
| 2 | `02-react` | TypeScript, components, hooks, state | Admin dashboard |
| 3 | `03-nextjs` | App Router, SSR/SSG/ISR, API routes, Vercel | Marketing site + blog |
| 4 | `04-backend-node` | Express (raw HTTP/middleware) → NestJS (DI, modules) | E-commerce REST API |
| 5 | `05-postgres` | Schema, relations, migrations, indexing, Prisma | Real DB behind the API |
| 6 | `06-auth-security` | JWT/sessions, OAuth, hashing, OWASP top 10 | Secure login + roles |
| 7 | `07-testing-devops` | Vitest, RTL, Playwright, GitHub Actions, Docker | Tests + CI + deploy |
| 8 | `08-python-ai-lane` | FastAPI, RAG/tool-use/streaming/embeddings | AI search assistant as a microservice |
| 9 | `09-capstone` | Everything, combined | Portfolio-ready capstone |

## Stack, locked

TypeScript · React · Next.js · Node (Express → NestJS) · PostgreSQL (Supabase) · Prisma · pnpm · Vitest/Playwright · GitHub Actions · Vercel/Railway. Python/FastAPI as a second lane for AI-integration work.

## Explicitly not in this program

React Native, Kubernetes, GraphQL depth, chasing Svelte/Remix/Astro.

## Definition of done

Per phase: brief fulfilled, code reviewed, running live, Sora can explain the *why* unaided — even though every concept started at zero.
Program: capstone deployed, tests + CI green, case study written.

Full context and reasoning: `C:\Users\user\.claude\plans\curried-sprouting-globe.md`
