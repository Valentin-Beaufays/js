/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let fridayThirteenMonth = [];
        for(let i=0;i<12;i++){
            if(new Date(document.getElementById('year').value, i , 13).getDay()==5)
                fridayThirteenMonth.push(getMonthString(i));
        }
        alert(fridayThirteenMonth.join(", "))
    });

    let getMonthString = monthNumber => {
        switch(monthNumber){
            case 0:
                return ("janvier");
            break;
            case 1:
                return ("février");
            break;
            case 2:
                return ("mars");
            break;
            case 3:
                return ("avril");
            break;
            case 4:
                return ("mai");
            break;
            case 5:
                return ("juin");
            break;
            case 6:
                return ("juillet");
            break;
            case 7:
                return ("aout");
            break;
            case 8:
                return ("septembre");
            break;
            case 9:
                return ("octobre");
            break;
            case 10:
                return ("novembre");
            break;
            case 11:
                return ("décembre");
            break;
            default:
                alert("wtf");
            break;
        }
    }

})();
