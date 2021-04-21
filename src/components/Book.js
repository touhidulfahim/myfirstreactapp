import React from 'react'

const Book = props => {
    return (
        <div>
            <p>Book Name: {props.bookName}, Book Price: {props.price}</p>
        </div>
    );
}

export default Book;