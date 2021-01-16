// Import: Dependencies
import React, { useState } from "react";
import { StatusBar } from "react-native";

// Import: Data
import categoryList from "../../../data/categories";

// Import: Elements
import {
  Avatar,
  Categories,
  Category,
  CategoryName,
  Container,
  Header,
} from "./HomeScreen.elements";

// Import: Components
import { Text } from "../../components";

// Screen: HomeScreen
export default function HomeScreen() {
  // State: selectedCategory
  const [selectedCategory, setSelectedCategory] = useState("All");

  const changeCategory = (category) => {
    setSelectedCategory(category);
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
            </Category>
          );
        })}
      </Categories>
    </Container>
  );
}
