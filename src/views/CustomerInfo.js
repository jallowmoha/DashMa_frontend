import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function User() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    tin_number: "",
    phone_number: "",
    DOB: "",
    loan_amount: "",
    start_date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/api/add_customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (response.status === 201) {
      toast.success("Customer added successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({
        first_name: "",
        last_name: "",
        address: "",
        email: "",
        tin_number: "",
        phone_number: "",
        DOB: "",
        loan_amount: "",
        start_date: "",
      });
    } else {
      toast.error("Error adding customer", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Customer Information</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          name="first_name"
                          placeholder="First Name"
                          type="text"
                          value={formData.first_name}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          name="last_name"
                          placeholder="Last Name"
                          type="text"
                          value={formData.last_name}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          name="address"
                          placeholder="Home Address"
                          type="text"
                          value={formData.address}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          name="email"
                          placeholder="Email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Tin Number</label>
                        <Form.Control
                          name="tin_number"
                          placeholder="Tin Number"
                          type="number"
                          value={formData.tin_number}
                          onChange={handleChange}

                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Phone Number</label>
                        <Form.Control
                          name="phone_number"
                          placeholder="Phone Number"
                          type="number"
                          value={formData.phone_number}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Date Of Birth</label>
                        <Form.Control
                          name="DOB"
                          placeholder="DOB"
                          type="date"
                          value={formData.DOB}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                
                  </Row>
            
                  <div className="clearfix"></div>
                  <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Loan Information</Card.Title>
              </Card.Header>
              <Card.Body>
                
                
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Loan Amount</label>
                        <Form.Control
                          name="loan_amount"
                          placeholder="Enter Loan Amount"
                          type="number"
                          value={formData.loan_amount}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label> Start Date </label>
                        <Form.Control
                          name="start_date"
                          placeholder="Enter Date"
                          type="Date"
                          value={formData.start_date}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="clearfix"></div>
                  <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                 >
                  Submit
                  </Button>
                
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
       
       
      </Container>
    </>
  );
}

export default User;
