import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={css.container}>
      <ThemedLogo style={css.img} />

      <ThemedText title style={css.title}>
        The Number 1
      </ThemedText>
      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>

      <Link href="/about" style={css.link}>
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link href="/contact" style={css.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
