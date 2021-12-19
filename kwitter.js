function adduser(){
    var username = document.getElementById("userinput").value;
    localStorage.setItem("name", username);
    window.location = "kwitter_room.html";
    document.getElementById("userinput").value = "";
}