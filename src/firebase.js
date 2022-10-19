import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
 
    apiKey: "AIzaSyApXBBtho5Xll8iq_hKpJJ8SgtujPmTlPY",
    authDomain: "phonebook-firebase-ecf40.firebaseapp.com",
    projectId: "phonebook-firebase-ecf40",
    storageBucket: "phonebook-firebase-ecf40.appspot.com",
    messagingSenderId: "593745363808",
    appId: "1:593745363808:web:a89f449090d59405171405",
    measurementId: "G-1LV8BDZ1XL"

  };
//initilize firebase
  const app=initializeApp(firebaseConfig)





  const db=getFirestore(app)





  export {db};