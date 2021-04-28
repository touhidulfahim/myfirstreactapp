import React, { Component } from 'react';
import bookList from '../assets/book.js'
import BookList from './lists/BookList'




class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            showBooks: true
        }
        console.log("Main Component")
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

    componentDidMount() {
        console.log("Component did mount");
    }



    shouldComponentUpdate(nextProps, nextState) {
        console.log("U Main Component Should Componenet Update", nextProps, nextState);
        return true;
    }


    componentDidUpdate() {
        console.log("U component U Update");
    }



    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Get Derived Component", nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log("U main component getSnapshotBeforeUpdate");
    }

    render() {
        console.log("main component render");
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
