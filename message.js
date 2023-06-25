function updateRoom(){
    document.getElementById("room_name").innerHTML = window.localStorage.getItem("roomName")
    console.log("fire", window.localStorage.getItem("roomName"))
    
}

window.addEventListener("DOMContentLoaded",updateRoom)