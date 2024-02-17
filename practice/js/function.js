function hideElementById(element){
    const hideId = document.getElementById(element);
    hideId.classList.add('hidden');
}

function showElementById(element){
    const show = document.getElementById(element);
    show.classList.remove('hidden');
}

function randomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const randomGenaret = alphabet[index];
    console.log(randomGenaret);
    return randomGenaret;
}

function setBgColorKeybord(element){
    const keybordLatter = document.getElementById(element);
    keybordLatter.classList.add('bg-red-700');
 }