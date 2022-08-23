import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import singapore1 from './singapore1.jpg';
import Malasiya from './Malaysia.jpg';
import Vietnam from './Vietnam.png';
import Thailand from './Thailand.jpg'
import Bali from './Bali.jpg';
import Maldives from './Maldives.jpg'
import "./Trip_Card_Carousel.css";
import { Homepage_Navbar } from '../Homepage/Homepage_Navbar/Homepage_Navbar.js';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



export function Trip_Card_Carousel() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div className='Trip_Card_Bg'>
      <div> <Homepage_Navbar /> </div>
      <Row xs={1} sm={2} md={4} lg={5} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={singapore1} />
            <Card.Body>
              <Card.Title>Singapore</Card.Title>
              <Card.Text>
                Starting at ₹19,700 per person
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Malasiya} />
            <Card.Body>
              <Card.Title>Malasiya</Card.Title>
              <Card.Text>
                Starting at ₹20,000 per person
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={Vietnam} />
            <Card.Body>
              <Card.Title>Vietnam</Card.Title>
              <Card.Text>
                Starting at ₹20,000 per person
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={Thailand} />
            <Card.Body>
              <Card.Title>Thailand</Card.Title>
              <Card.Text>
                Starting at ₹28,000 per person
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={Bali} />
            <Card.Body>
              <Card.Title>Bali</Card.Title>
              <Card.Text>
                Starting at ₹20,000 per person
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>


        <Col>
          <Card>
            <Card.Img variant="top" src={Maldives} />
            <Card.Body>
              <Card.Title>Maldieves</Card.Title>
              <Card.Text>
                Starting at ₹18,000 per person
              </Card.Text>
              <Button variant="dark" onClick={handleShow}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Enter the Following Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" Id="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>

            <Form.Group className="mb-3" Id="formBasicMobile">
              <Form.Label>Mobile_Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Mobile Number" />
           
            </Form.Group>

            <Form.Group className="mb-3" Id="formBasicPerson">
              <Form.Label>No of Persons</Form.Label>
              <Form.Control type="number" placeholder="No of Persons" />
            </Form.Group>
            <Form.Group className="mb-3" Id="formBasicStartdate">
              <Form.Label>Start date</Form.Label>
              <Form.Control type="date"  />
            </Form.Group>

            <Form.Group className="mb-3" Id="formBas">
              <Form.Label>End date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>


          </Form>

          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'>
              Submit
            </Button>
        </Modal.Footer>
      </Modal>





    </div>
  );



}