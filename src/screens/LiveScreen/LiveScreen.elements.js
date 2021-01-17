// Import: Dependencies
import styled from "styled-components/native";

// Element: Container
export const Container = styled.SafeAreaView`
  background-color: #343434;
  flex: 1;
`;

// Element: Header
export const Header = styled.View`
  margin: 32px 16px 0 16px;
`;

// Element: LiveGame
export const LiveGame = styled.Image`
  border-radius: 12px;
  height: 275px;
  margin-bottom: 16px;
  width: 100%;
`;

// Element: LiveGameBadge
export const LiveGameBadge = styled.View`
  background-color: #e54949;
  border-radius: 4px;
  padding: 2px 8px;
`;

// Element: LiveGameContainer
export const LiveGameContainer = styled.View`
  position: relative;
`;

// Element: LiveGameOver
export const LiveGameOver = styled.View`
  align-items: center;
  flex-direction: row;
  position: absolute;
  right: 16px;
  top: 8px;
`;

// Element: LiveGames
export const LiveGames = styled.FlatList`
  flex: 1;
  margin: 16px 16px 0 16px;
`;

// Element: LiveGamesTitle
export const LiveGamesTitle = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

// Element: LiveGameTitle
export const LiveGameTitle = styled.View`
  background-color: #819ee5;
  border-radius: 4px;
  margin-right: 4px;
  padding: 2px 8px;
`;

// Element: PopularGame
export const PopularGame = styled.Image`
  border-radius: 12px;
  height: 80px;
  width: 80px;
`;

// Element: PopularGameContainer
export const PopularGameContainer = styled.View`
  margin: 0 16px;
  width: 80px;
`;

// Element: PopularGames
export const PopularGames = styled.ScrollView`
  margin: 16px 0 16px -16px;
`;

// Element: Search
export const Search = styled.TextInput`
  color: #c6c6c6;
  padding: 16px 64px 16px 32px;
`;

// Element: SearchContainer
export const SearchContainer = styled.View`
  background-color: #404040;
  border-radius: 100px;
  justify-content: center;
  margin: 32px 8px;
  position: relative;
`;

// Element: SearchIcon
export const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

// Element: SectionContainer
export const SectionContainer = styled.View`
  margin: 0 16px;
`;
