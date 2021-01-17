// Import: Dependencies
import React from "react";
import { StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";

// Import: Data
import games from "../../../data/gameData";

// Import: Elements
import {
  Account,
  Avatar,
  AvatarContainer,
  Badge,
  Container,
  Game,
  GameImage,
  Games,
  Info,
  Logout,
  Settings,
  Stat,
  Stats,
} from "./ProfileScreen.elements";

// Import: Components
import { Text } from "../../components";

// Screen: ProfileScreen
export default function ProfileScreen() {
  return (
    <Container>
      <StatusBar backgroundColor="#343434" barStyle="light-content" />

      <AvatarContainer>
        <Avatar source={require("../../../assets/images/avatar.png")} />
        <Text large bold>
          riz-l
        </Text>
      </AvatarContainer>

      <Badge>
        <Text small heavy>
          Amateur
        </Text>
      </Badge>

      <Stats>
        <Stat>
          <Text large heavy>
            250 <Text color="#9a9a9a">Games</Text>
          </Text>
        </Stat>

        <Stat>
          <Text large heavy>
            9 <Text color="#9a9a9a">Purchases</Text>
          </Text>
        </Stat>
      </Stats>

      <Text center large>
        Purchased Games
      </Text>

      <Games
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Game>
            <GameImage source={item.cover} />
            <Info>
              <Text bold>{item.title}</Text>
              <Text small color="#9a9a9a">
                {Math.floor(Math.random() * 1000) + 1} hours played
              </Text>
            </Info>
            <Text heavy color="#819ee5">
              £{Math.floor(Math.random() * 50) + 1}
            </Text>
          </Game>
        )}
      />

      <Account>
        <Settings>
          <Entypo name="cog" size={24} color="#ffffff" />
        </Settings>
        <Logout>
          <Text heavy>Logout</Text>
        </Logout>
      </Account>
    </Container>
  );
}
