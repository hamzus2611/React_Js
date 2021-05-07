import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, Button } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <h1 style={{color:"red",fontSize:"30px"}}>Se connecter</h1>
      <Form className="col-md-5">
        <Form.Group controlId="formBasicEmail">
          
          <Form.Control type="email" placeholder="Adresse E-mail" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
         
          <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          connexion
  </Button>
      </Form>
    </div>
  );
}

export default App;
