const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// ---------Question Number 1 -----------

console.log(`Est-ce que tous les livres ont été au moins empruntés une fois ?`)
// if rented > 0 then true else false

books.forEach ((x) => {
  if (x.rented > 0){
    console.log(`Oui, tous les livres ont été empruntés une fois au moins`)}
  else{
    console.log(`tous les livres n'ont pas été empruntés encore`)}
  
})

// ---------Question Number 2 -----------

console.log(`Quel est livre le plus emprunté ?`)
// console.log(`Livre le plus emprunté : {largest}`)

// var largest = Math.max.apply(null, books.rented)

//on classe les books par ordre de livres empruntés.
books.sort((a, b) => (a.rented < b.rented) ? 1 : -1)

//on sélectionne la première array ===> YouupiiII
console.log(books[0])

// ---------Question Number 3 -----------

console.log(`Quel est le livre le moins emprunté ?`)

books.sort((a, b) => (a.rented > b.rented) ? 1 : -1)

console.log(books[0])

 // ===> YouupiiII ça marche

// ---------Question Number 4 -----------

console.log(`Trouve le livre avec l'ID: 873495 ;`)

books.forEach ((i) => {
  if (i.id === 873495) {
  console.log(`Voici le livre dont l'ID est 873495: ${i.title} `) }
})

// ---------Question Number 5 -----------

console.log("Supprime le livre avec l'ID: 133712")



let delete_book = books.find( goodbook => goodbook.id === 133712);
books.splice(delete_book, 1);
console.log(books);

// for(let i = 0; i < books.length; i++){
//   if(books[i].id === 133712){
//     delete(books[i])
//     console.log(books)}
//   }




// ---------Question Number 6 -----------

// console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé")

books.sort(function(a,b)
{
  var nameA = a.title.toUpperCase();
  var nameB = b.title.toUpperCase();
  if (nameA < nameB) //sort string ascending
    return -1
  if (nameA > nameB)
    return 1
  return 0 //default return value (no sorting)
});

// console.log(books)

