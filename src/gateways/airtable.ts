import axios from "axios";

export const getLeaderboard = async () => {
  try {
    const response = await axios.get(
      "https://api.airtable.com/v0/appXKOOJYsSOmdSwD/Leaderboard",
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    );
    return response.data.records;
  } catch (error) {
    console.warn(error);
    return [];
  }
};
