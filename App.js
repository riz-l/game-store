// Import: Dependencies
import React from "react";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import: Screens
import {
  GameScreen,
  HomeScreen,
  LiveScreen,
  ProfileScreen,
} from "./src/screens";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: "#343434",
    borderTopColor: "#343434",
    height: 65,
    paddingBottom: 0,
  },
};

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "HomeScreen":
              iconName = "home";
              break;

            case "LiveScreen":
              iconName = "game-controller";
              break;

            case "ProfileScreen":
              iconName = "user";
              break;

            default:
              break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={30} color="#ffffff" />
            </TabBarIconContainer>
          );
        },
      })}
    >
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};

// Component: App
export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="GameScreen" component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

// Element: TabBarIconContainer
const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focused ? "#819ee5" : "#343434")};
  border-radius: 32px;
  padding: 8px 18px;
`;
