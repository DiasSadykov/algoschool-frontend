import { RootState } from "../Reducers";

export const getCourse = (state: RootState) => state.course.courseBlocks

export const isFetchingCourse = (state: RootState) => state.course.fetching

export const getCurrentProblem = (id: string) => (state: RootState) => state.course.problemsByIds[id]