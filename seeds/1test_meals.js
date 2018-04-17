
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
          summary: "Simple buffalo chicken sandwichs.",
          img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/7/0/SBS_Buffalo-Chicken-Sliders_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541350870.jpeg"
        },
        { id: 2,
          name: "Jerk Chicken",
          time: "30 minutes",
          tags: "Summer, Chicken",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "Simple jerk chicken in the oven.",
          img: "https://www.seriouseats.com/recipes/images/2013/07/20130715-jerk-chicken-final-food-lab-38.jpg"
        },
        {
          id: 3,
          name: "Tofu StirFry",
          time: "1 hour",
          tags: "Summer, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "A healthy stirfry with mixed vegtables and tofu.",
          img: "https://www.drweil.com/wp-content/uploads/2016/12/diet-nutrition_recipes_vegetable-and-tofu-stir-fry_2721x1806_000019113552-1024x768.jpg"
        },
        {
          id: 4,
          name: "Speghetti and Meatballs",
          time: "2-3 hours",
          tags: "Fall",
          difficulty: "Medium",
          instructions: "These are instructions.",
          summary: "The quintessential italian dish.",
          img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/4/13/0/tm1d37_spaghetti_meatballs.jpg.rend.hgtvcom.616.462.suffix/1485880375188.jpeg"
        },
        {
          id: 5,
          name: "Fish Tacos",
          time: "45 minutes",
          tags: "Spring, Fish",
          difficulty: "Medium",
          instructions: "These are instructions.",
          summary: "Baha style fish tacos.",
          img: "http://momsneedtoknow.com/wp-content/uploads/2016/03/Blackened-Fish-Tacos-with-Cilantro-Slaw-myf.jpg"
        },
        {
          id: 6,
          name: "Easy Brownies",
          time: "1 hour",
          tags: "Desert",
          difficulty: "Easy",
          instructions: "These are instructions.",
          summary: "Quick and easy sugar rush.",
          img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/10/25/1/CC_Alton-Brown-Cocoa-Brownies_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371600408087.jpeg"
        },
        {
          id: 7,
          name: "Cabbage and noodles",
          time: "1 hour",
          tags: "Winter, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions.",
          summary: "If you're in a babushka type of mood.",
          img: "https://1.bp.blogspot.com/-yQJmt1CD3w0/WfCvlWbR1hI/AAAAAAAABag/S52oXscHiws9zcuQC-ZlZkEzkpCzuFkkQCLcBGAs/s1600/CabbageNoodles08.JPG"
        },
        {
          id: 8,
          name: "Rice and Beans",
          time: "1 hour",
          tags: "Summer, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions.",
          summary: "Classic rice and beans, nuff said.",
          img: "https://www.cleaneatingmag.com/.image/t_share/MTQ0NzQxNjg1MDI1OTczMjk0/cuban-style-rice-and-beans-with-turkey.jpg"
        },
        {
          id: 9,
          name: "Kale Ceasar Salad",
          time: "20 minutes",
          tags: "Winter, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions.",
          summary: "Probably the most hipster thing on here.",
          img: "https://www.seriouseats.com/recipes/images/2013/01/20130108-kale-caesar-salad-11.jpg"
        },
        {
          id: 10,
          name: "Chicken Paramsean",
          time: "2 hours",
          tags: "Fall, Chicken",
          difficulty: "Medium",
          instructions: "These are instructions.",
          summary: "Who said sphegetti was quintessential.",
          img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/12/14/1/EI1F02_Chicken-Parmesan_s4x3.jpg.rend.hgtvcom.616.462.suffix/1390453752762.jpeg"
        },
        {
          id: 11,
          name: "Chicken Ceasar Wraps",
          time: "1 hour",
          tags: "Spring, Chicken",
          difficulty: "Easy",
          instructions: "These are instructions.",
          summary: "Because sometimes basic is best.",
          img: "https://www.culinaryhill.com/wp-content/uploads/2016/04/Grilled-Chicken-Caesar-Wrap-Culinary-Hill-11.jpg"
        },
        {
          id: 12,
          name: "Carrot and Ginger Soup",
          time: "1 hour",
          tags: "Winter, Vegetarian",
          difficulty: "Easy",
          instructions: "We like buffalo sauce ok?",
          summary: "Simple, hot, awesome.",
          img: "https://d3cizcpymoenau.cloudfront.net/images/20598/SFS_carrot_ginger_soup-10.jpg"
        },
        {
          id: 13,
          name: "Buffalo Wings",
          time: "2 hours",
          tags: "Summer, Chicken",
          difficulty: "Medium",
          instructions: "We like buffalo sauce ok?",
          summary: "We like buffalo sauce ok?",
          img: "https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/the-best-buffalo-wing-sauce_43411.jpg"
        },
        {
          id: 14,
          name: "Sushi",
          time: "1.5 hours",
          tags: "Summer, Fish",
          difficulty: "Hard",
          instructions: "These are instructions",
          summary: "Cause its really this easy!",
          img: "https://img.grouponcdn.com/deal/fmPws6o2uTweCftZu7yj/p4-2048x1229/v1/c700x420.jpg"
        },
        {
          id: 15,
          name: "Chicken Tikka Masala",
          time: "2 hours",
          tags: "Summer, Chicken",
          difficulty: "Hard",
          instructions: "These are instructions",
          summary: "The General Tso's of Indian food.",
          img: "https://www.onceuponachef.com/images/2017/06/chicken-tikka-masala-1.jpg"
        },
        {
          id: 16,
          name: "Baked Potato Soup",
          time: "2 hours",
          tags: "Pork",
          difficulty: "Medium",
          instructions: "These are instructions",
          summary: "Yes, it has bacon.",
          img: "http://4.bp.blogspot.com/-wYlz2t2PkZo/TsmQVMYDM6I/AAAAAAAAAb0/-Jp_oNkqRu4/s1600/baked+potato+soup.jpg"
        },
        {
          id: 17,
          name: "Twice Baked Potatoes",
          time: "2 hours",
          tags: "Winter, Vegetarian",
          difficulty: "Medium",
          instructions: "These are instructions",
          summary: "Potatoes, cooked twice served once.",
          img: "https://leitesculinaria.com/wp-content/uploads/fly-images/79395/twice-baked-potatoes-cheddar-400x400-c.jpg"
        },
        {
          id: 18,
          name: "Turkey Meatballs and Mashed Potatoes with Mushroom Gravy",
          time: "3.5 hours",
          tags: "Winter, Beef",
          difficulty: "Hard",
          instructions: "These are instructions",
          summary: "Complex but so worth it.",
          img: "https://www.smalltownwoman.com/wp-content/uploads/2016/10/Turkey-Meatballs-in-Easy-Cream-Sauce-10.jpg"
        },
        {
          id: 19,
          name: "Eggs and Bacon",
          time: "30 minutes",
          tags: "Pork",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "The best breakfast... if you eat meat.",
          img: "https://uz71pyzpz0-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/sheet-pan-bacon-eggs-3a-700x601.jpg"
        },
        {
          id: 20,
          name: "Smoothie",
          time: "15 minutes",
          tags: "Spring, Vegetarian",
          difficulty: "Easy",
          instructions: "These are instructions",
          summary: "When fruit just wont cut it.",
          img: "http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/05/main/pbj-smoothie-1707p35.jpg?itok=sGsix9g1"
        },
        {
          id: 21,
          name: "Whole Roasted Chicken",
          time: "1 hour",
          tags: "Chicken",
          difficulty: "Easy",
          instructions:"These are instructions",
          summary: "Sometimes you need the whole chicken.",
          img: "https://images-gmi-pmc.edge-generalmills.com/1549b0b2-dda3-4e42-9f3b-6a65b1ae7985.jpg"
        }
      ]);
    });
};
