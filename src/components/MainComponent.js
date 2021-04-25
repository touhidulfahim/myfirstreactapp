import React, { Component } from 'react';
import bookList from '../assets/book.js'
import BookList from './lists/BookList'




class MainComponent extends Component {
    state = {
        books: bookList,
        showBooks: true
    }

    //Change State Delete Start
    deleteBookState = index => {
        //const books = this.state.books.slice();
        //const books = this.state.books.map(item => item);
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };
    //Change State Delete End


    changeInputState = (event, index) => {
        const book = {
            ...this.state.books[index]
        }
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;
        this.setState({
            books: books
        });
    }

    //toggle
    toggleBooks = () => {
        this.setState({
            showBooks: !this.state.showBooks
        })
    }



    render() {
        const style = {
            border: "1px solid red",
            borderRadius: "4px",
            backgroundColor: "black",
            color: "white"
        };

        //Creating Componenet List Start
        //const bookState = this.state.books;
        let books = null;
        if (this.state.showBooks) {
            books = <BookList books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeInputState={this.changeInputState}
            />
        }

        //Creating Componenet List End
        return (
            <div className="App" >
                <h1 style={style}>
                    Book List
                </h1>
                <button onClick={this.toggleBooks}>Show OR Hide Books</button>
                {books}
            </div>
        );
    }
}


export default MainComponent
