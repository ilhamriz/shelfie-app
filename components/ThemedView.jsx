import { useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, isSafeArea = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;

  if (!isSafeArea)
    return (
      <View style={({ backgroundColor: theme.background }, style)} {...props} />
    );

  // CAN USE SaveAreaView AS WELL
  const insets = useSafeAreaInsets();
  return (
    <View
      style={
        ({
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style)
      }
      {...props}
    />
  );
};

export default ThemedView;
