exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      name: "Clean garage",
      description: "sweep the floor, move stuff out of the way, boom",
      completed: "false"
    }
  ]);
};
