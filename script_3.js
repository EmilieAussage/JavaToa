let x;

{
  x = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu");

}


console.log(`ok, on te construit ta pyramide de ${x} étages`) 

var staircase = "",
    n = x,
    space = " ",
    hash = "#";
for(var i = n ; i > 0 ;i--){
    staircase+=space.repeat(i-1).concat(hash.repeat(n-(i-1))) + "\n";
}

console.log(staircase);


