// exports.seed = function(knex, Promise) {
//   return knex("actions").insert([
//     {
//       action_description: "sweep the floor",
//       notes: "use broom and dustpan to sweep",
//       action_completed: "false",
//       project_id: 1
//     }
//   ]);
// };

exports.seed = function(knex, Promise) {
  return knex("cohorts")
    .truncate() // Deletes ALL existing entries
    .then(function() {
      // Inserts new seed entries
      return knex("actions").insert([
        {
          action_description: "sweep the floor",
          notes: "use broom and dustpan to sweep",
          action_completed: "false",
          project_id: 1
        }
      ]);
    });
};
