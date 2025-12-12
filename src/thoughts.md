---
layout: layouts/page.html
title: Josh Young
---
## Thoughts

Here I document concise posts about mobile/web development or programming concepts that I am learning or have recently discovered. Many times these entries are very short, as I am not a prolific blogger. However, hopefully something I list here will be helpful to others.

<ul>
    {% for post in collections.posts | reverse %}
        {% Thought post.data.title, post.url, post.data.description, post.data.date %}
    {% endfor %}
</ul>