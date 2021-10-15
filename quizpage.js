//When program opens...
var person1name = "";
var person2name = "";
person1name = localStorage.getItem("Player1 Name");
person2name = localStorage.getItem("Player2 Name");
document.getElementById("person1lbl").innerHTML = "Person 1: " + person1name;
document.getElementById("person2lbl").innerHTML = "Person 2: " + person2name;
//-----------------------------------------------------------------------------------------------------------------------------//

function submitQ() {
    var gquestion = "";
    var ganswer = "";
    gquestion = document.getElementById("question--g").value;
    ganswer = document.getElementById("answer--g").value;
    localStorage.setItem("Question", gquestion);
    localStorage.setItem("Answer", ganswer);
    document.getElementById("heheboi").style.visibility = "hidden";
    document.getElementById("qblb").innerHTML = gquestion;
    document.getElementById("answersection").style.visibility = "visible";
}

function submitA() {
    var doc1;
    doc1 = document.getElementById("answer").value;
    var localStorage1;
    localStorage1 = localStorage.getItem("Answer");
    var localStorage2;
    localStorage2 = localStorage.getItem("Question");
    if  (doc1 === localStorage1) {
        window.location = "yay.html";
    }else{
        window.location = "noo.html";
    }
}
// [WARNING| DO NOT ENTER | ENTRY IS STRICTLY FORBIDDEN| DO NOT TOUCH THE CODE] //
//also this is a old timey question generator programing... it has collected dust! it is NO MORE usefull than a grain of air.
//Random question generator
//function loadQ() {
  //  if (rn_1 == 1 && rn_2 == 3) {
      //  document.getElementById("questionlbl").innerHTML = q1;
    //}else if(rn_1 == 1 && rn_2 == 4) {
    //    document.getElementById("questionlbl").innerHTML = q2;
    //}else if(rn_1 == 1 && rn_2 == 5) {
      //  document.getElementById("questionlbl").innerHTML = q3;
//
  //  }else if(rn_3 == 2 && rn_4 == 8) {
    //    document.getElementById("questionlbl").innerHTML = q4;
    //}else if((rn_3 == 2 && rn_4 == 9)
    //{
    //    document.getElementById("questionlbl").innerHTML = q5;
    //}
    //In COMMENTS for a REASON 
    //{WARNING --- DO NOT ERASE}


//Quitting function
function quit() {
    window.location = "login.html";
}