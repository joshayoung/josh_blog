---
layout: layouts/blog2.html
title: Josh Blog
---
# Resources

Here, I will be listing helpful resources, documentation, and tools that I use in my daily web development
workflow. I will continually update this page as I discover more tools that are beneficial. I have included a list grouped into categories below.


<ul class='anchor-list'>
  {% for resource in resources | sort(false, false, "title") -%}
    <li>
      <a href='#{{resource.class}}'>{{ resource.title }}</a>
    </li>
  {% endfor %}
</ul>

<div class='resources'>
  {% for resource in resources | sort(false, false, "title") -%}
  <a id='{{ resource.class }}'><h3>{{resource.title}}</h3></a>
<ul>
  {% for dta in resource.data -%}
    <li>
      <a href='#{{dta.url}}'>{{ dta.title }}</a>
    </li>
  {% endfor %}
</ul>
  {% endfor %}
  </div>