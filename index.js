function addNumber(a,b){
    return a+b;
}
// arrow function
const addNumberFunction = (a,b)=> a+b
// using loop
for(let i = 0; i <= 10; i++){
    console.log("JS easy");
}
// Using while
let count = 0;
while(true){
    console.log("Phuc dep trai");
    if(count == 0){
        break;
    }

}
// array
const numberArray = [1,2,3,4];
console.log(numberArray);
// khai bao mang kieu destructuring(phan ga)
const [a,b,c] = [2,3,4];
console.log(a,c);
// using spead
const number1 = [1,2,3];
const number2 = [4,5,6];
const number3 = [...number1,...number2];
console.log(number3)
// Using map, filter, reduce
const number4 = number2.map((element) => element*element);
console.log(number4)
// Using querSelector / getElementById
const div1 = document.getElementById('div1');
// thay doi lai noi dung
div1.innerText = 'Phuc Qua Dep Trai'
console.log(div1.innerText);
// them noi dung vao 
const h1_text = document.createElement('h1')
h1_text.textContent='Phuc dep trai lan thu hai';
div1.appendChild(h1_text);
console.log(div1.innerText);
// them img vao 
const img_text = document.createElement('img');
img_text.src='./img/pho-mai-con-bo-cuoi-hop-112g-8-mieng-202307301319192465.jpg'
div1.appendChild(img_text);
console.log(div1.innerText);
// remove mot element
div1.removeChild(img_text);

// onchange function for event
function inputHandler(){
console.log("Anh Phuc dep trai lan thu 4");
}
// addEventListener
document.getElementById("signin").addEventListener("click", function(event){
    event.preventDefault();
    console.log("hello world")
})


   