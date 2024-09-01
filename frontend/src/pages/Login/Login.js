import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
export default function Login(){
  const navigate = useNavigate();
  function submitForm(){
    navigate("/profile",{state:{login:true}});
  }
  return(<><div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',height:'90vh'}}>
    <Card style={{border: '1px solid #FFD8E4',padding:'2rem'}}>
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Adress..." />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password..." />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form></Card>
      </div>
    </>);
}
