import { SET_PROBLEMS } from "../Actions/problems";

export interface Problem {
    title: string,
    id: string,
    description: string,
    codeSnippet: string
}

export interface ProblemSet {
    category: string,
    problems: Problem[]
}

export interface ProblemsState {
    problemSets: ProblemSet[],
    fetching: boolean
}

const initialState: ProblemsState = {
    problemSets: [],
    fetching: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PROBLEMS: {
            return {
                ...state,
                fetching: false,
                problemSets: action.payload.problems
            }
        }
        default:
            return state;
    }
}