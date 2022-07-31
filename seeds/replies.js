/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("replies").del();
  await knex("replies").insert([
    {
      id: 10000,
      user_id: 10002,
      activity_id: 10000,
      content: "Bowling sounds amazing! I'm down",
    },
    {
      id: 10001,
      user_id: 10000,
      activity_id: 10002,
      content: "I can do movies tomorrow :)",
    },
    {
      id: 10002,
      user_id: 10002,
      activity_id: 10000,
      content: "Bowling sounds amazing! I'm down",
    },
  ]);
};
