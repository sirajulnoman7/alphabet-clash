// add classlist in the html file dynamic,,.. step-1,2.
function hideElementById(elementId){

   const element=document.getElementById(elementId)
   element.classList.add('hidden')
}

function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}
// set selected alphabet background color....... step-6
function setAlphabetBackgrounDColorById(alphabetId){
   const getAlphabet=document.getElementById(alphabetId);
   getAlphabet.classList.add('bg-amber-500');
}

//  alphabet function ......step-3
function getRandomAlphabet(){
    // first get a alphabet string array
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets= alphabetString.split('')
    // console.log(alphabets)

    // second get a random index, and round the number ......step-4
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    const alphabet=alphabets[index]
    
    // console.log(alphabet)
    return alphabet;

}

