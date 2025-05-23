_25 Oct 2024_ I spent a lot of time trying to set up a component test for my
Item component. I wanted to test that, with my useDisplaySize custom hook, all
the elements were visible on the page. However, because I use a parametric
endpoint that is accessed with React Router within the data fetching logic of
this component, I couldn't render the component in isolation using Cypress.

_22 Jan 2025_ Over several weeks I have been migrating the app to Next.js, so I
can 1. keep the server and app in one repo and 2. make use of the security/auth
features that Next.js provides. First, I followed the instructions
[here](https://nextjs.org/docs/app/building-your-application/upgrading/from-vite)
to migrate from Vite. I then encountered some problems getting the simple user
login I had set up (which was more of a placeholder until I build the server) to
work. Originally, I was stored auth token and user Id in React context with
useReducer to implement auth actions. I have now migrated this fully to have
user data stored in cookies (using Next.js' built-in cookies API) and
implemented middleware to handle redirects based on auth status. My next steps
will be to fully implement user authorisation with `next-auth`.

During the process, I have also started migrating the app to Typescript. The
pages are all `.tsx` file, and I have migrated one of my existing components to
`.tsx` also. I will continue to do this incrementally.

_08 Feb 2025_ I added a django server and [hosted it on Render](https://trove-marketplace.onrender.com). I found the Render docs [here](https://render.com/docs/deploy-django) very helpful. So far it has only one endpoint at /api/healthcheck. I plan on implementing use rauthentication first.

_27th Feb 2025_ I have implemented user authentication with OAuth on the server. I heavily relied on [this tutorial](https://heymike.dev/articles/using-next-auth-with-django), which I highly reccommend. 

_9th May 2025_ I struggled to connect the django auth to the front-end. In the meantime I have implemented Clerk so I can move onto other parts of the project.