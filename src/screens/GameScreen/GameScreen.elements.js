// Import: Dependencies
import styled from "styled-components/native";
import { Text } from "../../components";

// Element: BackButton
export const BackButton = styled.TouchableOpacity`
  left: 16px;
  position: absolute;
  top: 48px;
`;

// Element: Description
export const Description = styled(Text)`
  line-height: 22px;
  margin: 8px 16px 0 16px;
`;

// Element: Download
export const Download = styled.View`
  align-items: center;
  background-color: #819ee5;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  width: 40px;
`;

// Element: GameArt
export const GameArt = styled.Image`
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  height: 280px;
  width: 100%;
`;

// Element: GameArtContainer
export const GameArtContainer = styled.View`
  position: relative;
`;

// Element: GameContainer
export const GameContainer = styled.View`
  background-color: #343434;
  flex: 1;
`;

// Element: GameInfo
export const GameInfo = styled.View`
  flex-grow: 1;
  margin: 0 8px 0 16px;
  width: 0;
`;

// Element: GameInfoContainer
export const GameInfoContainer = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 8px 0;
  margin: 8px 16px;
`;

// Element: GameStatsContainer
export const GameStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;

// Element: GameThumb
export const GameThumb = styled.Image`
  border-radius: 16px;
  height: 80px;
  width: 80px;
`;

// Element: GameThumbContainer
export const GameThumbContainer = styled.View`
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;

// Element: ScreenShot
export const ScreenShot = styled.Image`
  border-radius: 12px;
  height: 200px;
  width: 300px;
`;

// Element: ScreenShotContainer
export const ScreenShotContainer = styled.View`
  padding: 8px 16px;
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;

// Element: ScreenShots
export const ScreenShots = styled.ScrollView``;

// Element: ScreenShotsContainer
export const ScreenShotsContainer = styled.View`
  margin: 0;
`;

// Element: ScrollContainer
export const ScrollContainer = styled.ScrollView`
  padding: 8px 0 16px 0;
`;

// Element: Stars
export const Stars = styled.View`
  flex-direction: row;
`;
