import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import ThemedText from "../../../components/ThemedText";
import ThemedButton from "../../../components/ThemedButton";
import ThemedView from "../../../components/ThemedView";
import ThemedCard from "../../../components/ThemedCard";
import { useBooks } from "../../../contexts/BooksContext";
import { useEffect, useState } from "react";
import ThemedLoader from "../../../components/ThemedLoader";

const BookDetails = () => {
  const { id } = useLocalSearchParams();
  const { fetchBookById } = useBooks;
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id);
      setBook(bookData);
    }

    loadBook();
  }, [id]);

  return book ? (
    <ThemedView isSafeArea style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book?.title}</ThemedText>
        <ThemedText>Written by {book?.author}</ThemedText>
        <ThemedText title>Book description:</ThemedText>
        <ThemedText>{book?.description}</ThemedText>
      </ThemedCard>
    </ThemedView>
  ) : (
    <ThemedView isSafeArea style={styles.container}>
      <ThemedLoader />
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
});
