import React, { Component } from 'react';
import Book from '../representational/Book.js'
import { withRouter } from 'react-router-dom'




class BookList extends Component {
    render() {
        return (
            this.props.books.map((item, index) => {
                return (
                    <Book
                        bookName={item.bookName}
                        price={item.price}
                        key={item.id}
                        selectedBookHandler={() => this.props.selectedBookHandler(item.id)}
                    />
                );
            })
        );

    }
}

export default withRouter(BookList);