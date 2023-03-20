var firebaseConfig = {
      apiKey: "AIzaSyCDW3XPbPd__XVOuARdFZ5QSEvIgsgaIL4",
      authDomain: "letschat-4c101.firebaseapp.com",
      databaseURL: "https://letschat-4c101-default-rtdb.firebaseio.com",
      projectId: "letschat-4c101",
      storageBucket: "letschat-4c101.appspot.com",
      messagingSenderId: "534833891710",
      appId: "1:534833891710:web:41c929550b5b454fe20b2f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}