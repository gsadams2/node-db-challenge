exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .unique()
        .notNullable();
      tbl.text("description");
      tbl.boolean("completed").notNullable();
    })
    .createTable("actions", tbl => {
      tbl.increments();
      tbl.text("action_description").notNullable();
      tbl.text("notes");
      tbl.boolean("action_completed").notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects").dropTableIfExists("actions");
};
