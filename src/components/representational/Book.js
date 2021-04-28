import React from 'react'
import '../../stylesheets/Book.css'
import { withRouter } from 'react-router-dom'


const Book = props => {
    console.log(props);
    return (
        <div className='Book'>
            <h3 onClick={props.delete}>Book Name: {props.bookName}</h3>
            <h4>Book Price: {props.price}</h4>
            <input type="text" onChange={props.inputName} defaultValue={props.bookName} />
        </div>
    );
}

export default withRouter(Book);