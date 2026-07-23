# Aastha School of Nursing — Website

Official website for Aastha School of Nursing, Osmanabad (Dharashiv), Maharashtra —
built and maintained by me as part of my first-year B.Tech CSE rural internship.

**Live site:** https://aasthanursingdharashiv.com

---

## Project background

Aastha School of Nursing's old website had gone offline (expired domain), so as my
assigned rural-internship deliverable, I rebuilt it from scratch — real content, real
domain, real backend for student logins — rather than just a static mockup. This repo
is the actual live production site, not a class exercise.

## What I built, briefly

- A fully responsive marketing site (homepage, about, courses, gallery, contact) for a
  real institution, using their actual course structure, fees, and campus photos.
- A student portal with **roll-number-based login**, forced password setup on first
  login, and a self-service password-change page.
- An **admin dashboard** for non-technical staff to add new students, search records,
  revoke/restore access (e.g. for unpaid fees), and delete accounts — with a
  type-to-confirm safeguard against accidental deletion.
- Server-side security via **Firestore security rules**, not just client-side checks,
  so access control can't be bypassed by editing the page.
- Custom domain setup end-to-end: DNS configuration, GitHub Pages hosting, HTTPS.

## Skills/tools this project covers

`HTML/CSS/JavaScript (vanilla, no framework)` · `Firebase Authentication` ·
`Firestore (NoSQL database + security rules)` · `Git/GitHub` · `GitHub Pages deployment` ·
`DNS & custom domain configuration` · `responsive/mobile-first design` ·
`basic UX for a non-technical admin user`

---

## What this is (technical)

A static website (plain HTML/CSS/JS, no build tools) hosted for free on GitHub Pages, with a
student login system powered by Firebase (Authentication + Firestore) for gated access to
course notes.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, about, gallery, contact |
| `about.html` | Full about page + why-choose-us |
| `courses.html` | GNM course breakdown, year by year, fees |
| `student-login.html` | Shared login for students and admin (roll number or admin email) |
| `notes.html` | Protected notes page — only accessible when logged in |
| `settings.html` | Student password change |
| `force-password-change.html` | Forces new students to set a real password on first login |
| `admin.html` | Admin dashboard — add/search/revoke/delete student accounts |

## How student login works

- Each student's **roll number is their username** and cannot be changed.
- New students are added via the Admin Dashboard (`admin.html`) with a default password.
- On first login, they're forced to set their own password before reaching notes.
- Admin can revoke a student's access (e.g. for unpaid fees) without deleting their account,
  or fully delete an account via the confirm-by-typing-the-roll-number modal.

## Tech stack

- **Hosting:** GitHub Pages (free)
- **Domain:** aasthanursingdharashiv.com (via Namecheap)
- **Auth + Database:** Firebase Authentication + Firestore (free Spark tier)
- **Fonts:** Cinzel (headings), Inter (body), Space Mono (numbers/labels) — via Google Fonts
- No frameworks, no build step — just open the HTML files directly, or push to `main` to deploy.

## Local setup / making changes

1. Edit the HTML/CSS/JS files directly.
2. `firebase-config.js` holds the connection details to the Firebase project — don't need to
   touch this unless the Firebase project itself changes.
3. `firestore.rules.txt` — reference copy of the security rules. If ever changed, the real
   rules must also be re-pasted into **Firebase Console → Firestore Database → Rules → Publish**;
   editing this file alone does nothing on its own.
4. Push to `main` — GitHub Pages redeploys automatically within a minute or two.

## Admin access

Admin logs in through the same page as students (`student-login.html`), using the admin email
instead of a roll number, which routes to the Admin Dashboard automatically.

## Found a bug?

Email vanwechaitanya@gmail.com.
