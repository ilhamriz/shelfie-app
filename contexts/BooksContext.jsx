import { createContext, useContext, useState } from "react";

const DATABASE_ID = "683ae4760002122c980b";
const COLLECTION_ID = "683ae480003d8e93b5bc";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
    } catch (error) {
      console.error(error.message);
      throw Error(error.message);
    }
  }

  async function fetchBookById() {
    try {
    } catch (error) {
      console.error(error.message);
      throw Error(error.message);
    }
  }

  async function createBook(data) {
    try {
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
