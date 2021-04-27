import React, { Component } from 'react';
import Book from '../representational/Book.js'

class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("Book list Constructor");
    }

    UNSAFE_componentWillMount() {
        console.log("Book list component will mount");
    }

    componentDidMount() {
        console.log("Book list component did mount");
    }




    render() {
        console.log("Book list component render");
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