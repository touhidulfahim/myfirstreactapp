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
        ],
        myState: "My State"
    };
    // constructor() {
    //     super();
    //     this.state = {};
    // }
    render() {
        return (
            <div className="App" >
                <h1>
                    Book List
                </h1>
                {/* <Person name="Touhidul Islam" age="31" profession="Full-Stack Web Developer" />
                <Person name="Ariful Alama" age="35" profession="Back-End Developer" />
                <Person name="AHM Tareq" age="26" profession="Full-Stack Web Developer" /> */}
                <Book nameName={this.state.books[0].bookName} price={this.state.books[0].price} />
                <Book nameName={this.state.books[1].bookName} price={this.state.books[1].price} />
                <Book nameName={this.state.books[2].bookName} price={this.state.books[2].price} />
                <Book nameName={this.state.books[3].bookName} price={this.state.books[3].price} />
            </div>
        );
    }
    //return React.createElement('div', { className: "App" }, React.createElement('h1', null, "My First React App"), <Person />)
}

export default App;