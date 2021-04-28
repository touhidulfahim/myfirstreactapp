import React, { Component } from 'react';
import Book from '../representational/Book.js'

class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("Book list Constructor");
    }



    componentDidMount() {
        console.log("Book list component did mount");
    }



    shouldComponentUpdate(nextProps, nextState) {
        console.log("U BookList should component update", nextProps, nextState);
        return true;
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("book list get derived component", nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log("U booklist getSnapshotBeforeUpdate");
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