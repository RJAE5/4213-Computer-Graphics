console.log("Hello");

let graphicsPositions = [];
let graphicsColors = [];

function init()
{
    for(let i = 0; i < 10; i++)
    {
        zombies.push(
            {
                name: zombie.name,
                HP: zombie.HP,
                color: [...zombie.color],
                pos: [...zombie.pos],
            }
        )
    }
}

function checkCol(heroLoc, zLoc)
{
    if(heroLoc[0] == zLoc[0] && heroLoc[1] == zLoc[1] && heroLoc[2] == zLoc[2])
    {
        return true;
    }
    return false;
}

function moveLeft()
{
    console.log("Moving left");
    hero.pos[0] -= 0.1; 
    console.log(hero.pos);

    for(let i = 0; i < 10; i++)
    {
        if(checkCol(hero.pos, zombies[i].pos))
            if(hero.action)
            {
                zombies[i].HP -= 10;
            }
            else
            {
                hero.HP -= 10;
            }
    }
    aggregatePositionAndColors();
}

function aggregatePositionAndColors()
{
    graphicsPositions = [];
    graphicsColors = [];
    
    graphicsPositions.push(...hero.pos);
    graphicsColors.push(...hero.color);

    for(let i = 0; i < 10; i++)
    {
        graphicsPositions.push(...zombies[i].pos);
        graphicsColors.push(...zombies[i].color)
    }

    console.log(graphicsColors);
    

}

let x = 10;
console.log("Hi, I am " + x + " years older than you nerd.");

let hero = 
{
    HP: 100,
    name: 'MilkMan',
    action: false,
    level: x,
    pos: [0.0, 0.0, 0.0],
    color: [1.0, 0.0, 0.0, 1.0]
}

let zombie = 
{
    name: 'Z',
    HP: 100,
    pos: [0.1, 0.0, 0.0],
    color: [0.0, 0.0, 1.0, 1.0]
}

let zombies = [];

init();

let btnMoveLeft = document.getElementById("btnMoveLeft");
btnMoveLeft.addEventListener("click", moveLeft)


console.log(hero);