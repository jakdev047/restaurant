import React, { Component, Fragment } from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { Button, Col, FormGroup, Input, Label } from 'reactstrap';

class Contact extends Component {

    submitHandler = values => {
        console.log(values);
    }

    render() {
        document.title = "Contact";
        return (
            <Fragment>
                <div className="container">
                    <div className="row row-content" style={{paddingLeft:"20px",textAlign:"left"}}>
                        <div className="col-12">
                            <h3 className="py-3 text-center">Send Us Your Feedback</h3>
                        </div>
                        <div className="col-12">
                            <LocalForm onSubmit={values=>this.submitHandler(values)}>
                                <FormGroup row>
                                    <Label md={3}>First Name:</Label>
                                    <Col md={7}>
                                        <Control.text 
                                            model=".fname"
                                            name="fname"
                                            className="form-control"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={3}>Last Name:</Label>
                                    <Col md={7}>
                                        <Control.text 
                                            model=".lname" 
                                            name="lname"
                                            className="form-control"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={3}>Telephone Number:</Label>
                                    <Col md={7}>
                                        <Control.text 
                                            model=".telNum" 
                                            name="telNum" 
                                            className="form-control"
                                         />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={3}>Email:</Label>
                                    <Col md={7}>
                                        <Control.text 
                                            model=".email" 
                                            name="email"
                                            className="form-control" 
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:3,offset:3}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Control.checkbox 
                                                    model=".agree" 
                                                    name="agree" 
                                                    className="form-check-input"
                                                />
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size:2,offset:1}}>
                                        <Control.select className="form-control" model=".contactType" name="contactType">
                                            <option>Tel.</option>
                                            <option>Email.</option>
                                        </Control.select>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={3}>Your Feedback:</Label>
                                    <Col md={7}>
                                        <Control.textarea className="form-control" model=".message" name="message" rows={6}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col md={{size:7,offset:3}}>
                                        <Button type="submit" color="primary">Submit</Button>
                                    </Col>
                                </FormGroup>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};

export default Contact;
