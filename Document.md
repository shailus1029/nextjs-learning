

1. Filesystem-based Routing.
- Next JS used files & folder to define routes.
- Only files & folders inside the "app" folder are considered.

 /app --->>> localhost:3000
   |
   |
   |----- /about   ----->> localhost:3000/app
   |
   |
   |----- /blog    ------>> localhost:3000/blog
            |
            |
            |------ /post-1  --->>> localhost:3000/blog/post1


2. FileNames Matters.
- Nextjs relies on reserved and special filenames.
- But filenames only matters inside the "app" folder.


page.tsx -->> Define Page Content.

layout.tsx -->> Define wrapper around pages.

not-founs.tsx -->> Define Not Route fallback page.

error.tsx -->> Define "Error" fallback page.

3. Layout file.
- Layout file defines the shell around one or more pages or nested folder pages.
- Every next project needs atleast one root layout.tsx/js file.


