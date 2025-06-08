---
layout: page
title: Music
permalink: /music/
---

# Listen to My Music

Discover my latest releases and find your favorite streaming platform. Each song tells a story, and I hope they resonate with your own journey.

## Featured Track

**"Midnight Train"** - My latest single exploring themes of journey and self-discovery. Available on all major streaming platforms.

## Where to Listen

### Streaming Platforms

- **Spotify:** [Listen on Spotify]({{ site.social.spotify }})
- **Apple Music:** [Listen on Apple Music]({{ site.social.apple_music }})
- **YouTube Music:** [Watch on YouTube]({{ site.social.youtube }})
- **Amazon Music:** Available on Amazon Music
- **SoundCloud:** Find exclusive tracks and demos

### Latest Releases

{% for song in site.songs limit:6 %}
- **{{ song.title }}** {% if song.duration %}({{ song.duration }}){% endif %}
  {% if song.excerpt %}{{ song.excerpt | strip_html }}{% endif %}
  {% if song.spotify_link %}[Listen on Spotify]({{ song.spotify_link }}){% endif %}
{% endfor %}

## Playlists

I've curated some playlists that capture different moods and moments:

- **Late Night Vibes** - Perfect songs for quiet contemplation
- **Acoustic Sessions** - Stripped-down versions and live recordings  
- **Road Trip Essentials** - Songs for the open road and adventure

## Live Performances

Check out my live performances and acoustic sessions on YouTube. There's something special about the raw energy of live music that studio recordings can't quite capture.

---

*New music is always in the works. Follow me on social media to be the first to hear new releases and get behind-the-scenes glimpses into my creative process.*

