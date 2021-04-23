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

    changeBookState = newBookName => {
        this.setState({
            books: [
                { bookName: newBookName, price: "100" },
                { bookName: "hDASSh", price: "500" },
                { bookName: "test", price: "500" },
                { bookName: "Kholafaye Rashedin", price: "1200" }
            ]
        });
    }
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
        const books = this.state.books.map(item => {
            return (
                <Book
                    bookName={item.bookName}
                    price={item.price}
                />
            );
        });
        //Creating Componenet List End


        return (
            <div className="App" >
                <h1 style={style}>
                    Book List
                </h1>
                <button onClick={() => this.changeBookState("The Quran")}>Change state</button>
                <input type="text" onChange={this.changeInputState} />
                {books}
            </div>
        );
    }
}
export default App;