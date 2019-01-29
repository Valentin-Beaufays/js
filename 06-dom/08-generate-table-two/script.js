/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //thead
    let thead = document.createElement('thead');
    let headRow = document.createElement('tr');
    for(let i=1;i<=10;i++){
        let headCell = document.createElement('th');
        headCell.innerHTML = i;
        headRow.appendChild(headCell);
    }
    thead.appendChild(headRow);
    //tbody
    let tbody = document.createElement('tbody');
    for(let i=1;i<=10;i++){
        let row = document.createElement('tr');
        for(let j=1;j<=10;j++){
            let cell = document.createElement('td');
            cell.innerHTML = j+"x"+i+"="+(j*i);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
        document.getElementById('target').appendChild(tbody);
    }
    //show table
    let table = document.createElement('table');
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('target').appendChild(table);

})();
