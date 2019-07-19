exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    {
      action_description: "sweep the floor",
      notes: "use broom and dustpan to sweep",
      action_completed: "false",
      project_id: 1
    }
  ]);
};
