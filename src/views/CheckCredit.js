import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Table,
} from "react-bootstrap";

function Typography() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    tin_number: "",
    DOB: "",
  });
  const [creditScore, setCreditScore] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `/api/get_customer_credit_score?first_name=${formData.first_name}&last_name=${formData.last_name}&tin_number=${formData.tin_number}&DOB=${formData.DOB}`
    );

    if (response.status === 200) {
      const data = await response.json();
      setCreditScore(data);
      setFormData({
        first_name: "",
        last_name: "",
        tin_number: "",
        DOB: "",
      });
    } else {
      setCreditScore([]);
      alert("Credit score not found");
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Check Customer Credit Score</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          placeholder="First Name"
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          placeholder="Last Name"
                          type="text"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Tin Number</label>
                        <Form.Control
                          placeholder="Tin Number"
                          type="number"
                          name="tin_number"
                          value={formData.tin_number}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Date Of Birth</label>
                        <Form.Control
                          placeholder="DOB"
                          type="date"
                          name="DOB"
                          value={formData.DOB}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button className="btn-fill pull-right" type="submit" variant="info">
                    Submit
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Loan Information</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Customer ID</th>
                      <th>Credit Score</th>
                      </tr>
                      </thead>
                      <tbody>
                        {creditScore.map((credit) => (
                          <tr key={credit.customer_id}>
                            <td>{credit.customer_id}</td>
                            <td>{credit.credit_score}</td>
                          </tr>
                        ))}
                      </tbody>
                      </Table>
                      </Card.Body>
                      </Card>
                      </Col>
                      </Row>
                      </Container>
                      </>
                      );
}

export default Typography;

