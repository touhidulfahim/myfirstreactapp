import React from 'react';
import Book from '../representational/Book.js'

const BookList = (props) => {
    return (
        props.books.map((item, index) => {
            return (
                <Book
                    bookName={item.bookName}
                    price={item.price}
                    delete={() => props.deleteBookState(index)}
                    key={item.id}
                    inputName={(event) => props.changeInputState(event, index)}
                />
            );
        })
    );
}

export default BookList;