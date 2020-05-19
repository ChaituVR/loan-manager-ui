import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/database';

var firebaseConfig = {
  // get values from https://i.imgur.com/FyMSlhm.jpg
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;