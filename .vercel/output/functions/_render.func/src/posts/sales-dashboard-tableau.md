---
layout: ../layouts/BlogPost.astro
title: Sales Overview 2024 Dashboard using Tableau
slug: sales-dashboard-tableau
description: "Job searching post-graduation can be exhausting and a bit demotivating. To add some fun to the process \U0001F602, I created a mini data visualization project in Tableau using the Retail Supermarket dataset from Kaggle."
tags:
  - tableau
added: 2024-07-31T07:00:00.000Z
---

About Dataset: The dataset contains sales details of different stores of a supermarket chain that has multiple stores in different locations of the US. This supermarket chain focuses on mainly office supplies. The dataset contains columns such as:

* Ship Mode
* Segment
* Country
* City
* State
* Postal code
* Region
* Category
* Sub-category
* Sales
* Quantity
* Discount
* Profit

When working with this dataset, I approached it from the perspective of a regional or operations manager, focusing on identifying cities with the highest sales performance. The dashboard is designed to highlight top-performing locations while also identifying underperforming segments. This insight can guide decisions, such as targeted marketing efforts to boost sales or evaluating store relocations to better serve different areas, ultimately supporting strategic business objectives.

This was a fun mini-project to do to showcase my Tableau skills.

<div class='tableauPlaceholder' id='viz1723668198891' style='position: relative'><noscript><a
      href='#'><img alt='Sales Overview ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;SY&#47;SY26KN7H6&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='shared&#47;SY26KN7H6' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;SY&#47;SY26KN7H6&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object>
</div>
<script type='text/javascript'>
  var divElement = document.getElementById('viz1723668198891');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else { vizElement.style.width='100%';vizElement.style.height='1627px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
</script>
