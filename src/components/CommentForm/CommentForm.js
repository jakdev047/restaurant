import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        // reset
        this.setState({
            author: '',
            rating: '',
            comment: ''
        })
    };

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.onSubmitHandler}>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input 
                            type="text"
                            id="author"
                            name="author"
                            value={this.state.author}
                            onChange={this.changeHandler}
                            placeholder="Enter Your Name"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rating">Rating</Label>
                        <Input 
                            type="select" 
                            id="rating" 
                            name="rating" 
                            value={this.state.rating}  
                            onChange={this.changeHandler}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="comment">Comment</Label>
                        <Input 
                            type="textarea"
                            id="comment"
                            name="comment"
                            value={this.state.comment}
                            onChange={this.changeHandler}
                            placeholder="Enter Your Comment"
                            required
                        />
                    </FormGroup>
                    <Button>Submit Comment</Button>
                </Form>
            </Fragment>
        )
    }
};

export default CommentForm;
