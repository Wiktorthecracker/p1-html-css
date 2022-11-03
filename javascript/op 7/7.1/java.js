function geld(){
    
    let budget = 100;
    let product = 60;
    
    
    if( budget > product){
        document.getElementById("tekst1").style.color = "green";
        document.getElementById("tekst1").innerHTML="genoeg geld";
    }
    else{ 
        document.getElementById("tekst1").style.color = "red";
        document.getElementById("tekst1").innerHTML="te weinig geld";
    }

}