import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';

function BookShow ({ book }) {
    const [showEdit, setShowEdit] = useState(false); //make edit form false so it won't show by default
    const { deleteBookById } = useBooksContext();

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit); //toggle show edit on click
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>; //let allows you to change the variable over time, so this is saying by default we will show the book title
    if (showEdit) { //so if showEdit is true, then display book edit instead of the book title
        content = <BookEdit onSubmit={handleSubmit} book={book} />; //passing down book object so that BookEdit receives it and can use the book title as the default value of the edit before a change is made to the title
    }

    return (
        <div className="book-show">
            <img
                alt="books"
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;