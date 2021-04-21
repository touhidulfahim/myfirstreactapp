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

    changeBookState = () => {
        this.setState({
            books: [
                { bookName: "AFFFFA", price: "100" },
                { bookName: "hDASSh", price: "500" },
                { bookName: "test", price: "500" },
                { bookName: "Kholafaye Rashedin", price: "1200" }
            ]
        });
    }
    render() {
        console.log(this.state);
        return (
            <div className="App" >
                <h1>
                    Book List
                </h1>
                <button onClick={this.changeBookState}>Change state</button>
                <Book bookName={this.state.books[0].bookName} price={this.state.books[0].price} />
                <Book bookName={this.state.books[1].bookName} price={this.state.books[1].price} />
                <Book bookName={this.state.books[2].bookName} price={this.state.books[2].price} />
                <Book bookName={this.state.books[3].bookName} price={this.state.books[3].price} />
            </div>
        );
    }
}

export default App;