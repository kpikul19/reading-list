import { useState, useEffect } from "react";
import axios from 'axios';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList"

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () =>  {

        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const editBookByID = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle };
            } 

            return book;
        })

        setBooks(updatedBooks);
    };


    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id; //if book doesn't have the id of the book trying to be removed then it won't be removed
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        const updatedBooks = [
            ...books, 
            response.data
        ];
        setBooks(updatedBooks); //new array with new book added 
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookByID} />
            <BookCreate onCreate={createBook} /> 
        </div>
    );
}
        //onCreate is a prop that is made here to take the createBook event handler
export default App;