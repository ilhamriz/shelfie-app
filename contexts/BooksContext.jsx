import { createContext, useContext, useEffect, useState } from "react";
import { client, databases } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "683ae4760002122c980b";
const COLLECTION_ID = "683ae480003d8e93b5bc";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const { user } = useUser();
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)]
      );

      setBooks(response.documents);
    } catch (error) {
      console.error(error.message);
      throw Error(error.message);
    }
  }

  async function fetchBookById(id) {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );

      return response;
    } catch (error) {
      console.error(error.message);
      throw Error(error.message);
    }
  }

  async function createBook(data) {
    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      console.error(error.message);
      throw Error(error.message);
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.error(error.message);
      throw Error(error.message);
    }
  }

  useEffect(() => {
    let unsubscribe;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

    if (user) {
      fetchBooks();

      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;
        if (events?.[0]?.includes("create"))
          setBooks((prevBooks) => [...prevBooks, payload]);
      });
    } else setBooks([]);

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  const contextValue = useMemo(
    () => ({ books, fetchBooks, fetchBookById, createBook, deleteBook }),
    [books, fetchBooks, fetchBookById, createBook, deleteBook]
  );

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }

  return context;
};
