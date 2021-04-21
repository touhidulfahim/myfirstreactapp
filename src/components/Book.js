import React from 'react'

const Book = props => {
    return (
        <div>
            <p>Book Name: {props.bookName}, Book Price: {props.price}</p>
            <input type="text" onChange={props.inputName} value={props.bookName} />
        </div>
    );
}

export default Book;