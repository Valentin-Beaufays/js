/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let buttons = document.querySelectorAll('button');
    let target = document.getElementById('target');
    let inputId = [];
    //generate array of buttons IDs
    for(let i=0;i<buttons.length;i++){
        inputId.push(buttons[i].getAttribute('id').substring(4));
    }
    //start function generator loop
    for(let j=0;j<buttons.length;j++){
        let t;//spin() timeOut variable
        let input = document.getElementById(inputId[j]);
        //spin number in input field
        let spin = ()=>{
            input.value++;
            if(Number(input.value)>Number(input.getAttribute('data-max'))){
                input.value=input.getAttribute('data-min');
            }
            else{
                if(input.value<10)
                    input.value="0"+input.value;
            }
            t = setTimeout(spin, 10);
        }
        spin();
        //on click on button with id inputId[j]
        let toggle = true;//toggler for click event
        document.getElementById('fix-'+inputId[j]).addEventListener('click',()=>{
            if(toggle){
                clearTimeout(t);//stop spin function timeout
                toggle=false;
                let content = target.innerHTML;
                switch(j){
                    case 0:
                        target.innerHTML = "+"+input.value+content.substring(4);
                    break;
                    case 1:
                        target.innerHTML = content.substring(0,4)+input.value+content.substring(6);
                    break;
                    case 2:
                        target.innerHTML = content.substring(0,6)+input.value+content.substring(8);
                    break;
                    case 3:
                        target.innerHTML = content.substring(0,8)+input.value;
                    break;
                    default:
                        target.innerHTML = "+460000000";
                    break;
                }
            }
            else{
                toggle=true;
                spin();
            }   
        })
    }
})();
