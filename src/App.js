import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person.js';
import Book from './components/Book.js';


class App extends Component {
    state = {
        books: [
            { bookName: "The Holy Quran", price: "1500" },
            { bookName: "Bukhari Sharif", price: "500" },
            { bookName: "Muslim Sharif", price: "500" },
            { bookName: "Kholafaye Rashedin", price: "1200" }
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


    changeInputState = event => {
        this.setState({
            books: [
                { bookName: event.target.value, price: "100" },
                { bookName: "Bukhari Sharif", price: "500" },
                { bookName: "Muslim Sharif", price: "500" },
                { bookName: "Kholafaye Rashedin", price: "1200" }
            ]
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