# search-app

Search App with Google API built with ReactJS, Redux, Redux Toolkit, React Router DOM, Docker, CircleCI, and deployed on Netlify

### build & Deploy with

- React
- React Router Dom
- React Redux & toolkit
- Docker
- CircleCi
- Netlify

[View Demo](https://shatot-search.netlify.app/)

## Description

Our project is a search application that uses the power of Google API to provide users with relevant search results. The app is built using ReactJS, Redux, Redux Toolkit, and React Router DOM, which provide a powerful and efficient framework for building modern web applications. We also use Docker to containerize our app, CircleCI for continuous integration and deployment, and deploy the app on Netlify for easy access.

The app allows users to enter keywords or phrases into the search bar, and then retrieves results from the Google Search API. The results are displayed in a clear and organized manner, making it easy for users to find the information they need.

One of the key benefits of using Redux Toolkit is that it provides a more streamlined and efficient way to write Redux code. It also comes with built-in middleware, such as `createAsyncThunk`, which makes it easy to handle asynchronous API requests.

We also use React Router DOM to handle routing and navigation within the app. This ensures that the app remains responsive and efficient, even as the user navigates between pages.

To ensure that our app is easily deployable and scalable, we use Docker to containerize our app. This allows us to package our app and its dependencies into a single container, which can be easily deployed to any environment.

We also use CircleCI for continuous integration and deployment. This ensures that our app is automatically tested and deployed whenever changes are made to the codebase, making it easy to maintain and update.

Finally, we deploy our app on Netlify for easy access. Netlify provides a simple and efficient way to deploy and host web applications, making it easy for users to access our app from anywhere.

## Build and Start Project in Local Machine

Clone the project

```bash
  git clone https://github.com/ahmedsamyop/search-app.git
```

To Install all dependencies, run the following command

```bash
  npm install
```

To build, run the following command

```bash
  npm run build
```

To Test, run the following command

```bash
  npm run test
```

To Start developing , run the following command

```bash
  npm start
```

## Build and Start Project in Docker

Clone the project

```bash
  git clone https://github.com/ahmedsamyop/search-app.git
```

To Start developing , run the following command

```bash
  docker compose up -d --build
```

To Stop project , run the following command

```bash
  docker compose down
```

## Environment Variables

- Create a file `.env` to add environment variables
- To run this project, you will need to add the following environment variables to your .env file

```bash
REACT_APP_API_KEY="Your Api"
REACT_APP_CX="Your Api"
```

## Get Your API

To get the API from Google API, you need to create a project in the Google Cloud Console and enable the Google Search API.

## Deployment

- CI / CD CircleCi Deploying to Netlify [@blog](https://circleci.com/blog/react-netlify-deploy/)

- To deploy this project run

```bash
  npm run deploy
```
