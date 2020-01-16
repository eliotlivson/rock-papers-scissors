function rock() {
    var enemy = (Math.floor(Math.random() * 3) + 1);
    console.log(enemy); 
       
        
    
    switch(enemy) {
        case 1: 
            document.getElementById("result").src = "tie1.gif";    
            break
        case 2:
            document.getElementById("result").src = "paper.png";
            break
        case 3:
            document.getElementById("result").src = "rock.png";    
    }
}

function paper() {
    var enemy = (Math.floor(Math.random() * 3) + 1);
    console.log(enemy); 
       
        
    
    switch(enemy) {
        case 1: 
            document.getElementById("result").src = "paper.png";    
            break
        case 2:
            document.getElementById("result").src = "tie2.gif";
            break
        case 3:
            document.getElementById("result").src = "scissor.png";    
    }
}

function scissor() {
    var enemy = (Math.floor(Math.random() * 3) + 1);
    console.log(enemy); 
       
        
    
    switch(enemy) {
        case 1: 
            document.getElementById("result").src = "rock.png";    
            break
        case 2:
            document.getElementById("result").src = "scissor.png";
            break
        case 3:
            document.getElementById("result").src = "tie3.gif";    
    }
}

function reset() {
    location.reload();
}
