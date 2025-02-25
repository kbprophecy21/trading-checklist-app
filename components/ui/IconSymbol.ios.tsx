import React from "react";
import { Image, StyleProp, ImageStyle } from "react-native";
import { SymbolWeight } from "expo-symbols";

// Add your custom icon mappings here.
const ICON_MAPPING = {
  "Trade.fill": require("@/assets/images/TradeIcon.png"),
  "Analysis.fill": require("@/assets/images/AnalysisIcon.png"),
} as const;

export type IconSymbolName = keyof typeof ICON_MAPPING;

interface IconSymbolProps {
  name: IconSymbolName;
  size?: number;
  color?: string;
  style?: StyleProp<ImageStyle>;
  weight?: SymbolWeight;
}

const IconSymbol: React.FC<IconSymbolProps> = ({
  name,
  size = 24,
  color,
  style,
}) => {
  const iconSource = ICON_MAPPING[name];

  if (!iconSource) {
    return null; // Return null if the icon name is not found in the mapping
  }

  return (
    <Image
      source={iconSource}
      style={[{ width: size, height: size, tintColor: color }, style]}
    />
  );
};

export default IconSymbol;
