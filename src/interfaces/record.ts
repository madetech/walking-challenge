export interface UpdatedRecord {
    createdTime: string;
    fields: {
      "Team Name": string;
      Walker: string;
      "Week 1 (km)": number;
      "Week 2 (km)": number;
      "Week 3 (km)": number;
      "Week 4 (km)": number;
      total: number;
      Walkers: string[];
    };
    id: string;
}

export interface ApiRecord {
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