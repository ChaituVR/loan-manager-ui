import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyCH31_WkQxtL0sPGgAyk2JmxRPhzX6_QHc',
  authDomain: 'review-invitations.firebaseapp.com',
  databaseURL: 'https://review-invitations.firebaseio.com',
  projectId: 'review-invitations',
  storageBucket: 'review-invitations.appspot.com',
  messagingSenderId: '683577372550',
  appId: '1:683577372550:web:5cdd93244c94add97b0607',
  measurementId: 'G-4JNFVDE499',

};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;