import './App.css';
import NavBar from './componenets/Navbar';
import Form from './componenets/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './componenets/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <Container>
      <Row>
      <NavBar ></NavBar>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <Row>
        <Col></Col>
        <Col sm={8}><Form></Form></Col>
        <Col></Col>
      </Row>
    </Container>
    <br/>
      <br/>
      <br/>

    </div>
  );
}

export default App;
