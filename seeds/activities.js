/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('activities').del()
  await knex('activities').insert([
    {id: 1, title: 'Bowling', content: "Hello everyone, I'm looking for a queer company to join me for bowling tonight.", budget:"$25 per ticket", slots_total: 6 },
    {id: 2, title: 'Rock Climbing', content: "Hello everyone, I'm looking for a queer company to join me for rock climbing today.", budget:"$35 per ticket", slots_total: 3 },
    {id: 3, title: 'Movies', content: "Hello everyone, I'm looking for a queer company to watch Avengers with me tomorrow.", budget:"$15 per ticket", slots_total: 3}
  ]);
};
