/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("interests").del();
  await knex("interests").insert([
    { id: 10000, user_id: 10000, interest: "Bowling" },
    { id: 10001, user_id: 10001, interest: "Music" },
    { id: 10002, user_id: 10002, interest: "Rock Climbing" },
  ]);
};
