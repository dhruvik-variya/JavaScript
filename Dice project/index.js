function rolldice(){
    const dice =Math.floor(Math.random() *6)+1;
    document.getElementById("dice-roll").innerHTML=dice

}
document.getElementById("roll-button").addEventListener("click",rolldice);




