---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also find my articles on <u><a href="{{ site.author.googlescholar }}">Google Scholar</a></u>, <u><a href="{{ site.author.semanticscholar }}">Semantic Scholar</a></u>, and <u><a href="{{ site.author.dblp }}">DBLP</a></u>.

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
