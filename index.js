// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    return [name, ...cats];
}
function removeLastCat(){
    let newCats = [...cats];
    newCats.pop();
    return newCats;
}
function removeFirstCat(){
    let newCats = [...cats];
    newCats.shift();
    return newCats;
}