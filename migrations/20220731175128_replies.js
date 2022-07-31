/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("replies", function (table) {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users");
    table.integer("activity_id").references("id").inTable("activities")
    table.string("content", 255).notNullable();
    table.integer("likes");
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
