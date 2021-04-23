import React, { Component } from 'react'

let Person = (props) => {
    return (
        <div>
            <h3>Name: {props.name} Age: {props.age} and Profession: {props.profession}</h3>
        </div>
    );
}

export default Person;