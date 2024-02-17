function play() {
    hideElementById('home-screen');
    showElementById('second-part');
    continueGame();
    
    }

    function continueGame(){
      const alphabet = randomAlphabet();
      const showRandom = document.getElementById('show-random');
      showRandom.innerText = alphabet;
      setBgColorKeybord(alphabet);
    }

 