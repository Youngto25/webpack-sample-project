//main.js 
import './main.scss';  //使用require导入css文件
import './test.scss';

const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());

let scroll = document.querySelector('#scroll')
let number = 0

let span = document.createElement('span')
scroll.appendChild(span)

document.addEventListener('scroll',function(){
  number++
  span.innerHTML = number;
});
(() => {
  console.log('do it')
  alert('do it')
})()