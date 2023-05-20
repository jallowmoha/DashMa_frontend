import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

function TableList() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    tin_number: "",
    DOB: "",
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(formData).toString();
    const response = await fetch(`http://127.0.0.1:5000/api/search_customer_loan?${queryParams}`);

    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      setData(result);
      setFormData({
        first_name: "",
        last_name: "",
        tin_number: "",
        DOB: "",
      });
    } else {
      setData([]);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Search Loan Information</Card.Title>
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
                  <div className="clearfix"></div>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Search
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
                      <th>Loan ID</th>
                      <th>Customer ID</th>
                      <th>Loan Amount</th>
                      <th>Interest Rate</th>
                      <th>Term (weeks)</th>
                      <th>Start Date</th>
                      <th>Balance</th>
                      </tr>
                      </thead>
                      <tbody>
                        {data.map((loan) => (
                          <tr key={loan.loan_id}>
                            <td>{loan.loan_id}</td>
                            <td>{loan.customer_id}</td>
                            <td>{loan.loan_amount}</td>
                            <td>{loan.interest_rate}</td>
                            <td>{loan.term_weeks}</td>
                            <td>{loan.start_date}</td>
                            <td>{loan.balance}</td>
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
                    
                    export default TableList;

