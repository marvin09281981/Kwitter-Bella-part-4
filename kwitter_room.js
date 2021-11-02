
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyDSzIqnQFHNPvYuRIiHsurskXdA8p0awFk",
      authDomain: "class-test-a476b.firebaseapp.com",
      databaseURL: "https://class-test-a476b-default-rtdb.firebaseio.com",
      projectId: "class-test-a476b",
      storageBucket: "class-test-a476b.appspot.com",
      messagingSenderId: "952000060607",
      appId: "1:952000060607:web:a7d67a3362d1543d6afa0a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick =' redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}


getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwiter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
 
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}