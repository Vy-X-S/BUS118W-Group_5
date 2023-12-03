const dataSet = [
  {
    product_id: 1,
    product_name: "Premium Angus Beef Steak",
    inventory_count: 66,
    description:
      "Indulge in the rich, succulent flavors of our Premium Angus Beef Steak. Sourced from the finest Angus cattle, known for their superior marbling, each steak is hand-selected and aged to perfection. This results in a remarkably tender and juicy steak that promises a gourmet dining experience with every bite. Perfect for grilling or broiling, our Angus Beef Steak will transform your home cooking into a five-star culinary delight.🔥🍽️",
    price: 12.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 2,
    product_name: "Lean Ground Beef",
    inventory_count: 39,
    description:
      "Our Lean Ground Beef is a versatile kitchen staple, ground from select cuts of beef to ensure high quality and rich flavor while maintaining a leaner profile for healthier meal options. With minimal fat and no added fillers, it's the perfect choice for family favorites from hearty lasagna to savory tacos. Its exceptional quality guarantees delicious taste and texture that will elevate your everyday recipes. 🌮🍝",
    price: 8.49,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 3,
    product_name: "Fresh Organic Spinach",
    inventory_count: 25,
    description:
      "Discover the crisp, vibrant taste of our Fresh Organic Spinach. Grown with care, this nutrient-packed leafy green is perfect for salads, smoothies, or sautéed as a healthy side dish. Packed with essential vitamins and minerals, our organic spinach is a delicious way to add a burst of freshness to your meals. 🥗🌿",
    price: 4.99,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 4,
    product_name: "Golden Wheat Bread",
    inventory_count: 30,
    description:
      "Savor the wholesome goodness of our Golden Wheat Bread. Baked to perfection with the finest ingredients, this bread boasts a golden-brown crust and a soft, airy interior. Versatile and delicious, it's the ideal choice for sandwiches, toast, or simply enjoyed on its own. Elevate your daily bread experience with our Golden Wheat Bread. 🍞😋",
    price: 3.49,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 5,
    product_name: "Creamy Vanilla Ice Cream",
    inventory_count: 50,
    description:
      "Indulge your sweet tooth with our Creamy Vanilla Ice Cream. Made with the finest vanilla beans and premium ingredients, this velvety treat is a true delight for your taste buds. Whether enjoyed in a cone, a bowl, or as part of a decadent dessert, our vanilla ice cream is a classic favorite that never goes out of style. 🍨🍦",
    price: 6.99,
    category_id: 4,
    subcategory_id: 1,
  },
  {
    product_id: 6,
    product_name: "Tender Pork Chops",
    inventory_count: 42,
    description:
      "Savor the juiciness and flavor of our Tender Pork Chops. Carefully selected and expertly trimmed, these chops are perfect for grilling or baking. With a delectable combination of tenderness and taste, our pork chops will elevate your culinary creations. 🍖🔪",
    price: 10.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 7,
    product_name: "Organic Cherry Tomatoes",
    inventory_count: 28,
    description:
      "Add a burst of color and freshness to your dishes with our Organic Cherry Tomatoes. Grown organically for optimal taste, these tomatoes are perfect for salads, pasta, or as a tasty snack. Packed with natural sweetness, they're a versatile ingredient for a variety of culinary delights. 🍅🌿",
    price: 5.49,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 8,
    product_name: "Artisan Sourdough Loaf",
    inventory_count: 35,
    description:
      "Experience the artisanal delight of our Sourdough Loaf. Baked with a traditional sourdough starter, this bread features a chewy crust and a tangy flavor profile. Perfect for sandwiches or enjoyed with your favorite spreads, our sourdough loaf is a testament to the art of breadmaking. 🍞🥖",
    price: 4.99,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 9,
    product_name: "Frozen Vegetable Medley",
    inventory_count: 20,
    description:
      "Conveniently enjoy a variety of vegetables with our Frozen Vegetable Medley. Carefully selected and frozen at the peak of freshness, this medley is perfect for quick and nutritious meals. Whether used in stir-fries, casseroles, or as a side dish, our frozen vegetable medley is a time-saving kitchen essential. 🥦🌽",
    price: 7.99,
    category_id: 4,
    subcategory_id: 1,
  },
  {
    product_id: 10,
    product_name: "Grass-Fed Lamb Chops",
    inventory_count: 38,
    description:
      "Indulge in the rich flavor of our Grass-Fed Lamb Chops. Sourced from pasture-raised lambs, these chops are tender and succulent. Perfect for grilling or roasting, our lamb chops promise a gourmet dining experience with every bite. Elevate your culinary skills with the exquisite taste of grass-fed lamb. 🍖🌿",
    price: 14.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 11,
    product_name: "Organic Baby Spinach",
    inventory_count: 30,
    description:
      "Nourish your body with the goodness of Organic Baby Spinach. Delicate and tender, these baby spinach leaves are perfect for salads, smoothies, or sautés. Packed with vitamins and minerals, our organic baby spinach adds a nutritional boost to your meals. 🥗🌱",
    price: 6.49,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 12,
    product_name: "Whole Grain Multigrain Bread",
    inventory_count: 25,
    description:
      "Embrace the wholesome goodness of our Whole Grain Multigrain Bread. Made with a blend of nutritious grains and seeds, this bread is both hearty and flavorful. Enjoy the benefits of whole grains in every bite, whether toasted for breakfast or used as the foundation for a hearty sandwich. 🍞🌾",
    price: 5.99,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 13,
    product_name: "Frozen Salmon Fillets",
    inventory_count: 18,
    description:
      "Experience the convenience of our Frozen Salmon Fillets. Individually vacuum-sealed for freshness, these salmon fillets are perfect for quick and healthy meals. Whether grilled, baked, or pan-seared, our frozen salmon fillets provide a delicious source of omega-3 fatty acids. 🐟❄️",
    price: 11.99,
    category_id: 4,
    subcategory_id: 1,
  },
  {
    product_id: 14,
    product_name: "Angus Beef Burger Patties",
    inventory_count: 32,
    description:
      "Craft the perfect burger with our Angus Beef Burger Patties. Made from premium Angus beef, these patties are expertly seasoned for a mouthwatering flavor. Whether grilled or cooked indoors, our Angus beef burger patties promise a gourmet burger experience at home. 🍔🥩",
    price: 9.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 15,
    product_name: "Sweet Corn on the Cob",
    inventory_count: 23,
    description:
      "Enjoy the sweetness of summer with our Sweet Corn on the Cob. Harvested at the peak of ripeness, these corn cobs are perfect for grilling or boiling. Whether as a side dish or the star of a barbecue, our sweet corn on the cob adds a burst of flavor to your table. 🌽🌽",
    price: 3.99,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 16,
    product_name: "Herb-Infused Chicken Breast",
    inventory_count: 28,
    description:
      "Elevate your chicken dishes with our Herb-Infused Chicken Breast. Marinated with a blend of aromatic herbs and spices, these boneless, skinless chicken breasts are perfect for grilling, baking, or sautéing. Experience a burst of flavor in every bite. 🍗🌿",
    price: 7.49,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 17,
    product_name: "Organic Kale",
    inventory_count: 20,
    description:
      "Fuel your body with the nutrient-packed goodness of Organic Kale. Packed with vitamins and antioxidants, this leafy green is versatile and can be used in salads, smoothies, or as a tasty side dish. Embrace a healthy lifestyle with our organic kale. 🥗🌿",
    price: 4.99,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 18,
    product_name: "Ciabatta Rolls",
    inventory_count: 35,
    description:
      "Savor the authentic taste of Italy with our Ciabatta Rolls. Light and airy with a golden-brown crust, these rolls are the perfect accompaniment to your meals. Whether used for sandwiches or served with soups and stews, our ciabatta rolls bring a touch of Mediterranean delight to your table. 🥖😋",
    price: 3.99,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 19,
    product_name: "Frozen Vegetable Spring Rolls",
    inventory_count: 15,
    description:
      "Experience the fusion of flavors with our Frozen Vegetable Spring Rolls. Filled with a medley of crisp vegetables, these spring rolls are quick and easy to prepare. Perfect as a snack or appetizer, our frozen vegetable spring rolls are a crowd-pleaser for any occasion. 🥢❄️",
    price: 6.99,
    category_id: 4,
    subcategory_id: 1,
  },
  {
    product_id: 20,
    product_name: "BBQ Pulled Pork",
    inventory_count: 25,
    description:
      "Satisfy your cravings with our BBQ Pulled Pork. Slow-cooked to perfection and infused with smoky barbecue flavor, this pulled pork is ready to heat and enjoy. Whether piled high on a bun or incorporated into your favorite dishes, our BBQ pulled pork brings the taste of Southern barbecue to your home. 🍖🔥",
    price: 12.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 21,
    product_name: "Organic Red Bell Peppers",
    inventory_count: 18,
    description:
      "Add a pop of color and sweetness to your dishes with our Organic Red Bell Peppers. Grown organically for superior taste, these red bell peppers are perfect for salads, stir-fries, or as a vibrant topping. Elevate your culinary creations with the freshness of our organic red bell peppers. 🌶️🌿",
    price: 5.49,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 22,
    product_name: "Cranberry Walnut Artisan Bread",
    inventory_count: 30,
    description:
      "Experience the perfect blend of sweet and savory with our Cranberry Walnut Artisan Bread. Packed with plump cranberries and crunchy walnuts, this bread is a delightful addition to your table. Toast it for breakfast or use it to create unique sandwiches with a touch of gourmet flair. 🍞🌰",
    price: 6.99,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 23,
    product_name: "Frozen Shrimp Dumplings",
    inventory_count: 22,
    description:
      "Enjoy the authentic taste of Asia with our Frozen Shrimp Dumplings. Filled with succulent shrimp and traditional seasonings, these dumplings are perfect for steaming or pan-frying. Serve them as an appetizer or as part of a delicious dim sum feast. 🥢❄️",
    price: 9.99,
    category_id: 4,
    subcategory_id: 1,
  },
  {
    product_id: 24,
    product_name: "Grass-Fed Beef Sirloin Steak",
    inventory_count: 30,
    description:
      "Savor the premium quality of our Grass-Fed Beef Sirloin Steak. Known for its exceptional tenderness and rich flavor, this sirloin steak is perfect for grilling or pan-searing. Elevate your steak nights with the superior taste of grass-fed beef. 🥩🔪",
    price: 15.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 25,
    product_name: "Organic Broccoli Florets",
    inventory_count: 18,
    description:
      "Add a dose of green goodness to your meals with our Organic Broccoli Florets. Packed with nutrients and antioxidants, these broccoli florets are perfect for stir-fries, casseroles, or as a nutritious side dish. Embrace the health benefits of organic broccoli in every bite. 🥦🌿",
    price: 4.99,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 26,
    product_name: "Chipotle Marinated Chicken Thighs",
    inventory_count: 24,
    description:
      "Ignite your taste buds with our Chipotle Marinated Chicken Thighs. Expertly marinated for a perfect blend of smoky and spicy flavors, these bone-in chicken thighs are ideal for grilling or baking. Enjoy a mouthwatering and aromatic culinary experience with each bite. 🍗🌶️",
    price: 9.49,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 27,
    product_name: "Organic Mixed Greens",
    inventory_count: 20,
    description:
      "Create vibrant salads with our Organic Mixed Greens. A delightful blend of tender lettuces and leafy greens, this mix is a perfect base for your salads or sandwiches. Packed with freshness and nutrients, our organic mixed greens elevate the health quotient of your meals. 🥗🌿",
    price: 5.99,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 28,
    product_name: "Rustic Whole Wheat Baguette",
    inventory_count: 28,
    description:
      "Experience the hearty goodness of our Rustic Whole Wheat Baguette. Baked with whole wheat flour for a robust flavor, this baguette features a crisp crust and a chewy interior. Perfect for sandwiches, bruschetta, or dipping in olive oil. 🥖😋",
    price: 4.49,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 29,
    product_name: "Frozen Chicken Potstickers",
    inventory_count: 16,
    description:
      "Enjoy the savory goodness of our Frozen Chicken Potstickers. Filled with a tasty blend of chicken and vegetables, these potstickers are perfect for pan-frying or steaming. Serve them as appetizers or as part of a delicious Asian-inspired meal. 🥢❄️",
    price: 7.99,
    category_id: 4,
    subcategory_id: 1,
  },
  {
    product_id: 30,
    product_name: "Prime Ribeye Steak",
    inventory_count: 18,
    description:
      "Indulge in the luxurious taste of our Prime Ribeye Steak. Sourced from prime-grade beef, this ribeye steak is well-marbled and exceptionally tender. Perfect for a special occasion or a gourmet dinner at home, our prime ribeye steak guarantees a memorable culinary experience. 🥩🔪",
    price: 19.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 31,
    product_name: "Organic Rainbow Carrots",
    inventory_count: 22,
    description:
      "Add a burst of color to your dishes with our Organic Rainbow Carrots. Grown organically for superior taste, these carrots come in a variety of vibrant hues. Roast, sauté, or enjoy them raw for a visually stunning and delicious addition to your meals. 🥕🌈",
    price: 6.49,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 32,
    product_name: "Garlic Parmesan Focaccia",
    inventory_count: 26,
    description:
      "Delight your senses with our Garlic Parmesan Focaccia. Baked to perfection with aromatic garlic and savory Parmesan, this focaccia is a flavorful accompaniment to your meals. Enjoy it as a side or use it as the base for gourmet sandwiches. 🍞🧀",
    price: 5.99,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 33,
    product_name: "Frozen Vegetable Pizza",
    inventory_count: 15,
    description:
      "Experience the convenience of our Frozen Vegetable Pizza. Topped with a medley of colorful vegetables and gooey cheese, this pizza is perfect for a quick and delicious meal. Bake it to perfection for a satisfying and flavorful pizza night at home. 🍕❄️",
    price: 8.99,
    category_id: 4,
    subcategory_id: 1,
  },
  {
    product_id: 34,
    product_name: "Bacon-Wrapped Filet Mignon",
    inventory_count: 20,
    description:
      "Treat yourself to the ultimate indulgence with our Bacon-Wrapped Filet Mignon. Each filet is carefully wrapped in smoky bacon for a decadent flavor experience. Perfect for grilling or pan-searing, our bacon-wrapped filet mignon is a luxurious addition to your culinary repertoire. 🥓🥩",
    price: 24.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 35,
    product_name: "Organic Avocados",
    inventory_count: 18,
    description:
      "Enjoy the creamy goodness of our Organic Avocados. Grown organically for optimal flavor, these avocados are perfect for guacamole, salads, or as a healthy topping for toast. Embrace the richness of organic avocados in your favorite dishes. 🥑🌿",
    price: 7.99,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 36,
    product_name: "Sun-Dried Tomato Bagels",
    inventory_count: 30,
    description:
      "Start your day with the bold flavors of our Sun-Dried Tomato Bagels. Baked to perfection with sun-dried tomatoes for a burst of sweetness and tanginess, these bagels are perfect on their own or as the base for a savory breakfast sandwich. 🍅🥯",
    price: 3.99,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 37,
    product_name: "Frozen Chicken Tenders",
    inventory_count: 24,
    description:
      "Satisfy your craving for crispy chicken with our Frozen Chicken Tenders. Breaded and seasoned to perfection, these tenders are quick and easy to prepare. Whether baked or fried, our frozen chicken tenders are a family-friendly favorite. 🍗❄️",
    price: 6.49,
    category_id: 4,
    subcategory_id: 1,
  },
  {
    product_id: 38,
    product_name: "Tuscan Herb Marinated Pork Loin",
    inventory_count: 18,
    description:
      "Immerse yourself in the flavors of Tuscany with our Tuscan Herb Marinated Pork Loin. Infused with a blend of Mediterranean herbs, this pork loin is perfect for roasting or grilling. Elevate your dinner table with the exquisite taste of Tuscan-inspired cuisine. 🍖🌿",
    price: 11.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 39,
    product_name: "Organic Baby Arugula",
    inventory_count: 22,
    description:
      "Add a peppery kick to your salads with our Organic Baby Arugula. Grown organically for superior taste and freshness, this baby arugula is perfect for adding a flavorful twist to your salads, sandwiches, or as a vibrant side dish. 🥗🌿",
    price: 5.49,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 40,
    product_name: "Rye Sourdough Bread",
    inventory_count: 28,
    description:
      "Experience the robust flavor of our Rye Sourdough Bread. Made with a traditional sourdough starter and hearty rye flour, this bread offers a rich and tangy taste. Perfect for sandwiches or enjoyed with your favorite spreads, our rye sourdough bread is a timeless classic. 🍞🌾",
    price: 4.99,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 41,
    product_name: "Honey Glazed Salmon Fillets",
    inventory_count: 20,
    description:
      "Delight your palate with the sweetness of our Honey Glazed Salmon Fillets. Each fillet is expertly glazed with honey for a perfect balance of sweet and savory flavors. Quick to prepare and delicious to savor, these salmon fillets make for a delightful and healthy meal. 🍯🐟",
    price: 13.99,
    category_id: 4,
    subcategory_id: 1,
  },
  {
    product_id: 42,
    product_name: "Herb-Infused Olive Oil",
    inventory_count: 25,
    description:
      "Enhance your culinary creations with our Herb-Infused Olive Oil. A blend of premium olive oil and aromatic herbs, this infusion adds depth and flavor to your dishes. Perfect for drizzling over salads, pasta, or as a dipping oil for crusty bread. 🌿🍶",
    price: 9.99,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 43,
    product_name: "Cinnamon Raisin Bagels",
    inventory_count: 30,
    description:
      "Start your morning on a sweet note with our Cinnamon Raisin Bagels. Baked to perfection with plump raisins and a touch of cinnamon, these bagels are a delicious treat on their own or with your favorite spreads. Enjoy the comforting flavors of cinnamon and raisin in every bite. 🍩🍇",
    price: 4.49,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 44,
    product_name: "Frozen Vegetable Stir-Fry",
    inventory_count: 18,
    description:
      "Experience the convenience of our Frozen Vegetable Stir-Fry. A colorful blend of crisp vegetables, this stir-fry mix is perfect for creating quick and flavorful meals. Whether served on its own or paired with your favorite protein, our frozen vegetable stir-fry makes mealtime a breeze. 🍜❄️",
    price: 6.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 45,
    product_name: "Mango Habanero Chicken Wings",
    inventory_count: 22,
    description:
      "Ignite your taste buds with the spicy-sweet goodness of our Mango Habanero Chicken Wings. These wings are coated in a flavorful mango habanero glaze for a perfect balance of heat and sweetness. Ideal for game nights or as a tasty appetizer. 🍗🌶️",
    price: 10.99,
    category_id: 4,
    subcategory_id: 1,
  },
  {
    product_id: 46,
    product_name: "Organic Red Leaf Lettuce",
    inventory_count: 20,
    description:
      "Elevate your salads with the vibrant color and crisp texture of our Organic Red Leaf Lettuce. Grown organically for superior taste and quality, this red leaf lettuce adds a touch of elegance to your salads and sandwiches. Enjoy the freshness of organic greens in every bite. 🥗🌿",
    price: 5.49,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 47,
    product_name: "Everything Bagel with Sesame Seeds",
    inventory_count: 28,
    description:
      "Savor the rich and savory flavor of our Everything Bagel with Sesame Seeds. Coated with a delightful mix of poppy seeds, sesame seeds, garlic, and onion, this bagel is perfect for breakfast or as the base for a gourmet sandwich. Enjoy the classic taste of an everything bagel. 🍞🌰",
    price: 3.99,
    category_id: 3,
    subcategory_id: 1,
  },
  {
    product_id: 48,
    product_name: "Frozen Chicken Alfredo",
    inventory_count: 24,
    description:
      "Indulge in the creamy goodness of our Frozen Chicken Alfredo. A classic Italian dish with a convenient twist, this frozen meal is quick to prepare and satisfies your craving for rich and savory Alfredo sauce. Enjoy a comforting and delicious dinner at home. 🍝❄️",
    price: 7.99,
    category_id: 1,
    subcategory_id: 1,
  },
  {
    product_id: 49,
    product_name: "Organic Yellow Bell Peppers",
    inventory_count: 16,
    description:
      "Brighten up your dishes with the sweet and sunny flavor of our Organic Yellow Bell Peppers. Grown organically for optimal taste, these yellow bell peppers are perfect for salads, stir-fries, or as a colorful topping. Add a touch of sunshine to your culinary creations. 🌶️🌿",
    price: 6.49,
    category_id: 2,
    subcategory_id: 1,
  },
  {
    product_id: 50,
    product_name: "Sourdough Pretzel Rolls",
    inventory_count: 22,
    description:
      "Experience the best of both worlds with our Sourdough Pretzel Rolls. Baked to perfection with the tangy goodness of sourdough and the salty crunch of pretzels, these rolls are perfect for sandwiches or enjoyed on their own. Enjoy a unique twist on a classic favorite. 🍞🥨",
    price: 4.99,
    category_id: 3,
    subcategory_id: 1,
  },
];
export default dataSet;
