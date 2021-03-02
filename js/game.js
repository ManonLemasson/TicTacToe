const game = {

    countCi : 0,
    countCr : 0,
    countTotal : 0,

    sendMissileAt: function(rowIndex, columnIndex) {
        // On récupère le caractère contenu dans la case ciblée
        // On peut utiliser la variable grid car elle a été définie en dehors de notre fonction.
        const targetCharacter = grid.cells[rowIndex][columnIndex];
    
        


        
        // si il y a 0 cr et 0 ci => on commence par cr
        // si nb ci et cr dans la grille pair => cr 
        // si nb ci et cr dans la grille impair => ci

        
       
        game.countTotal = game.countCi + game.countCr;

       
        console.log(game.countTotal);

        if (game.isEven(game.countTotal)) {
            if ( targetCharacter === 'cr' || targetCharacter === 'ci') {
            alert('Déjà pris !!');
            }
            else {grid.cells[rowIndex][columnIndex] = 'cr';
        game.countCr++;}
        }

        else {
            if ( targetCharacter === 'cr' || targetCharacter === 'ci') {
                alert('Déjà pris !!');
                }
                else {grid.cells[rowIndex][columnIndex] = 'ci';
                game.countCi++;}
        }

        // console.log(grid.cells)

    
    
        // Après avoir modifié la grille, on l'affiche
        grid.displayGrid();
    
        
    

        // On appelle la méthode checkGameOver qui vérifie si le jeu est terminé ou non
        //game.checkGameOver();
    
        
    },

     isEven : function(number) {
        // le reste de sa division par 2 est 0
        return ((number % 2) === 0);
    }

}


