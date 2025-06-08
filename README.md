# John Blackmun Jekyll Theme (GitHub Actions Version)

**Version:** 1.0 (GitHub Actions)  
**Author:** Custom Theme  
**Description:** A modern, elegant Jekyll theme designed for singer-songwriter John Blackmun, optimized for GitHub Actions deployment

## Features

- ✅ **GitHub Actions deployment** - Reliable, fast builds
- ✅ **Dark theme with gold accents** - Professional musician aesthetic
- ✅ **Fully responsive design** - Perfect on all devices
- ✅ **No Ruby dependency issues** - GitHub Actions handles everything
- ✅ **Custom collections** - Albums and songs with structured data
- ✅ **Blog functionality** - Share your stories and updates
- ✅ **Social media integration** - Connect all your platforms
- ✅ **SEO optimized** - Better search engine visibility
- ✅ **Mobile-friendly navigation** - Touch-optimized interface

## What's Included

### GitHub Actions Workflow
- **`.github/workflows/jekyll.yml`** - Automated deployment
- **Handles Ruby dependencies** automatically
- **Fast builds** (2-3 minutes)
- **Clear error reporting** if issues occur

### Theme Files
- **Complete Jekyll theme** with all layouts and includes
- **Sample content** to get you started
- **Responsive CSS** that works on all devices
- **JavaScript functionality** for interactive elements

### Documentation
- **Step-by-step setup guide** for complete beginners
- **Customization instructions** for personalizing your site
- **Troubleshooting tips** for common issues

## Quick Start

1. **Create GitHub repository** named `yourusername.github.io`
2. **Upload all theme files** (including the `.github` folder!)
3. **Go to Settings > Pages** and select "GitHub Actions"
4. **Wait 2-3 minutes** for your site to build
5. **Visit** `https://yourusername.github.io`

## File Structure

```
john-blackmun-jekyll-actions/
├── .github/
│   └── workflows/
│       └── jekyll.yml       # GitHub Actions workflow
├── _config.yml              # Site configuration
├── _layouts/                # Page templates
├── _includes/               # Reusable components
├── _posts/                  # Blog posts
├── _albums/                 # Album collection
├── _songs/                  # Song collection
├── assets/                  # CSS, JS, and images
├── about.md                 # About page
├── music.md                 # Music page
├── discography.md           # Discography page
├── news.md                  # News page
├── blog.md                  # Blog index
├── index.md                 # Homepage
├── Gemfile                  # Ruby dependencies (GitHub Actions compatible)
└── README.md                # This file
```

## GitHub Actions Benefits

### Why This is Better
- **No dependency conflicts** - GitHub Actions handles Ruby/Jekyll setup
- **Faster builds** - Usually completes in 2-3 minutes
- **Better error handling** - Clear logs when something goes wrong
- **More reliable** - Consistent builds every time
- **Future-proof** - Easy to customize build process later

### How It Works
1. **You push changes** to your repository
2. **GitHub Actions triggers** the workflow automatically
3. **Ruby and Jekyll** are set up in a clean environment
4. **Your site is built** and deployed to GitHub Pages
5. **Changes go live** in 2-3 minutes

## Customization

### Essential Updates
Edit these files first:

**`_config.yml`** - Your site information:
```yaml
title: Your Name
email: your@email.com
description: Your bio
url: "https://yourusername.github.io"

social:
  spotify: "your-spotify-url"
  instagram: "your-instagram-url"
  # Add all your social links

hero:
  title: "Your Name"
  tagline: "Your tagline here"
```

### Content Pages
- **`about.md`** - Your story and biography
- **`music.md`** - Where to find your music
- **`discography.md`** - Your albums and releases
- **`news.md`** - Latest updates and announcements

### Adding Content
- **Blog posts:** Create files in `_posts/` with format `YYYY-MM-DD-title.md`
- **Albums:** Create files in `_albums/` with album details
- **Songs:** Create files in `_songs/` with track information
- **Images:** Upload to `assets/images/` and reference in content

## Troubleshooting

### Build Failures
1. **Check the Actions tab** in your repository
2. **Click on the failed workflow** to see error details
3. **Most common issue:** Missing `.github` folder
4. **Solution:** Re-upload all files, including hidden folders

### Site Not Updating
- **Wait 2-3 minutes** after pushing changes
- **Check Actions tab** to see if build completed successfully
- **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)

### Missing .github Folder
If you can't see the `.github` folder:
- **Windows:** File Explorer > View > Show hidden items
- **Mac:** Press Cmd+Shift+. to show hidden files
- **Alternative:** Manually create `.github/workflows/` and upload `jekyll.yml`

## Support

### Resources
- **Setup guide included** - Complete beginner-friendly instructions
- **Jekyll documentation** - [jekyllrb.com](https://jekyllrb.com)
- **GitHub Actions docs** - [docs.github.com/actions](https://docs.github.com/actions)
- **GitHub Pages guide** - [pages.github.com](https://pages.github.com)

### Getting Help
- **Check Actions tab** for build errors first
- **Review sample files** for proper formatting
- **GitHub community** is very helpful for troubleshooting

## License

This theme is created for personal use by musicians and artists. Feel free to customize and modify for your own music website.

## Credits

- **Design:** Custom theme optimized for musicians
- **GitHub Actions:** Reliable deployment workflow
- **Fonts:** Google Fonts (Playfair Display, Open Sans, Dancing Script)
- **Icons:** Font Awesome
- **Hosting:** GitHub Pages (free)

---

**Ready to launch your music career online? Your professional website awaits!** 🎵

*This GitHub Actions version ensures reliable deployment and gives you a solid foundation for your online presence.*

