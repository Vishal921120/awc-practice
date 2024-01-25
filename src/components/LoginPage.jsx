import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginPage = ({onLogin}) => {

   let [formData , setFormData] = useState({
    email : '',
    password : ''
  });

  let pass = "awc@12345";
  let gmail = "vishal@gmail.com"

  const handleChange = (e) => {
    e.preventDefault();

    let type = e.target.type;

    switch(type){
      case "email" : setFormData({
        ...formData,
        email : `${e.target.value}`,
      })
      break;

      case "password" : setFormData({
        ...formData,
        password : `${e.target.value}`
      })
      break;

      default : 
    }
  }

  const handleSubmit = () => {
    if(formData.email === gmail && formData.password === pass){
       console.log("i am here")
       onLogin("true");
    }else {
       console.log("i am in false")
       onLogin("false");
    }
  }

  return (
    <div className="h-75 w-25 p-3 bg-dark rounded-1 text-white" style={{marginLeft:'40%', marginBottom:'15%', border:'1px solid red'}}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required="true"
            value={formData.email}
            onChange={e => handleChange(e)}
          />
          <Form.Text className="text-white">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          required="true"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={formData.password} onChange={e => handleChange(e)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>

       <div>
        <h1>{formData.email}</h1>
        <h2>{formData.password}</h2>
       </div>
    </div>
  );
};

export { LoginPage };