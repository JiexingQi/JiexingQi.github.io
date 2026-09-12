---
layout: academic
title: "Publications"
permalink: /publications/
description: "Research in natural language processing, semantic parsing, and knowledge discovery."
author_profile: true
---

<div data-publications>
  <form class="publication-filters" role="search" aria-label="Search publications" hidden>
    <div class="publication-search">
      <label for="publication-search">Search publications</label>
      <div class="search-field">
        <i class="fas fa-search" aria-hidden="true"></i>
        <input id="publication-search" type="search" placeholder="Title, author, or venue" autocomplete="off">
      </div>
    </div>
    <div class="publication-year">
      <label for="publication-year">Year</label>
      <select id="publication-year">
        <option value="all">All years</option>
        {% assign publications_by_date = site.publications | sort: 'date' | reverse %}
        {% assign previous_year = '' %}
        {% for post in publications_by_date %}
          {% assign year = post.date | date: '%Y' %}
          {% if year != previous_year %}<option value="{{ year }}">{{ year }}</option>{% assign previous_year = year %}{% endif %}
        {% endfor %}
      </select>
    </div>
    <button class="filter-reset" type="reset" aria-label="Reset publication filters" title="Reset filters"><i class="fas fa-undo" aria-hidden="true"></i></button>
  </form>
  <p class="publication-count" role="status" aria-live="polite" aria-atomic="true" data-publication-count>{{ site.publications.size }} publications</p>
  {% include publication-list.html %}
  <p class="publication-empty" data-publication-empty hidden>No publications match your search.</p>
</div>
