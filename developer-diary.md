_25 Oct 2024_ I spent a lot of time trying to set up a component test for my
Item component. I wanted to test that, with my useDisplaySize custom hook, all
the elements were visible on the page. However, because I use a parametric
endpoint that is accessed with React Router within the data fetching logic of
this component, I couldn't render the component in isolation using Cypress.
