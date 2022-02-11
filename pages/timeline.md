---
title: Timeline
permalink: "/timeline"
layout: timeline
category: Home
---

Timeline of YfCL's actions:



<div class="container row">
    {% assign steps = site.timeline-steps | sort: 'date' %}
    {% for step in steps reversed %}
    <div class="item">
        <i class="vertical-line"></i>
        <h2 class="item-date">{{ step.date | date: '%d/%m/%Y' }}</h2>
        <div class="card-panel">
            <h3 class="card-title">
                {{ step.title }}
            </h3>
            <p>
                {{ step.content }}
            </p>
	   <img src="{{ site.url }}{{ site.baseurl }}/timeline-steps/pictures/{{ step.picture }}" alt="{{ step.picture }}" height="inherit" onerror="this.style.display='none'">
	</div>
    </div>
    {% endfor %}
</div>


