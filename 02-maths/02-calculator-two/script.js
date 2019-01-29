/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        // perform the operation
        let opOne = document.getElementById("op-one").value
        let opTwo = document.getElementById("op-two").value

        switch(operation){
            case "addition":
                alert(opOne+opTwo);
            break;
            case "substraction":
                alert(opOne-opTwo);
            break;
            case "multiplication":
                alert(opOne*opTwo);
            break;
            case "division":
                alert(opOne/opTwo);
            break;
            default:
                alert("fuck");
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
