import React from 'react'
import '../../stylesheets/Book.css'
import { withRouter } from 'react-router-dom'


const Book = props => {
    return (
        <div className="Book" onClick={props.selectedBookHandler}>
            <h3>Book Name: {props.bookName}</h3>
            <h4>Book Price: {props.price}</h4>
        </div>
    );
}

export default withRouter(Book);