/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById('target');
    let text = target.innerHTML;
    target.innerHTML = "";
    let charSelector =0;
    let ticker = ()=>{
        let random = Math.floor((Math.random()*700)+100);
        setTimeout(()=>{
            target.innerHTML = text.substring(0,charSelector);
            charSelector++;
            if(charSelector<text.length)
                ticker();
        },random);
    }
    ticker()

})();
