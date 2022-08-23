import React from "react";
import Form from 'react-bootstrap/Form';
import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export function End_User_Details_Form() {
  return (
    <>


      <div className="container p-5">
        <h1 className="text-center">End User Details Form</h1>
        <Form>
          <Form.Group className="mb-3 text-right" Id="End_user_formBasicName">
            <Link to='/Admin_Login/End_User_Details'>
              <Button variant='dark' size="sm">
                Back
              </Button>
            </Link>
          </Form.Group>
          <Form.Group className="mb-3" Id="End_user_formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="End_user_formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" Id="End_user_formBasicMobile">
            <Form.Label>Mobile_Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile Number" />
          </Form.Group>

          <Form.Group className="mb-3" Id="End_user_formBasicPerson">
            <Form.Label>Tours allocated</Form.Label>
            <Form.Control type="text" placeholder="Tours allocated" />
          </Form.Group>
          <Form.Group className="mb-3" Id="End_user_formBasicStartdate">
            <Form.Label>Tour status</Form.Label>

            <Form.Check type="radio" label="on going" name="Tour_Status" />
            <Form.Check type="radio" label="Completed" name="Tour_Status" />

          </Form.Group>

          <Form.Group className="mb-3 text-center" Id="End_user_formBasicStartdate">
          <Button type="submit" variant='primary'  size="sm" >
                Submit
              </Button>
          </Form.Group>

        </Form>
      </div>
    </>
  );
}