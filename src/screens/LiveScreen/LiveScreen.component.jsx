// Import: Dependencies
import React from "react";
import { StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";

// Import: Data
import games from "../../../data/gameData";

// Import: Elements
import {
  Container,
  Header,
  Search,
  SearchContainer,
  SearchIcon,
} from "./LiveScreen.elements";

// Import: Components
import { Text } from "../../components";

// Screen: LiveScreen
export default function LiveScreen() {
  return (
    <Container>
      <StatusBar backgroundColor="#343434" barStyle="light-content" />

      <Header>
        <Text>Streaming</Text>
        <SearchContainer>
          <Search />
          <SearchIcon>
            <Entypo name="magnifying-glass" size={24} color="#838383" />
          </SearchIcon>
        </SearchContainer>
      </Header>
    </Container>
  );
}
