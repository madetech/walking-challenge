import { Row, Col } from "react-bootstrap";
import { Record } from "../gateways/airtable";
import "./TopThree.css";

interface TopThreeProps {
  tableValues: Record[];
}

const TopThree = ({ tableValues }: TopThreeProps) => {
  if (tableValues.length >= 3) {
    return (
      <div className="ranking">
        <Row>
          <Col>
            <div id="first">
              🥇 1st Place: <span className="team-name">{tableValues[0].fields["Team Name"]}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="second">
              🥈 2nd Place: <span className="team-name">{tableValues[1].fields["Team Name"]}</span>
            </div>
          </Col>
          <Col>
            <div id="third">
              🥉 3rd Place: <span className="team-name">{tableValues[2].fields["Team Name"]}</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else {
    return null;
  }
};

export default TopThree;
