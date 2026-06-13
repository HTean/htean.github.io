# How to Add a New Project

Follow these 3 steps every time. Takes about 10 minutes.

---

## Step 1 — Create the detail page

1. Copy `project-template.html`
2. Rename it: `projects/your-project-name.html`
   - Use lowercase, hyphens only (e.g. `credit-risk-tool.html`)
3. Find and fill every line marked with `★`:

| Field | What to put |
|---|---|
| `<title>` | Your project name |
| `article-tag` | Category (e.g. "ML · Finance") |
| `article-date` | Year (e.g. "2024") |
| `article-h1` | Full project title |
| `article-lead` | One compelling sentence |
| Body sections | Fill in Problem, Built, Approach, Results, Reflections |
| `metrics-row` | 3 key numbers/outcomes |
| `live-btn` href | Live URL or GitHub link |
| `project-nav` | Links to previous and next project |
| Sidebar | Type, Year, Status, Role, Stack, Links |

4. **Add a hero image** (strongly recommended):
   - Take a screenshot of your project
   - Save it to `Images/projects/yourproject-hero.jpg`
   - Replace the placeholder div with:
     ```html
     <img src="../Images/projects/yourproject-hero.jpg" alt="Project Name">
     ```

---

## Step 2 — Add a card to projects.html

Open `projects.html` and find the comment:
```
<!-- HOW TO ADD A NEW PROJECT: copy one block below -->
```

Copy this card template and paste it **at the top** of the grid (so newest shows first):

```html
<a class="pcard" href="projects/your-project-name.html" data-cat="CATEGORIES">
  <div class="pcard-thumb">
    <!-- Option A: screenshot -->
    <img src="Images/projects/yourproject-thumb.jpg" alt="Project Name">
    <!-- Option B: no image yet, use emoji -->
    <!-- <div class="pcard-thumb-placeholder">🚀</div> -->
    <div class="pcard-badge">BADGE TEXT</div>
    <div class="pcard-arrow">↗</div>
  </div>
  <div class="pcard-body">
    <span class="pcard-tag">CATEGORY · SUBCATEGORY</span>
    <div class="pcard-title">Your Project Title</div>
    <p class="pcard-desc">One or two sentence description of what the project does.</p>
  </div>
  <div class="pcard-impact">Key outcome or metric</div>
  <div class="pcard-foot">
    <span class="tech-tag">Tech 1</span>
    <span class="tech-tag">Tech 2</span>
  </div>
</a>
```

**data-cat options** (space-separated, use any combination):
- `ml` — Machine Learning
- `data` — Data Engineering
- `ai` — AI / LLM
- `finance` — Finance
- `web` — Web & Products

---

## Step 3 — Add a thumbnail image (optional but recommended)

- **Thumbnail** (for the card): 800×450px, save as `Images/projects/yourproject-thumb.jpg`
- **Hero** (for the detail page): 1400×500px, save as `Images/projects/yourproject-hero.jpg`
- Both can be the same screenshot — just save it twice at different sizes

---

## Checklist

- [ ] Copied `project-template.html` → renamed and filled in
- [ ] Added card to `projects.html` grid
- [ ] Saved thumbnail to `Images/projects/`
- [ ] Updated prev/next links in project-nav (optional)
- [ ] Verified it looks right by opening in browser

---

## File structure reminder

```
your-site/
├── index.html
├── projects.html          ← add card here
├── shared.css
├── nav.js
├── Images/
│   └── projects/
│       ├── myproject-thumb.jpg   ← card thumbnail
│       └── myproject-hero.jpg    ← detail page hero
└── projects/
    ├── project-template.html     ← copy this each time
    ├── project-detail.css        ← don't touch
    ├── HOWTO.md                  ← this file
    ├── only-rains-on-weekends.html
    ├── my-navigator.html
    └── elan-tea.html
```
