import { ProblemSet } from "../Reducers/problems";
import axios from 'axios'

export const SET_PROBLEMS = "SET_PROBLEMS";

export const setProblems = (problems: ProblemSet[]) => ({
    type: SET_PROBLEMS,
    payload: {
        problems
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