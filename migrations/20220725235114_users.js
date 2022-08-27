/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("username", 25).notNullable();
    table.string("first_name", 50);
    table.string("last_name", 50);
    table.string("location");
    table.string("avatar_url");
    table.string("password").notNullable();
    table.string("email", 40).notNullable();
    table.string("pronouns");
    table.string("birthday", 60);
    table.boolean("is_onboarding").defaultTo(true);
    table.boolean("show_location").defaultTo(false);
    table.boolean("show_name").defaultTo(true);

  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
