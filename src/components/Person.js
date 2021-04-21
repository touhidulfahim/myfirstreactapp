import React, { Component } from 'react'

let Person = (props) => {
    return (
        <div>
            <h3>Name: {props.name} Age: {props.age} and Profession: {props.profession}</h3>
        </div>
    );
}

// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h3>Name: {this.props.name} Age: {this.props.age} and Profession: {this.props.profession}</h3>
//             </div>
//         );
//     }
// }




export default Person;