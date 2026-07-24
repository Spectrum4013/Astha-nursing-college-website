# Aastha School of Nursing — Website

Level 1 build: static homepage, no login yet. Plain HTML/CSS/JS — no build tools, no framework, nothing to install.

## Files
- `index.html` — homepage
- `style.css` — all styling
- `script.js` — nav toggle + scroll animation
- `student-login.html` — placeholder page (real login comes in Level 3)
- `/assets/` — put real campus photos here

## Preview it locally
Just double-click `index.html` — it opens directly in your browser. No server needed for this stage.

## Swap in real photos
1. Drop your photos into `/assets/gallery/` (e.g. `photo1.jpg`, `photo2.jpg`...)
2. In `index.html`, find the `.gallery-item.ph` divs and the `.hero-photo` div
3. Replace `<span>Photo 1</span>` with `<img src="assets/gallery/photo1.jpg" alt="...">`

## Deploy for free (recommended: GitHub Pages)
1. Create a GitHub account if you don't have one: github.com
2. Create a new repository, e.g. `aastha-nursing-website`
3. From this folder, run:
   ```
   git add .
   git commit -m "Level 1: homepage"
   git remote add origin https://github.com/YOUR_USERNAME/aastha-nursing-website.git
   git push -u origin main
   ```
4. On GitHub: repo → Settings → Pages → Source → select `main` branch → Save
5. Your site goes live at `https://YOUR_USERNAME.github.io/aastha-nursing-website/`

## Connecting a paid domain (~₹400–800/year)
1. Buy the domain from Hostinger, Namecheap, or GoDaddy (Namecheap/Hostinger are usually cheapest for `.in`)
2. In your domain registrar's DNS settings, add:
   - Four `A` records pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record: `www` → `YOUR_USERNAME.github.io`
3. In your GitHub repo → Settings → Pages → add your custom domain, e.g. `aasthanursing.in`
4. Wait 15 min–24 hrs for DNS to propagate. HTTPS is free and automatic via GitHub.

## Cost summary
| Item | Cost |
|---|---|
| Domain (.in, 1 year) | ₹400–800 |
| Hosting (GitHub Pages) | ₹0 |
| SSL certificate | ₹0 (automatic) |
| **Total** | **~₹400–800/year** |

## Roadmap — what's next
- **Level 2** ✅ this build — static homepage
- **Level 3** — Student login using Firebase Authentication (free tier): login page → notes/video-links page
- **Level 4** — Password change page (built into Firebase Auth, minimal extra code)
- **Level 5** — Polish: favicon, meta tags for WhatsApp sharing previews, Google Analytics

When you're ready for Level 3, come back and just say "let's do the student login" — don't need to re-paste this whole site, I'll pick up from these files.
