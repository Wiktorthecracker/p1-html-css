function changecolor(red) {
    alert("Het werkt!");
    console.log("Het werkt!");
}

function calculator(num, num2) {
    let answer = num + num2;
    console.log(answer);
    alert(answer);
}

document.getElementById("p1").innerHTML = "Roadhog mains are fat asf";

var kleur = prompt("geef een Engelse kleurnaam: (red of blue", "");

// kleur aanpassen
//document.getElementById("titel").style.color = "red";
document.getElementById("kop").style.color = kleur;

// tekst aanpassen
document.getElementById("p1").style.color = "red";

function opdracht71(){
    var budget = 100;
    var product = 60;

    if(budget>product)
{
    //alert("u heeft niet genoeg geld");
    document.getElementById("tekst1")
}
}

let getal = 1;

function opdracht73(){

    document.getElementById("tekst1").innerHTML = getal++;

    if(getal>10)
    {
        getal = 0;
    }
}

function myfunction(){
    let text;
    let person = prompt("Zet hier jou budget");
        var budget = 100;
        var product = 60;
    
        if(budget>product)
    
}

function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hi " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
  }

  
