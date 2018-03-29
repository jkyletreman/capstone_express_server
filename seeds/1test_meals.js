
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("meals").del()
    .then(function () {
      // Inserts seed entries
      return knex("meals").insert([
        {id: 1, name: "Buffalo Chicken", time: "30 minutes", tags: "Summer", difficulty: "Easy", instructions: "Melt the butter. Once the butter is melted mix in the sauce. Preheat the oven to 400. Place chicken in a cast iron skillet and cover in sauce. Cook 20 minutes.", summary: 'Simple buffalo chicken in a castiron skillet.', img: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i3Yp1mXpDIMA/v2/-1x-1.jpg"}
      ]);
    });
};
