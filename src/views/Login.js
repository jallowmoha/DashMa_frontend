import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem('access_token', data.access_token);
        history.push('/admin/user');
      } else {
        console.log('Error logging in');
      }
      
  };

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
              <div className="logo-img">
              <img src={require("assets/img/logo.png")}  style={{height: 30, width: 30,
          }} alt="..." />
            </div>
                <span className="h1 fw-bold mb-0">Dash-Ma</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

              <form onSubmit={handleSubmit}>
                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name="email" value={formData.email} onChange={handleChange} />
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" name="password" value={formData.password} onChange={handleChange} />

                <MDBBtn className="mb-4 px-5" color='dark' size='lg' type="submit">Login</MDBBtn>
              </form>

              

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login
