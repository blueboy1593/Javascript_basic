console.log(add)
// console.log(sub)
// function은 아래에 가도 되는데 컨스트는 안되는듯 하다.
// 함수 선언식
function add(num1, num2) {
  return num1 + num2
}
add(1, 2) // 3


// 함수 표현식
const sub = function(num1, num2) {
  return num1 - num2
}
console.log(sub)

// Arrow Function
// let을 주지 않아도 되지만 var로 할당하는 것과 똑같다. 하지만, let을 사용하는 것을 추천함.

let addOne = function(num) {
  return num + 1
}

addOne = (num) => {
  return num + 1
}
// 앞으로 우리는 이렇게 함수를 많이 사용할 것이다.
// const로 하면 한번만, let으로 하면 계속 값을 줄 수 있다.
// 하지만 const에 const를 더하면 새로 갱신이 될 수 있겠지?

addOne = (num) => num + 1

addOne = num => num + 1
// 여러가지 표현법. 이게 최종 모습
// name 이라는 인자를 받아서 hello ${name} 을 반환하는 함수를
// 선언식, 표현식, arrow function으로 만들어 보세요

// const name = prompt('Whats your name?')

function callname(name) {
  return console.log(`hello ${name}`)
}
callname('kanghyun')

let callname2 = function(name) {
  return console.log(`hello ${name}`)
}
callname2('KH')

callname2 = name => console.log(`hello ${name}`)
callname2('InDong')

// object 를 반환하는 arrow function

const makeObject = (value) => {
  return {'key': value}
}

const makeObject2 = value => ({'key': value})
// 이렇게 소괄호를 치면 된다.

const noArgs = () => 'No args'

const 강현 = () => '김강현'
const 김강현 = () => '강현'
const 강현킴 = () => '킴강현'
const 킴강현 = () => '강현킴'