---
layout: page
title: Discography
permalink: /discography/
---

# Discography

A complete collection of my musical releases, from my debut EP to the latest singles. Each album represents a different chapter in my artistic journey.

## Albums & EPs

{% for album in site.albums %}
### {{ album.title }} ({{ album.year }})

{% if album.artwork %}
![{{ album.title }}]({{ album.artwork | relative_url }})
{% endif %}

{{ album.content }}

{% if album.spotify_link or album.apple_music_link or album.youtube_link %}
**Listen:**
{% if album.spotify_link %}[Spotify]({{ album.spotify_link }}) • {% endif %}
{% if album.apple_music_link %}[Apple Music]({{ album.apple_music_link }}) • {% endif %}
{% if album.youtube_link %}[YouTube]({{ album.youtube_link }}){% endif %}
{% endif %}

---
{% endfor %}

{% if site.albums.size == 0 %}
## Midnight Reflections (2024)
*Latest Album*

My most personal collection yet, exploring the quiet moments between day and night where thoughts become melodies and emotions find their voice.

**Track Listing:**
1. Midnight Train (3:42)
2. Coffee Shop Dreams (4:15)
3. Letters Never Sent (3:28)
4. Highway Memories (4:03)
5. Coming Home (5:12)

## Open Roads (2023)
*EP*

A journey through landscapes both physical and emotional, capturing the essence of travel and self-discovery.

## Midnight Thoughts (2020)
*Debut EP*

Where it all began - raw, honest songs recorded in my bedroom during the early days of the pandemic.
{% endif %}

## Singles & Collaborations

Individual tracks and special collaborations that didn't make it onto full albums but hold special meaning in my musical journey.

## Music Videos

Visual stories that bring my songs to life:

- **"Midnight Train"** - Official Music Video
- **"Coffee Shop Dreams"** - Acoustic Session
- **"Live at The Blue Note"** - Full Concert Recording

---

*Physical copies of select releases are available for purchase. Contact me directly for signed albums and special editions.*

