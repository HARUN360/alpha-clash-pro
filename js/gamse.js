// function play(){
//     // step-1. hide the home screen
//     const homeScection = document.getElementById('home-screen');
//     homeScection.classList.add('hidden');
//     // console.log(homeScection.classList);


//     // step-2. unhide the playground screen
//     const playground = document.getElementById('play-ground');
//     // console.log(playground);
//     playground.classList.remove('hidden')
    
// }

function continueGame(){
    //  step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it):
    const currenAlphabetElement = document.getElementById('current-alphabet');
    currenAlphabetElement.innerText = alphabet;

    // setBackgroundColor
    setBackgroundColorById(alphabet)
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
};
