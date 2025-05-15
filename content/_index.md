---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: columns                         # wrap children in a 3-column Tailwind grid
    design:
      css_class: "grid md:grid-cols-3 gap-6"   # 1 col on mobile → 3 on md+
    content:
      blocks:                           # children rendered in the order below

  - block: resume-experience      # EXPERIENCE column
    content:
       username: admin
       title: "Experience"
    design:
      columns: 1                  # vertical timeline in this column

  - block: resume-education       # EDUCATION column
    content:
      username: admin
      title: "Education"
    design:
      columns: 1

  - block: resume-volunteering    # VOLUNTEER column
    content:
      username: admin
      title: "Volunteer"
    design:
      columns: 1

  - block: collection
    id: papers
    content:
      title: "Featured Publications"
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2
---
