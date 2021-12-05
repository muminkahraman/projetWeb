var ajout = () => {
    recup();
    /*     affich(); */
    addRow();
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

    jsonTab = [...jsonTab, { nom: nom, email: email, nomfilm: nomfilm, titre: titre, note: note, critique: critique }]
    console.log(jsonTab);

}

var tesst = () => {
    console.log(jsonTab);
}

function addRow() {
    // Get a reference to the table
    let tableRef = document.getElementById('tableau');

    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);

    // Insert a cell in the row at index 0
    let newpseudoc = newRow.insertCell(0);
    let newfilmc = newRow.insertCell(1);
    let newtitrec = newRow.insertCell(2);
    let newnotec = newRow.insertCell(3);
    let newcritiquec = newRow.insertCell(4);


    let newpseudojson = jsonTab[jsonTab.length -1].nom;
    let newfilmjson = jsonTab[jsonTab.length -1].nomfilm;
    let newtitrejson = jsonTab[jsonTab.length -1].titre;
    let newnotejson = jsonTab[jsonTab.length -1].note;
    let newcritiquejson = jsonTab[jsonTab.length -1].critique;
    // Append a text node to the cell
    let newpseudo = document.createTextNode(newpseudojson);
    let newfilm = document.createTextNode(newfilmjson);
    let newtitre = document.createTextNode(newtitrejson);
    let newnote = document.createTextNode(newnotejson + '/5');
    let newcritique = document.createTextNode(newcritiquejson);

    newpseudoc.appendChild(newpseudo);
    newfilmc.appendChild(newfilm);
    newtitrec.appendChild(newtitre);
    newnotec.appendChild(newnote);
    newcritiquec.appendChild(newcritique);
}
/* var affich = () => {
    jsonTab.map
} */