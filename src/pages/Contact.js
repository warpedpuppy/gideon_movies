import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap';
import './Contact.css';
export default class Contact extends Component {

    onSubmitHandler = (e)  => {
        e.preventDefault();
    }
    render() {
        return (
            <section>
                <div className="contact-div">
                <img src="/bmps/skateboard.jpeg" alt="gideon with bruno" className="contact-background-image" />
                    <h3>Contact Gideon:</h3>
                    <Form onSubmit={this.onSubmitHandler}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>email address:</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>message:</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button type="submit" variant="outline-primary">send form</Button>
                    </Form>
                    <div className="results"></div>
                </div>
            </section>
        )
    }
}
