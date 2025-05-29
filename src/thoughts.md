---
layout: layouts/blog2.html
title: Josh Blog
---
## Thoughts

Here I document concise posts about mobile/web development or programming concepts that I am learning or have recently discovered. Many times these entries are very short, as I am not a prolific blogger. However, hopefully something I list here will be helpful to others.


<ul>
    {% set pageTitle = collections.posts %}
    {% for post in pageTitle %}
    <li><a href="{{post.url}}">{{ post.data.title }}</a></li>
    {% endfor %}
</ul>