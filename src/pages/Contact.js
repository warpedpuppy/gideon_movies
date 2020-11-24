import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap';
import './Contact.css';
import Config from '../config';
export default class Contact extends Component {
    state = {
        message: ""
    }
    onSubmitHandler = async (e)  => {
        e.preventDefault();
        let email = e.target.email.value,
            message = e.target.message.value,
            checker = e.target.checker.value;
        this.setState({message: "sending. . . "})
        if (email && message) {
            let response = await fetch(`${Config.url}`, {
                body: JSON.stringify({ email, message, checker }),
                headers: {
                 'content-type': 'application/json',
                },
                method: "POST"
            });

            if (!response.ok) {
                 this.setState({message: "there was an issue, please try again later"})
                document.getElementById("contact-form").reset()
            } else {
               // let responseJson = await response.json();
                this.setState({message: "message sent"})
                document.getElementById("contact-form").reset()
            }
        } else {
            this.setState({message: "all fields required"})
        }
    }
    render() {
        return (
            <section>
                <div className="contact-div">
                <div className="contact-background-image"></div>
                    <h3>Contact Gideon:</h3>
                    <Form id="contact-form" onSubmit={this.onSubmitHandler}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>email address:</Form.Label>
                            <Form.Control type="email" name="email" placeholder="name@example.com" required/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>message:</Form.Label>
                            <Form.Control as="textarea" name="message" rows={3} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="input" name="checker" />
                        </Form.Group>
                        <Button type="submit" variant="outline-primary">send form</Button>
                    </Form>
                    <div className="results">{this.state.message}</div>
                </div>
            </section>
        )
    }
}
