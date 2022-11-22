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



//Creates the grid
/*
Pseudo:
If != promptedGridnumber, gridRow = 16. Else gridRow = promptedGridNumber
fullGrid = gridRow x gridRow
Counter* ++ to gridRow
    Make gridRow number of divs with a class of row#Counter*
*/

//Temp to create color change testing divs
document.querySelectorAll('changeable', testDiv())
function testDiv(){
    for(i = 0; i < 8; i++){
        colorDivs = document.querySelector('div.changeable')
        .appendChild(document.createElement("div"));
        document.querySelectorAll(colorDivs.classList.add("toChange"));
    }
}

//Global Variables---------------------------------------
const choiceButton = document.querySelector('.userPromptButton');
const restartButton = document.querySelector('.restartButton');

//Global functions---------------------------------------
//Converts from random color number to the name of the color for CSS styling (UNF)
function primaryColor(){
    if(colorNumber = 0){
        let primaryColor = +'red';
        return primaryColor;
    }
    else if(colorNumber = 1){
        let primaryColor = +'orange';
        return primaryColor;
    }
    else if(colorNumber = 2){
        let primaryColor = +'yellow';
        return primaryColor;
    }
    else if(colorNumber = 3){
        let primaryColor = +'green';
        return primaryColor;
    }
    else if(colorNumber = 4){
        let primaryColor = +'blue';
        return primaryColor;
    }
    else if(colorNumber = 5){
        let primaryColor = +'indigo';
        return primaryColor;
    }
    else if(colorNumber = 6){
        let primaryColor = +'violet';
        return primaryColor;
    }
}

//Creates grid
makeGrid = function makeGrid(){
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
}

//Creates multiple color styles with darker colors based on random color (UNF)
for(color = 0; color < 7; color ++){
    primaryColor();
    for(brightness = 10; brightness > -1; brightness --){
        brightnessFilter = i*10;
        colorDiv = document.createElement('div');
        colorDiv.classList.add(`colorDiv${color}_${brightness}`);
        colorDiv.style.cssText = `(width: 10px;
        height: 10px;
        background-color: ${primaryColor};
        filter: brightness(${brightness}%));`
    }
}

// Set and/or changes color (UNF)
let changeColor = function changeColor(e){
    //Creates random color assignment
    let colorNumber = Math.floor(Math.random()*6);

    //Changes the class to a random color
    if(e.target.classList == "toChange"){
        e.target.classList.add('changed');
        e.target.classList.remove('toChange');
        e.target.classList.add(`color${colorNumber}_10`);
        e.target.style = e.target.style[`color${colorNumber}_10`];
        console.log(e.target.classList);
    }
    //Makes filter +10% darker
    else if(e.target.classList == `changed.color${colorNumber}`){
        //e.target.style.filter
        
        console.log(e.target.classList);
    }
    else{
        return
    }
}

// Prompts user for grid size
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

//Events and backbone------------------------------------------
document.addEventListener('mouseover', changeColor);
//document.addEventListener('click', userPrompt);
//document.addEventListener('click', makeGrid);


