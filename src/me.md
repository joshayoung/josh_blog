---
layout: layouts/page.html
title: Josh Blog
---

# About Me

My name is Josh Young. I am a mobile developer living and working near Nashville, Tennessee. I enjoy all things tech related. I am not a huge blogger, but I enjoy writing small posts about what I am currently working with or technologies that I am using. Maybe something I say here will help someone in their journey, or at the very least provide a central place for me to document what I have learned when working through new projects.

### My Job

For my day job, I develop mobile applications for my employer,
[National Federation of Independent Business](https://www.nfib.com/). In a typical day, I work primarily with .NET Maui, C#, and ASP.NET Core and their accompanying technologies such as build tools, testing frameworks, and the like. I primarily write "Line-of-Business" Applications (Enterprise Software Development).

In the past, I have had the opportunity to work with many technologies including, but not limited to: PHP, Laravel, Objective-C, Ruby, JavaScript, and Python. On the [resume](/resume) portion of this site, I have listed some of my job duties in more detail.

### <a id='hobbies'></a> Hobbies

Many of my hobbies relate to technology and development. I enjoy coding and designing web applications and web sites. When it comes to web development, I enjoy the whole stack from front end to back end. Therefore, I spend a significant amount of my free time keeping up with and learning the latest languages and frameworks. When possible, I try to implement this additional knowledge into the software stack that I use at work.

I also spend some of my free time maintaining my home network, firewall, file server, git server, among other open-source applications. I enjoy Linux and FreeBSD so I spend time configuring these systems in my free time as well. As evident by some of my certifications and training, I also dabble in computer security. A good working knowledge of computer security and specifically web application security is very helpful as a web developer. If I am not working on servers or code, I spend my time playing my harmonica, biking, reading, or researching nutrition.

### <a id='podcasts'></a>Recommended Podcasts

Below I have listed the tech podcasts that I currently listen to or have listened to in the past. Podcasts are a great way to keep up with the latest changes in development. Hopefully this list will introduce a good podcast to someone who enjoys learning and keeping up with the latest changes in tech.

<ul>
{% for pod in podcasts_recommended -%}
    <li><a href="{{pod.url}}">{{ pod.title }}</a></li>
  {% endfor %}
</ul>

### <a id='podcast_episodes'></a>Great Podcast Episodes

<ul>
{% for pod in podcasts -%}
    <li><a href="{{pod.url}}">{{ pod.title }}</a></li>
  {% endfor %}
</ul>

### <a id='books'></a>Books I've Read

Frequently, I try to delve deeper into specific aspects of tech that I want to learn more about. I find that buying a book about a particular technology can be a beneficial deep-dive experience. Below I have listed some of the books I have read over the years, which have contributed to where I am today (listed in alphabetical order and categorized below).

{% for book in books %}
    <h5>{{ book.title | safe }}</h5>
    <ul>
      {% for b in book.data -%}
        <li><a href="{{b.url}}">{{ b.title }}</a></li>
      {% endfor %}
    </ul>
  {% endfor %}

### <a id='books_i_recommend'></a>Books I Recommend

Of the software engineering, networking, security, and design books that I listed above, these are some of the books that I highly recommend.

{% for book in books %}
    {% Book book.title, book.hide_from_recommended, book.data %}
{% endfor %}
