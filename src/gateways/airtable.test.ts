import axios from "axios";
import { getMonthsLeaderboard } from "./airtable";

jest.mock("axios");

describe("airtable", () => {
  const expectation = [
    {
      createdTime: "2021-03-25T16:53:14.000Z",
      fields: {
        "Team Name": "People",
        Walker: "Jim Jimmy",
        "Week 1 (km)": 56,
        "Week 2 (km)": 12,
        "Week 3 (km)": 2,
        "Week 4 (km)": 100,
        "total": 170
      },
      id: "rec5ecRyl8vX0p6f2",
    },
    {
      createdTime: "2021-03-25T16:53:14.000Z",
      fields: {
        "Team Name": "Doggos",
        Walker: "Betty",
        "Week 1 (km)": 100,
        "Week 2 (km)": 110.945,
        "Week 3 (km)": 13.45,
        "Week 4 (km)": 31.23,
        "total": 220.945
      },
      id: "rec8tPxPIlPHMsI6Q",
    },
    {
      createdTime: "2021-03-25T16:53:14.000Z",
      fields: {
        "Team Name": "People",
        Walker: "Bob Boberson",
        "Week 1 (km)": 42,
        "Week 2 (km)": 43,
        "Week 3 (km)": 44,
        "Week 4 (km)": 45,
        "total": 130
      },
      id: "recPRbhqslrKlWQ2h",
    },
    {
      createdTime: "2021-03-25T22:50:22.000Z",
      fields: {
        "Team Name": "Doggos",
        Walker: "Olga",
        "Week 1 (km)": 98.43,
        "Week 2 (km)": 101,
        "Week 3 (km)": 23.45,
        "Week 4 (km)": 100,
        "total": 123
      },
      id: "recdAbXFcs7FedAoq",
    },
  ];
  const mockApiResponse = {
    data: {
      records: expectation,
    },
  };

  const mockedAxios = axios as jest.Mocked<typeof axios>;

  it("returns the response", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve(mockApiResponse)
    );
    const response = await getMonthsLeaderboard("Feb", "22");
    expect(response).toStrictEqual(expectation);
  });
});
