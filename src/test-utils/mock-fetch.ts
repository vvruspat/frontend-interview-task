import { error401Data } from "./test-data/error";
import { feedbacksData } from "./test-data/feedbacks";
import { jwtData } from "./test-data/jwt";
import { themesData } from "./test-data/themes";

export function mockFetch() {
  let status: number = 200;

  return {
    setStatus: (newStatus: number) => {
      status = newStatus;
    },

    fetch: jest.fn().mockImplementation((url: string) => {
      if (status !== 200) {
        return Promise.reject(error401Data);
      }

      if (url.indexOf("/api/reviews") !== -1) {
        return Promise.resolve({
          ok: true,
          status: status,
          json: () => Promise.resolve({ data: feedbacksData }),
        });
      }

      if (url.indexOf("/api/themes") !== -1) {
        return Promise.resolve({
          ok: true,
          status: status,
          json: () => Promise.resolve({ data: themesData }),
        });
      }

      if (url.indexOf("/login") !== -1) {
        return Promise.resolve({
          ok: true,
          status: status,
          json: () => Promise.resolve(jwtData),
        });
      }

      return Promise.resolve({
        ok: true,
        status: status,
        json: () => {},
      });
    }),
  };
}
