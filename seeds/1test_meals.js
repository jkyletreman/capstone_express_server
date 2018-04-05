
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("meals").del()
    .then(function () {
      // Inserts seed entries
      return knex("meals").insert([
        { id: 1,
          name: "Buffalo Chicken",
          time: "30 minutes",
          tags: "Summer, Chicken",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "Simple buffalo chicken in a castiron skillet.",
          img: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i3Yp1mXpDIMA/v2/-1x-1.jpg"
        },
        { id: 2,
          name: "Jerk Chicken",
          time: "30 minutes",
          tags: "Summer, Chicken",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "Simple jerk chicken in the oven.",
          img: "https://cdn3.f-cdn.com/contestentries/1751/445921/29924-9381-13151323684e6353d06b7a7/rasta%20chicken%20by%20marattacks%20colored%20500_thumb900.jpg"
        },
        {
          id: 3,
          name: "Tofu StirFry",
          time: "1 hour",
          tags: "Summer, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://pinchofyum.com/wp-content/uploads/Honey-Ginger-Tofu-Veggie-Stir-Fry-53-Square.jpg"
        },
        {
          id: 4,
          name: "Speghetti and Meatballs",
          time: "2-3 hours",
          tags: "Fall",
          difficulty: "Medium",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/4/13/0/tm1d37_spaghetti_meatballs.jpg.rend.hgtvcom.616.462.suffix/1485880375188.jpeg"
        },
        {
          id: 5,
          name: "Fish Tacos",
          time: "45 minutes",
          tags: "Spring, Fish",
          difficulty: "Medium",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://www.aheadofthyme.com/wp-content/uploads/2016/08/easy-fish-tacos-with-lime-crema-6.jpg"
        },
        {
          id: 6,
          name: "Easy Brownies",
          time: "1 hour",
          tags: "Desert",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://www.countrysidecravings.com/wp-content/uploads/2016/09/Homemade-Chewy-Brownies-3.jpg"
        },
        {
          id: 7,
          name: "Cabbage and noodles",
          time: "1 hour",
          tags: "Winter, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://unsophisticook.com/wp-content/uploads/2017/10/Fried-Cabbage-and-Noodles.jpg"
        },
        {
          id: 8,
          name: "Rice and Beans",
          time: "1 hour",
          tags: "Summer, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "http://laurengreutman.com/wp-content/uploads/2016/06/Black-Beans-and-Rice-FB-1-1024x536.jpg"
        },
        {
          id: 9,
          name: "Kale Ceasar Salad",
          time: "20 minutes",
          tags: "Winter, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://www.seriouseats.com/recipes/images/2013/01/20130108-kale-caesar-salad-11.jpg"
        },
        {
          id: 10,
          name: "Chicken Paramsean",
          time: "2 hours",
          tags: "Fall, Chicken",
          difficulty: "Medium",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://prods3.imgix.net/images/articles/2016_03/Featured-Chicken-Parm-Cheese-Parmesan-Mozzarella-Dish-Recipe.jpg"
        },
        {
          id: 11,
          name: "Chicken Ceasar Wraps",
          time: "1 hour",
          tags: "Spring, Chicken",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "http://www.valleyfresh.com/img/recipes/updated/appetite_caesarWrap.jpg"
        },
        {
          id: 12,
          name: "Carrot and Ginger Soup",
          time: "1 hour",
          tags: "Winter, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://d3cizcpymoenau.cloudfront.net/images/20598/SFS_carrot_ginger_soup-10.jpg"
        },
        {
          id: 13,
          name: "Buffalo Wings",
          time: "2 hours",
          tags: "Summer, Chicken",
          difficulty: "Medium",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/the-best-buffalo-wing-sauce_43411.jpg"
        },
        {
          id: 14,
          name: "Sushi",
          time: "1.5 hours",
          tags: "Summer, Fish",
          difficulty: "Hard",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://img.grouponcdn.com/deal/hfefAup1zQWBE2K8sWURgS27xax/hf-846x508/v1/c700x420.jpg"
        },
        {
          id: 15,
          name: "Chicken Tikka Masala",
          time: "2 hours",
          tags: "Summer, Chicken",
          difficulty: "Hard",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://www.simplyrecipes.com/wp-content/uploads/2017/02/2017-02-27-ChickenTikkaMasala-16.jpg"
        },
        {
          id: 16,
          name: "Baked Potato Soup",
          time: "2 hours",
          tags: "Pork",
          difficulty: "Medium",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "http://4.bp.blogspot.com/-wYlz2t2PkZo/TsmQVMYDM6I/AAAAAAAAAb0/-Jp_oNkqRu4/s1600/baked+potato+soup.jpg"
        },
        {
          id: 17,
          name: "Twice Baked Potatoes",
          time: "2 hours",
          tags: "Winter, Vegetarian",
          difficulty: "Medium",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://leitesculinaria.com/wp-content/uploads/fly-images/79395/twice-baked-potatoes-cheddar-400x400-c.jpg"
        },
        {
          id: 18,
          name: "Turkey Meatballs and Mashed Potatoes with Mushroom Gravy",
          time: "3.5 hours",
          tags: "Winter, Beef",
          difficulty: "Hard",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "http://i.recipes-plus.com/styles/fp_social/public/recipe/2015/27/turkey-cranberry-rissoles-cheesy-mash.jpg"
        },
        {
          id: 19,
          name: "Eggs and Bacon",
          time: "30 minutes",
          tags: "Pork",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://uz71pyzpz0-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/sheet-pan-bacon-eggs-3a-700x601.jpg"
        },
        {
          id: 20,
          name: "Smoothie",
          time: "15 minutes",
          tags: "Spring, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "This is a summary",
          img: "https://www.justataste.com/wp-content/uploads/2014/07/secret-ingredient-smoothies-1.jpg"
        }
      ]);
    });
};
