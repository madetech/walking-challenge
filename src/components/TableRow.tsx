export interface TableRowProps {
  rowData: {
    teamName: string;
    week1: number;
    week2: number;
    week3: number;
    week4: number;
    total: number;
  };
}

const TableRow = ({ rowData }: TableRowProps) => {
  const { week1, week2, week3, week4, total } = sanitisedFigures(rowData);
  return (
    <tr data-test={rowData.teamName}>
      <td data-test="team-name">{`${rowData.teamName}`}</td>
      <td data-test="week-1">{week1}</td>
      <td data-test="week-2">{week2}</td>
      <td data-test="week-3">{week3}</td>
      <td data-test="week-4">{week4}</td>
      <td data-test="total">{total}</td>
    </tr>
  );
};

const sanitisedFigures = (rowData: {
  teamName: string;
  week1: number;
  week2: number;
  week3: number;
  week4: number;
  total: number;
}) => {
  const week1 =
    rowData.week1.toString() === "NaN" ? 0 : rowData.week1.toFixed(2);
  const week2 =
    rowData.week2.toString() === "NaN" ? 0 : rowData.week2.toFixed(2);
  const week3 =
    rowData.week3.toString() === "NaN" ? 0 : rowData.week3.toFixed(2);
  const week4 =
    rowData.week4.toString() === "NaN" ? 0 : rowData.week4.toFixed(2);
  const total =
    rowData.total.toString() === "NaN" ? 0 : rowData.total.toFixed(2);
  return { week1, week2, week3, week4, total };
};

export default TableRow;
