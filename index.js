// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9vsbUcpvJTJll3J1sIu3phH1V_6r59dE",
  authDomain: "viplevel-39303.firebaseapp.com",
  projectId: "viplevel-39303",
  storageBucket: "viplevel-39303.appspot.com",
  messagingSenderId: "664476424825",
  appId: "1:664476424825:web:e232b851db956a982f92a8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function deleted

// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is Outta Line!!");
    return;
    // Don't continue running the code
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);
      // we will work here
   
      // if (user1) {
      //   var element = document.getElementsByClassName("p1");

      //   // element.classList.remove("p1");
      //   window.location.replace("protected.html");
      // } else {
      //   window.location.replace("index.html");
      // }

      // DOne
      // alert('User Logged In!!')
     window.location.replace("protected.html");
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}


// ----------------
