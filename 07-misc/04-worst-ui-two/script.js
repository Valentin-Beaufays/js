/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let buttons = document.querySelectorAll('button');
    let target = document.getElementById('target');
    //generate functions for each buttons
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',()=>{
            buttons[i].innerHTML++;
            //if number is bigger than data-max 
            if(Number(buttons[i].innerHTML)>Number(buttons[i].getAttribute('data-max'))){
                buttons[i].innerHTML=buttons[i].getAttribute('data-min');}
            else{
                //if number is smaller than 10
                if(buttons[i].innerHTML<10)
                    buttons[i].innerHTML = "0"+buttons[i].innerHTML.toString();
            }
            //show output in target
            target.innerHTML = "+";
            for(let j=0;j<buttons.length;j++){
                target.innerHTML += buttons[j].innerHTML.toString();
            }
        })
    }
})();