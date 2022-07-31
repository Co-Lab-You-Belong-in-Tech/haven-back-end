/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("replies", function (table) {
    // table.increments("id").primary();
    // table.integer("user_id").references("id").inTable("users");
    // table.string("title", 50);
    // table.string("content", 255).notNullable();
    // table.string("budget", 30);
    // table.integer("spots_total");
    // table.integer("spots_open");
    // table.integer("likes");
    // table.integer("replies");
    // table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("activities");
};
