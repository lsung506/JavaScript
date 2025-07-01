
// 1. filter로 짝수만 추출
const arr1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = arr1.filter(num => num % 2 === 0);
console.log('1:', evenNumbers); // [2, 4, 6]

// 2. map으로 각 요소 제곱 만들기
const arr2 = [1, 2, 3, 4];
const squared = arr2.map(num => num * num);
console.log('2:', squared); // [1, 4, 9, 16]

// 3. sort로 내림차순 정렬
const arr3 = [5, 2, 9, 1];
arr3.sort((a, b) => b - a);
console.log('3:', arr3); // [9, 5, 2, 1]

// 4. reduce로 모든 값의 합 구하기
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce((acc, cur) => acc + cur, 0);
console.log('4:', sum); // 15

// 5. some으로 0보다 작은 값이 있는지 확인
const arr5 = [3, -1, 5, 7];
const hasNegative = arr5.some(num => num < 0);
console.log('5:', hasNegative); // true

// 6. every로 모두 3보다 큰지 확인
const arr6 = [4, 5, 6];
const allAbove3 = arr6.every(num => num > 3);
console.log('6:', allAbove3); // true

// 7. forEach로 요소 출력
function solution1(names) {
  names.forEach(name => console.log(name));
}
solution1(['Irangi', 'Camel', 'Shoopa']); // 줄바꿈 출력

// 8. filter와 map 조합
function solution2(scores) {
  return scores.filter(score => score >= 60).map(score => score * 2);
}
console.log('8:', solution2([50, 60, 70, 80])); // [120, 140, 160]

// 9. filter로 모음 제거
function solution3(my_string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return my_string.split('').filter(char => !vowels.includes(char)).join('');
}
console.log('9:', solution3('beautiful')); // 'btfl'

// 10. for문으로 1부터 5까지 출력
for (let i = 1; i <= 5; i++) {
  console.log('10:', i);
}

// 11. for문으로 1~10 중 3의 배수만 배열에 담아 출력
const result = [];
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) result.push(i);
}
console.log('11:', result); // [3, 6, 9]
