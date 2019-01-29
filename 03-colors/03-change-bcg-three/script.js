/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let possibilities = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
        let color = [];
        for(let i=0;i<6;i++){
            color.push(possibilities[Math.round(Math.random()*15)]);
        }
        document.querySelector('body').style.backgroundColor = "#"+color.join("")
    });

})();
