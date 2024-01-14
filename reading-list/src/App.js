import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList"

function App() {
    const [books, setBooks] = useState([]);

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

    const createBook = (title) => {
        const updatedBooks = [
            ...books, //copy all the books
            { 
                id: Math.round(Math.random() * 999), 
                title 
            } // insert new book with random id (ids are usually taken care of by a backend server but we don't have that) and the new title (title is equivalent to title:title because they are the same name)
        ]
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