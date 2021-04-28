import React, { Component } from 'react';
import Book from '../representational/Book.js'
import { withRouter } from 'react-router-dom'




class BookList extends Component {
    render() {
        console.log(this.props);
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

export default withRouter(BookList);