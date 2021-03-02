const grid = {
    cells: [],
    init: function(){
        grid.cells = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
        
    },

    displayLine: function(lineParam, rowIndex) {
    
        // On parcourt l'ensemble du tableau grace à une boucle
        for (let columnIndex = 0; columnIndex < lineParam.length; columnIndex++) {
    
            // On sélectionne la cellule HTML qui est associée à l'entrée courante de notre grille.
            let currentHTMLCell = document.querySelector('#cell'+ rowIndex + columnIndex);
            
            // On récupère le caractère courant dans le tableau passé en paramètre.
            const currentCharacter = lineParam[columnIndex];
            
            // Si le caractère courant n'est pas vide
            if(currentCharacter !== ''){
                
    
                // Si l'élément est touché, on doit ajouter la classe "hit"
                if(currentCharacter === 'cr') {
                    currentHTMLCell.classList.add('cross');
                    currentHTMLCell.innerHTML = "<img src='https://user.oc-static.com/upload/2020/02/19/15821386423275_croix.png'>";
                    

                } else if (currentCharacter === 'ci') {
                    //Si c'est raté, on ajoute la classe "splash"
                    currentHTMLCell.classList.add('circle');
                    currentHTMLCell.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Deseret_small_long_O.svg/932px-Deseret_small_long_O.svg.png' >";
                    

                }
            }
            //https://www.clipartmax.com/png/middle/441-4410581_tic-tac-toe-o-tic-tac-toe-circle-png.png
    
        }
    
    
    },
        /**
         * Affiche la grille dans la console
         */
        displayGrid: function (){
    
            // On parcourt l'ensemble des lignes du tableau grid
            for( let rowIndex = 0; rowIndex < grid.cells.length; rowIndex++) {
                // On récupère la ligne courante grace à son index
                const currentLine = grid.cells[rowIndex];
    
                
            
                // On exécute displayLine (qui parcourt chaque case de la ligne et l'affiche) et on récupère son résultat dans une variable.
                 grid.displayLine(currentLine, rowIndex);
    
    
                // On affiche notre ligne dans la console.
                // console.log(stringLine);
            }
        }
    }