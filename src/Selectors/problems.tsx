import { RootState } from "../Reducers";

export const getAllProblems = (state: RootState) => state.problems.courseBlocks

export const isFetchingProblems = (state: RootState) => state.problems.fetching

export const getCurrentProblem = (id: string) => (state: RootState) => state.problems.problemsByIds[id]