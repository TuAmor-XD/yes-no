# yes-no

A fun interactive web app that asks a special question.

## Live Demo

Once deployed to GitHub Pages, access it at: `https://<your-username>.github.io/yes_no/`

## Hosting on GitHub Pages

### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/yes_no.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: Select `main` and folder `/ (root)`
5. Click **Save**

### Step 3: Access Your Site

After a few minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/yes_no/
```

## Files

- `index.html` - Main HTML file
- `style.css` - Stylesheet
- `app.js` - Interactive JavaScript

## Local Development

Open `index.html` directly in your browser to test locally.
