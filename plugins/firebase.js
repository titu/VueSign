import * as firebase from 'firebase';

const config = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
