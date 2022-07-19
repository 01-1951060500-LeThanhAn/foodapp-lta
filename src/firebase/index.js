//https://console.firebase.google.com/project/food-app-724cc/overview
//project-711068635153
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"
// import { getFirestore } from "firebase/firestore"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoqDAUJV-l_ATAS3BGpQqZyBR60_o1e90",
  authDomain: "food-app-724cc.firebaseapp.com",
  projectId: "food-app-724cc",
  storageBucket: "food-app-724cc.appspot.com",
  messagingSenderId: "711068635153",
  appId: "1:711068635153:web:4bad16da0592dd354ce1b0"
};
 

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export default app;

firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth()
 const db = firebase.firestore()
 const storage = firebase.storage()
 export { auth, db, storage }








