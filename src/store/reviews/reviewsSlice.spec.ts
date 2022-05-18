import { feedbacksData } from "../../test-utils/test-data/feedbacks";
import { ApiError } from "../../types/api.type";
import { EFetchingStatus } from "../../types/fetching-status.type";
import reducer, {
  FeedbackState,
  addReviews,
  setError,
  setStatus,
  setTheme,
} from "./reviewsSlice";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api/reviews", (_req, res, ctx) => {
    return res(ctx.json({ data: feedbacksData }));
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
    reviews: [],
    status: EFetchingStatus.INIT,
    hasMore: true,
    error: undefined,
  });
});

test("should change state to fetching", () => {
  const previousState: FeedbackState = {
    reviews: [],
    status: EFetchingStatus.INIT,
    hasMore: true,
    error: undefined,
  };

  expect(reducer(previousState, setStatus(EFetchingStatus.FETCHING))).toEqual({
    reviews: [],
    status: EFetchingStatus.FETCHING,
    hasMore: true,
    error: undefined,
  });
});

test("should change state to error", () => {
  const previousState: FeedbackState = {
    reviews: [],
    hasMore: true,
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
    reviews: [],
    hasMore: false,
    status: EFetchingStatus.INIT,
    error: apiError,
  });
});

test("should change reviews length", () => {
  const previousState: FeedbackState = {
    reviews: [],
    hasMore: true,
    status: EFetchingStatus.INIT,
    error: undefined,
  };

  expect(reducer(previousState, addReviews(feedbacksData))).toEqual({
    reviews: feedbacksData,
    hasMore: true,
    status: EFetchingStatus.INIT,
    error: undefined,
  });
});

test("should change hasMore to false", () => {
  const previousState: FeedbackState = {
    reviews: [],
    hasMore: true,
    status: EFetchingStatus.INIT,
    error: undefined,
  };

  expect(reducer(previousState, addReviews([]))).toEqual({
    reviews: [],
    hasMore: false,
    status: EFetchingStatus.INIT,
    error: undefined,
  });
});

test("should change theme", () => {
  const previousState: FeedbackState = {
    reviews: [],
    hasMore: true,
    status: EFetchingStatus.INIT,
    error: undefined,
  };

  expect(reducer(previousState, setTheme(1))).toEqual({
    reviews: [],
    hasMore: true,
    status: EFetchingStatus.INIT,
    error: undefined,
    theme: 1,
  });
});

// test('should make request and set the result', () => {
//   const previousState: FeedbackState = {
//     reviews: [],
//     hasMore: true,
//     status: EFetchingStatus.INIT,
//     error: undefined,
//   };
//   const dispatch = useAppDispatch();
//
//   dispatch(loadFeedbacks(10, 0));
//
//   expect(reducer(previousState, { type: '' }))
//     .toEqual({
//       reviews: feedbacksData,
//       hasMore: true,
//       status: EFetchingStatus.SUCCESS,
//       error: undefined,
//     });
// });
