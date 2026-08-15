# Pathgo

This repository contains the Aigo product story HTML and a GitHub Pages workflow to deploy it from the `docs/` folder.

Files added:
- docs/aigo-product-story.html — copied from local file
- .github/workflows/pages.yml — GitHub Actions workflow to publish `docs/` to GitHub Pages

To push and deploy, run the commands below (you must have push access to https://github.com/soon-coming/Pathgo):

```bash
cd "C:\Users\DELL\OneDrive\Desktop\Aigo path\Pathgo"
git init
git add .
git commit -m "Add Aigo product story and Pages workflow"
# If remote doesn't exist:
git remote add origin https://github.com/soon-coming/Pathgo.git
git branch -M main
git push -u origin main
```

If you use GitHub CLI, login first with `gh auth login` and then push.