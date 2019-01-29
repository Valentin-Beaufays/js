/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let pass = document.getElementById('pass-one');
    let counter = document.getElementById('counter');
    pass.addEventListener('input', ()=>{
        counter.innerHTML = pass.value.length+"/10";
        if(pass.value.length>=10){
            counter.style.color = "red";
            pass.value = pass.value.substring(0,9)
        }
        else{
            counter.style.color = "#63C8DE";
        } 
    })

})();
