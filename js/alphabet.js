

// function play(){

//     const homeScreen=document.getElementById('home-screen');
//    homeScreen.classList.add('hidden');
//    const playScreen=document.getElementById('play-screen');
//    playScreen.classList.remove('hidden')

// step-5
function continueGame() {
    const alphabet = getRandomAlphabet();
    //   console.log('get random number',alphabet)


    //set random alphabet on game screen 
    const setAlphabet = document.getElementById('random-alphabet');
    setAlphabet.innerText = alphabet;
    // step-6
    setAlphabetBackgrounDColorById(alphabet)



}
// }
function play() {

    hideElementById('home-screen')
    showElementById('play-screen')
    continueGame()

}


