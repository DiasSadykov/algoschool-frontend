import { RootState } from "../Reducers";

export const getAllProblems = (state: RootState) => state.problems.problemSets

export const isFetchingProblems = (state: RootState) => state.problems.fetching

export const getCurrentProblem = (state: RootState) => state.user.currentProblem