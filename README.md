# Jekyll reader template

A dark, mobile-friendly Jekyll site for publishing serialized chapters (novels, translations, web fiction).

- Each series page lists every chapter, shown 100 at a time with a sort button and "Show More".
- Chapter text is written in Markdown and rendered by Jekyll straight into the page.
- The site remembers the last chapter each reader finished and offers "Continue reading".
- Readers can switch day/night mode, font and font size.
- Comments use giscus (GitHub Discussions).

## Contents

1. [Getting started, step by step](#1-getting-started-step-by-step)
2. [Folder map](#2-folder-map)
3. [Site title, text and links](#3-site-title-text-and-links)
4. [Adding series and chapters](#4-adding-series-and-chapters)
5. [Colours](#5-colours)
6. [Fonts, sizes and layout](#6-fonts-sizes-and-layout)
7. [Reader features](#7-reader-features)
8. [Comments](#8-comments)
9. [Deploying](#9-deploying)

---

## 1. Getting started, step by step

No experience needed. Do the steps in order.

### Step 1: Install Ruby and Bundler

Jekyll, the tool that builds the site, runs on Ruby. Bundler installs Jekyll's parts and comes with Ruby. You need them to preview the site on your computer.

- **Windows:** go to https://rubyinstaller.org/downloads/ and download the version marked **WITH DEVKIT** (the recommended one at the top). Run it and click Next through the installer. At the end leave **Run 'ridk install'** ticked and click Finish. A black window opens: press **Enter** when it asks which components to install, and wait for it to finish.
- **Mac or Linux:** follow https://jekyllrb.com/docs/installation/ for your system.

To check it worked, open a terminal (Windows: press the Windows key, type `cmd`, press Enter) and run:

```
ruby -v
bundle -v
```

Both should print a version number. If `bundle` is not found, run `gem install bundler`.

### Step 2: Make a GitHub account

Skip this if you already have one. Sign up at https://github.com/signup.

### Step 3: Create your own repository from this template

A repository ("repo") is the online folder that holds your site's files.

1. Open this template's page on GitHub.
2. Click the green **Use this template** button (top right), then **Create a new repository**. If there is no such button, click **Fork** instead.
3. Under **Repository name**, type a name with no spaces, for example `my-novel-site`. The name becomes part of your site's address: `https://YOUR-USERNAME.github.io/my-novel-site/`. If you want the shorter address `https://YOUR-USERNAME.github.io/`, name the repository exactly `YOUR-USERNAME.github.io`.
4. Choose **Public**. GitHub Pages (free hosting) and the comments both need a public repository.
5. Click **Create repository**.

### Step 4: Install GitHub Desktop and copy the repo to your computer

GitHub Desktop is a free app that moves your files between your computer and GitHub, with buttons instead of commands. "Cloning" means making a copy of the repo on your computer.

1. Download GitHub Desktop from https://desktop.github.com and install it.
2. Open it and sign in with your GitHub account.
3. Click **File > Clone repository**. On the **GitHub.com** tab, click your new repository in the list.
4. Under **Local path**, choose where to keep it, for example your Documents folder. Click **Clone**.
5. To edit files you need a text editor. A good free one is Visual Studio Code: https://code.visualstudio.com. In GitHub Desktop click **Repository > Open in Visual Studio Code**.

The template ships with two sample series (`ABC` and `XYZ`) as examples. Replace them with your own (see [Adding series and chapters](#4-adding-series-and-chapters)).

### Step 5: Run the site on your computer

1. In GitHub Desktop click **Repository > Open in Command Prompt** (or **Open in PowerShell**). A terminal opens inside your project folder. In Visual Studio Code you can use **Terminal > New Terminal** instead.
2. Run these two commands, one at a time:

   ```
   bundle install
   bundle exec jekyll serve
   ```

3. Open http://localhost:4000 in your browser. That is your site, running only on your computer.
4. When you save a file, the page rebuilds. Changes to `_config.yml` need the server restarted: click the terminal, press **Ctrl+C**, and run `bundle exec jekyll serve` again.

### Step 6: Replace the placeholders

Search the project for the placeholder text below. Nothing here works until you do.

| Replace | Where |
| --- | --- |
| `Your Site Title`, `https://example.com` | `_config.yml` (`title`, `url`) |
| The `giscus:` values (repo and category IDs) | `_config.yml`. They point at the template author's repository, so comments from your site would land there. See [Comments](#8-comments). |
| `YourSite` (twice) | `_includes/header.html` |
| `G-XXXXXXXXXX` (twice) | `_includes/google-analytics.html` |
| `YOUR-INVITE` and `YOUR-CHANNEL` | `_data/menu.yml` and `_layouts/post.html` |
| `you@example.com` and the about text | `about.md` |
| The disclaimer and the sample links | `index.md` |
| `example.com` | `robots.txt` |
| The sample series `ABC/` and `XYZ/`, their entries in `_data/series.yml` and `_data/menu.yml`, and every file in `_posts/` | Delete these once you have added your own series (see [Adding series and chapters](#4-adding-series-and-chapters)). |
| The separator image | `Images/sep.png` |

### Step 7: Publish it with GitHub Pages

GitHub Pages hosts your site for free. Do these in order.

1. **Turn on Pages.** On github.com open your repository, click **Settings**, then **Pages** in the left sidebar. Under **Build and deployment**, set **Source** to **GitHub Actions**.
2. **Upload your changes.** In GitHub Desktop you will see your edited files listed on the left. Type a short summary such as `Set up my site` in the box at the bottom left, click **Commit to main**, then click **Push origin** at the top.
3. **Watch it build.** On github.com click the **Actions** tab. A run called **Deploy Jekyll site to Pages** starts by itself. Wait about a minute for a green tick. If nothing started, click that workflow name, then **Run workflow**. (If you used Fork, GitHub first asks you to click **I understand my workflows, go ahead and enable them**.)
4. **Open your site.** Go back to **Settings > Pages**. The address is at the top: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`.
5. **Set the address.** Open `_config.yml`, change `url:` to `https://YOUR-USERNAME.github.io` (no repository name, no trailing slash), then repeat step 2 to upload the change.

Every time you edit your files and commit and push in GitHub Desktop, the site rebuilds and updates by itself in about a minute.

If the build shows a red cross, click it and open the failed step to read the error. See [Deploying](#9-deploying) for more.

## 2. Folder map

| Path | What it is |
| --- | --- |
| `_config.yml` | Site title, URL, comments settings, plugins |
| `index.md` | Home page: disclaimer and latest updates |
| `about.md` | About page |
| `404.html` | "Page not found" page |
| `ABC/`, `XYZ/` | One folder per series, each with an `index.md` (the synopsis and chapter list) |
| `_posts/` | One Markdown file per chapter |
| `_data/series.yml` | Display name of each series |
| `_data/menu.yml` | Items in the top menu |
| `_layouts/` | Page templates: `post` (chapter), `series` (chapter list), `page`, `home`, `default` (wraps everything) |
| `_includes/` | Reusable pieces: header, footer, menu buttons, comments, chapter navigation, the home page's latest updates list (`latest-updates.html`) |
| `css/` | Stylesheets for colours, the menu and chapter pages |
| `assets/main.css` | Base typography and layout, plus the font declarations |
| `assets/fonts/` | Font files |
| `Images/` | The `{sep}` scene-break image |
| `js/` | Reader settings, mobile menu, last-read bookmark |
| `robots.txt` | Search engine rules |
| `.github/workflows/jekyll.yml` | Builds and publishes the site to GitHub Pages (see [Deploying](#9-deploying)) |

## 3. Site title, text and links

Start here to make the site yours.

### Site name and description (`_config.yml`)

```yaml
title: Your Site Title          # browser tab title and the "Welcome to ..." heading on the home page
tagline: Read free ...          # default description for search engines and link previews
url: "https://example.com"      # your real address, no trailing slash
baseurl: ""                     # leave empty; the deploy workflow sets it when the site lives in a subfolder
```

Optional: add `description: "Some text"` to show a line of text in the footer.

### Brand name in the header (`_includes/header.html`)

The word `YourSite` appears twice, once for mobile and once for desktop. Replace both.

### Home page (`index.md`)

The disclaimer is a plain Markdown list. Rewrite it freely. The "Latest Updates" list is added below it by the home page layout (`_layouts/home.html`), using `_includes/latest-updates.html`, so it cannot be moved or removed from `index.md`. It fills itself with your 20 newest chapters, newest first (change `limit: 20` in that file to show more or fewer).

### About page (`about.md`)

Plain Markdown. Change the title, email and text.

### Top menu (`_data/menu.yml`)

Each entry under `subfolderitems` becomes a menu button.

- An entry with `subsubfolderitems` becomes a dropdown (the "Novels" and "Notifications" menus).
- An entry without them is a plain link (the "About" entry).
- Replace the `YOUR-INVITE` and `YOUR-CHANNEL` placeholders with your Discord invite and Telegram channel, or delete those entries.
- Add each new series to the "Novels" list.

### Links under every chapter (`_layouts/post.html`)

Look for "Subscribe to Updates via". It links to the RSS feed, Novel Updates, Discord, Telegram and email. Edit or remove any of them.

- The Novel Updates link uses `nu_slug` from `_data/series.yml`.
- The RSS and email links point to `/feed.xml`, which this template does not generate. Add the `jekyll-feed` plugin or your own `feed.xml`, or delete those links.

### Footer (`_includes/footer.html`)

Holds the "Subscribe to all updates!" link and the optional description text.

### Analytics (`_includes/google-analytics.html`)

Replace both `G-XXXXXXXXXX` values with your Google Analytics measurement ID, or empty the file to turn analytics off.

### Search and link-preview text (`_includes/head.html`)

Each page's description is, in order of priority: its own `description:` front matter, then "Series name + chapter title" for chapters, then the site `tagline`.

### 404 page (`404.html`)

Plain HTML with a small style block. Edit the wording or sizes there.

### Anti-copy extras (all optional)

The template includes a few small measures against casual copying. Remove any you don't want.

| What | Where | What it does | To remove |
| --- | --- | --- | --- |
| Developer tools blocker | the last `<script disable-devtool-auto ...>` line in `_layouts/default.html` | Loads the third-party [disable-devtool](https://github.com/theajack/disable-devtool) script from a CDN. It tries to stop readers opening the browser's developer tools. It can be bypassed and it loads code from another site. | Delete that line. |
| Hidden trap link | the `<a href="...hunnypot.html" ...>` line in `_layouts/default.html`, and `Disallow: /hunnypot.html` in `robots.txt` | An invisible link that normal readers never see. Automated scrapers that follow it can be spotted in your server logs. (`hunnypot.html` is only a link target; the page does not exist in the template.) | Delete the link and the `robots.txt` line. |
| Blocked crawlers | `robots.txt` | Asks listed SEO, AI and scraper bots not to crawl the site. Well-behaved bots obey; others ignore it. | Edit or delete the `User-agent` blocks. |

## 4. Adding series and chapters

### A new series

1. Copy `ABC/` to a new folder named after your series tag in capitals, for example `MYNOVEL/`.
2. Edit `MYNOVEL/index.md`:

   ```yaml
   ---
   layout: series
   title: My Novel                # page heading
   description: "..."             # search and preview text
   series: mynovel                # lowercase series tag, must match the chapters' category
   comments: true                 # show comments under the chapter list
   # per_page: 50                 # optional: overrides toc_per_page from _config.yml for this series
   ---
   ```

   Everything below the front matter is the page body (author, synopsis). It is Markdown (HTML also works) and appears above the chapter list.
3. Add the series to `_data/series.yml`:

   ```yaml
   mynovel:
     full_name: "My Novel"
     nu_slug: "my-novel"        # used for the Novel Updates link
   ```
4. Add it to `_data/menu.yml` under "Novels".
5. Optional: list it in the disclaimer on `index.md`.

### A new chapter

Create `_posts/YYYY-MM-DD-MYNOVEL001.md`:

```yaml
---
layout: post
title: "Chapter 1: The Beginning"
comments: true
categories: [mynovel]
date: 2026-09-02 09:00:00 +0800
---

The chapter text, in Markdown.
```

Rules to follow:

- The file name ends with the series tag in capitals and a chapter number, for example `MYNOVEL001`. The number must be the last thing in the name, because the "Continue reading" feature relies on it.
- `categories` is the lowercase series tag. It sets the web address (`/mynovel/MYNOVEL001.html`), the chapter list the post belongs to, and its previous/next links.
- `date` controls the order of chapters. Give each chapter a different date and time.
- Previous/next buttons and the chapter dropdown are built automatically. There is no table-of-contents file to maintain.

### Writing tips

Chapter text is normal Markdown, with these extras:

- `{sep}` on its own line becomes the scene-break image (`Images/sep.png`). Replace that file to change the separator.
- A quote written as `> text` is shown in the quote colour (see [Colours](#5-colours)).
- **Links to other pages on your site** must go through `relative_url`, or they break when the site is hosted in a subfolder. Write `[About]({{ '/about.html' | relative_url }})`, not `[About](/about.html)`. Links to other websites (`https://...`) are written normally.
- Footnotes written with Markdown footnote syntax get a "Footnotes:" heading.

## 5. Colours

Every colour is a plain value (like `#b9b1d6`) in one of the files below. Use your editor's find-and-replace across the project to change one everywhere.

### Main palette

| What it colours | Where | Current value |
| --- | --- | --- |
| Page background behind everything | `style="background-color: #121212;"` on `<body>` in `_layouts/default.html` | `#121212` |
| Reading area, night mode (default) | `.night-mode` in `css/designs.css` | background `#292929`, text `#E0E0E0` |
| Reading area, day mode | `.day-mode` in `css/designs.css` | background `#F0F0F0`, text `#222` |
| Block quotes (`> text`), night | `.night-mode-quotes` in `css/designs.css` | `#fcd299` |
| Block quotes (`> text`), day | `.day-mode-quotes` in `css/designs.css` | `#4e6bf9` |
| Chapter title, day mode | `.day-mode-heading` in `css/designs.css` | `#63627f` |
| Headings (h1 to h6) | `css/designs.css` | `#b9b1d6` |
| Links | `a:link` in `css/designs.css` | `#6fa8dc` |
| Visited and hovered links | `a:hover, a:visited` in `css/designs.css` | `#c0d1ce` |
| Link being clicked | `a:active` in `css/designs.css` | `#a9a9a9` |

### Header and menu

| What it colours | Where | Current value |
| --- | --- | --- |
| Header bar | `.site-header` in `css/designs.css` | `#b9b1d6` |
| Menu buttons and dropdown panels | `.dropbtn` and `.dropdown-content` in `css/head.css` | `#b9b1d6` |
| Dropdown arrow | `.dropdown-content::before` in `css/head.css` | `#b9b1d6` |
| Button hover (desktop) | `.dropbtn:hover` and `.site-title:hover` in `css/head.css` | `#9589c1` |
| Keyboard focus outline | `.dropbtn:focus-visible` in `css/head.css` | `#63568f` |
| Menu text | `.dropbtn` and `.dropdown-content a` in `css/head.css` | `#444444` |
| Site name text | inline `style="... color: #444444;"` in `_includes/header.html` (two places) | `#444444` |
| Full-screen mobile menu background | `.trigger` in the mobile section of `css/head.css` | `#e4e2ec` |
| Mobile dropdown links | `.dropdown-content a` in the mobile section of `css/head.css` | text `#000`, background white |

To recolour the header, change the same purple in `css/designs.css` and `css/head.css` so the bar, buttons and dropdowns match.

### Chapter list and buttons

| What it colours | Where | Current value |
| --- | --- | --- |
| Sort button, "Show More" button, "Continue reading" Reset button | the `<style>` block in `_includes/series-toc.html` | border and text `#b9b1d6`, filled hover text `#2b2a3d` |
| Row dividers in the chapter list | the same `<style>` block | faint grey lines (`rgba(...)`) |
| "Reader Settings" button | `.collapsible` in `assets/main.css` | `#555` |
| Previous/next chapter buttons | `css/override.css` | inherit the text colour |
| Footer text | `.footer-col-wrapper` in `assets/main.css` | `#828282` |
| Code blocks | `js/highlightjs/styles/format.css` and `ssms.css` | see those files |
| Comment box | `data-theme` in `_includes/comments.html` | giscus `dark` / `light` (other themes: https://giscus.app) |

### Starting in day mode

The site starts in night mode because the reading area has the `night-mode` class. Readers' Day/Night button choice is remembered in their browser.

## 6. Fonts, sizes and layout

### Fonts

- The font files are in `assets/fonts/` and are declared with `@font-face` at the top of `assets/main.css`.
- The reader chooses between Helvetica, NotoSans, Literata, SFProText and Selawik in the Reader Settings panel. Helvetica is the default.
- To add a font:
  1. Put the file in `assets/fonts/`.
  2. Add an `@font-face` block for it in `assets/main.css`.
  3. Add a line for it in `FONT_STACKS` in `js/changeMode.js`.
  4. Add an `<option>` for it in `_includes/JS_buttons.html`.
- To remove a font, delete it from the same four places.
- Only use fonts you have the right to publish on the web.

### Sizes

| What | Where | Current value |
| --- | --- | --- |
| Base text size | `body` in `assets/main.css` | `16px` |
| Chapter text size and the reader's "A" reset size | `font-size: 16px` in `_layouts/post.html`, and `"16px"` in `changeFontSize` in `js/changeMode.js` | `16px` |
| Chapter title size | `.post-title` in `css/override.css` | `42px` |
| Heading sizes inside pages | `.post-content h2` and similar in `assets/main.css` | `32px` / `26px` / `20px` |
| Site width | `.wrapper` in `css/head.css` | `max-width: 740px` |
| Menu button text | `.dropbtn` in `css/head.css` | `18px` |

### Layout details

- **Mobile breakpoint:** the menu turns into a hamburger button below 600px wide (`css/head.css`, and `js/navBar.js`).
- **Previous/next buttons:** `css/override.css` (padding, arrow size, label opacity).
- **Chapters shown at a time:** `toc_per_page` in `_config.yml` (all series), or `per_page:` in one series' `index.md`.
- **Chapter list design:** the markup is in `_includes/series-toc.html`.
- **Page structure:** `_layouts/` and `_includes/` are normal Jekyll (Liquid) templates, so you can reorder, add or remove sections freely.
- **Images in content:** images are centred automatically. Add `class="inline"` to an `<img>` to keep it in the text flow.

## 7. Reader features

### Reader Settings panel

The panel above each chapter lets readers change day/night mode, font and font size. Their choices are saved in the browser and re-applied on every page. The buttons are in `_includes/JS_buttons.html` and the behaviour is in `js/changeMode.js`.

### Continue reading

When a reader scrolls to the bottom of a chapter, `js/reader.js` saves it as that series' bookmark (in the browser only). On the series page, `_includes/series-toc.html` then shows:

- **Continue reading: Chapter N** (the saved chapter)
- **Read next chapter: Chapter N+1**, when chapter N+1 exists in the series
- a **Reset** button that forgets the bookmark

The bookmark only moves forward, so finishing an earlier chapter does not replace a later bookmark. Change the label text in `series-toc.html`.

### Chapter list (sorting and "Show More")

- The series page contains the full chapter list. JavaScript shows the first 100 and adds 100 more each time the reader clicks **Show More**.
- The **Newest First / Oldest First** button reverses the whole list. The reader's choice is remembered in the browser.
- The 100 is `toc_per_page` in `_config.yml` and applies to every series. A single series can use a different number with `per_page:` in its own `index.md`.

## 8. Comments

Comments use [giscus](https://giscus.app), which stores each comment thread as a GitHub Discussion. The code is in `_includes/comments.html`, and its settings are the `giscus:` block in `_config.yml`.

The `giscus:` values in `_config.yml` belong to the template's author. Replace all four with your own, or comments from your site will appear in their repository.

1. Use a **public** GitHub repository and turn on **Settings > General > Features > Discussions**.
2. Install the giscus app on it: https://github.com/apps/giscus
3. Go to https://giscus.app, enter `user/repo`, pick a Discussions category, and leave Mapping on **pathname**.
4. Copy `data-repo`, `data-repo-id`, `data-category` and `data-category-id` from the snippet giscus generates into `_config.yml`.

A page shows comments only if its front matter has `comments: true`. Set it to `false` or remove it to hide them. The comment theme follows the Day/Night button. Threads are tied to the page's web address, so renaming a chapter starts a new thread.

## 9. Deploying

- Use the included workflow, `.github/workflows/jekyll.yml`: in your repository go to **Settings > Pages** and set **Source** to **GitHub Actions**. Every push to `main` then builds and publishes the site.
- The site works at the root of a domain (`https://you.github.io/`, a custom domain) and in a subfolder (`https://you.github.io/my-repo/`). The workflow sets the subfolder automatically. All links and file paths in the templates go through Jekyll's `relative_url`, so keep that when you add new ones, for example `href="{{ '/css/new.css' | relative_url }}"`.
- Set `url` in `_config.yml` to your site's address (for example `"https://you.github.io"`, without the repository name) so sitemap and link-preview addresses are correct.
- Update the `robots.txt` header and rules to suit your site. Note that `robots.txt` only works when the site is at the root of a domain, not in a subfolder.
- Search engines can read chapter text, because it is in the page itself.
