import { getMonthsLeaderboard } from "../gateways/airtable";
import { Record } from "../gateways/airtable";
import { UpdatedRecord } from "../interfaces/record";

const getTableValues = async (year:string, month:string) => {
  const data = await getMonthsLeaderboard(year, month);
  let teamData: UpdatedRecord[] = [];
  sumTeamData(data, teamData);

  let orderedData: UpdatedRecord[] = [];
  orderedData = teamData.sort(compare);

  return orderedData;
};

function sumTeamData(data: Record[], teamData: UpdatedRecord[]) {
  data.forEach((row) => {
    const teamName = row.fields["Team Name"];
    const obj = teamData.find(
      (object) => object.fields["Team Name"] === teamName
    );
    const index = teamData.findIndex(
      (object) => object.fields["Team Name"] === teamName
    );
    if (obj) {
      teamData[index].fields["Week 1 (km)"] += row.fields["Week 1 (km)"];
      teamData[index].fields["Week 2 (km)"] += row.fields["Week 2 (km)"];
      teamData[index].fields["Week 3 (km)"] += row.fields["Week 3 (km)"];
      teamData[index].fields["Week 4 (km)"] += row.fields["Week 4 (km)"];
      teamData[index].fields["total"] += row.fields["total"];
      teamData[index].fields["Walkers"].push(row.fields["Walker"])
    } else {
      const mappedRecord: UpdatedRecord = {
        createdTime: row.createdTime,
        fields: {
          "Team Name": row.fields["Team Name"],
          Walker: row.fields.Walker,
          "Week 1 (km)": row.fields["Week 1 (km)"],
          "Week 2 (km)": row.fields["Week 2 (km)"],
          "Week 3 (km)": row.fields["Week 3 (km)"],
          "Week 4 (km)": row.fields["Week 4 (km)"],
          total: row.fields.total,
          Walkers: [row.fields.Walker],
        },
        id: row.id,
      }
      teamData.push(mappedRecord);
    }
  });
}

const compare = (a: Record, b: Record) => {
  const teamA = a.fields.total;
  const teamB = b.fields.total;

  let comparison = 0;
  if (teamA < teamB) {
    comparison = 1;
  } else if (teamA > teamB) {
    comparison = -1;
  }
  return comparison;
};

export default getTableValues;
