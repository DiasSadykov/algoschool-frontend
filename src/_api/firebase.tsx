import firebase from 'firebase'
import { db } from '../firebase'

export function setProblemAccepted(problemId: number, userId: number) {
    return db.collection("users").doc(userId.toString()).set({"CompletedProblems": {
        [problemId]: true
    }}, {merge: true});
}

export function getUserData(userId: number): Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>> {
    return db.collection("users").doc(userId.toString()).get()
}