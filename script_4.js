const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// ---------Question Number 1 -----------


console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70") ;

// logique = prendre tous les entrepreneurs dont le troisieme (2eme dans array year) chiffre de l'annee =7 // (70..79)

// logique = prendre tous les entrepreneurs dont les annees  1970 <= x <= 1979 avec une boucle  .forEach()
// /let seventiesguy = entrepreneurs.find( name => name.year < 1979);
// console.log(seventiesguy);


entrepreneurs.forEach ((x) => {

  if (x.year <= 1979 && x.year >= 1970) 
    console.log(x.first, x.last)
})

// ---------Question Number 2 -----------


console.log("Voici le prénom et le nom des entrepreneurs préseent dans mon livre") ;

entrepreneurs.forEach ((x) => {
  console.log(x.first, x.last)
})

// ---------Question Number 3 -----------

console.log("Quel âge aurait chaque inventeur aujourd'hui ?" );

entrepreneurs.forEach ((x) => {
  let age = 2020 - x.year;
  console.log(`En 2020,l'âge de ${x.first, x.last} serait de ${age}`);
})


// ---------Question Number 4 -----------

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille." );


entrepreneurs.sort(function(a,b) 
{
  var nameA = a.last.toUpperCase();
  var nameB = b.last.toUpperCase();
  if (nameA < nameB) //sort string ascending
    return -1
  if (nameA > nameB)
    return 1
  return 0 //default return value (no sorting)
});


console.log(entrepreneurs)

