

// let temperatura = prompt('Quanti gradi ci sono?')

// if(temperatura < 20){
//     console.log('Non ci sono mezze stagioni');
// }
//  else if(temperatura >= 30 ){
//     console.log('lu mare, lu sole, lu ientu');
// }
// else if(temperatura < 30){
//     console.log('mi dia una peroni sudata');
// }
// else if(temperatura < 0){
//     console.log("non è tanto il freddo quanto l'umidità");
// }
// else if(temperatura < -10){
//     console.log('copriti…ancora ti raffreddi');
// }
// else{
//     console.log('Temperatura non percepita');
// }



let temperatura = 27;
let giudizio;

switch(true){
    case temperatura < 20:
        giudizio = 'Non ci sono mezze stagioni'
    break;


    case temperatura >= 30:
        giudizio = 'lu amre, lu sole, lu ientu'
    break;


    case temperatura < 30:
        giudizio = 'mi dia una peroni sudata'
    break;


    case temperatura < 0:
        giduizio = "non è tanto il freddo quanto l'umidità"
    break;


    case temperatura < -10:
        giudizio = 'copriti...ancora ti raffreddi'
    break;

    default:
        giudizio = 'Temperatura non percepita'
    break;
}

console.log(giudizio);

 





