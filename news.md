---
layout: page
title: News
permalink: /news/
---

# Latest News & Updates

Stay up to date with my latest releases, tour announcements, and behind-the-scenes glimpses into my musical journey.

## Recent Updates

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url | relative_url }})
*{{ post.date | date: "%B %d, %Y" }}*

{{ post.excerpt }}

[Read more →]({{ post.url | relative_url }})

---
{% endfor %}

{% if site.posts.size == 0 %}
### New Single "Midnight Train" Now Available
*December 15, 2024*

My latest single "Midnight Train" is now streaming on all platforms. This haunting ballad explores themes of journey and self-discovery, featuring intimate acoustic arrangements and honest storytelling.

---

### Spring 2025 Tour Dates Announced
*December 10, 2024*

Excited to announce my spring tour across the Southeast! Tickets go on sale this Friday. Can't wait to see you all and share these songs in person.

---

### Featured in Nashville Scene Magazine
*December 5, 2024*

Had a great conversation with Nashville Scene about my songwriting process and upcoming album. Check out the full interview to learn more about my creative journey.

---
{% endif %}

## Newsletter

Want to stay in the loop? Subscribe to my newsletter for exclusive updates, early access to new music, and behind-the-scenes content.

**No spam, just music updates. Unsubscribe anytime.**

## Press & Media

For press inquiries, interview requests, or media kits, please contact:

**Email:** press@johnblackmun.com  
**Management:** Available upon request

---

*Follow me on social media for daily updates and real-time news about shows, releases, and life on the road.*

