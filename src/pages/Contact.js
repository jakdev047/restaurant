import React, { Component, Fragment } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            telNum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler = e => {
        const value = e.target.value === 'checkbox' ? e.target.checkbox : e.target.value;
        const name = e.target.name;
        this.setState({
            [name]:value
        });
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row row-content" style={{paddingLeft:"20px",textAlign:"left"}}>
                        <div className="col-12">
                            <h3 className="py-3 text-center">Send Us Your Feedback</h3>
                        </div>
                        <div className="col-12">
                            <Form onSubmit={this.submitHandler}>
                                <FormGroup row>
                                    <Label md={3}>First Name:</Label>
                                    <Col md={7}>
                                        <Input type="text" name="fname" value={this.state.fname} onChange={this.changeHandler} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={3}>Last Name:</Label>
                                    <Col md={7}>
                                        <Input type="text" name="lname" value={this.state.lname} onChange={this.changeHandler} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={3}>Telephone Number:</Label>
                                    <Col md={7}>
                                        <Input type="tel" name="telNum" value={this.state.telNum} onChange={this.changeHandler} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={3}>Email:</Label>
                                    <Col md={7}>
                                        <Input type="email" name="email" value={this.state.email} onChange={this.changeHandler} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:3,offset:3}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.changeHandler}/>
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size:2,offset:1}}>
                                        <Input type="select" name="contactType" value={this.state.contactType} onChange={this.changeHandler}>
                                            <option>Tel.</option>
                                            <option>Email.</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={3}>Your Feedback:</Label>
                                    <Col md={7}>
                                        <Input type="textarea" name="message" value={this.state.message} onChange={this.changeHandler} rows={6}>

                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col md={{size:7,offset:3}}>
                                        <Button type="submit" color="primary">Submit</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};

export default Contact;
