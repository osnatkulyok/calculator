
//Alert
const allButtons = document.querySelectorAll('button');

//anyway --> check the 'or' thing
for (const btn of allButtons) {
    btn.addEventListener('click', () => {
        alert(btn.getAttribute('value'));
    });
}


//Print --> improve by invalidation
//treat draw class in oreder to write on the result-board
const drowOnBoard = document.querySelectorAll('.draw')
//Result area
const resultBoard = document.querySelector('.result')
//defind a string in order to change the result's text
let str =""

const board = document.querySelectorAll('.draw');
    for (const num of board) {
        num.addEventListener('click', () => {
            str += ' ' + num.getAttribute('value');
            document.getElementById("result").textContent = str;
        });
    }


//Clear
const clearButton = document.querySelector('#clear')
clearButton.addEventListener("click", () =>{
    str = '';
    document.getElementById("result").textContent = str;
})


//Delete str[-1]
const deleteButton = document.querySelector('#delete')
deleteButton.addEventListener("click", () =>{
    str = str.slice(0,-1);
    document.getElementById("result").textContent = str;
})


// //Dark Mood
//TO DO --> Check this as soon as possible 


function changeLayoutButton() {
    const light = Array.from(document.body.classList);
    if (light.includes('light_mood')) {
        document.body.classList.remove('light_mood');
        document.body.classList.add('dark_mood');
    } else {
        //TO DO fix the alert
        // const moodVlue = document.getElementsByClassName('empty');
        // moodVlue.alert('switch to light mood');
        document.body.classList.remove('dark_mood');
        document.body.classList.add('light_mood');
    }
}


//Info
const infoButton = document.querySelector('.info');

const text = "Developer name: OSNAT KULYOK\nVersion: EH2022\n\nThis is trying to be a sciense calculator\n and try to develope sophisticated buttons\nin order to give u the most pleasure experience.";
infoButton.addEventListener("click", () =>{
    alert(text);
})



//S RESULT 
    
function mine() {
    let go = '';
    let mytry = document.getElementById("result").textContent.trim();
    // console.log(mytry);
    for (const word of mytry) {
        if (word === ' ') {
            continue;
        }
        go += word;
        console.log(go);
}   const p = document.getElementById('result').textContent;
    // console.log(p); <br>`</br>
//const chars = go.split('');
    // console.log(chars);
    // console.log(typeof(chars));
    
    // go.innerText == eval(go.innerText);
    console.log(eval(go));
    // let text = go;
    // let result = eval(text);

    // document.getElementById("demo").innerHTML = result;
}

function changeToScience() {
    const timer = document.getElementsByClassName('timer');
    console.log(timer);
    console.log(Array.from(document.timer.classList));
    const history = Array.from(document.timer.classList);
    if (history.includes('timer')) {
        document.body.classList.remove('timer');
        document.body.classList.add('history');
    } else {
        document.body.classList.remove('history');
        document.body.classList.add('timer');
    }
}






































//just for me using in the dev process



//create some parametr to help in the process
//firstNum --> hold the first num
const firstNum = 0;
//mathOperation --> hold the operations act
const mathOperation = '';
//secondNum --> hold the second num
const secondNum = 0;
//counter'll hold the sum
const count = 0;
//defind two flags in order to divide the choosen str's slice into nums 
const flag1 = 0;
const flag2 = 0;

//go through a loop in order to solve the problem
//TO DO --> convert the str into num
// function solve(problem) {
//     const convertAllToNum = 
//     for (const ele of problem) { 
//         if (Number.isInteger)
//             statement1
//         else if (condition2)
//             statement2
//         else if (condition3)
//             statement3
//     }
// }


// function tryFunc(num1, num2) {
//     console.log(num1);
//     console.log(num2);
//     // return total - num;
//   }
































// const stringToArray = document.getElementById("result").innerHTML.split("");

    // const initialValue = 0;
    // const sumWithInitial = stringToArray.reduce((accumulator, currentValue) =>
    // accumulator + currentValue, initialValue );
    // document.getElementById("result").textContent = sumWithInitial;


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
