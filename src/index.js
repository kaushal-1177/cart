import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBU9ZbdpcEjjRvXSAf7ICSiKmOu4NVl14c",
    authDomain: "cart-8a12a.firebaseapp.com",
    projectId: "cart-8a12a",
    storageBucket: "cart-8a12a.appspot.com",
    messagingSenderId: "919859115066",
    appId: "1:919859115066:web:a238528b9a32b146b2b103",
    measurementId: "G-77D0GDYBDM"
  };
  
  firebase.initializeApp(firebaseConfig); 
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById('root'));
