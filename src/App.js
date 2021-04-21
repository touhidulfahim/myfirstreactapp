import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person.js';
import Book from './components/Book.js';


class App extends Component {
    render() {

        return (
            <div className="App" >
                <h1>
                    Book List
                </h1>
                {/* <Person name="Touhidul Islam" age="31" profession="Full-Stack Web Developer" />
                <Person name="Ariful Alama" age="35" profession="Back-End Developer" />
                <Person name="AHM Tareq" age="26" profession="Full-Stack Web Developer" /> */}
                <Book name="The Holy Quran" price="1500" />
                <Book name="Bukhari Sharif" price="500" />
                <Book name="Muslim Sharif" price="500" />
                <Book name="Kholafaye Rashedin" price="1200" />
            </div>
        );
    }
    //return React.createElement('div', { className: "App" }, React.createElement('h1', null, "My First React App"), <Person />)
}

export default App;