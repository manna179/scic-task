# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Tasks
* Here are the tasks available:
1. Login system with Firebase Authentication
2. If user logged in profile picture will be displayed on navbar.
3. If user not logged in profile picture will be replaced with register/login button.
4. google login and google sign out feature has been added.
5. Sign up system with email and password
6. navbar links to Home, Add Task.
7. when user add tasks, task will be added to mongodb server database.
8. user can see all tasks from mongodb database in home route.
9. if user logged in, user can delete his tasks.
10. Add responsive design using styled-components.
11. user can update data in home route.
12. onclick photo, user can see user email and logout button.

# steps 

* Install dependencies: `npm install`
* Start the development server: `npm run dev`
* Build for production: `npm run build`
* Deploy on Vercel: `vercel`
* setup firebase config in `.env.local` file
* create mongodb cluster and get your mongodb connection string.
* replace mongodb connection string in `index.js` file.
