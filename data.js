import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-AzNVvqGq1UjNtK2j_tklNV2meAT77Hs",
    authDomain: "comment-personalweb.firebaseapp.com",
    databaseURL: "https://comment-personalweb-default-rtdb.firebaseio.com",
    projectId: "comment-personalweb",
    storageBucket: "comment-personalweb.appspot.com",
    messagingSenderId: "814792124212",
    appId: "1:814792124212:web:77658d9f8f474c9e916761",
    measurementId: "G-5722PETYST"
  };
  


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var message = firebase.database().ref('comment-personalweb');
  document.getElementById('comment').addEventListener('submit',submitForm);

  function submitForm(e) {
    e.preventDefault();
    var comment = getElementVal('comment');
    comsole.log(comment);
  }

  const saveMessage = (comment) => {
    var newComment = message.push();

    newComment.set({
        message: comment,
    });
  };


  const getElementVal = (id) => {
    return document.getElementById(id).ariaValueMax;
  };