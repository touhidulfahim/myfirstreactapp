import React from 'react'

const Book = props => {
    return (
        <div>
            <p>Book Name: {props.name}, Book Price: {props.price}</p>
        </div>
    );
}

export default Book;