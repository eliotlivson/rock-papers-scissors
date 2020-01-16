function rock() {
    var enemy = (Math.floor(Math.random() * 3) + 1);
    console.log(enemy); 
       
        
    
    switch(enemy) {
        case 1: 
            document.getElementById("result").src = "images/tie1.gif";    
            break
        case 2:
            document.getElementById("result").src = "images/paper.png";
            break
        case 3:
            document.getElementById("result").src = "images/rock.png";    
    }
}

function paper() {
    var enemy = (Math.floor(Math.random() * 3) + 1);
    console.log(enemy); 
       
        
    
    switch(enemy) {
        case 1: 
            document.getElementById("result").src = "images/paper.png";    
            break
        case 2:
            document.getElementById("result").src = "images/tie2.gif";
            break
        case 3:
            document.getElementById("result").src = "images/scissor.png";    
    }
}

function scissor() {
    var enemy = (Math.floor(Math.random() * 3) + 1);
    console.log(enemy); 
       
        
    
    switch(enemy) {
        case 1: 
            document.getElementById("result").src = "images/rock.png";    
            break
        case 2:
            document.getElementById("result").src = "images/scissor.png";
            break
        case 3:
            document.getElementById("result").src = "images/tie3.gif";    
    }
}

function reset() {
    location.reload();
}