import { StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;

  return (
    <View
      style={({ backgroundColor: theme.uiBackground }, css.card, style)}
      {...props}
    />
  );
};

export default ThemedCard;

const css = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
