---
title: IEEE HKN Talks
order: 7
image: hkn_talks_banner.png
hidden: false
---
{% assign hkn_talks_data = site.data.hkn_talks %}
<p>HKN Talks is a series created and hosted by <a href="https://hknuned.org/" target="_blank">IEEE Eta Kappa Nu Nu Alpha</a>. We invite experts from the industry and academia to give talks on IEEE related topics. We publish the talks on <a href="{{ hkn_talks_data.channel_link }}" target="_blank">our YouTube Channel</a> to make them publically available for everyone.</p>

<p>Here you can find the playlist of all HKN Talks: <a href="{{ hkn_talks_data.hkn_talks_playlist_link }}" target="_blank">Playlist all HKN Talks </a></p>

<!-- Here the iFrame API for later improvements https://developers.google.com/youtube/iframe_api_reference?hl=de -->
<p><b>Here a list of HKN Talks I have hosted:</b></p>
<div class="columns is-multiline">
    {% for item in hkn_talks_data.hosted_talks %}
    <div class="column is-half">
        <iframe width="100%" height="350" src="{{ item.link }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  style="border-radius: 5px;"></iframe>
    </div>
    {% endfor %}
</div>
