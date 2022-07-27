/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("activities", function (table) {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users");
    table.string("content", 255).notNullable();
    table.string("budget", 30);
    table.string("people_amount", 30);
    table.integer("likes");
    table.integer("replies");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("activities");
};
