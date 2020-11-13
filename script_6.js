// transformer un ARN présenté sous forme de string "UUACGCAGUAGA" en une suite d'acides aminés que tu imprimeras en console : "Leucine-Arginine-Sérine-Arginine"
//Afin de comparer ton travail avec les autres moussaillons, voici 2 ARN à traduire en protéines :
// -CCGUCGUUGCGCUACAGC
// - CCUCGCCGGUACUUCUCG

let findAA = prompt("Quelle est ton ARN ?");

//on prend lÁRN et on le split puis on met en groupe de 3 - on fait un array avec des objets de 3

var divideinarray = findAA.split('')

//var perChunk = 3 // items per chunk    
let split = [];
let result = [];
let array_of_3_joined = [];

while(divideinarray.length){
  split = divideinarray.splice(0,3)
  console.log(split)
  array_of_3_joined  = split.join('');
  result.push(array_of_3_joined);
}
console.log(result)



// on fait l'association UUA-cgc-AGU-AGA  = "Leucine-Arginine-Sérine-Arginine" AVEC UN IF UUA = "LEUCINE"ELSIF
let result_converted = [];

result.forEach (element => {
  if (element == "UCU" || element == "UCC" || element == "UCA" || element == "UCG" || element == "AGU" || element == "AGC") {
    result_converted.push("Sérine");
} else if (element == "CCU" || element == "CCC" || element == "CCA" || element == "CCG") {
    result_converted.push("Proline");
} else if (element == "UUA" || element == "UUG") {
    result_converted.push("Leucine");
} else if (element == "UUU" || element == "UUC") {
    result_converted.push("Phénylalanine");
} else if (element == "CGU" || element == "CGC" || element == "CGA" || element == "CGG" || element == "AGA" || element == "AGG") {
    result_converted.push("Arginine");
} else if (element == "UAU" || element == "UAC") {
    result_converted.push("Tyrosine");
} 
});

console.log(result_converted);



