/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    if(localStorage.getItem('click')==null){
        localStorage.setItem('click', 0);
    }
    let target = document.getElementById('target');
    target.innerHTML = localStorage.getItem('click');
    //onclick on #increment
    document.getElementById('increment').addEventListener('click', ()=>{
        localStorage.setItem('click', Number(localStorage.getItem('click'))+1);
        target.innerHTML = localStorage.getItem('click');
    })
    document.getElementById('reset').addEventListener('click', ()=>{
        if(confirm('Êtes-vous sur de vouloir effacer vose données?')){
            localStorage.setItem('click', 0);
            target.innerHTML = localStorage.getItem('click');
        }
    })
})();
