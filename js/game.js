const game = {

    countCi : 0,
    countCr : 0,
    countTotal : 0,
    playerNb : 0,
    whoWin : '',

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
                game.countCr++;
                game.playerNb = 2;}
        }

        else {
            if ( targetCharacter === 'cr' || targetCharacter === 'ci') {
                alert('Déjà pris !!');
                }
                else {grid.cells[rowIndex][columnIndex] = 'ci';
                game.countCi++;
                game.playerNb = 1;}
        }

        // console.log(grid.cells)

    
    
        // Après avoir modifié la grille, on l'affiche
        grid.displayGrid();
    
        
    

        // On appelle la méthode checkGameOver qui vérifie si le jeu est terminé ou non
        game.checkGameOver();
    
        
    },

     isEven : function(number) {
        // le reste de sa division par 2 est 0
        return ((number % 2) === 0);
    },

    checkGameOver : function () {
        
        if (grid.cells[0][0] === 'cr' && grid.cells[0][1] === 'cr' && grid.cells[0][2] === 'cr') {
            game.whoWin = 'Bravo! Joueur 1 gagne';
            return true;
        }
        else if (grid.cells[0][0] === 'ci' && grid.cells[0][1] === 'ci' && grid.cells[0][2] === 'ci') {
            game.whoWin = 'Bravo! Joueur 2 gagne';
            return true;
        }
        else if (grid.cells[1][0] === 'cr' && grid.cells[1][1] === 'cr' && grid.cells[1][2] === 'cr') {
            game.whoWin = 'Bravo! Joueur 1 gagne';
            return true;
        }
        else if (grid.cells[1][0] === 'ci' && grid.cells[1][1] === 'ci' && grid.cells[1][2] === 'ci') {
            game.whoWin = 'Bravo! Joueur 2 gagne';
            return true;
        }
        else if (grid.cells[2][0] === 'cr' && grid.cells[2][1] === 'cr' && grid.cells[2][2] === 'cr') {
            game.whoWin = 'Bravo! Joueur 1 gagne';
            return true;
        }
        else if (grid.cells[2][0] === 'ci' && grid.cells[2][1] === 'ci' && grid.cells[2][2] === 'ci') {
            game.whoWin = 'Bravo! Joueur 2 gagne';
            return true;
        }
        else if (grid.cells[0][0] === 'cr' && grid.cells[1][0] === 'cr' && grid.cells[2][0] === 'cr') {
            game.whoWin = 'Bravo! Joueur 1 gagne';
            return true;
        }
        else if (grid.cells[0][0] === 'ci' && grid.cells[1][0] === 'ci' && grid.cells[2][0] === 'ci') {
            game.whoWin = 'Bravo! Joueur 2 gagne';
            return true;
        }
        else if (grid.cells[0][1] === 'cr' && grid.cells[1][1] === 'cr' && grid.cells[2][1] === 'cr') {
            game.whoWin = 'Bravo! Joueur 1 gagne';
            return true;
        }
        else if (grid.cells[0][1] === 'ci' && grid.cells[1][1] === 'ci' && grid.cells[2][1] === 'ci') {
            game.whoWin = 'Bravo! Joueur 2 gagne';
            return true;
        }
        else if (grid.cells[0][2] === 'cr' && grid.cells[1][2] === 'cr' && grid.cells[2][2] === 'cr') {
            game.whoWin = 'Bravo! Joueur 1 gagne';
            return true;
        }
        else if (grid.cells[0][2] === 'ci' && grid.cells[1][2] === 'ci' && grid.cells[2][2] === 'ci') {
            game.whoWin = 'Bravo! Joueur 2 gagne';
            return true;
        }
        else if (grid.cells[0][0] === 'cr' && grid.cells[1][1] === 'cr' && grid.cells[2][2] === 'cr') {
            game.whoWin = 'Bravo! Joueur 1 gagne';
            return true;
        }
        else if (grid.cells[0][0] === 'ci' && grid.cells[1][1] === 'ci' && grid.cells[2][2] === 'ci') {
            game.whoWin = 'Bravo! Joueur 2 gagne';
            return true;
        }
        else if (grid.cells[0][2] === 'cr' && grid.cells[1][1] === 'cr' && grid.cells[2][0] === 'cr') {
            game.whoWin = 'Bravo! Joueur 1 gagne';
            return true;
        }
        else if (grid.cells[0][2] === 'ci' && grid.cells[1][1] === 'ci' && grid.cells[2][0] === 'ci') {
            game.whoWin = 'Bravo! Joueur 2 gagne';
            return true;
        }

        let remainingEmpty = 0;
        for (let row of grid.cells) {
            for(let cell of row) {
                // on comptabilise s'il reste des cases vides dans la grille 
                if(cell === ''){
                    remainingEmpty++;
                }
            }
        }

        if (remainingEmpty === 0 ){
            game.whoWin = 'Match nul';
            return true;
        }
        
        return false;
    }

}

