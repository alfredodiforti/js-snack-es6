/* funzione per caricare javascript dopo l'html e il CSS */
$(document).ready(function(){
    //Creare un array di oggetti
    //Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    const catalogo = [
        {
            nome: 'Bianchi',
            peso: 8.7,
        },
        {
            nome: 'Coppi',
            peso: 6.8,
        },
        {
            nome: 'Lombardo',
            peso: 7.1,
        },
    ];
   
    //valore di dafault
    let bicileggera = null;
    //iterazione e  verifica
    catalogo.forEach(element => {
        if(bicileggera == null || bicileggera.peso > element.peso) {
            bicileggera = element; 
        }     
    });
    
    const { nome, peso,} = bicileggera;
    $('.container').html (`<div>
    <h1>Bicicletta più leggera</h1>
    <h3>nome: ${nome} </h3>
    <h4>peso: ${peso} kg </h4>
    <div/>`    
    )

    
   
   
   
   
   
    }) 