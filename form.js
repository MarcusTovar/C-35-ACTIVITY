class Form {

    constructor(){

    //empty
    
    }
    
    display(){
    
        //this is the title that has the position and the title.
        var title = createElement(h2);
        title.html("Car racing game" );
        title.position(200,200); 

        //the input to submit the name and the button to click to play + their positions
        var input = createInput("Name");
        var button = createButton("Play")
        input.position(130,150)
        button.position(350,300)
    
        //it checks if the button was pressed by the mouse + it is fetching the name from input, and updating the database.
        button.mousePressed(function(){

            //will hide the input and button after the button is clicked
            input.hide();
            button.hide();

            var name = input.value();
            
            //It is adding a new player to the playercount, and updating the name and count the database.
            playerCount = playerCount + 1;
            player.update(name) ;              
            player.updateCount(playerCount);
         


        });

       
        
    
            
            

            
        
    
    
        
    }
    
    }
    //create a text space so that player can enter name and press a button to start/add the name
    // input - place to enter name
    //button = place to press 
    //DOM = document object Model