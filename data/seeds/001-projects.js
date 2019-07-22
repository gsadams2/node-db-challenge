exports.seed = function(knex, Promise) {
  return knex("cohorts")
    .truncate() // Deletes ALL existing entries
    .then(function() {
      // Inserts new seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Clean garage",
          description: "sweep the floor, move stuff out of the way, boom",
          completed: "false"
        },
        {
          id: 2,
          name: "test",
          description: "try to add more than one seed field",
          completed: "false"
        }
      ]);
    });
};
