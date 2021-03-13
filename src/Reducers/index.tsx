import { combineReducers } from "redux";
import problems from "./problems";
import user from "./user";
import submission from "./submission"

export const rootReducer = combineReducers({ problems, user, submission });

export type RootState = ReturnType<typeof rootReducer>
