'use strict'

/*
Jei norime stebeti paspaudimus ant elemento ir 
reikia spausdinti jo tekstini turini.

1. susirasti domonanti elementa
2. inicijuoyi ivykio stabejima
3. nurodyti ka daryti, kai ivyks stebimas ivykis
    ant norimo elemto
*/

// 1.
const mygtukai = document.querySelectorAll('.btn');

// 2.
for ( let k=0; k<mygtukai.length; k++) {
    mygtukai[k].addEventListener('click', paspaudimas)
}

// 3.
let paspaudimuKiekis = Array(mygtukai.length).fill(0); //kaip sukurti array su reiksme 0; fill(0);

function paspaudimas( event ) {
    const paspaustasElementas = event.target;
    const duomenys = paspaustasElementas.dataset; 
    const index =  parseInt(duomenys.number);
    
    paspaudimuKiekis[index-1]++;
    console.log( paspaudimuKiekis );

    return console.log(`Paspaustas ${index}: ${paspaudimuKiekis[index-1]} kartu`)
}

console.log(paspaudimuKiekis);