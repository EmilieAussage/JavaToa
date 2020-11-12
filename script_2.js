
let x

{
  x = prompt('De quel nombre veux-tu calculer la factorielle ?');

}

console.log(`La factoriel de ${x} est :`);

function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(x));


