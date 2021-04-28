import React, { Component } from 'react';
import Book from '../representational/Book.js'

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.books.map((item, index) => {
                return (
                    <Book
                        bookName={item.bookName}
                        price={item.price}
                        delete={() => this.props.deleteBookState(index)}
                        key={item.id}
                        inputName={(event) => this.props.changeInputState(event, index)}
                    />
                );
            })
        );

    }
}

export default BookList;