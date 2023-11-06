
var firebaseConfig = {
  apiKey: "AIzaSyAdEKppNO-id3on5gZQrv9ETG4GYopB-C8",
  authDomain: "login-auth-5ce0d.firebaseapp.com",
  projectId: "login-auth-5ce0d",
  storageBucket: "login-auth-5ce0d.appspot.com",
  messagingSenderId: "279971342359",
  appId: "1:279971342359:web:af9a0f5a59d3830d0d1452"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


function loginData(){
    var password1=document.getElementById('password1')
    var email1=document.getElementById('email1')
    firebase
    .auth()
    .createUserWithEmailAndPassword(email1.value, password1.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      setTimeout(function () {
        window.location.href = "dashboard.html";
      }, 1000);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
    
}