//import the tools we need form our libraries
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"

//import our secret credentials
import { secret } from "../secrets.js";

//connect to our firebase project with our creds
initializeApp({
    credential: cert(secret)
})



//once connected, connect to firestore database

export const db = getFirestore()



