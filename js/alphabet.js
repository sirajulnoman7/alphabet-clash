

// function play(){

//     const homeScreen=document.getElementById('home-screen');
//    homeScreen.classList.add('hidden');
//    const playScreen=document.getElementById('play-screen');
//    playScreen.classList.remove('hidden')


function keyupHandleOnDocument(event){
    const currentKey=event.key;
    // console.log('press key',currentKey)
    if(currentKey==='Escape'){
        gameOver()
    }
    const currentAlphabet = document.getElementById('random-alphabet');
    
   const currentAlpha= currentAlphabet.innerText ;
    const finalAlphabet=currentAlpha.toLowerCase()
    // console.log(finalAlphabet)

    if(finalAlphabet===currentKey){
       const currentScore= getTextElementById('current-score')
        const newCurrentScore=currentScore+1;
        setElementById('current-score',newCurrentScore)

    //     console.log('your got a point')
    //     const currentScoreElement=document.getElementById('current-score');
    //     const currentScoreText=currentScoreElement.innerText
    //    const currentScore=parseInt(currentScoreText);
    //    console.log(currentScoreText)
    //           // set new score
    //     const newScore = currentScore + 1;
    //     currentScoreElement.innerText=newScore;
       
       
        
        continueGame()
        RemoveAlphabetBackgrounDColorById(finalAlphabet)
    }
    else{

        const currentLifeScore=getTextElementById('life-element')
        const updatedScore=currentLifeScore-1;
        setElementById('life-element',updatedScore)
        
    //    const currentLifeElement=document.getElementById('life-element');
    //       const currentLifeScoreText=currentLifeElement.innerText
    //       const currentLifeScore=parseInt(currentLifeScoreText);

    //     //   set new score 
    //     const newLifeScore= currentLifeScore - 1;
    //     currentLifeElement.innerText=newLifeScore;
        if(updatedScore===0){
            gameOver()
        }
     }

 }
 
 document.addEventListener('keyup',keyupHandleOnDocument);



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
    hideElementById('final-score')
    setElementById('life-element',5)
    setElementById('current-score',0)
    continueGame()

}

function gameOver(){
    hideElementById('play-screen') 
    showElementById('final-score')
    const currentScore=getTextElementById('current-score');
    setElementById('total-score',currentScore)

    // reset key background color 
    const reset=getElementTextById('random-alphabet');
    RemoveAlphabetBackgrounDColorById(reset)
}


