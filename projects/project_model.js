const db = require("../data/db-config");

module.exports = {
  find,
  findProjectAction,
  addProject,
  addAction,
  findById
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        return project;
      } else {
        return null;
      }
    });
}

function findProjectAction(id) {
  return db("projects as p")
    .innerJoin("actions as a", "p.id", "a.project_id")
    .where({ project_id: id })
    .select(
      "p.id",
      "p.name",
      "p.description",
      "p.completed",
      "a.id",
      "a.action_description",
      "a.notes",
      "a.action_completed"
    );
}

function addProject(project) {
  return db("projects").insert(project);
}

function addAction(action, project_id) {
  return db("actions").insert({ ...action, project_id });
}
