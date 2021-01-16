// Import: Dependencies
import React, { useState, useRef } from "react";
import { StatusBar } from "react-native";

// Import: Data
import categoryList from "../../../data/categories";
import games from "../../../data/gameData";

// Import: Elements
import {
  Avatar,
  Categories,
  Category,
  CategoryDot,
  CategoryName,
  Container,
  Game,
  GameCover,
  GameImage,
  GameInfo,
  Games,
  GameTitle,
  Header,
} from "./HomeScreen.elements";

// Import: Components
import { Text } from "../../components";

// Screen: HomeScreen
export default function HomeScreen() {
  // State: selectedCategory
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Ref: gamesRef
  const gamesRef = useRef();

  const changeCategory = (category) => {
    gamesRef.current.scrollToOffset({ x: 0, y: 0 });
    setSelectedCategory(category);
  };

  const GameItem = (game) => {
    return (
      <Game>
        <GameCover source={game.cover} />
        <GameInfo backgroundColor={game.backgroundColor}>
          <GameImage source={game.cover} />
          <GameTitle>
            <Text medium bold>
              {game.title}
            </Text>

            <Text small>{game.teaser}</Text>
          </GameTitle>
        </GameInfo>
      </Game>
    );
  };

  return (
    <Container>
      <StatusBar backgroundColor="#343434" barStyle="light-content" />

      <Header>
        <Text large>
          Hello{" "}
          <Text large bold>
            riz-l,
          </Text>
          {`\n`}
          <Text large bold>
            Most popular games today
          </Text>
        </Text>

        <Avatar source={require("../../../assets/images/avatar.png")} />
      </Header>

      <Categories horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryList.map((category, index) => {
          return (
            <Category key={index} onPress={() => changeCategory(category)}>
              <CategoryName
                selected={selectedCategory === category ? true : false}
              >
                {category}
              </CategoryName>
              {selectedCategory === category && <CategoryDot />}
            </Category>
          );
        })}
      </Categories>

      <Games
        data={games.filter((game) => {
          return (
            game.category.includes(selectedCategory) ||
            selectedCategory === "All"
          );
        })}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => GameItem(item)}
        ref={gamesRef}
      />
    </Container>
  );
}
