var ajout = () => {
    let newLine = recup();
    if (localStorage.getItem('indexEnCours') == null) {
        localStorage.setItem('indexEnCours', '0');
        var index = 0;
    } else {
        localStorage.setItem('indexEnCours', JSON.stringify(JSON.parse(localStorage.getItem('indexEnCours')) + 1))
        var index = JSON.parse(localStorage.getItem('indexEnCours'));
    }

    newLine['index'] = index;
    if (localStorage.getItem('tableau') == null) {
        localStorage.setItem('tableau', JSON.stringify([newLine]));
    } else {
        let actuel = JSON.parse(localStorage.getItem('tableau'));
        actuel.push(newLine);
        localStorage.setItem('tableau', JSON.stringify(actuel));
    }
    addRow(newLine, index);
}

/* var jsonTab = [];
 */
if (!jsonTab) {
    var jsonTab = [];
}
var recup = () => {
    var nom = document.forms.nouvavis.nom.value;
    var email = document.forms.nouvavis.email.value;
    var nomfilm = document.forms.nouvavis.name.value;
    var titre = document.forms.nouvavis.titre.value;
    var note = document.forms.nouvavis.note.value;
    var critique = document.forms.nouvavis.critique.value;
    document.forms.nouvavis.reset()

    return ({
        nom: nom,
        email: email,
        nomfilm: nomfilm,
        titre: titre,
        note: note,
        critique: critique
    })
    console.log(jsonTab);

}

var tesst = () => {
    console.log(jsonTab);
}

const remplirTableau = () => {
    let tableau = JSON.parse(localStorage.getItem('tableau'));
    tableau.map((row) => {
            addRow(row, row.index);
        }
    )
}

function addRow(newLine, index) {
    // Get a reference to the table
    let tableRef = document.getElementById('tableau');

    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);

    // Insert a cell in the row at index 0
    let newidc = newRow.insertCell(0);
    let newpseudoc = newRow.insertCell(1);
    let newfilmc = newRow.insertCell(2);
    let newtitrec = newRow.insertCell(3);
    let newnotec = newRow.insertCell(4);
    let newcritiquec = newRow.insertCell(5);
    let newdelc = newRow.insertCell(6);


    let newidjson = JSON.stringify(index);
    let newpseudojson = newLine.nom;
    let newfilmjson = newLine.nomfilm;
    let newtitrejson = newLine.titre;
    let newnotejson = newLine.note;
    let newcritiquejson = newLine.critique;
    // Append a text node to the cell
    let newid = document.createTextNode(newidjson);
    let newpseudo = document.createTextNode(newpseudojson);
    let newfilm = document.createTextNode(newfilmjson);
    let newtitre = document.createTextNode(newtitrejson);
    let newnote = document.createTextNode(newnotejson + '/5');
    let newcritique = document.createTextNode(newcritiquejson);

    let img = document.createElement('img');
    img.src = './../../assets/images/trash.png';
    img.classList.add('trash');
    img.setAttribute('onclick', 'console.log(parentNode.parentNode.rowIndex)');

    newdelc.appendChild(img);

    newidc.appendChild(newid);
    newpseudoc.appendChild(newpseudo);
    newfilmc.appendChild(newfilm);
    newtitrec.appendChild(newtitre);
    newnotec.appendChild(newnote);
    newcritiquec.appendChild(newcritique);
}

/* var affich = () => {
    jsonTab.map
} */

remplirTableau();