import { RootState } from "../Reducers";

export const getCurrentSubmissionStatus = (state: RootState) => state.submission.submissions[state.user.currentProblem?.id]

export const getIsSubmissionFetching = (state: RootState) => state.submission.fetching