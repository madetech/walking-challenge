import TableRow from "./TableRow";
import "./ResultsTable.css";
import { Row, Table } from "react-bootstrap";
import { UpdatedRecord } from "../interfaces/record";

interface ResultsTableProps {
  tableValues: UpdatedRecord[];
}

const ResultsTable = ({ tableValues }: ResultsTableProps) => {
  let rows: JSX.Element[] = [];
  generateTableRows(tableValues, rows);
  return (
    <Table>
      <thead>
        <tr className="header-row">
          <th>Team</th>
          <th>
            <Row>Week 1 (km)</Row>
          </th>
          <th>
            <Row>Week 2 (km)</Row>
          </th>
          <th>
            <Row>Week 3 (km)</Row>
          </th>
          <th>
            <Row>Week 4 (km)</Row>
          </th>
          <th>Total (km)</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

const generateTableRows = (
  tableValues: UpdatedRecord[],
  rows: JSX.Element[]
) => {
  tableValues.forEach((row) => {
    rows.push(
      <TableRow
        rowData={{
          teamName: row.fields["Team Name"],
          week1: row.fields["Week 1 (km)"],
          week2: row.fields["Week 2 (km)"],
          week3: row.fields["Week 3 (km)"],
          week4: row.fields["Week 4 (km)"],
          total: row.fields.total,
          walkers: row.fields.Walkers,
        }}
      />
    );
  });
};

export default ResultsTable;
