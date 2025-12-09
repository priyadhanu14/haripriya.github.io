---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:

  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: View CV
        url: uploads/resume.pdf
    design:
      background:
      
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          # filters:
          #   brightness: 1.0
          size: cover
          position: center
          parallax: false
        # html: |              # <— custom HTML background
        #   <div class="absolute inset-0 -z-10 overflow-hidden">
        #     <!-- For Lottie -->
        #     <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        #     <lottie-player
        #       autoplay
        #       loop
        #       mode="normal"
        #       src="/media/nn-hero.gif"   <!-- or /media/nn-hero.svg -->
        #       style="width:100%;height:100%;object-fit:cover">
        #     </lottie-player>
        #   </div>

  - block: resume-experience      # EXPERIENCE column
    content:
       username: admin
       title: "Experience"
    design:
      columns: 1                  # vertical timeline in this column

  - block: collection
    id: papers
    content:
      title: "Research Publications"
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-list
      columns: 2
---
