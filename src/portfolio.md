---
layout: layouts/page-wide.html
title: Josh Blog
---
# App Portfolio

{% PortfolioItem
  image="apps/N.png",
  title="Native Android",
  date="06/2025 - 10/2025",
  repo="https://github.com/joshayoung/NoteMark",
  visibility="public",
  tech="kotlin, android studio, jetpack compose, offline-first, syncing, workmanager"
   %}
<h3>NoteMark App</h3>
<ul>
  <li>Android Native application written in Jetpack Compose</li>
  <li>Uses OAUTH Authentication with eefresh token capailities</li>
  <li>Using clean architecture and MVI</li>
  <li>Built with offline-first architecture</li>
  <li>Uses a Workmanager that allows for syncing with a backend API</li>
</ul>
{% endPortfolioItem %}

{% PortfolioItem
  image="apps/phone.png",
  title="KMM",
  date="01/2025 - 03/2025",
  repo="https://github.com/joshayoung/translator_kmm",
  visibility="private - code available upon request",
  tech="kotlin, android studio, jetpack compose, kmm, iOS, shared vm"
   %}
<h3>Translator App</h3>
<ul>
  <li>Kotlin Multi Platform Application for Traslating Text</li>
  <li>Builds app for both Android and iOS</li>
  <li>Uses clean architecture and MVI</li>
  <li>Uses a shared view model for the architecture</li>
</ul>
{% endPortfolioItem %}

{% PortfolioItem
  image="apps/running.svg",
  title="Native Android",
  date="11/2025 - 01/2025",
  repo="https://github.com/joshayoung/android_runique_class_app",
  visibility="private - code available upon request",
  tech="kotlin, android studio, jetpack compose, native android, offline-first"
   %}
<h3>Running Tracker App</h3>
<ul>
  <li>Native Android application</li>
  <li>Uses OAUTH for authentication and token refresh</li>
  <li>Uses clean architecture and MVI</li>
  <li>Offline-first architecture with background sync</li>
</ul>
{% endPortfolioItem %}