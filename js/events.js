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
const pirmas = document.querySelector('.btn.pirmas');
const antras = document.querySelector('.btn.antras');

// 2.
pirmas.addEventListener('click', pirmosiosVeiksmas);
antras.addEventListener('click', antrojiVeiksmas);

// 3.
let pirmojoKartai = 0;
function pirmosiosVeiksmas() {
    pirmojoKartai ++;
    return console.log('Pirmasis paspaustas...', pirmojoKartai)
}

let antosiosKartai = 0;
function antrojiVeiksmas() {
    antosiosKartai ++;
    return console.log('Antras paspaustas...', antosiosKartai)
}

//console.log(pirmas);