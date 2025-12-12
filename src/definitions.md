---
layout: layouts/page.html
title: Josh Young
---
# Programming Definitions

These are some of the terms I have been introduced to over the years. In an effort to remember these and have a convenient place to reference, I have added them to this page.

<dl>
  {% for definition in definitions | sort(false, false, "word") %}
    <div>
      <dt>{{definition.word}}</dt>
      <dd>
        {{definition.definition}}
        <a target="_blank" rel="noopener noreferrer" href="{{definition.link}}">(resource)</a>
      </dd>
    </div>
  {% endfor %}
</dl>