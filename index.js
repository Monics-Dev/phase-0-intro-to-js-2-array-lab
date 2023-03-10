// Wr
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
  return cats.push("Ralph");
}
function  destructivelyPrependCat(name){
  return  cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
 return   cats.pop('Garfield');
}
function destructivelyRemoveFirstCat(){
   return cats.shift('Milo');
}

function  appendCat(name){
    return [...cats,name];
}
function prependCat(name) {
  return[name, ...cats];
}
 function removeLastCat() {
   return cats.slice(0,-1);
 }

 function removeFirstCat () {
   return cats.slice(1)
 }
