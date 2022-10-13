import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBWiQFInTJqcH-6XniRlo5IBNOE8DseU-g",
    authDomain: "newtodo-fd755.firebaseapp.com",
    projectId: "newtodo-fd755",
    storageBucket: "newtodo-fd755.appspot.com",
    messagingSenderId: "228787539197",
    appId: "1:228787539197:web:fd3d62661e9078f4620294",
    measurementId: "G-PCZHE1N02P"
  };
//initilize firebase
  const app=initializeApp(firebaseConfig)





  const db=getFirestore(app)





  export {db};