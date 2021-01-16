// Import: Dependencies
import styled from "styled-components/native";
import { Text } from "../../components";

// Element: Avatar
export const Avatar = styled.Image`
  border-radius: 30px;
  height: 60px;
  width: 60px;
`;

// Element: Categories
export const Categories = styled.ScrollView`
  flex-grow: 0;
  margin-top: 32px;
`;

// Element: Category
export const Category = styled.TouchableOpacity`
  align-items: center;
  height: 32px;
  margin: 0 16px;
`;

// Element: CategoryDot
export const CategoryDot = styled.View`
  border-radius: 3px;
  background-color: #819ee5;
  height: 6px;
  width: 6px;
`;

// Element: CategoryName
export const CategoryName = styled(Text)`
  color: ${(props) => (props.selected ? "#819ee5" : "#9a9a9a")};
  font-weight: ${(props) => (props.selected ? "700" : "500")};
`;

// Element: Container
export const Container = styled.SafeAreaView`
  background-color: #343434;
  flex: 1;
`;

// Element: Game
export const Game = styled.TouchableOpacity`
  margin-bottom: 32px;
`;

// Element: GameCover
export const GameCover = styled.Image`
  height: 300px;
  width: 100%;
`;

// Element: GameImage
export const GameImage = styled.Image`
  border-radius: 8px;
  height: 50px;
  width: 60px;
`;

// Element: GameInfo
export const GameInfo = styled.View`
  align-items: center;
  border-radius: 12px;
  flex-direction: row;
  margin: -50px 16px 0 16px;
  padding: 16px;
`;

// Element: Games
export const Games = styled.FlatList`
  flex: 1;
  margin-top: 32px;
`;

// Element: GameTitle
export const GameTitle = styled.View`
  flex-shrink: 1;
  margin: 0 8px 0 16px;
`;

// Element: Header
export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`;
