import { getLeaderboard } from "../gateways/airtable";
import { Record } from "../gateways/airtable";

const getTableValues = async () => {
  const data = await getLeaderboard();
  let teamData: Record[] = [];
  sumTeamData(data, teamData);
  return teamData;
};

function sumTeamData(data: Record[], teamData: Record[]) {
  data.forEach((row) => {
    const teamName = row.fields["Team Name"];
    const obj = teamData.find(object => object.fields["Team Name"] === teamName);
    const index = teamData.findIndex(object => object.fields["Team Name"] === teamName);
    if (obj) {
      teamData[index].fields["Week 1 (km)"] += row.fields["Week 1 (km)"];
      teamData[index].fields["Week 2 (km)"] += row.fields["Week 2 (km)"];
      teamData[index].fields["Week 3 (km)"] += row.fields["Week 3 (km)"];
      teamData[index].fields["Week 4 (km)"] += row.fields["Week 4 (km)"];
      teamData[index].fields["total"] += row.fields["total"];
    } else {
      teamData.push(row);
    }
  });
}

export default getTableValues;
