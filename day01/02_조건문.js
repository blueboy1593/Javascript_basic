// const username = prompt('안녕하세요? 당신은 누구세요?')

// let message = ''

// if (username === 'ssafy') {
//   message = '<h1>SSAFY go home</h1>'
// } else if (username == 'admin') {
//   message = '<h1>주인님 하이</h1>'
// } else {
//   message = `<h1>Welcome ${username} 너도 고 홈</h1>`
// }

// document.write(message)

// switch 문

const username = prompt('Who are you?')

let message = ''

switch(username) {
  case 'ssafy': {
    message = '<h1>SSAFY go home</h1>'
    console.log(message)
    break
  }
  case 'admin': {
    message = '<h1>주인님 하이</h1>'
    console.log(message)
    break
  }
  default: {
    message = `<h1>Welcome ${username} 너도 고 홈</h1>`
  }
}

document.write(message)

// 이렇게 하면 맨 위부터 순차적으로 다 실행이 되는 것.
// break를 넣고 사용할 수 있따.

switch(사용자) {
  case '관리자': {
    사용자.권한 += '관리자 권한'
  }
  case '일반사용자': {
    사용자.권한 += '쓰기'
  }
  default: {
    사용자.권한 += '읽기'
  }
}