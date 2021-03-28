import { useEffect, useState } from "react";
import { Record } from "../gateways/airtable";
import getTableValues from "../usecases/getTableValues";
import TableRow from "./TableRow";

const ResultsTable = () => {
  const [tableValues, setTableValues] = useState<Record[]>([]);

  useEffect(() => {
    getTableValues().then((result) => setTableValues(result));
  }, []);
  let rows: JSX.Element[] = [];
  generateTableRows(tableValues, rows);
  return (
    <table>
      <tr>
        <th>Team</th>
        <th>Week 1</th>
        <th>Week 2</th>
        <th>Week 3</th>
        <th>Week 4</th>
        <th>Total</th>
      </tr>
      {rows}
    </table>
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
}

export default ResultsTable;
