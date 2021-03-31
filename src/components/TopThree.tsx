import { Row, Col } from "react-bootstrap";
import { Record } from "../gateways/airtable";
import "./TopThree.css";

interface TopThreeProps {
  tableValues: Record[];
}

const TopThree = ({ tableValues }: TopThreeProps) => {
  const firstPlace = tableValues[0]?.fields;
  const secondPlace = tableValues[1]?.fields;
  const thirdPlace = tableValues[2]?.fields;

  const renderFirstPlace = () => {
    if (firstPlace?.total === 0) {
      return (
        <div id="first">
          🥇 1st Place: ???
        </div>
      )
    }
    return (
      <div id="first">
        🥇 1st Place:{" "}
        <span className="team-name">{firstPlace["Team Name"]}</span>
      </div>
    );
  };

  const renderSecondPlace = () => {
    if (secondPlace?.total === 0) {
      return (
        <div id="second">
          🥈 2nd Place: ???
        </div>
      )
    }
    return (
      <div id="second">
        🥈 2nd Place:{" "}
        <span className="team-name">{secondPlace["Team Name"]}</span>
      </div>
    );
  };

  const renderThirdPlace = () => {
    if (thirdPlace?.total === 0) {
      return (
        <div id="third">
          🥉 3rd Place: ???
        </div>
      )
    }
    return (
      <div id="third">
        🥉 3rd Place:{" "}
        <span className="team-name">{thirdPlace["Team Name"]}</span>
      </div>
    );
  };

  if (tableValues.length >= 3) {
    return (
      <div className="ranking">
        <Row>
          <Col>
            {renderFirstPlace()}
          </Col>
        </Row>
        <Row>
          <Col>
            {renderSecondPlace()}
          </Col>
          <Col>
            {renderThirdPlace()}
          </Col>
        </Row>
      </div>
    );
  } else {
    return null;
  }
};

export default TopThree;
