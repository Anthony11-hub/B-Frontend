const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/p4.jpeg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ],
    description: "Elevate your athletic performance with our Black and Gray Athletic Cotton Socks - 6 Pairs. These premium socks offer unbeatable comfort and support, making them ideal for sports enthusiasts. Crafted from high-quality cotton, they provide breathability and moisture-wicking properties, ensuring your feet stay dry during intense workouts. With a 4.5-star rating from 87 satisfied customers, you can trust these socks for your active lifestyle."
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ],
    description: "Take your basketball game to the next level with our Intermediate Size Basketball. Designed for players of all skill levels, this basketball has received a 4-star rating from 127 users. It's perfect for practice sessions, pickup games, or serious matches. With its composite construction, it offers excellent grip and durability. Elevate your game today!"
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
    description: "Upgrade your casual wardrobe with our Adults Plain Cotton T-Shirt 2-Pack in Teal. These comfortable shirts are perfect for everyday wear and have received a 4.5-star rating from 56 satisfied customers. Made from soft, breathable cotton, these shirts offer both style and comfort. The 2-pack ensures you always have a fashionable option in your closet. Check our size chart for the perfect fit!"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ],
    description: "Upgrade your breakfast routine with our 2 Slot Toaster in Black. With a 5-star rating from 2197 happy customers, this toaster combines style and functionality seamlessly. Whether you prefer your toast lightly browned or perfectly crispy, this toaster delivers consistent results every time. Elevate your kitchen and start your mornings right with this essential appliance."
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ],
    description: "Set a beautiful table with our 6 Piece White Dinner Plate Set. These plates, with a 4-star rating from 37 satisfied customers, add a touch of elegance to your dining experience. Crafted for durability, they are suitable for everyday use and special occasions. Each plate is a work of art with its slightly used character, making your dining moments unique and memorable. Impress your guests with these timeless plates."
  },  
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ],
    description: "Elevate your baking skills with our 6-Piece Nonstick Carbon Steel Oven Bakeware Baking Set. This set, with a 4.5-star rating from 175 satisfied customers, includes essential bakeware items designed to make your baking experience a breeze. Crafted for excellence, each piece ensures even heat distribution and effortless food release. Whether you're a novice or a seasoned chef, this set is a valuable addition to your kitchen. Bake like a pro and delight in mouthwatering creations."
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ],
    description: "Stay cozy and stylish with our Plain Hooded Fleece Sweatshirt. This sweatshirt boasts a 4.5-star rating from 317 satisfied customers and is a must-have addition to your wardrobe. Crafted for comfort and warmth, it's perfect for chilly days and casual outings. The classic design and soft fleece interior make it an ideal choice for all seasons. Elevate your comfort and fashion game with this timeless sweatshirt."
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ],
    description: "Indulge in luxury with our Luxury Towel Set in Graphite Gray. These premium towels, rated 4.5 stars by 144 satisfied customers, bring sophistication and comfort to your bathroom. Crafted with care, they offer superior absorbency and softness. Whether you're stepping out of the shower or pampering yourself, these towels provide an indulgent experience. Elevate your bathroom decor and transform your daily routine with these plush bath towels."
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ],
    description: "Experience the power of cleanliness with our Liquid Laundry Detergent. With a 4.5-star rating from 305 satisfied customers, this detergent delivers exceptional results. It's designed for efficiency, offering up to 110 loads of laundry in an 82.5 fl oz bottle. Whether you're tackling tough stains or maintaining everyday freshness, this detergent is up to the task. Elevate your laundry routine and enjoy clean, crisp clothes."
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ],
    description: "Step into style and functionality with our Waterproof Knit Athletic Sneakers in Gray. These sneakers, boasting a 4-star rating from 89 satisfied customers, are the perfect blend of fashion and performance. Crafted for comfort and durability, they keep your feet dry and comfortable in any weather. Whether you're hitting the gym, going for a run, or simply out for a walk, these sneakers provide the support you need. Elevate your footwear game and conquer your active lifestyle."
  },  
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
    description: "Elevate your beach style with our Women's Chiffon Beachwear Cover Up in elegant black. This cover-up, with a stellar 4.5-star rating from 235 beach-loving customers, is the perfect addition to your beachwear collection. Crafted from lightweight and breathable chiffon fabric, it provides comfort and style for your days by the water. Whether you're lounging by the pool or strolling along the shoreline, this cover-up adds a touch of sophistication to your swimwear ensemble."
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "accessories",
      "shades"
    ],
    description: "Complete your look with our stylish Round Sunglasses in classic black. These sunglasses, adorned with a 4.5-star rating from 30 fashion-savvy customers, not only protect your eyes from the sun but also add a touch of elegance to your outfit. With their timeless round frame design, they are perfect for any occasion, from sunny beach days to urban adventures. Elevate your style and shield your eyes with these fashionable shades."
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ],
    description: "Step into comfort and style with our Women's Two Strap Buckle Sandals in trendy tan. These sandals, featuring an impressive 4.5-star rating from 562 satisfied customers, are the perfect choice for sunny days and beach outings. Crafted for both fashion and functionality, they provide a secure and comfortable fit. Whether you're exploring coastal towns or enjoying a beach vacation, these sandals will keep you looking and feeling great."
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ],
    description: "Transform your bedroom with our Blackout Curtains Set in a stylish beige hue. This 4-pack of curtains, boasting a 4.5-star rating from 232 satisfied customers, adds elegance and practicality to your home decor. Crafted to block out unwanted light and noise, these curtains create a serene atmosphere for your bedroom. Whether you're seeking restful sleep or enhancing your room's ambiance, these curtains deliver both style and functionality."
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ],
    description: "Stay cool and stylish this summer with our Men's Slim-Fit Summer Shorts in versatile gray. These shorts, favored by 160 fashion-forward customers and rated 4 stars, are designed for both comfort and a modern look. Crafted from breathable fabric, they are perfect for warm-weather adventures, from beach days to backyard barbecues. Elevate your summer wardrobe with these fashionable and comfortable shorts."
  },  
    {
      id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
      image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
      name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
      rating: {
        stars: 5,
        count: 846
      },
      priceCents: 3074,
      keywords: [
        "water boiler",
        "appliances",
        "kitchen"
      ]
    },
    {
      id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
      image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
      name: "Ultra Soft Tissue 2-Ply - 18 Box",
      rating: {
        stars: 4,
        count: 99
      },
      priceCents: 2374,
      keywords: [
        "kleenex",
        "tissues",
        "kitchen",
        "tissues box",
        "napkins"
      ]
    },
    {
      id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
      image: "images/products/straw-sunhat.webp",
      name: "Straw Lifeguard Sun Hat",
      rating: {
        stars: 4,
        count: 215
      },
      priceCents: 2200,
      keywords: [
        "hats",
        "straw hats",
        "summer",
        "apparel"
      ]
    },
    {
      id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
      image: "images/products/sky-flower-stud-earrings.webp",
      name: "Sterling Silver Sky Flower Stud Earrings",
      rating: {
        stars: 4.5,
        count: 52
      },
      priceCents: 1799,
      keywords: [
        "jewelry",
        "accessories",
        "womens"
      ]
    },
    {
      id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
      image: "images/products/women-stretch-popover-hoodie-black.jpg",
      name: "Women's Stretch Popover Hoodie",
      rating: {
        stars: 4.5,
        count: 2465
      },
      priceCents: 1374,
      keywords: [
        "hooded",
        "hoodies",
        "sweaters",
        "womens",
        "apparel"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    },
    {
      id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
      image: "images/products/bathroom-rug.jpg",
      name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
      rating: {
        stars: 4.5,
        count: 119
      },
      priceCents: 1250,
      keywords: [
        "bathmat",
        "bathroom",
        "home"
      ]
    },
    {
      id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
      image: "images/products/women-knit-ballet-flat-black.jpg",
      name: "Women's Knit Ballet Flat",
      rating: {
        stars: 4,
        count: 326
      },
      priceCents: 2640,
      keywords: [
        "shoes",
        "flats",
        "womens",
        "footwear"
      ]
    },
    {
      id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
      image: "images/products/men-golf-polo-t-shirt-blue.jpg",
      name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
      rating: {
        stars: 4.5,
        count: 2556
      },
      priceCents: 1599,
      keywords: [
        "tshirts",
        "shirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    },
    {
      id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
      image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
      name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
      rating: {
        stars: 4.5,
        count: 2286
      },
      priceCents: 8300,
      keywords: [
        "garbage",
        "bins",
        "cans",
        "kitchen"
      ]
    },
    {
      id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
      image: "images/products/duvet-cover-set-blue-twin.jpg",
      name: "Duvet Cover Set with Zipper Closure",
      rating: {
        stars: 4,
        count: 456
      },
      priceCents: 2399,
      keywords: [
        "bedroom",
        "bed sheets",
        "sheets",
        "covers",
        "home"
      ]
    },
    {
      id: "d2785924-743d-49b3-8f03-ec258e640503",
      image: "images/products/women-chunky-beanie-gray.webp",
      name: "Women's Chunky Cable Beanie - Gray",
      rating: {
        stars: 5,
        count: 83
      },
      priceCents: 1250,
      keywords: [
        "hats",
        "winter hats",
        "beanies",
        "tuques",
        "apparel",
        "womens"
      ]
    },
    {
      id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
      image: "images/products/men-chino-pants-beige.jpg",
      name: "Men's Classic-fit Pleated Chino Pants",
      rating: {
        stars: 4.5,
        count: 9017
      },
      priceCents: 2290,
      keywords: [
        "pants",
        "apparel",
        "mens"
      ]
    },
    {
      id: "1c079479-8586-494f-ab53-219325432536",
      image: "images/products/men-athletic-shoes-green.jpg",
      name: "Men's Athletic Sneaker",
      rating: {
        stars: 4,
        count: 229
      },
      priceCents: 3890,
      keywords: [
        "shoes",
        "running shoes",
        "footwear",
        "mens"
      ]
    },
    {
      id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
      image: "images/products/men-navigator-sunglasses-brown.jpg",
      name: "Men's Navigator Sunglasses Pilot",
      rating: {
        stars: 3.5,
        count: 42
      },
      priceCents: 1690,
      keywords: [
        "sunglasses",
        "glasses",
        "accessories",
        "shades"
      ]
    },
    {
      id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
      image: "images/products/non-stick-cooking-set-15-pieces.webp",
      name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
      rating: {
        stars: 4.5,
        count: 511
      },
      priceCents: 6797,
      keywords: [
        "cooking set",
        "kitchen"
      ]
    },
    {
      id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
      image: "images/products/vanity-mirror-silver.jpg",
      name: "Vanity Mirror with Heavy Base - Chrome",
      rating: {
        stars: 4.5,
        count: 130
      },
      priceCents: 1649,
      keywords: [
        "bathroom",
        "washroom",
        "mirrors",
        "home"
      ]
    },
    {
      id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
      image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
      name: "Women's Fleece Jogger Sweatpant",
      rating: {
        stars: 4.5,
        count: 248
      },
      priceCents: 2400,
      keywords: [
        "pants",
        "sweatpants",
        "jogging",
        "apparel",
        "womens"
      ]
    },
    {
      id: "d339adf3-e004-4c20-a120-40e8874c66cb",
      image: "images/products/double-elongated-twist-french-wire-earrings.webp",
      name: "Double Oval Twist French Wire Earrings - Gold",
      rating: {
        stars: 4.5,
        count: 117
      },
      priceCents: 2400,
      keywords: [
        "accessories",
        "womens"
      ]
    },
    {
      id: "d37a651a-d501-483b-aae6-a9659b0757a0",
      image: "images/products/round-airtight-food-storage-containers.jpg",
      name: "Round Airtight Food Storage Containers - 5 Piece",
      rating: {
        stars: 4,
        count: 126
      },
      priceCents: 2899,
      keywords: [
        "boxes",
        "food containers",
        "kitchen"
      ]
    },
    {
      id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
      image: "images/products/laptop3.jpg",
      name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
      rating: {
        stars: 4.5,
        count: 1211
      },
      priceCents: 2250,
      keywords: [
        "coffeemakers",
        "kitchen",
        "appliances"
      ]
    },
    {
      id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
      image: "images/products/blackout-curtains-black.jpg",
      name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
      rating: {
        stars: 4.5,
        count: 363
      },
      priceCents: 3099,
      keywords: [
        "bedroom",
        "home"
      ]
    },
    {
      id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
      image: "images/products/p6.jpeg",
      name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
      rating: {
        stars: 4.5,
        count: 93
      },
      priceCents: 2110,
      keywords: [
        "bathroom",
        "home",
        "towels"
      ]
    },
    {
      id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
      image: "images/products/p5.jpeg",
      name: "Waterproof Knit Athletic Sneakers - Pink",
      rating: {
        stars: 4,
        count: 89
      },
      priceCents: 3390,
      keywords: [
        "shoes",
        "running shoes",
        "footwear",
        "womens"
      ]
    },
    {
      id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
      image: "images/products/p4.jpeg",
      name: "Countertop Blender - 64oz, 1400 Watts",
      rating: {
        stars: 4,
        count: 3
      },
      priceCents: 10747,
      keywords: [
        "food blenders",
        "kitchen",
        "appliances"
      ]
    },
    {
      id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
      image: "images/products/p3.jpeg",
      name: "10-Piece Mixing Bowl Set with Lids - Floral",
      rating: {
        stars: 5,
        count: 679
      },
      priceCents: 3899,
      keywords: [
        "mixing bowls",
        "baking",
        "cookware",
        "kitchen"
      ]
    },
    {
      id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
      image: "images/products/p1.jpeg",
      name: "2-Ply Kitchen Paper Towels - 30 Pack",
      rating: {
        stars: 4.5,
        count: 1045
      },
      priceCents: 5799,
      keywords: [
        "kitchen",
        "kitchen towels",
        "tissues"
      ]
    },
    {
      id: "bc2847e9-5323-403f-b7cf-57fde044a955",
      image: "images/products/p2.jpeg",
      name: "Men's Full-Zip Hooded Fleece Sweatshirt",
      rating: {
        stars: 4.5,
        count: 3157
      },
      priceCents: 2400,
      keywords: [
        "sweaters",
        "hoodies",
        "apparel",
        "mens"
      ]
    }
  ];