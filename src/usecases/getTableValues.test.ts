import getTableValues from "./getTableValues";
import { getLeaderboard, Record } from "../gateways/airtable";
import { UpdatedRecord } from "../interfaces/record";

jest.mock("../gateways/airtable");

function mockFunction<T extends (...args: any[]) => any>(
  fn: T
): jest.MockedFunction<T> {
  return fn as jest.MockedFunction<T>;
}

describe("getTableValues", () => {
  const getLeaderboardMock = mockFunction(getLeaderboard);

  it("Combines teams successfully", async () => {
    const mockResponse: Record[] = [
      {
        createdTime: "2021-03-25T16:53:14.000Z",
        fields: {
          "Team Name": "Doggos",
          Walker: "Betty",
          "Week 1 (km)": 100,
          "Week 2 (km)": 110.945,
          "Week 3 (km)": 13.45,
          "Week 4 (km)": 31.23,
          total: 220.945,
        },
        id: "rec8tPxPIlPHMsI6Q",
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
          total: 123,
        },
        id: "recdAbXFcs7FedAoq",
      },
    ];

    const expectedResult: UpdatedRecord[] = [
      {
        createdTime: "2021-03-25T16:53:14.000Z",
        fields: {
          "Team Name": "Doggos",
          Walker: "Betty",
          Walkers: ["Betty", "Olga"],
          "Week 1 (km)": 198.43,
          "Week 2 (km)": 211.945,
          "Week 3 (km)": 36.9,
          "Week 4 (km)": 131.23,
          total: 343.945,
        },
        id: "rec8tPxPIlPHMsI6Q",
      },
    ];

    getLeaderboardMock.mockReturnValue(Promise.resolve(mockResponse));

    const response = await getTableValues();

    expect(response).toStrictEqual(expectedResult);
  });
});
