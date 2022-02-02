import axios from "axios";
import { ApiRecord } from "../interfaces/record";

export interface Record {
    createdTime: string;
    fields: {
      "Team Name": string;
      Walker: string;
      "Week 1 (km)": number;
      "Week 2 (km)": number;
      "Week 3 (km)": number;
      "Week 4 (km)": number;
      total: number;
    };
    id: string;
}

interface ResponseInterface {
  data: {
    records: ApiRecord[];
  };
}

export const getMonthsLeaderboard = async (year:string,month:string) => {
  try {
    const response: ResponseInterface = await axios.get(
      `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${month}${year.substring(2)}`,
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
