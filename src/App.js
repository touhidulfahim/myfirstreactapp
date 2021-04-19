import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // return (
    //     <div className="App" >
    //         <h1>
    //             My First React App
    //         </h1>
    //         <Person />
    //     </div>
    // );
    return React.createElement('div', { className: "App" }, React.createElement('h1', null, "My First React App"), <Person />)
}

function Person() {
    return (
        <div>
            <h1>
                I am person component
            </h1>
        </div>
    );
}

export default App;