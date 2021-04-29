import React from 'react';

const BookDetail = props => {
    console.log(props.book);
    if (props.book === null) return <div></div>
    else
        return (
            <div>
                <h1>{props.book.bookName}</h1>
                <h3>{props.book.writer}</h3>
                <h3>{props.book.price}</h3>
            </div>
        );
}

export default BookDetail;