// Import: Dependencies
import React from "react";

// Import: Elements
import { Text } from "./Text.elements";

// Component: StyledText
export default function StyledText({ ...props }) {
  return <Text {...props}>{props.children}</Text>;
}
