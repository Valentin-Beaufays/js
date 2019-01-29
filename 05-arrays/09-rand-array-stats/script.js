/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        let numberArray = []
        //generate array
        for(let i=0;i<10;i++){
            numberArray.push(Math.ceil(Math.random()*100));
        }
        //show array in html
        numberArray.forEach((element, index)=>{
            document.getElementById('n-'+(index+1)).innerHTML = element;
        })
        //show min number
        document.getElementById('min').innerHTML = (numberArray.sort((a,b) => {return a-b})[0])
        //show max number
        document.getElementById('max').innerHTML = (numberArray.sort((a,b) => {return b-a})[0])
        //show sum
        let sum = (total, add) => {
            return total+add;
        }
        document.getElementById('sum').innerHTML = numberArray.reduce(sum);
        //show average
        document.getElementById('average').innerHTML = numberArray.reduce(sum)/numberArray.length;
    })


})();
