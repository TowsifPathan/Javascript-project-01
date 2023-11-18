// player one 
let plOneInterFace = document.querySelector('.pl_one_interface')
let p1Title = document.querySelector('.p1_title')
let playerOne = document.querySelector('.playerOne')
let plOneInput = document.querySelector('.pl_one_input')
let secondCaution = document.querySelector('.second_caution')
let firstCaution = document.querySelector('.first_caution')
let thirdCaution = document.querySelector('.third_caution')
let plOneBtn = document.querySelector('.pl_one_btn')
let p1winner = document.querySelector('.p1winner')

// player one game functions

plOneBtn.addEventListener('click' , ()=>{
    if (plOneInput.value == ''){
        firstCaution.style.display = "block"
    }
    else if (isNaN(plOneInput.value)){
        thirdCaution.style.display = "block"
    }
    else if (plOneInput.value > 10){
        secondCaution.style.display = "block"
    }
    else if (plOneInput.value < 10){
        plOneInterFace.style.opacity = ".5"
        plTwoInterFace.style.transform = "translateY(-100%)"
    }
})

function erase() {
    firstCaution.style.display = "none"
    secondCaution.style.display = "none"
    thirdCaution.style.display = "none"
}


// player two
let plTwoInterFace = document.querySelector('.pl_two_interface')
let p2Title = document.querySelector('.p2_title')
let playerTwo = document.querySelector('.playerTwo')
let plTwoInput = document.querySelector('.pl_two_input')
let p2secondCaution = document.querySelector('.p2_second_caution')
let p2firstCaution = document.querySelector('.p2_first_caution')
let p2thirdCaution = document.querySelector('.p2_third_caution')
let plTwoBtn = document.querySelector('.pl_two_btn')
let p2winner = document.querySelector('.p2winner')


// player two game function

plTwoBtn.addEventListener('click' , ()=>{
    if (plTwoInput.value == ''){
        p2firstCaution.style.display = "block"
    }
    else if (isNaN(plTwoInput.value)){
        p2thirdCaution.style.display = "block"
    }
    else if (plTwoInput.value > 10){
        p2secondCaution.style.display = "block"
    }
    
    else if (plTwoInput.value != plOneInput.value){
        plOneInterFace.style.opacity = "1"
        plTwoInterFace.style.transform = "translateY(100%)"
        p1winner.style.transform = "translateY(22%)"
    }
    else if (plTwoInput.value == plOneInput.value){
        p2winner.style.transform = "translateY(22%)"
    }
})

function erase2() {
    p2firstCaution.style.display = "none"
    p2secondCaution.style.display = "none"
    p2thirdCaution.style.display = "none"
}


