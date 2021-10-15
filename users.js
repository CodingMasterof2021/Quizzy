var player1 = "";
var player2 = "";

function saveNames() {
    player1 = document.getElementById("person1").value;
    player2 = document.getElementById("person2").value;
    localStorage.setItem("Player1 Name", player1); //Save player 1's name
    localStorage.setItem("Player2 Name", player2); //Save player 2's name
    window.location = "quizpage.html";
}