$(document).ready(() => {
        //Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
        const arraynomi = ['luigi', 'andrea', 'luca', 'antonio', 'gabriele'];
        

        //Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
        //Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array) compresa tra i due numeri inseriti dall'utente.
        const min = parseInt(prompt('inserisci l\'indice minimo'));
        const max = parseInt(prompt('inserisci\'indice massimo'));

        const newarray = arraynomi.filter((element, index,) => {
            if(min <= index && max >= index) {
                return element
            }
        })
        console.log(newarray);
    });  