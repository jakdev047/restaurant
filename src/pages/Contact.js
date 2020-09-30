import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { actions, Control, Errors, Form } from 'react-redux-form';
import { Alert, Button, Col, FormGroup, Label } from 'reactstrap';
import { baseURL } from '../data/baseUrl';

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));

// abc@gmail.com
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {

    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }

    submitHandler = values => {
        axios.post(`${baseURL}/feedback`,values)
            .then(response=>response.status)
            .then(status=>{
                if( status === 201 ){
                    this.setState({
                        alertShow: true,
                        alertText: "Successfully Submitted",
                        alertType: "success"
                    })
                    setTimeout(()=>{
                        this.setState({
                            alertShow: false
                        })
                    },1500)
                }
            })
            .catch(error=>console.log(error))
        
        this.props.resetFeedBackForm();
    }

    render() {
        document.title = "Contact";
        return (
            <Fragment>
                <div className="container">
                    <div className="row row-content" style={{paddingLeft:"20px",textAlign:"left"}}>
                        <div className="col-12">
                            <h3 className="py-3 text-center">Send Us Your Feedback</h3>
                            <Alert 
                                isOpen={this.state.alertShow}
                                color={this.state.alertType}
                            >
                                {this.state.alertText}
                            </Alert>
                        </div>
                        <div className="col-12">
                            <Form model="feedback" onSubmit={values=>this.submitHandler(values)}>
                                <FormGroup row>
                                    <Label md={3}>First Name:</Label>
                                    <Col md={7}>
                                        <Control.text 
                                            model=".fname"
                                            name="fname"
                                            className="form-control"
                                            validators={{ required }}
                                        />
                                        <Errors 
                                            className="text-danger" 
                                            model=".fname" 
                                            show="touched" 
                                            messages={
                                                {
                                                    required: "Required"
                                                }
                                            }
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
                                            validators={{ required }}
                                        />
                                        <Errors 
                                            className="text-danger" 
                                            model=".lname" 
                                            show="touched" 
                                            messages={
                                                {
                                                    required: "Required"
                                                }
                                            }
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
                                            validators={{ required, isNumber }}
                                         />
                                         <Errors 
                                            className="text-danger" 
                                            model=".telNum" 
                                            show="touched" 
                                            messages={
                                                {
                                                    required: "Required",
                                                    isNumber: "Number is Required"
                                                }
                                            }
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
                                            validators={{ required, validEmail }}
                                        />
                                        <Errors 
                                            className="text-danger" 
                                            model=".email" 
                                            show="touched" 
                                            messages={
                                                {
                                                    required: "Required",
                                                    validEmail: "Invalid Email"
                                                }
                                            }
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
                                        <Control.textarea className="form-control" model=".message" name="message" rows={6} validators={{ required }}/>
                                        <Errors 
                                            className="text-danger" 
                                            model=".message" 
                                            show="touched" 
                                            messages={
                                                {
                                                    required: "Required"
                                                }
                                            }
                                        />
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

const mapDispatchToProps = dispatch => {
    return {
        resetFeedBackForm: () => {dispatch(actions.reset('feedback'))}
    }
}

export default connect(null,mapDispatchToProps)(Contact);
