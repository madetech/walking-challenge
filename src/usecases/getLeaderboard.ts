import { getLeaderboard } from "../gateways/airtable";

const getTableValues = async () => {
  const data = await getLeaderboard();
  return data;
};

export default getTableValues;
