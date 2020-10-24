class Player {

    constructor(){    
    
    //empty
    
    }
    

    // to read the player count from the database
    getCount(){
    var playerCountref = database.ref('playerCount');
    playerCountref.on("value", function(data){
    playerCount = data.val(); });

    }
 

    //to update the name into the database
    update(name){

        //suppose playercount is 1 , then update the name for player1 in the database
        var playerIndex = "player" + playerCount; 


        //node
        database.ref(playerIndex).set({
            'name' : name 
        })
    

    }
    
//update the count from the form
    updateCount(count){
        database.ref('/').update({

       'playerCount' : count


        });


    }


    }