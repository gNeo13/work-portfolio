# Client Brief — Kinabalu Kitchen

> "Hi! I run a small home-kitchen business — I do Sabah-style fusion food, mostly weekend orders. Right now people only find me through WhatsApp forwards. I want a simple website. Just one page is fine. People should see what I make, see today's menu, and be able to message me. It needs to look good on their phone — that's where 90% of my customers are. I don't need anything fancy, I just need it to feel real, not like a template."

## What this actually demands

- A single HTML page with real structure (not div-soup) — semantic sections a screen reader and a search engine can both parse.
- Mobile-first CSS — the brief said phones explicitly; layout has to hold at 375px wide before it holds at 1440px.
- A menu section that's easy to update by hand (this client will ask you to change it every week).
- One piece of real interactivity in JS — a nav that collapses on mobile, or a contact form that validates before it "sends" (no backend yet — that's Phase 4).
- It has to go on GitHub and be deployable (GitHub Pages is enough for now) — a client-facing site that only lives on your laptop doesn't exist.

## Deliverable

`index.html` + `style.css` + `script.js` in this folder, committed to git, pushed, and reachable at a real URL.

## How we'll get there

Starting from zero — nothing assumed, not one tag. This brief is the destination, not something to attempt solo. We build toward it one concept at a time: the document skeleton first, then real structure, then mobile-first style, then the one piece of behavior — each explained before it's typed. Nothing here gets attempted until it's been taught.
