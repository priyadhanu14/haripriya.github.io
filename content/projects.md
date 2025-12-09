---
title: 'Projects'
date: 2024-05-19
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: collection
    content:
      title: Featured Projects
      text: A selection of recent, high-impact projects.
      filters:
        folders:
          - project
        featured_only: true
    design:
      view: article-list
      fill_image: true
      columns: 3

  - block: collection
    content:
      title: Projects
      text: Below is a selection of projects I completed during my undergraduate and master’s studies. 
      filters:
        folders:
          - project
    design:
      view: article-list
      fill_image: false
      columns: 3
---
