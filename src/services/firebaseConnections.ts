import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAEktYzvvEiDjO-jeRLviGrhVWEqDUBrfw',
  authDomain: 'boardapp-572e7.firebaseapp.com',
  projectId: 'boardapp-572e7',
  storageBucket: 'boardapp-572e7.appspot.com',
  messagingSenderId: '763379049217',
  appId: '1:763379049217:web:69a476098f6a36ece1f100',
  measurementId: 'G-BRQMLW9MFZ'
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
