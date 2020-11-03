$(document).ready(()=>{


  //Function

  let generateletters = () => {
    const letters = 'qwertyuioplkjhgfdsazxcvbnm';
    const letter = letters[random(0, letters.length - 1)]
    return letter;
    }
  
  
    let random = (min, max) => {
      return Math.floor(Math.random()* (max - min + 1)) + min;
  }

  //app

    const primoarray = [
        { name: 'Tom Ford', type: 'occhiali', color:'black'},
        { name: 'tommy', type: 't-shirt', color:'blue'},
        { name: 'puma', type: 'pantaloni', color:'green'},
        { name: 'nike', type: 'scarpe', color:'red'},
        { name: 'bucalo', type: 'suite', color:'grey'},
        { name: 'omega', type: 'watch', color:'allumimium'}, 
    ]; 
   

    let newarray = primoarray.map((element) => {
       const array = {
           element,
           letters: generateletters(),
       };
       return array;
    })
   
    console.table(newarray);




                   






















})