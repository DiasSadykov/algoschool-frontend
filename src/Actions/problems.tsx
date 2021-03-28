import { ProblemSet } from "../Reducers/problems";
import axios from 'axios'
import firebase from '../firebase';
import { setFetchingSubmission, setSubmissionStatus } from './submission';

export const SET_PROBLEMS = "SET_PROBLEMS";
export const SET_CODE_FOR_PROBLEM = "SET_CODE_FOR_PROBLEM";

export const setProblems = (problems: ProblemSet[]) => ({
    type: SET_PROBLEMS,
    payload: {
        problems
    }
});

export const setCodeForProblem = (id, code) => ({
  type: SET_CODE_FOR_PROBLEM,
  payload: {
      id,
      code
  }
});

export async function fetchProblems(dispatch, getState) {
    axios.get('https://online-judge-problems.s3.eu-central-1.amazonaws.com/problems.json')
      .then(function (response) {
        dispatch(setProblems(response.data.problemSets))
      })
      .catch(function (error) {
        console.log(error);
      });
}

export function submitCode(id: number) {
  return async function _submitCode(dispatch, getState) {
      dispatch(setFetchingSubmission(true))
      const state = getState()
      const currentProblem = state.problems.problemsByIds[id]
      const codeForCurrentProblem = currentProblem.codeSnippet
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
          const db = firebase.firestore()
          db.collection("users").doc(state.user.user.uid).set({"CompletedProblems": {
              [currentProblem.id]: true
          }}, {merge: true});
        })
        .catch(function (error) {
          console.log(error);
        });
      dispatch(setFetchingSubmission(false))
  }
}
