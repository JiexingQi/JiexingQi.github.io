---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also find my articles on <u><a href="{{ site.author.googlescholar }}">Google Scholar</a></u>, <u><a href="{{ site.author.semanticscholar }}">Semantic Scholar</a></u>, and <u><a href="{{ site.author.dblp }}">DBLP</a></u>.

{% include base_path %}

{% assign first_author_publications = site.publications | where: "first_author", true | sort: "featured_order" %}
{% for post in first_author_publications %}
  {% include archive-single.html %}
{% endfor %}

{% assign other_publications = site.publications | where_exp: "post", "post.first_author != true" %}
{% for post in other_publications reversed %}
  {% include archive-single.html %}
{% endfor %}
