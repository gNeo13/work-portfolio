# Client Brief — Kinabalu Kitchen, Order Tracker

> "Neo, the site's incredible — I've already gotten three catering orders from people who found it! But now I'm drowning. I write orders on a notebook and I keep losing track of what's done and what's still cooking. Can you build me something where I just see a list, tick things off when they're done, and add a new one the moment a message comes in? This one's just for me — customers don't need to see it."

## What this actually demands

- A private tool, not a public page — an internal dashboard, no client-facing polish required yet.
- Data that changes *while the page is open*, based on what the user does — ticking an order off, adding a new one — without reloading. Phase 1 already did a small version of this (the form validation), by hand, for one element. A dashboard has many of these small live pieces at once, all needing to stay in sync — doing that by hand, the way Phase 1 did, stops scaling. That gap is exactly what React exists to close.
- The same "shape" repeated for every order — text, a done/not-done toggle, maybe a way to remove it — just with different data each time. A natural fit for one reusable piece stamped out many times, rather than hand-writing the same HTML block for each order.

## Deliverable

A React + TypeScript app (via Vite) in this folder, deployed and reachable at a real URL.

## How we'll get there

Zero assumed, same as Phase 1 — nothing about React or TypeScript is taken as known. We start with *why* a plain HTML/CSS/JS approach (like Phase 1's) breaks down at this scale, then build the tool piece by piece: project setup, one component, state, a list, then styling.
