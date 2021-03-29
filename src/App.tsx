import { Col, Container, Row } from "react-bootstrap";
import ResultsTable from "./components/ResultsTable";
import TopThree from "./components/TopThree";
import logo from "./assets/made-tech-logo.png";
import "./App.css";
import { useEffect, useState } from "react";
import { Record } from "./gateways/airtable";
import getTableValues from "./usecases/getTableValues";

const App = () => {
  const [tableValues, setTableValues] = useState<Record[]>([]);

  useEffect(() => {
    getTableValues().then((result) => setTableValues(result.orderedTeamData));
  }, []);

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
      <TopThree tableValues={tableValues} />
      <Row>
        <Col>
          <ResultsTable tableValues={tableValues} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
