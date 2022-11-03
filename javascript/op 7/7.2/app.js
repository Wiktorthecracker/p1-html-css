function geld(){
    
    let budget = prompt('Hoeveel kost het product dat je wilt kopen?');
    let product = 110;
   
    //var name = prompt('Hoeveel kost het product dat je wilt kopen?');
  
    if( budget > product){
        document.getElementById("tekst1").style.color = "green";
        document.getElementById("tekst1").innerHTML="Je hebt genoeg geld";
    }
    else {  
        document.getElementById("tekst1").style.color = "red";
        document.getElementById("tekst1").innerHTML="Je hebt te weinig geld";
    }

}