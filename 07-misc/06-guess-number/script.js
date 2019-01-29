/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let randomNumber = Math.floor(Math.random()*100)+1;
    let userInput = null;
    let round = 0;
    do{
        round++;
        userImput = prompt('Entrez un nombre entre 1 et 100:');
        if(randomNumber<userInput)
            alert("C'est moins!");
        else if(randomNumber>userInput)
            alert("C'est plus!");
        else if(randomNumber==userInput&&round==1){
            alert('Bravo, vous avez trouvé le nombre du premier coup!')
        }
        else
            alert('Bravo vous avez trouvé la réponse qui était: '+randomNumber+" en "+round+" tours!");
    }while(userInput!=randomNumber);

})();
