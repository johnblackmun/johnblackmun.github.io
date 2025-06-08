---
layout: page
title: Blog
permalink: /blog/
---

# Blog

Thoughts, stories, and reflections from the road and studio. This is where I share the deeper side of my musical journey.

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})
*{{ post.date | date: "%B %d, %Y" }}* {% if post.categories %}• {{ post.categories | join: ", " }}{% endif %}

{{ post.excerpt }}

[Continue reading →]({{ post.url | relative_url }})

---
{% endfor %}

{% if site.posts.size == 0 %}
## Welcome to My Blog
*Coming Soon*

This is where I'll share stories from the road, insights into my songwriting process, and thoughts on music and life. Check back soon for the first posts!

## What to Expect

- **Songwriting Stories** - The inspiration behind my songs
- **Tour Diaries** - Life on the road and memorable performances  
- **Studio Sessions** - Behind-the-scenes from recording
- **Music Recommendations** - Artists and songs that inspire me
- **Personal Reflections** - Thoughts on creativity and artistic growth

---
{% endif %}

## Categories

- **Music** - Songwriting, recording, and musical insights
- **Tours** - Stories from the road and live performances
- **Personal** - Life reflections and personal growth
- **Gear** - Instruments, equipment, and technical stuff
- **Collaborations** - Working with other artists

## Subscribe

Never miss a post - follow me on social media or check back regularly for new content. I aim to post something new every week or two, depending on what's happening in my musical world.

---

*Have a question or topic you'd like me to write about? Send me a message - I love hearing from readers!*

