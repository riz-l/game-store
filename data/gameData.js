const games = [
  {
    id: 1,
    title: "DOOM Eternal",
    teaser:
      "Hell’s armies have invaded Earth. Become the Slayer and stop the final destruction of humanity.",
    description:
      "Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.",
    rating: 5,
    category: ["Action", "FPS"],
    age: "18",
    cover: require("../assets/images/games/doom_1.jpg"),
    screenshots: [
      require("../assets/images/games/doom_2.png"),
      require("../assets/images/games/doom_3.jpg"),
      require("../assets/images/games/doom_4.jpg"),
      require("../assets/images/games/doom_5.jpg"),
      require("../assets/images/games/doom_6.jpg"),
    ],
    backgroundColor: "#30171a",
  },
  {
    id: 2,
    title: "Ori and the Will of the Wisps",
    teaser:
      "Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles.",
    description:
      "Embark on an all-new adventure in a vast world filled with new friends and foes that come to life in stunning, hand-painted artwork. Ori and the Will of the Wisps continues the platforming action and emotional storytelling.",
    rating: 4.5,
    category: ["Adventure", "Indie", "Strategy"],
    age: "7+",
    cover: require("../assets/images/games/ori_1.jpg"),
    screenshots: [
      require("../assets/images/games/ori_2.jpg"),
      require("../assets/images/games/ori_3.jpg"),
      require("../assets/images/games/ori_4.jpg"),
      require("../assets/images/games/ori_5.jpg"),
      require("../assets/images/games/ori_6.jpg"),
    ],
    backgroundColor: "#3a3ccf",
  },
  {
    id: 3,
    title: "Star Wars Battlefront II",
    teaser:
      "Embark on an endless Star Wars™ journey from the best-selling Star Wars™ video game franchise of all time.",
    description:
      "Embark on an endless Star Wars™ journey from the best-selling Star Wars™ video game franchise of all time. Experience rich multiplayer battlegrounds across all three eras - prequel, classic and new trilogy - or rise as a new hero and discover an emotionally gripping single-player story spanning thirty years.",
    rating: 4,
    category: ["Action", "FPS", "Multiplayer"],
    age: "16",
    cover: require("../assets/images/games/battlefront_1.png"),
    screenshots: [
      require("../assets/images/games/battlefront_2.jpg"),
      require("../assets/images/games/battlefront_3.jpg"),
      require("../assets/images/games/battlefront_4.jpg"),
      require("../assets/images/games/battlefront_5.jpg"),
      require("../assets/images/games/battlefront_6.jpg"),
    ],
    backgroundColor: "#161d37",
  },
  {
    id: 4,
    title: "Need for Speed Heat",
    teaser:
      "A thrilling race experience pits you against a city’s rogue police force as you battle your way into street racing’s elite.",
    description:
      "Hustle by day and risk it all at night in Need for Speed™ Heat, a white-knuckle street racer, where the lines of the law fade as the sun starts to set. By day, Palm City hosts the Speedhunter Showdown, a sanctioned competition where you earn Bank to customize and upgrade your high-performance cars. At night, ramp up the intensity in illicit street races that build your reputation, getting you access to bigger races and better parts. But stay ready – cops are waiting and not all of them play fair.",
    rating: 3.5,
    category: ["Action", "Racing"],
    age: "16",
    cover: require("../assets/images/games/needforspeed_1.png"),
    screenshots: [
      require("../assets/images/games/needforspeed_2.png"),
      require("../assets/images/games/needforspeed_3.jpg"),
      require("../assets/images/games/needforspeed_4.jpg"),
      require("../assets/images/games/needforspeed_5.jpg"),
      require("../assets/images/games/needforspeed_6.png"),
    ],
    backgroundColor: "#3b0f4c",
  },
  {
    id: 5,
    title: "Fall Guys: Ultimate Knockout",
    teaser:
      "Play with 60 players online through round after round of escalating chaos until one victor remains!",
    description:
      "Fall Guys: Ultimate Knockout flings hordes of contestants together online in a mad dash through round after round of escalating chaos until one victor remains! Battle bizarre obstacles, shove through unruly competitors, and overcome the unbending laws of physics as you stumble towards greatness. Leave your dignity at the door and prepare for hilarious failure in your quest to claim the crown!",
    rating: 3.5,
    category: ["Casual", "Indie", "Multiplayer"],
    age: "3+",
    cover: require("../assets/images/games/fallguys_1.jpg"),
    screenshots: [
      require("../assets/images/games/fallguys_2.jpg"),
      require("../assets/images/games/fallguys_3.png"),
      require("../assets/images/games/fallguys_4.jpg"),
      require("../assets/images/games/fallguys_5.jpg"),
      require("../assets/images/games/fallguys_6.jpg"),
    ],
    backgroundColor: "#00b1a5",
  },
  {
    id: 6,
    title: "Microsoft Flight Simulator",
    teaser:
      "Fly accurate aircraft in the next generation of Microsoft Flight Simulator's dynamic and living world.",
    description:
      "From light planes to wide-body jets, fly highly detailed and accurate aircraft in the next generation of Microsoft Flight Simulator. Test your piloting skills against the challenges of night flying, real-time atmospheric simulation and live weather in a dynamic and living world. Create your flight plan to anywhere on the planet. Microsoft Flight Simulator includes 20 highly detailed planes with unique flight models and 30 hand-crafted airports.",
    rating: 3,
    category: ["Multiplayer", "Simulation"],
    age: "3+",
    cover: require("../assets/images/games/flightsimulator_1.jpg"),
    screenshots: [
      require("../assets/images/games/flightsimulator_2.jpg"),
      require("../assets/images/games/flightsimulator_3.jpg"),
      require("../assets/images/games/flightsimulator_4.jpg"),
      require("../assets/images/games/flightsimulator_5.jpg"),
      require("../assets/images/games/flightsimulator_6.jpg"),
    ],
    backgroundColor: "#257ccb",
  },
  {
    id: 7,
    title: "FIFA 21",
    teaser:
      "Lead your team to victory in campaign mode or compete with friends in FIFA Ultimate Team.",
    description:
      "It’s time for kick off. Create your team and win your way to the top of the division in FIFA 21. Lead your team to victory in campaign mode or compete with friends in FIFA Ultimate Team. Team up on the street or in the stadium and enjoy bigger victories with your friends. FIFA 21 will offer dual entitlement so you can get a free upgrade to the retrospective next-gen console",
    rating: 3,
    category: ["Casual", "Multiplayer", "Sports"],
    age: "3+",
    cover: require("../assets/images/games/fifa21_1.jpg"),
    screenshots: [
      require("../assets/images/games/fifa21_2.jpg"),
      require("../assets/images/games/fifa21_3.jpg"),
      require("../assets/images/games/fifa21_4.jpg"),
      require("../assets/images/games/fifa21_5.jpg"),
      require("../assets/images/games/fifa21_6.jpg"),
    ],
    backgroundColor: "#7d42f4",
  },
  {
    id: 8,
    title: "The Witcher 3: Wild Hunt",
    teaser:
      "Take on the greatest contract of all — track down the Child of Prophecy, a living weapon that can alter the shape of the world.",
    description:
      "The Witcher: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast open world rich with merchant cities, pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
    rating: 5,
    category: ["Adventure", "RPG"],
    age: "18",
    cover: require("../assets/images/games/witcher3_1.jpg"),
    screenshots: [
      require("../assets/images/games/witcher3_2.jpg"),
      require("../assets/images/games/witcher3_3.jpg"),
      require("../assets/images/games/witcher3_4.jpg"),
      require("../assets/images/games/witcher3_5.jpg"),
      require("../assets/images/games/witcher3_6.jpg"),
    ],
    backgroundColor: "#111a21",
  },
  {
    id: 9,
    title: "Animal Crossing: New Horizons",
    teaser:
      "Live at your own pace as you garden, fish, decorate, hunt for bugs and fossils, get to know the animal residents, and more.",
    description:
      "Live life at your own pace as you garden, fish, decorate, hunt for bugs and fossils, get to know the animal residents, and more. The time of day and seasons match real life, so something is happening on your island whether you’re there or not.",
    rating: 4,
    category: ["Casual", "Multiplayer"],
    age: "3+",
    cover: require("../assets/images/games/animalcrossing_1.png"),
    screenshots: [
      require("../assets/images/games/animalcrossing_2.jpg"),
      require("../assets/images/games/animalcrossing_3.jpg"),
      require("../assets/images/games/animalcrossing_4.jpg"),
      require("../assets/images/games/animalcrossing_5.jpg"),
      require("../assets/images/games/animalcrossing_6.jpg"),
    ],
    backgroundColor: "#5693ca",
  },
];

export default games;
