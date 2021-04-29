import React, { Component } from 'react';
import Book from '../representational/Book.js'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



class BookList extends Component {
    render() {
        return (
            this.props.books.map((item, index) => {
                return (
                    <NavLink to={"/" + item.id} key={item.id} style={{ textDecoration: "none", color: "black" }}>
                        <Book
                            bookName={item.bookName}
                            price={item.price}
                            selectedBookHandler={() => this.props.selectedBookHandler(item.id)}
                        />
                    </NavLink>
                );
            })
        );

    }
}

export default withRouter(BookList);