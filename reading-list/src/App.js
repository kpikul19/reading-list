import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            
        ]
        setBooks(updatedBooks);
    };

    return <div>
        <BookCreate onCreate={createBook} /> 
        </div>;
}
        //onCreate is a prop that is made here to take the createBook event handler

export default App;