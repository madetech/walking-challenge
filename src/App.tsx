import { Col, Container, Row } from "react-bootstrap";
import ResultsTable from "./components/ResultsTable";
import TopThree from "./components/TopThree";
import logo from "./assets/made-tech-logo.png";
import "./App.css";
import { useEffect, useState } from "react";
import getTableValues from "./usecases/getTableValues";
import { UpdatedRecord } from "./interfaces/record";

const App = () => {
  const [tableValues, setTableValues] = useState<UpdatedRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTableValues()
      .then((result) => setTableValues(result))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
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
            <p>Loading...</p>
          </Col>
        </Row>
      </Container>
    );
  }

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
      <Row>
        <Col>
          <a
            href="https://airtable.com/tbl4avcoqiDB3hTv2/viwWNk8aHvdMW87Xq?blocks=hide"
            target="_blank"
            rel="noreferrer"
          >
            Add your scores
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
