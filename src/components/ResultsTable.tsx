import { useEffect, useState } from "react";
import { Record } from "../gateways/airtable";
import getTableValues from "../usecases/getTableValues";
import TableRow from "./TableRow";
import "./ResultsTable.css";
import { Table } from "react-bootstrap";

const ResultsTable = () => {
  const [tableValues, setTableValues] = useState<Record[]>([]);

  useEffect(() => {
    getTableValues().then((result) => setTableValues(result));
  }, []);
  let rows: JSX.Element[] = [];
  generateTableRows(tableValues, rows);
  return (
    <Table>
      <thead>
        <tr className="header-row">
          <th>Team</th>
          <th>Week 1</th>
          <th>Week 2</th>
          <th>Week 3</th>
          <th>Week 4</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
};

const generateTableRows = (tableValues: Record[], rows: JSX.Element[]) => {
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
        }}
      />
    );
  });
};

export default ResultsTable;
