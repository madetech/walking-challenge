import { useEffect, useState } from "react";
import getTableValues from "../usecases/getLeaderboard";
import TableRow from "./TableRow";

const ResultsTable = () => {
  const [tableValues, setTableValues] = useState([]);

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

function generateTableRows(tableValues: never[], rows: JSX.Element[]) {
  tableValues.forEach((row: { fields: { [x: string]: any } }) => {
    rows.push(
      <TableRow
        rowData={{
          teamName: row.fields["Team Name"],
          week1: row.fields["Week 1 (km)"],
          week2: row.fields["Week 2 (km)"],
          week3: row.fields["Week 3 (km)"],
          week4: row.fields["Week 4 (km)"],
        }}
      />
    );
  });
}

export default ResultsTable;
