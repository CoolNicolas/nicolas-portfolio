# Nicolas Lin — Portfolio with Project Demos

A clean, black-and-white editorial portfolio centered on an **interactive personal roadmap**. Built with React, TypeScript, Vite, Motion, and CSS. No backend, database, paid hosting, or always-on personal computer is required.

## What's in this version

- Large introduction with Nicolas's name, Queen's University, and openness to technology opportunities
- Dedicated **The Journey** section immediately after the introduction
- Eight expandable timeline entries, including Google's Machine Learning Crash Course completion
- Automatically playing muted in-page demo videos for GitHub Repository Analyzer (19 seconds), Lunar Lander, and Poker Trainer, each with a preview poster
- Filters for projects, learning, and education
- Direct verified GitHub link for the repository analyzer; other project entries link to the general GitHub profile until their repository URLs are confirmed
- **Beyond the Screen** section about basketball and League of Legends
- Email `nicolaslin20@gmail.com` with copy-to-clipboard, GitHub link `github.com/CoolNicolas`
- Light background, editorial serif headings, restrained motion, and mobile responsive styling

- CS50 Web Programming certificate displayed as a high-resolution image immediately inside the expanded CS50 timeline milestone; optional verification link beneath it
- Videos pause and return to the beginning as soon as their milestone is closed. Browsers require autoplay to be muted; the player controls allow sound to be enabled.

The timeline starts collapsed so the videos do not play until a recruiter chooses a project. Videos autoplay **muted** due to browser autoplay restrictions; controls let viewers unmute or pause. The CS50 certificate appears in the expanded entry without opening a new page.

## Start on your Windows computer

Open PowerShell in the unzipped `Nicolas_Portfolio_V4_CS50_And_Autoplay` folder:

```powershell
npm install
npm run dev
```

Open the local URL that appears in the terminal (usually `http://localhost:5173`).

To make sure the production build works:

```powershell
npm run build
npm run preview
```

## How to update your own journey

Edit **`src/content.ts`**. That file contains `profile`, `milestones`, and `interests`.

- To add a milestone, copy an entry in the `milestones` array, give it a unique `id`, change the fields, and renumber subsequent items.
- For project links, set `link.href` to the full specific public GitHub repository URL. The analyzer already has its verified direct link.
- For learning links, keep them labeled as course information unless you provide a personal verification/certificate URL.
- To add your resume, put `resume.pdf` in `public/` and change `profile.resume` to `'/resume.pdf'`.
- The portfolio intentionally avoids claiming an unsupported project-specific GitHub URL.

### Other content

- `src/App.tsx`: timeline interaction, page layout and components
- `src/styles.css`: fonts, colors, spacing, and responsive design
- `index.html`: metadata and site title

## Host for free on Vercel

1. Create a new public GitHub repository named something like `nicolas-portfolio`.
2. From your portfolio folder in PowerShell, run:

```powershell
git init
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/CoolNicolas/nicolas-portfolio.git
git push -u origin main
```

The `git remote add origin` example only works **after you create that exact GitHub repository**. If you choose a different name, update the command.

3. Open https://vercel.com/new and import that repository.
4. Framework preset: Vite; build command `npm run build`; output directory `dist`.
5. Deploy. Vercel provides a public HTTPS URL. Your PC can be switched off.

Avoid committing `node_modules`, `dist`, secrets, or personal API keys. The included `.gitignore` excludes generated files.

## Customize before submitting to recruiters

Check every description for accuracy, replace generic GitHub profile links with direct repository pages as those become public, add a PDF resume if desired, and consider adding a LinkedIn URL.

The Google Fonts stylesheet uses the internet. If it cannot load, the website falls back to installed Georgia/Arial fonts.

## Video demos

Demo clips live in `public/demos/` and are referenced in `src/content.ts`. These are your own screen recordings, compressed for web delivery. Each video is shown when you click its project milestone in **The Journey**. No external video hosting is required.

To update a video later, replace its matching `.mp4` file with a browser-compatible MP4 (H.264 preferred), ideally keeping the same filename. The preview `.jpg` posters can be replaced independently.

### Update your existing Vercel project safely

If you have already deployed the site from a GitHub repository, **do not create a second Vercel project**. Copy these source files and `public/demos` into the same local Git repository, verify with `npm run dev` and `npm run build`, then commit and push your changes. Vercel will deploy the update automatically.

## Publish after reviewing

This ZIP does **not** modify your live Vercel site. Preview it first with `npm install` and `npm run dev`, then verify with `npm run build`.

To update your already deployed site, open the **Git-connected clone** of `https://github.com/CoolNicolas/nicolas-portfolio`, and copy the new `src/`, `public/demos/`, and `public/certificates/` assets into it. Run a build, then commit and push from the Git-connected folder. Do not replace its `.git` folder.

### Certificate sources

The displayed PNG was rendered from `CS50W-certificate.pdf` supplied by Nicolas. The original PDF is kept under `public/certificates/` for reference; visitors see the PNG in the CS50 milestone, and the optional verify link opens the official CS50 certificate verification URL.
