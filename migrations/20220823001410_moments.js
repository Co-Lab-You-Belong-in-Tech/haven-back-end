/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("moments", function (table) {
        table.increments("id").primary();
        table.integer("user_id").references("id").inTable("users");
        table.string("question", 50).notNullable();
        table.string("answer", 50).notNullable();
        table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("moments");
};
