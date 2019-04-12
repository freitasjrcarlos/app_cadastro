import firebase from 'firebase';


 let config = {
  apiKey: "AIzaSyCigAgH9ha1k3aF8zOQhkTWn5zXp0lmJEc",
  authDomain: "projeto-teste-20eff.firebaseapp.com",
  databaseURL: "https://projeto-teste-20eff.firebaseio.com",
  projectId: "projeto-teste-20eff",
  storageBucket: "projeto-teste-20eff.appspot.com",
  messagingSenderId: "951771389914"
};
firebase.initializeApp(config);

export default firebase;