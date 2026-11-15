# Martia Nouri portfolio — GitHub Pages edition

This is a static export of the existing public portfolio. It includes the home page, four project pages, four technical breakdown pages, cover images, original stylesheet, favicon, and the CV currently linked by the original portfolio. YouTube showcases remain embedded from YouTube and require an internet connection.

## Publish without a build step

1. Extract this ZIP on your computer.
2. Upload the CONTENTS of the extracted folder into your GitHub repository. `index.html` must be at the repository root, alongside `assets`, `projects`, and `.nojekyll`. Do not upload just the ZIP.
3. In the repository, open Settings > Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Select your main branch and /(root), then Save.
6. Open the published address shown by GitHub once deployment completes.

For a user site, name the repository YOUR-USERNAME.github.io. A normal project repository also works; all local links are relative so the portfolio works under a repository subpath.

## Editing

Edit index.html for the home page. Each project has projects/PROJECT-NAME/index.html and technical.html. Edit assets/styles.css to change the design. Replace assets/Martia_Nouri_CV.pdf with an updated CV while keeping its filename.

The original site uses server-side storage and account-based editing. This static export intentionally omits the admin editor, upload API, database, and sign-in: they cannot run on GitHub Pages. Update the HTML and assets in GitHub instead. Later edits made on the original Site do not automatically sync here.

The existing hosted portfolio has not been changed or redeployed.
