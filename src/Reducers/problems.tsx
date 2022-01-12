import { SET_PROBLEMS } from "../Actions/problems";
import { SET_CODE_FOR_PROBLEM } from "../Actions/problems"

export interface Problem {
    title: string,
    id: string,
    description: string,
    codeSnippet: string
}

export interface courseBlock {
    blockTitle: string,
    problems: Problem[]
}

export interface ProblemsByIds {
    [key: string]: Problem;
}

export interface ProblemsState {
    problemSets: courseBlock[],
    problemsByIds: ProblemsByIds,
    fetching: boolean
}

const initialState: ProblemsState = {
    problemSets: [],
    problemsByIds: {},
    fetching: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PROBLEMS: {
            let problemsByIds: ProblemsByIds = {}
            action.payload.problems.forEach(problemSet => {
                problemSet.problems.forEach(problem => {
                    problemsByIds[problem.id] = problem
                });
            });
            return {
                ...state,
                fetching: false,
                problemSets: action.payload.problems,
                problemsByIds: problemsByIds
            }
        }
        case SET_CODE_FOR_PROBLEM: {
            return {
                ...state,
                problemsByIds:{
                    ...state.problemsByIds,
                    [action.payload.id]: {
                        ...state.problemsByIds[action.payload.id],
                        codeSnippet: action.payload.code
                    }
                }
            };
        }
        default:
            return state;
    }
}