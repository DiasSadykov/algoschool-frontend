import { RootState } from "../Reducers";

export const getLoggedInAndUser = (state: RootState) => [state.user.isLoggedIn, state.user.user]