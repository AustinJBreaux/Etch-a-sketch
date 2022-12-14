
//Global Variables---------------------------------------
const choiceButton = document.querySelector('.userPromptButton');
const restartButton = document.querySelector('.restartButton');
let useDefaultGrid = true;
let gridPercent = '';

//Converts from random color number to the name of the color for CSS styling (UNF)
function primaryColor(){
    //Creates random color assignment
    let colorNumber = Math.floor(Math.random()*6);
    if(colorNumber == 0){
        return 'red';
    }
    else if(colorNumber == 1){
        return 'orange';
    }
    else if(colorNumber == 2){
        return 'yellow';
    }
    else if(colorNumber == 3){
        return 'green';
    }
    else if(colorNumber == 4){
        return 'blue';
    }
    else if(colorNumber == 5){
        return 'indigo';
    }
    else if(colorNumber == 6){
        return 'violet';
        
    }
}

//Removes default grid if prompted grid is called
function removeDefault(){
    let defaultGrid = document.querySelector('div.changeable');
    console.log(defaultGrid);
    while(defaultGrid.firstChild){
        defaultGrid.removeChild(defaultGrid.firstChild);
    }
}

//Creates grid
makeGrid = function makeGrid(gridRow){
    if(useDefaultGrid == true){
        let gridRow = 16;
        for(let rowCounter = 0;rowCounter < gridRow; rowCounter++){
            for(let columnCounter = 0; columnCounter < gridRow; columnCounter++){
                colorDivs = document.querySelector('div.changeable')
                .appendChild(document.createElement("div"));
                document.querySelectorAll(colorDivs.classList.add("toChange"));
                let gridPercent = 100/gridRow;
                initialStyle = `
                    width:  ${gridPercent}%;
                    height: ${gridPercent}%;
                    display: flex;
                    margin: 0;
                `
                colorDivs.style.cssText = initialStyle;
            }
        }
    console.log('Default Complete')
    console.log(colorDivs.style.width);
    }
    else if(useDefaultGrid == false){
        removeDefault();
        for(let rowCounter = 0;rowCounter < gridRow; rowCounter++){
            for(let columnCounter = 0; columnCounter < gridRow; columnCounter++){
                colorDivs = document.querySelector('div.changeable')
                .appendChild(document.createElement("div"));
                document.querySelectorAll(colorDivs.classList.add("toChange"));
                let gridPercent = 100/gridRow;
                initialStyle = `
                    width:  ${gridPercent}%;
                    height: ${gridPercent}%;
                    display: flex;
                    margin: 0px;
                `
                colorDivs.style.cssText = initialStyle;
            }
        }
    }
}

// Set and/or changes color
let changeColor = function changeColor(e){
    //Changes the element to a random color
    if(e.target.classList == "toChange"){
        styleSelector = document.querySelector("div.toChange");
        let gridPercent = styleSelector.style.width;
        e.target.classList.add('changed');
        e.target.classList.remove('toChange');
        let cssStyle = `
            width:  ${gridPercent};
            height: ${gridPercent};
            background-color: ${primaryColor()};
            filter: brightness(100%);
        `
        e.target.style.cssText = cssStyle;
    }

    //Makes filter 10% darker
    else if(e.target.classList == 'changed'){
        let filter = e.target.style.filter;
        let brightnessValue = filter.replace(/\D/g,'');
        brightnessValue = brightnessValue - 10;
        filter = `brightness(${brightnessValue}%)`
        e.target.style.filter = filter;
        console.log('Brightness Changed');
    }
    else{
        return
    }
}

// Prompts user for grid size on click
function userPrompt(e){
    console.log(e);
    if(e.target.className != 'userPromptButton'){
        return;
    }    
    else if(e.target.className == 'userPromptButton'){
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
        else if(promptedGridNumber > 1 && promptedGridNumber < 101){
            choiceButton.classList.add('playerGrid');
            let gridRow = promptedGridNumber;
            useDefaultGrid = false;
            makeGrid(gridRow, useDefaultGrid);
        };
    }
    else{
        return
    }
};

//Events and backbone-------------------------------------
document.addEventListener('mouseover', changeColor);
document.addEventListener('click', userPrompt);
makeGrid();



