import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
export default function Register(){
  const navigate = useNavigate();
  function submitForm(){
    let username = document.getElementById("username-reg").value;

    navigate("/profile",{state:{login:true,username:username}});
    
  }
  return(<><div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',height:'90vh'}}>
    <Card style={{border: '1px solid #FFD8E4',padding:'2rem'}}>
      <Form onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control id="username-reg" type="text" placeholder="Enter Username..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address..." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password..." />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form></Card></div>
    </>);
}
