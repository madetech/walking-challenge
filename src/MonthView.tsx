import { Col, Container, Row } from "react-bootstrap";
import ResultsTable from "./components/ResultsTable";
import TopThree from "./components/TopThree";
import logo from "./assets/made-tech-logo.png";
import "./App.css";
import { useEffect, useState } from "react";
import getTableValues from "./usecases/getTableValues";
import { UpdatedRecord } from "./interfaces/record";
import TotalDistance from "./components/TotalDistance";
import { useParams } from "react-router-dom";

const MonthView = () => {
  let { month, year } = useParams();


  const [tableValues, setTableValues] = useState<UpdatedRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTableValues(String(year), String(month))
      .then((result) => setTableValues(result))
      .then(() => setLoading(false));
  }, [month, year]);

  let sumTotal = 0;
  tableValues.forEach((row) => {
    sumTotal += row.fields.total;
  });

  const header = (
    <Row className="header">
      <Col>
        <img src={logo} alt="Made Tech Logo" className="logo" />
      </Col>
      <Col>
        <h1 className="title">Walking Challenge: {month} {year}</h1>
      </Col>
    </Row>
  )

  if (loading) {
    return (
      <Container fluid>
        {header}
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
      {header}
      <Row>
        <Col>
          <TotalDistance distance={sumTotal} />
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

export default MonthView;
