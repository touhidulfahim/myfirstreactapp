import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            writer: "",
            price: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        console.log(this.state)
        event.preventDefault();
    }


    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="container" >
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="bookName" sm={2}>Book Name:</Label>
                        <Input type="text" name="bookName" id="bookName" placeholder="enter book name" value={this.state.bookName} onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="writer" sm={2}>Writer</Label>
                        <Input type="text" name="writer" id="writer" placeholder="enter writer name" value={this.state.writer} onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price" sm={2}>Price</Label>
                        <Input type="number" name="price" id="writer" placeholder="input book price" value={this.state.price} onChange={this.handleInputChange} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default NewBook;