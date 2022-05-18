import { jwtData } from "../../test-utils/test-data/jwt";
import { ApiError } from "../../types/api.type";
import { EFetchingStatus } from "../../types/fetching-status.type";
import reducer, { LoginState, setJWT, setError, setStatus } from "./loginSlice";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/login", (_req, res, ctx) => {
    return res(ctx.json(jwtData));
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
    jwt: null,
    status: EFetchingStatus.INIT,
    error: undefined,
  });
});

test("should change state to fetching", () => {
  const previousState: LoginState = {
    jwt: null,
    status: EFetchingStatus.INIT,
    error: undefined,
  };

  expect(reducer(previousState, setStatus(EFetchingStatus.FETCHING))).toEqual({
    jwt: null,
    status: EFetchingStatus.FETCHING,
    error: undefined,
  });
});

test("should change state to error", () => {
  const previousState: LoginState = {
    jwt: null,
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
    jwt: null,
    status: EFetchingStatus.INIT,
    error: apiError,
  });
});

test("should change jwt", () => {
  const previousState: LoginState = {
    jwt: null,
    status: EFetchingStatus.INIT,
    error: undefined,
  };

  expect(reducer(previousState, setJWT(jwtData))).toEqual({
    jwt: jwtData,
    status: EFetchingStatus.INIT,
    error: undefined,
  });
});
