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
  LiveGame,
  LiveGameBadge,
  LiveGameContainer,
  LiveGameOver,
  LiveGames,
  LiveGamesTitle,
  LiveGameTitle,
  PopularGame,
  PopularGameContainer,
  PopularGames,
  Search,
  SearchContainer,
  SearchIcon,
  SectionContainer,
} from "./LiveScreen.elements";

// Import: Components
import { Text } from "../../components";

// Screen: LiveScreen
export default function LiveScreen() {
  return (
    <Container>
      <StatusBar backgroundColor="#343434" barStyle="light-content" />

      <Header>
        <Text large bold>
          Streaming
        </Text>
        <SearchContainer>
          <Search
            placeholder="Search live streams or games..."
            placeholderTextColor="#838383"
          />
          <SearchIcon>
            <Entypo name="magnifying-glass" size={24} color="#838383" />
          </SearchIcon>
        </SearchContainer>
      </Header>

      <SectionContainer>
        <Text medium bold>
          Popular Games
        </Text>

        <PopularGames horizontal={true} showsHorizontalScrollIndicator={false}>
          {games.map((game, index) => {
            return (
              <PopularGameContainer key={index}>
                <PopularGame source={game.cover} />
              </PopularGameContainer>
            );
          })}
        </PopularGames>
      </SectionContainer>

      <SectionContainer>
        <LiveGamesTitle>
          <Text medium bold>
            Live Now
          </Text>
          <Text bold color="#819ee5">
            View All
          </Text>
        </LiveGamesTitle>
      </SectionContainer>

      <LiveGames
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <LiveGameContainer>
            <LiveGame source={item.cover} />
            <LiveGameOver>
              <LiveGameTitle>
                <Text small bold>
                  {item.title}
                </Text>
              </LiveGameTitle>
              <LiveGameBadge>
                <Text small bold>
                  Live
                </Text>
              </LiveGameBadge>
            </LiveGameOver>
          </LiveGameContainer>
        )}
      />
    </Container>
  );
}
