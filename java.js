function r(){
    player1_name=document.getElementById("p").value;
    player2_name=document.getElementById("q").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location="html.html"
}