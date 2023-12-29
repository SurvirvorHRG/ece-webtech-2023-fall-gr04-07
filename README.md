
# Blogging application - ECE Webtech project

This is a [Next.js](https://nextjs.org/) blog project

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![Capture d'écran 2023-12-29 224803](https://github.com/SurvirvorHRG/ece-webtech-2023-fall-gr04-07/assets/49885447/5e3b27b2-dd0a-430b-9a46-0e7fe4b6cffc)

## Features
* **User Authentication**:  [OAuth2 authentication](https://ece-webtech-2023-fall-gr04-07.vercel.app/login).
* **Content Management**: [Publish, and store posts within a structured database](https://ece-webtech-2023-fall-gr04-07.vercel.app/writeArticle).
* **Community Interaction**: [Comment on posts, enabling lively discussions and interactions](https://ece-webtech-2023-fall-gr04-07.vercel.app/articles/quest-ce-que-linformatique-quantique-).
* **Navigation and Accessibility** : [Intuitive interface for users to easily navigate through posts and comments](https://ece-webtech-2023-fall-gr04-07.vercel.app/articles).
* **User Profile Customization**: [Provide users with the functionality to manage and personalize their profiles and settings](https://ece-webtech-2023-fall-gr04-07.vercel.app/profile).


## Deliverables 

- Vercel URL: *https://ece-webtech-2023-fall-gr04-07.vercel.app/*
- Supabase project URL: *https://supabase.com/dashboard/project/vdtyfskrdjugcgkeuvqy*

## Authors

- *Erwan CELANIE, SI-gr04*

## Evaluation

### Mandatory Tasks

* **Naming convention**
  * Grade: *2/2*
  * Comments: *Following the conventions provided during the courses.*
* **Project structure**
  * Grade: *1.5/2*
  * Comments: *Inspired from the labs correction and this code [next-blog](https://github.com/safak/next-blog/tree/completed).*
* **Git usage**
  * Grade: *2/2*
  * Comments: *Following the conventions provided during the courses.*
* **Code quality**
  * Grade: *3/4*
  * Comments: *Experiences and course materials.*
* **Design, UX, and content**
  * Grade: *3/4*
  * Comments: *Inspired from this code:[next-blog](https://github.com/safak/next-blog/tree/completed).*
  * Task feedback: *Doing the project alone was an hard task ! So I took an exsiting code for a blog in nextjs and I implemented what was required.*

* **Home page**
  * Grade: *2/2*
  * Comments: *Inspired from this [code.](https://github.com/safak/next-blog/tree/completed)*
  * Task feedback: *Thanks to an open-source code !*
* **Navigation**
  * Grade: *2/2*
  * Comments: *Inspired from this [code.](https://github.com/safak/next-blog/tree/completed)*
* **Login and profile page**
  * Grade: *4/4*
  * Comments: *Inspired from labs correction.*
* **Post creation and display**
  * Grade: *6/6*
  * Comments: *Using React-Quill for article creation, supabase database and [supabase buckets.](https://supabase.com/docs/reference/javascript/storage-from-upload) for storing images and data*
* **Comment creation and display**
  * Grade: *4/4*
  * Comments: *Inspired from this [code.](https://github.com/safak/next-blog/tree/completed)*
* **Post modification and removal**
  * Grade: *4/4*
  * Comments: *Inspired from course materials.*
* **Search**
  * Grade: *6/6*
  * Comments: *Supabase [full-text research](https://gist.github.com/maciekChmura/b42baa8562a801c0361d9103833fb10d) inspired from this [code.](https://github.com/HamedBahram/next-pagination/blob/main/app/movies/search.tsx)/ Using a function to perform research on [multiple columns.](https://supabase.com/docs/guides/database/full-text-search)*
* **Use an external API**
  * Grade: *2/2*
  * Comments: *Using React-Quill and Gravatar*
* **Resource access control**
  * Grade: *6/6*
  * Comments: *Using RLS (Row Level Securities), Server-Side data fetching with RLS and protected API ROUTES [Supabase Auth.](https://supabase.com/docs/guides/auth/auth-helpers/nextjs-pages?language=js)*
* **Account settings**
  * Grade: *4/4*
  * Comments: *Using a user table and trigger function that add a record in the table each time a user sign in for the first time.*
* **WYSIWYG integration**
  * Grade: *2/2*
  * Comments: *Using [React-Quill.](https://github.com/quilljs/quill/)*
* **Gravatar integration**
  * Grade: *2/2*
  * Comments: *Following this article [Gravatar integration.](https://blog.sachinchaurasiya.dev/how-to-use-gravatar-api-to-render-user-public-avatar)*
* **Light/dark mode**
  * Grade: *1.5/2*
  * Comments: *Using theme context components.*

### Bonus Tasks

* ***User dashboard***   
  * Grade: *1*
  * Comments: *The user can load an image and save it on its dashboard*

## Miscellaneous

### Course Feedback

*Your feedback about the course, what you liked, what you disliked, what you missed...*

### Project Reuse

- [x] We authorize the professors to use our project as an example for the next year students (facultative).
