import { SET_CODE_FOR_PROBLEM, SET_CURRENT_PROBLEM } from "../Actions/user";

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
    currentProblem?: Problem
    code: Code
}

const initialState: User = {
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
        default:
            return state;
    }
}