import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class NewBook extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     bookName: "",
        //     writer: "",
        //     price: 0
        // }
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.bookName = React.createRef();
        this.writer = React.createRef();
        this.price = React.createRef();

    }

    handleSubmit = event => {
        console.log(this.bookName.current.value);
        console.log(this.writer.current.value);
        console.log(this.price.current.value);
        event.preventDefault();
    }


    // handleInputChange = event => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //         [name]: value
    //     });
    // }

    render() {
        return (
            <div className="container" >
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="bookName" sm={2}>Book Name:</Label>
                        <Input type="text" name="bookName" placeholder="enter book name" innerRef={this.bookName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="writer" sm={2}>Writer</Label>
                        <Input type="text" name="writer" placeholder="enter writer name" innerRef={this.writer} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price" sm={2}>Price</Label>
                        <Input type="number" name="price" placeholder="input book price" innerRef={this.price} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default NewBook;