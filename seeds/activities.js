/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('activities').del()
  await knex('activities').insert([
    {id: 10000, title: 'Bowling', content: "Hello everyone, I'm looking for a queer company to join me for bowling tonight.", budget:"$25 per ticket", spots_total: 6 },
    {id: 10001, title: 'Rock Climbing', content: "Hello everyone, I'm looking for a queer company to join me for rock climbing today.", budget:"$35 per ticket", spots_total: 3 },
    {id: 10002, title: 'Movies', content: "Hello everyone, I'm looking for a queer company to watch Avengers with me tomorrow.", budget:"$15 per ticket", spots_total: 3}
  ]);
};
