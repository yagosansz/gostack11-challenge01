const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

function validateId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid Repository ID.' });
  }

  return next();
}

app.use(express.json());
app.use(cors());

app.use('/repositories/:id', validateId);

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs, likes } = request.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex === -1) {
    return response.status(400).json({ error: 'Repository could not be found.' })
  }

  if (likes && likes !== repositories[repositoryIndex].likes) {
    return response.json(repositories[repositoryIndex]);
  }

  const updatedRepository = {
    id,
    title,
    url,
    techs,
  };

  console.log('repo', updatedRepository)
  repositories[repositoryIndex] = updatedRepository;

  return response.json(updatedRepository);

});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex === -1) {
    return response.status(400).json({ error: 'Repository could not be found. ' })
  }

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repository = repositories.find(repository => repository.id === id);

  if (!repository) {
    return response.status(400).json({ error: 'Repository could not be found.' })
  }

  repository.likes += 1;

  return response.json(repository);
});

module.exports = app;
