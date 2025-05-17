import { StyleSheet } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title style={styles.heading}>
        Your Email
      </ThemedText>
      <ThemedText>Time to start reading some books...</ThemedText>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
