---
title: Timeline
permalink: "/timeline"
layout: page
category: Home
---

Timeline of YfCL's actions:





<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">

 <title>{{ site.title }}</title>
    
    <link rel="canonical" href="{{ site.url }}{{ site.baseurl }}{{ page.url }}" />

    <meta name="description" content="{{ site.description }}">
    <meta name="robots" content="index,follow">
    <meta itemprop="name" content="{{ site.title }}">
    <meta name="theme-color" content="{{ site.color }}">

    <link href="{{ site.baseurl }}/assets/css/timeline.css" rel="stylesheet">
    <style>body{background:{{site.color}};}</style>
</head>



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
	   <img src="{{ site.url }}{{ site.baseurl }}/timeline-steps/pictures/{{ step.picture }}" alt="{{ step.picture }}" height="inherit">
	</div>
    </div>
    {% endfor %}
</div>
