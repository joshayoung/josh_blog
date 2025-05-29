---
layout: layouts/blog2.html
title: Josh Blog
---
# Resources

Here, I will be listing helpful resources, documentation, and tools that I use in my daily web development
workflow. I will continually update this page as I discover more tools that are beneficial. I have included a list grouped into categories below.

<ResourcesLinksOutput />

<ResourcesOutput />

<ul>
{% for resource in resources %}
    <li><a href="{{resource.url}}">{{ resource.title }}</a></li>
  {% endfor %}
</ul>