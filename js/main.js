let pOne = document.querySelector(".pOne")
let pTwo = document.querySelector(".pTwo")
let main = document.querySelector(".main")
let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let cautionOne = document.querySelector(".cOne")
let cautionTwo = document.querySelector(".cTwo")
let cautionOnee = document.querySelector(".cOnee")
let cautionTwoo = document.querySelector(".cTwo")
let btnTwo = document.querySelector('btnTwo')
let afBG = document.querySelector(".afBG")
let pol = document.querySelector('.pol')
let h5 = document.querySelector('.h5')
let inputTwo = document.querySelector('.inputTwo')
let fde = document.querySelector('.fde')
let jafde =document.querySelector('.jafde')
btn.addEventListener('click', () => {
    if (input.value == '') {
        cautionTwo.style.display = "block";
    }else if (input.value > 10) {
        cautionOne.style.display = "block";

    }
    else if (input.value < 10) {
        pOne.style.display = "none"
        pTwo.style.display = "block"
        btn.style.display = "none"
        
    }
})

function Button() {
    if (inputTwo.value == '') {
        cautionTwoo.style.display = "block";
    }
    else if (inputTwo.value > 10) {
        cautionOnee.style.display = "block";

    }
    else if (inputTwo.value < input.value) {
        afBG.style.display = "block"
        h5.style.display = "none"
        fde.style.display = "none"

    }
    else if(inputTwo.value == input.value) {
        afBG.style.display = "block"
        pol.style.display = "none"
    }
    else if (inputTwo.value > input.value) {
        afBG.style.display = "block"
        h5.style.display = "none"
        jafde.style.display = "none"
    }
   
}


