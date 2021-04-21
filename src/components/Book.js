import React from 'react'
import '../stylesheets/Book.css'
const Book = props => {
    return (
        <div className='Book'>
            <p>Book Name: {props.bookName}, Book Price: {props.price}</p>
            <input type="text" onChange={props.inputName} defaultValue={props.bookName} />
        </div>
    );
}

export default Book;