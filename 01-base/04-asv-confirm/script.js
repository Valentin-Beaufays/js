/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let valid;
    do{
        let age = prompt("Quel age as tu?");
        let sexe = prompt('est tu un garcon ou une fille?'); 
        let ville = prompt("ville?");
        valid = confirm("age: "+age+"\nsexe: "+sexe+"\nville: "+ville)
    }while(!valid);
    // your code here

})();
