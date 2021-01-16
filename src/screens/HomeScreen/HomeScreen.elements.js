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

// Element: Container
export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`;
