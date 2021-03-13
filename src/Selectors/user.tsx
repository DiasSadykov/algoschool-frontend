import { RootState } from "../Reducers";

export const getCodeForCurrentProblem = (state: RootState) => state.user.code[state.user.currentProblem?.id]