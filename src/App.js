import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person.js';

class App extends Component {
    render() {
        
        return (
            <div className="App" >
                <h1>
                    My First React App
                </h1>
                <Person name="Touhidul Islam" age="31" profession="Full-Stack Web Developer" />
                <Person name="Ariful Alama" age="35" profession="Back-End Developer" />
                <Person name="AHM Tareq" age="26" profession="Full-Stack Web Developer" />
            </div>

        );
    }
    //return React.createElement('div', { className: "App" }, React.createElement('h1', null, "My First React App"), <Person />)
}

export default App;