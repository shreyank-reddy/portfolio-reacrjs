import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: 'raoshreyankreddy@gmail.com'
    };

    emailjs.send('service_apple', 'template_apple', templateParams, 'vgaCvy4dbkk9ObwS9')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <section className="contact" id="connect" style={{ backgroundColor: "black" }}>
      <Container style={{
        backgroundColor: "black",
        border: '2px solid white',
        boxShadow: '0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white',
        padding: '20px'
      }}>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>Contact</h1>
        <Row>
          <Col md={6}>
            <div style={{ marginTop: '50px' }}>
              <img 
                src="https://cdn.dribbble.com/users/1604313/screenshots/6905805/contact-illustration.gif" 
                alt="Contact" 
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </div>
          </Col>
          <Col md={6} style={{ display: 'flex', alignItems: 'center' }}>
            <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Form.Group controlId="formName">
                <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label style={{ color: 'white' }}>Phone Number</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label style={{ color: 'white' }}>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Enter your message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}
                />
              </Form.Group>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="light" type="submit">
                  Send
                </Button>
              </div>

            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
