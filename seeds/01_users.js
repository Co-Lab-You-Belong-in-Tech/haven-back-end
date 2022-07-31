/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 10000,
      username: "Jack",
      password: "123",
      email: "jack@gmail.com",
      pronouns: "they/them",
      bio: "artist",
    },
    {
      id: 10001,
      username: "John",
      password: "123",
      email: "john@gmail.com",
      pronouns: "he/him",
      bio: "musician",
    },
    {
      id: 10002,
      username: "Alice",
      password: "123",
      email: "alice@gmail.com",
      pronouns: "she/her",
      bio: "outdoor expert",
    },
  ]);
};
