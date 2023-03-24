var game = document.querySelector("#myDiv") ;

game.style.backgroundColor = "black";
game.style.width = "200px";
game.style.height = "200px";

game.addEventListener("mouseover", e => {
    console.log (e);
    game.style.backgroundColor = "blue"
})

game.addEventListener("mousedown", e => {
    console.log ("your holding down in the box");
    game.style.backgroundColor = "red"
})

game.addEventListener("mouseup", e => {
    console.log ("your let go in the box");
    game.style.backgroundColor = "yellow"
})
game.addEventListener("dblclick", e => {
    console.log ("you double clicked the box");
    game.style.backgroundColor = "green"
})
document.body.addEventListener("wheel", function (e) {
    console.log ("your scrolling");
    game.style.backgroundColor = "orange"
})
document.addEventListener("keydown", e => {
    if( e.key === 'r'){
        game.style.backgroundColor = "red";   
    }else if( e.key ==='y'){
        game.style.backgroundColor = 'yellow'
    }else if( e.key ==='g'){
        game.style.backgroundColor = 'green'
    }else if(e.key === 'o'){
        game.style.backgroundColor= 'orange'
    }else if( e.key=== 'b'){
        game.style.backgroundColor= 'blue'
    }
      
})
