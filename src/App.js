import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person.js';
import Book from './components/Book.js';


class App extends Component {
    state = {
        books: [
            { id: 1, bookName: "The Holy Quran", price: "1500" },
            { id: 2, bookName: "Bukhari Sharif", price: "500" },
            { id: 3, bookName: "Muslim Sharif", price: "500" },
            { id: 4, bookName: "Kholafaye Rashedin", price: "1200" }
        ]
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
    render() {
        const style = {
            border: "1px solid red",
            borderRadius: "4px",
            backgroundColor: "black",
            color: "white"
        };

        //Creating Componenet List Start
        //const bookState = this.state.books;
        const books = this.state.books.map((item, index) => {
            return (
                <Book
                    bookName={item.bookName}
                    price={item.price}
                    delete={() => this.deleteBookState(index)}
                    key={item.id}
                    inputName={(event) => this.changeInputState(event, index)}
                />
            );
        });
        //Creating Componenet List End
        return (
            <div className="App" >
                <h1 style={style}>
                    Book List
                </h1>
                {books}
            </div>
        );
    }
}
export default App;