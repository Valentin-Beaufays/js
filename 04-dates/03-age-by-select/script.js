/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click',() => {
        let birth = new Date(document.getElementById("dob-year").value, document.getElementById("dob-month").value-1,document.getElementById("dob-day").value)
        let currentDate = new Date();
        let age = null;
        //check if birth is after current date
        console.log(birth>currentDate);
        if(birth.getTime()>currentDate.getTime()){
            confirm("tu viens du futur?") ? alert("ça dois être génial!") : alert("alors tu t'es trompé de date :/");
        }
        else{
            if(birth.getFullYear()<currentDate.getFullYear()){
                age=currentDate.getFullYear()-birth.getFullYear();
                    if(birth.getMonth()>currentDate.getMonth()
                    ||birth.getMonth()==currentDate.getMonth()&&birth.getDate()>currentDate.getDate()){
                        age--;
                        alert(age+" ans");//if birthday after current day
                    }
                    else if(birth.getMonth()==currentDate.getMonth()){
                        alert("bon anniversaire! aujourd'hui tu as "+age+" ans") //if birthday is today
                    }
                    else{
                        alert(age+" ans"); //if birthday before current day
                    }
            }
            else if(birth.getFullYear()==currentDate.getFullYear()){
                age = currentDate.getMonth()-birth.getMonth();
                if(birth.getMonth()==currentDate.getMonth()){
                    if(birth.getDate()==currentDate.getDate()){
                        alert("bienvenue parmis nous!!")
                    }

                }
                else{
                    age = currentDate.getMonth()-birth-getMonth()
                }
            }
        }
    })


})();
