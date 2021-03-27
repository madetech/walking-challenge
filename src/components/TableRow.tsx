export interface TableRowProps {
  rowData: {
    teamName: string;
    week1: number;
    week2: number;
    week3: number;
    week4: number;
  };
}

const TableRow = ({ rowData }: TableRowProps) => {
  console.log(rowData.teamName);
  const total = rowData.week1 + rowData.week2 + rowData.week3 + rowData.week4;
  return (
    <tr data-test={rowData.teamName}>
      <td data-test="team-name">{`${rowData.teamName}`}</td>
      <td data-test="week-1">{rowData.week1.toFixed(2)}</td>
      <td data-test="week-2">{rowData.week2.toFixed(2)}</td>
      <td data-test="week-3">{rowData.week3.toFixed(2)}</td>
      <td data-test="week-4">{rowData.week4.toFixed(2)}</td>
      <td data-test="total">{total.toFixed(2)}</td>
    </tr>
  );
};

export default TableRow;
