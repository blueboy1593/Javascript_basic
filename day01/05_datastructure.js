const numbers = [1, 2, 3, 4]

numbers[0]   // 1
numbers[-1]  // undefined
numbers.length  // 4

// 배열 뒤집기
numbers.reverse() // 원본을 파괘한다.
numbers
numbers.reverse() // 원본을 복원한다.
numbers

// 배열에 아이템 추가하기
numbers.push('abc')
numbers

// 가장 마지막 요소 삭제
numbers.pop()

// 가장 앞에 요소 추가
numbers.unshift('a') // 5, new length
numbers

// 첫번째 요소 제거 후 반환
numbers.shift()   // 'a', 제거한 아이템
numbers

// includes - 측정 아이템이 배열에 있는지 여부를 반환
numbers.includes(0) // false
numbers.includes(1) // true

// indexOf - 특정 아이템의 index 를 찾아서 반환
// numbers.

numbers.indexOf(1) // 인덱스에 있는지 알려주긔. 그리고 몇번에 있는지 알려줌
numbers.indexOf(10) // 일치하는 정보 없다면 -1 반환

numbers.join()  // 굳이 쓰지 않고 해보면 될 것들.
numbers.join('')
numbers.join('-')
// 원본은 변하지 않는다. 함수로 계산된 값만 변환이 되는 것!!

const name = 'KingKang'

const me = {
  // name: name,
  name, // 변수의 이름과 key의 이름이 같다면 `name: name, => name,` 으로 생략 가능 Object Literal
  'phone number': '010-1234-5678',
  appleProducts: {
    gram: '2019new',
    buzz: 'galaxy buzz',
  }
}


// JSON

const jsonData = JSON.stringify(me)   // 직렬화 => JS Object 를 String 값으로

const parsedData = JSON.parse(jsonData)   // Deserializing

