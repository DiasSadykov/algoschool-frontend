import { LOGIN, LOGOUT, SET_CODE_FOR_PROBLEM, SET_CURRENT_PROBLEM } from "../Actions/user";
import firebase from "firebase/app"

export interface Problem {
    title: string,
    id: string,
    description: string,
    codeSnippet: string
}

export interface Code {
    [key: string]: string;
}

export interface User {
    isLoggedIn: boolean
    user?: firebase.User
    currentProblem?: Problem
    code: Code
}

const initialState: User = {
    isLoggedIn: false,
    user: undefined,
    currentProblem: undefined,
    code: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_PROBLEM: {
            return {
                ...state,
                currentProblem: action.payload.problem
            };
        }
        case SET_CODE_FOR_PROBLEM: {
            return {
                ...state,
                code: {
                    ...state.code,
                   [action.payload.id]: action.payload.code,
                }
            };
        }
        case LOGIN: {
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
            };
        }
        case LOGOUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: undefined,
            };
        }
        default:
            return state;
    }
}