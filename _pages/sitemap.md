---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of the pages and academic content on this site. An [XML version]({{ base_path }}/sitemap.xml) is also available.

<h2>Pages</h2>
<ul>
  <li><a href="{{ base_path }}/">About</a></li>
  <li><a href="{{ base_path }}/publications/">Publications</a></li>
  <li><a href="{{ base_path }}/teaching/">Teaching</a></li>
  <li><a href="{{ base_path }}/cv/">CV</a></li>
</ul>

<h2>Publications</h2>
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<h2>Teaching</h2>
{% for post in site.teaching reversed %}
  {% include archive-single.html %}
{% endfor %}
