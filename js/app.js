console.log('app : init');

const app = {



handleCellClick: function(event){
    // On récupère l'élément sur lequel on a cliqué.
    // Parfois, cet élément contiendra des enfants (comme ici une balise img après un tir). Event.target contiendra donc la référence à cet enfant (et non plus la cellule).
    // Grace à la fonction "closest" on peut récupérer le parent le plus proche de l'élément cliqué qui correspond au sélecteur passé en argument.
    // https://developer.mozilla.org/fr/docs/Web/API/Element/closest
    const cell = event.target.closest('.cell');

    const id = cell.id;
    
    // Toutes les cellules ont un ID écrit sous le format "cellXY" où X est l'index de la ligne et Y l'index de la colonne.
        // On récupère les index de ligne et de colonne comme dans un tableau.
        const row = id[4];
        const column = id[5];
     
        // On envoie le missile en utilisant la méthode sendMissileAt qui est rangée dans l'objet game.
        game.sendMissileAt(row, column);
        console.log(grid.cells);
        


},
// Fonction appelée au lancement de la page
init: function (){

    grid.init();
    
        
    // Affichage de la grille
    //grid.displayGrid();

    const cells = document.querySelectorAll('div.cell');

        // On ne peut pas placer d'écouteur d'événements sur un tableau (cells), on doit donc boucler sur celui-ci pour placer un écouteur sur chaque cellule individuellement.
        for (let cell of cells) {
            // On place un écouteur de clic sur chaque cellule qui va appeler la méthode handleCellClick de l'objet app.
            cell.addEventListener('click', app.handleCellClick);
        }


} }



document.addEventListener('DOMContentLoaded', app.init);