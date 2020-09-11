import { firestore } from "react-native-firebase";
import { userData } from "../reducers/user/interface";

export const userCollection = firestore();

export const createNewUserCollection = (userData:userData) => {
    firestore().collection('users').doc(userData.email)
}