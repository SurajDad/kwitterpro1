import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJWXkbvBRKaiD4ge6yLNO56WraxQgwOqs",
  authDomain: "kwitter-147da.firebaseapp.com",
  databaseURL: "https://kwitter-147da-default-rtdb.firebaseio.com",
  projectId: "kwitter-147da",
  storageBucket: "kwitter-147da.appspot.com",
  messagingSenderId: "197708753512",
  appId: "1:197708753512:web:931bf1edd30ed6ed65a9dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
    //Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data;
    like = message_data['like'];
    name_with_tag = "<h4>" + name + "<img class = 'user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn btn-warning' id=" + firebase_message_id + " value = " + like + " onclick= 'updateLike(this.id)'> ";
    span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like : " + like + "</span> </button> </hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
    
    //End code
      } });  }); }
getData();

function updateLike(message_id)
{
    console.log("Clicked on The Like Button" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(like) + 1;
    console.log(updated_likes);
    
    
    firebase.database().ref(room_name).child(message_id).update({ 
        like : updated_likes });
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}