/* Notes and pseudo-code:
Use Javascript and CSS to create a 16x16 grid of blocks (divs) as a default, 
    using DOM manipulation. Each block should be a div
    Use flexbox to situate the blocks in a grid
        Default blockNumber = 16, screen width = ___. blockNumber = default
        16, or promptNumber. Also = % the width 
        document.createElement() creates an element. Default 16 columns 16 rows,
        otherwise promptNumber columns + rows
        Use a counter to createElement blockNumber or promptNumber of elements
        on a row, and the same number of elements as a column

Make a hover effect, to change the white blocks/black border to a black block/
    grey border. Use the .key -> add playing tag from the drumkit project. When
    hovered over, change from static(?) to changed(?)
        addEventListener('mouseover', function())
        function element.add.classList('element to add')
        CSS - if element is added, change color to random rainbow. If already
        a rainbow color, filter:brightness(+10%)

Make a button that changes the amount of blocks in the grid, but the same
    width after being given a prompt. Set the limit to 100, so it doesn't 
    freeze the user's PC
    Aka, keep the width consistent, take a number between 1-100, make that
    the number of divs, each equal to 1/n number of divs
        button addListenerEvent('click', function())
        function promptNumber = prompt('Pick a number between 16-100')

Extra credit - Instead of black and white, make it a random (Rainbow!!!) color,
    and upon entering and exiting the block, make the color 10% darker
        Get like 7-whatever number of colors, or if you can get a random
        color from a color wheel
        When hovered over add.classList('hovered'). If class == 'hovered', 
        filter:brightness = +10%. If class != hovered, set CSS color to 
        whatever color
*/

//Global Variables
//const choiceButton = document.querySelector('.userPromptButton');
//const restartButton = document.querySelector('.restartButton');

// Prompts user for grid size
/*
document.addEventListener('click', userPrompt);
function userPrompt(e){
    console.log(e);
    if(e.target.className != 'userPromptButton'){
        return;
    }    
    else {
        promptedGridNumber = prompt('Please enter a number between 1-100','ex '+ 16);
        parseInt(promptedGridNumber);
        if(isNaN(promptedGridNumber)){
            console.log('Error: Please enter a number between 1-100');
            return;
        }
        else if(promptedGridNumber > 100 || promptedGridNumber < 1){
            console.log('Error: Please enter a number between 1-100');
            return;
        }
        else if(promptedGridNumber > 1 && promptedGridNumber < 100){
            choiceButton.classList.add('playerGrid');
            choiceButton.playerGrid = gridRow;
        };
    };
};
*/

//Creates the grid
/*
Pseudo:
If != promptedGridnumber, gridRow = 16. Else gridRow = promptedGridNumber
fullGrid = gridRow x gridRow
Counter* ++ to gridRow
    Make gridRow number of divs with a class of row#Counter*
*/

/*makeGrid = function makeGrid(){
    if(promptedGridNumber = undefined){
        let gridRow = 16;
        for(let rowCounter = 0;rowCounter < gridRow; rowCounter++){
            document.createElement(`divContainer${gridRow}`);
            for(let i = 0; i < gridRow; i++){
                `divContainer${gridRow}`.appendChild(`div${gridRow}`)
                console.log(`divContainer${gridRow}`);
            }
        }
    }
    else{
        let gridRow = 16 //temp
        for(let rowCounter = 0;rowCounter < gridRow; rowCounter++){
            row = document.createElement("div");
            row.classList.add(`row${rowCounter}`);
            //console.log(row)
            for(let i = 0; i < gridRow; i++){
                columnNumber = document.querySelector(`.row${rowCounter}`);
                //columnNumber.createElement('div');
                //appendChild(`column${i}`);
                console.log(columnNumber);
            }
        }
    }
}*/

//Temp to create color change testing divs
document.querySelectorAll('changeable', testDiv())
function testDiv(){
    for(i = 0; i < 8; i++){
        colorDivs = document.querySelector('div.changeable')
        .appendChild(document.createElement("div"));
        document.querySelectorAll(colorDivs.classList.add("toChange"));
    }
}

// Set and/or changes color
let changeColor = function changeColor(e){
    if(e.target.classList == "toChange"){
        e.target.classList.add('changed');
        e.target.classList.remove('toChange');
        let colorNumber = Math.floor(Math.random()*6);
        e.target.classList.add(`color${colorNumber}`);
        console.log(e.target.classList);
    }
    else if(e.target.className == "changed"){
        document.colorTest.style.filter = brightness;
        brightness = brightness - 10;
        console.log(e.target.classList);
    }
    else if(e.target.classList == 'changeable'){
        return
    }
    else{
        console.log(e.target.classList);
    }
}

document.addEventListener('click', changeColor);

//document.addEventListener('click', makeGrid);