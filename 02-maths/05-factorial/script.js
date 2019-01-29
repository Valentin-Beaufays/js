/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        let userInput = document.getElementById('number').value;
        let result = 1;

        // your code here
        for(let i=1;i<=userInput;i++){
            result *= i;
        }
        alert(result);
    });

})();
