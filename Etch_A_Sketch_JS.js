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
button.addListenerEvent('click', userPrompt(e));
function userPrompt(){
    if(e.target.className = 'BUTTON'){
        userNumber = prompt('Please enter a number between 1-100','ex '+ 16);
        if(userNumber > 100 || userNumber < 1){
            return 'Error: Please enter a number between 1-100';
        }
        else if(userNumber.isString()){
            return 'Error: Please enter a number between 1-100';
        }
        else if(userNumber <= 100 || userNumber >= 1){
            button.addClassList(userNumber);
        };
    }    
    else return;
};


//if(button.)
//document.createElement