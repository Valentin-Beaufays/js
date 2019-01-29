/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let text = document.getElementById('target').innerHTML;
    document.getElementById('target').innerHTML = "";
    let up = true;
    let initialSize = 12;
    let numberSize = 4;
    let size = initialSize;
    for(let i=0;i<text.length;i++){
        //create span
        let span = document.createElement('span');
        span.innerHTML = text[i];
        span.style.fontSize = size+"px"
        document.getElementById('target').appendChild(span);
        //modify size
        up ? size+=initialSize/2 : size-=initialSize/2;
        if(size==numberSize*initialSize||size==initialSize)
            up=!up;
    }
})();
