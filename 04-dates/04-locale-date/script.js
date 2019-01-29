/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let currentDate = new Date();
    let dateToShow = [];
    switch(currentDate.getDay()){
        case 1:
            dateToShow.push("lundi");
        break;
        case 2:
            dateToShow.push("mardi");
        break;
        case 3:
            dateToShow.push("mercredi");
        break;
        case 4:
            dateToShow.push("jeudi");
        break;
        case 5:
            dateToShow.push("vendredi");
        break;
        case 6:
            dateToShow.push("samedi");
        break;
        case 7:
            dateToShow.push("dimanche");
        break;
        default:
            alert("wtf");
        break;
    }
    switch(currentDate.getMonth()){
        case 0:
            dateToShow.push("janvier");
        break;
        case 1:
            dateToShow.push("février");
        break;
        case 2:
            dateToShow.push("mars");
        break;
        case 3:
            dateToShow.push("avril");
        break;
        case 4:
            dateToShow.push("mai");
        break;
        case 5:
            dateToShow.push("juin");
        break;
        case 6:
            dateToShow.push("juillet");
        break;
        case 7:
            dateToShow.push("aout");
        break;
        case 8:
            dateToShow.push("septembre");
        break;
        case 9:
            dateToShow.push("octobre");
        break;
        case 10:
            dateToShow.push("novembre");
        break;
        case 11:
            dateToShow.push("décembre");
        break;
        default:
            alert("wtf");
        break;
    }
        document.getElementById('target').innerHTML = (dateToShow[0]+" "+currentDate.getDate()+" "+dateToShow[1]+" "+currentDate.getFullYear()+", "+currentDate.getHours()+"h"+currentDate.getMinutes());

})();
