<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Challenge 01: Node.js Fundamentals
</h3>

## :rocket: About the Challenge

Create a Node.js application to store repositories from a portfolio. The application will allow creating, listing, updating, and deleting repositories, as well as the implementation of the like functionality.

### Application Routes

- **`POST /repositories`**: The route must get `title`, `url`, and `techs` in the request body, where the `url` represents the link to the GitHub repository. When creating a new repository, it should be stored in an object with the following structure: `{ id: "uuid", title: 'Node.js Project', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }`. Make sure the `id` is an UUID, and always initialize likes with 0.

- **`GET /repositories`**: The route to list all the repositories;

- **`PUT /repositories/:id`**: The route should only update the `title`, `url`, and `techs` from a repository that has an `id` that matches the `id` present in the Route Parameters;

- **`DELETE /repositories/:id`**: The route should delete the repository that has an `id` that matches the `id` present in the Route Parameters;

- **`POST /repositories/:id/like`**: The route should increase the number of likes of the repository that matches the `id` in the Route Parameters. Whenever this route is called, the number of likes should be increased by 1.

### Tests Breakdown

- **`should be able to create a new repository`**: For this test to pass, the aplication should allow the creation of a repository and return the repository created as json.

- **`should be able to list the repositories`**: For this test to pass, the application should return an array with all the repositories that have been created.

- **`should be able to update repository`**: For this test to pass, the application should allow only the `url`, `title`, and `techs` keys to be updated.

- **`should not be able to update a repository that does not exist`**: For this test to pass, the application should validate the repository's `id`. If a repository is not found, return an error message with the status code of `400`.

- **`should not be able to update repository likes manually`**: For this test to pass, the application shouldn't allow the route to update the repository's likes directly, keeping the same number of likes the repository had before being updated. This is necessary because the only route that should change - increase - the number of likes should be the route uniquely responsible for that.

- **`should be able to delete the repository`**: For this test to pass, the application should allow the route to delete a project, and by doing so return an empty response with the status code of `204`.

- **`should not be able to delete a repository that does not exist`**: For this test to pass, the application should validate the repository's `id`. If a repository is not found, return an error message with the status code of `400`.

- **`should be able to give a like to the repository`**: For this test to pass, the application should allow the repository that matches the `id` in the Route Parameters to receive likes. The number of likes should be incremented by 1 and return the repository with the updated number of likes as json.

- **`should not be able to like a repository that does not exist`**: For this test to pass, the application should validate the repository's `id`. If a repository is not found, return an error message with the status code of `400`.

### Testing the Application
1. Run `yarn test --watchAll` to run test suites

## Getting started

1. Clone this repo using `git clone https://github.com/yagosansz/gostack11-challenge01.git`
2. Move yourself to the appropriate directory: `cd gostack11-challenge01`<br />
3. Run `yarn` to install dependencies<br />

### Getting started with the backend server

1. Run `yarn dev` to start the server
2. Test the routes by either using [Insomnia](https://insomnia.rest/) or [Postman](https://www.getpostman.com/)

  ---

Made with :heart: by Yago!