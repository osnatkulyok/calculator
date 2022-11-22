
//Alert
const allButtons = document.querySelectorAll('button');

//anyway --> check the 'or' thing
// for (const btn of allButtons) {
//     btn.addEventListener('click', () => {
//         alert(btn.getAttribute('value'));
//     });
// }


//Print --> improve by invalidation
//treat draw class in oreder to write on the result-board
const drowOnBoard = document.querySelectorAll('.draw')
//Result area
const resultBoard = document.querySelector('.result')
//defind a string in order to change the result's text
var list = ""

const board = document.querySelectorAll('.draw');
    for (const num of board) {
        num.addEventListener('click', () => {
            list += ' ' + num.getAttribute('value');
            document.getElementById("result").textContent = list;
        });
    }


//Clear
const clearButton = document.querySelector('#clear')
clearButton.addEventListener("click", () =>{
    list = '';
    document.getElementById("result").textContent = list;
})


//Delete list[-1]
//check one num case 
const deleteButton = document.querySelector('#delete')
deleteButton.addEventListener("click", () =>{
    list = list.slice(0,-1);
    document.getElementById("result").textContent = list;
})


//Dark Mood
const darkButton = document.querySelector('#dark_mood')

darkButton.addEventListener("click", () =>{
    var element = document.getElementsByClassName('.op_mood')
    element.classList.toggle("op_mood");
})











































// Special buttons
// function information(){
//     alert('you have asked for information');
//     const form = document.getElementById("information");
//     const a = document.createElement('a');
//     const link = document.createTextNode("This is link");
//     a.appendChild(link);
//     a.href = "./help.html";
//     document.body.appendChild(a);
// }

// function dark(){
//     alert('Change to dark mood');
// }






//Get the butto
//operarions
// const infoButton = document.querySelector('#info')
// const settingButton = document.querySelector('setting#')
// const lightButton = document.querySelector('#light')
// const backButton = document.querySelector('back#')
// const timerButton = document.querySelector('#timer')
// const clearButton = document.querySelector('#clear')
// const divideButton = document.querySelector('#divide')
// const powDownButton = document.querySelector('#powDown')
// const dubbleButton = document.querySelector('#dubble')
// const uploudButton = document.querySelector('#uploud')
// const minusButton = document.querySelector('#minus')
// const emptyButton = document.querySelector('#empty')
// const plusButton = document.querySelector('#plus')
// const empty_2Button = document.querySelector('#empty_2')
// const plusMinusButton = document.querySelector('#plusMinus')
// const equalButton = document.querySelector('#equal')
// //nums buttons
// const oneButton = document.querySelector('#one')
// const twoButton = document.querySelector('#two')
// const threeButton = document.querySelector('#three')
// const fourButton = document.querySelector('#four')
// const fiveButton = document.querySelector('#five')
// const sixButton = document.querySelector('#six')
// const sevenButton = document.querySelector('#seven')
// const eightButton = document.querySelector('#eight')
// const nineButton = document.querySelector('#nine')
// const zeroButton = document.querySelector('#zero')

// //Result area
// const resultBoard = document.querySelector('.result')
// //defind a string in order to change the result's text
// var list = ""
// //conection between list to result
// document.getElementById("result").innerHTML = list;


// //Print Functions
// oneButton.addEventListener("click", () =>{
//     alert('1');
//     list += ' ' + '1'
//     document.getElementById("result").innerHTML = list;
// })
// twoButton.addEventListener("click", () =>{
//     alert('2');
//     list += ' ' + '2'
//     document.getElementById("result").innerHTML = list;
// })
// threeButton.addEventListener("click", () =>{
//     alert('3');
//     list += ' ' + '3'
//     document.getElementById("result").innerHTML = list;
// })
// fourButton.addEventListener("click", () =>{
//     alert('4');
//     list += ' ' + '4'
//     document.getElementById("result").innerHTML = list;
// })
// fiveButton.addEventListener("click", () =>{
//     alert('5');
//     list += ' ' + '5'
//     document.getElementById("result").innerHTML = list;
// })
// sixButton.addEventListener("click", () =>{
//     alert('6');
//     list += ' ' + '6'
//     document.getElementById("result").innerHTML = list;
// })
// sevenButton.addEventListener("click", () =>{
//     alert('7');
//     list += ' ' + '7'
//     document.getElementById("result").innerHTML = list;
// })
// eightButton.addEventListener("click", () =>{
//     alert('8');
//     list += ' ' + '8'
//     document.getElementById("result").innerHTML = list;
// })
// nineButton.addEventListener("click", () =>{
//     alert('9');
//     list += ' ' + '9'
//     document.getElementById("result").innerHTML = list;
// })
// zeroButton.addEventListener("click", () =>{
//     alert('0');
//     list += ' ' + '0'
//     document.getElementById("result").innerHTML = list;
// })

// //print operations
// plusButton.addEventListener("click", () =>{
//     alert('+');
//     list += ' ' + '+'
//     document.getElementById("result").innerHTML = list;
// })
// minusButton.addEventListener("click", () =>{
//     alert('-');
//     list += ' ' + '-'
//     document.getElementById("result").innerHTML = list;
// })
// dubbleButton.addEventListener("click", () =>{
//     alert('*');
//     list += ' ' + '*'
//     document.getElementById("result").innerHTML = list;
// })
// divideButton.addEventListener("click", () =>{
//     alert('/');
//     list += ' ' + '/'
//     document.getElementById("result").innerHTML = list;
// })

// // .addEventListener("click", () =>{
// //     alert('');
// //     list += ' ' + ''
// //     document.getElementById("result").innerHTML = list;
// // })





