import { Col, Container, Row } from "react-bootstrap";
import ResultsTable from "./components/ResultsTable";
import logo from "./assets/made-tech-logo.png";
import "./App.css";

function App() {
  return (
    <Container fluid>
      <Row className="header">
        <Col>
          <img src={logo} alt="Made Tech Logo" className="logo" />
        </Col>
        <Col>
          <h1 className="title">Walking Challenge: April 2021</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ResultsTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
