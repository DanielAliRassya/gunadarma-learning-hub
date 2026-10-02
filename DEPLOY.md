git init
git remote add origin https://github.com/YOUR_USERNAME/gunadarma-learning-hub.git
git add .
git commit -m "Initial commit: Gunadarma Learning Hub"
git branch -M main
git push -u origin main

# Build & Deploy to Vercel
vercel
