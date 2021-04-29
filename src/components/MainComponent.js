import React, { Component } from 'react';
import bookList from '../assets/book.js';
import BookList from './lists/BookList';
import NewBook from './representational/NewBook';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import BookDetail from './representational/BookDetail';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            selectedBook: null
        }
    }

    selectedBookHandler = bookId => {
        const book = this.state.books.filter(book =>
            book.id === bookId)[0];
        this.setState({
            selectedBook: book
        })
    }

    render() {

        const books = <BookList
            books={this.state.books}
            selectedBookHandler={this.selectedBookHandler}
        />

        return (
            // <Navbar dark color="dark" expand="sm">
            //     <div className="container">
            //         <NavbarToggler onClick={this.navToggle} />
            //         <NavbarBrand href="/">BOOK APP</NavbarBrand>
            //         <Collapse isOpen={this.state.isNavOpen} navbar>
            //             <Nav className="mr-auto" navbar>
            //                 <NavItem>
            //                     <Link to="/" className="nav-link active">Home</Link>
            //                 </NavItem>
            //                 <NavItem>
            //                     <Link to="/menu" className="nav-link active">Book</Link>
            //                 </NavItem>
            //                 <NavItem>
            //                     <Link to="/about" className="nav-link active">About</Link>
            //                 </NavItem>
            //                 <NavItem>
            //                     <Link to="/contact" className="nav-link active">Contact</Link>
            //                 </NavItem>
            //             </Nav>
            //         </Collapse>
            //     </div>
            // </Navbar>


            <div className="App">
                <nav className="nav-bar nav-dark">
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/books" exact render={() => books} />
                    <Route path="/new-book" exact component={NewBook} />
                    <Route path="/:id" render={() => <BookDetail book={this.state.selectedBook} />} />
                    <Redirect from="/" to="/books" />
                </Switch>
            </div>
        );
    }
}

export default MainComponent;
