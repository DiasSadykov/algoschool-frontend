import axios from 'axios'
import { setFetchingSubmission, setSubmissionStatus } from './submission';

export const SET_CURRENT_PROBLEM = "SET_CURRENT_PROBLEM";
export const SET_CODE_FOR_PROBLEM = "SET_CODE_FOR_PROBLEM";

export const setCurrentProblem = problem => ({
    type: SET_CURRENT_PROBLEM,
    payload: {
        problem
    }
});


export const setCodeForProblem = (id, code) => ({
    type: SET_CODE_FOR_PROBLEM,
    payload: {
        id,
        code
    }
});

export async function submitCode(dispatch, getState) {
    dispatch(setFetchingSubmission(true))
    const state = getState()
    const currentProblem = state.user.currentProblem
    const codeForCurrentProblem = state.user.code[currentProblem.id]
    await axios.post('https://3b613vdnu5.execute-api.eu-central-1.amazonaws.com/dev/online-judge', {
        code: codeForCurrentProblem,
        problem_id: currentProblem.id
      })
      .then(function (response) {
        dispatch(setSubmissionStatus(currentProblem.id, {
            status: response.data.status,
            message: response.data.message,
            expected: response.data.expected,
            input: response.data.input,
            result: response.data.result
        }))
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch(setFetchingSubmission(false))
}