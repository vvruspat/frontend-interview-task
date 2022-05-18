import {
  themesData,
  themesDataMapped,
} from "../../test-utils/test-data/themes";
import { ApiError } from "../../types/api.type";
import { EFetchingStatus } from "../../types/fetching-status.type";
import reducer, {
  ThemesState,
  setThemes,
  setError,
  setStatus,
} from "./themesSlice";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api/themes", (_req, res, ctx) => {
    return res(ctx.json({ data: themesData }));
  }),
);

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => {}),
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should return the initial state", () => {
  expect(reducer(undefined, { type: "" })).toEqual({
    themes: {},
    status: EFetchingStatus.INIT,
    error: undefined,
  });
});

test("should change state to fetching", () => {
  const previousState: ThemesState = {
    themes: {},
    status: EFetchingStatus.INIT,
    error: undefined,
  };

  expect(reducer(previousState, setStatus(EFetchingStatus.FETCHING))).toEqual({
    themes: {},
    status: EFetchingStatus.FETCHING,
    error: undefined,
  });
});

test("should change state to error", () => {
  const previousState: ThemesState = {
    themes: {},
    status: EFetchingStatus.INIT,
    error: undefined,
  };

  const apiError: ApiError = {
    status: 500,
    data: {
      code: 500,
      message: "Internal Server Error",
    },
  };

  expect(reducer(previousState, setError(apiError))).toEqual({
    themes: {},
    status: EFetchingStatus.INIT,
    error: apiError,
  });
});

test("should change themes length", () => {
  const previousState: ThemesState = {
    themes: {},
    status: EFetchingStatus.INIT,
    error: undefined,
  };

  expect(reducer(previousState, setThemes(themesData))).toEqual({
    themes: themesDataMapped,
    status: EFetchingStatus.INIT,
    error: undefined,
  });
});
