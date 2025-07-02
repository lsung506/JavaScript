// person 객체 생성
const person = { name: 'Ghost', age: 20 };

// 1. name 속성 값 출력
console.log(person.name); // Ghost

// 2. height 속성 추가
person.height = 180;
console.log(person); // { name: 'Ghost', age: 20, height: 180 }

// 3. age 속성 삭제
delete person.age;
console.log(person); // { name: 'Ghost', height: 180 }

// 4. 모든 key 이름을 배열로 출력
const keys = Object.keys(person);
console.log(keys); // ['name', 'height']

// 5. 모든 value만 배열로 출력
const values = Object.values(person);
console.log(values); // ['Ghost', 180]

// 6. key와 value를 한 줄씩 출력
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 7. 'age' 속성이 있는지 true/false 출력
console.log('age' in person); // false (삭제했기 때문)

// 8. "이름:값" 형태로 출력
const keyValueStrings = Object.entries(person).map(([k, v]) => `${k}:${v}`).join(', ');
console.log(keyValueStrings); // name:Ghost, height:180

// 9. 빈 객체 생성 후 동적으로 추가
const obj = {};
obj['job'] = 'developer';
console.log(obj); // { job: 'developer' }

// 10. person 객체의 key 개수 출력
console.log(Object.keys(person).length); // 2

// 11. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
  { name: 'Ghost', age: 20 },
  { name: 'Irangi', age: 22 },
  { name: 'Camel', age: 19 }
];
const names = users.map(user => user.name);
console.log("1:", names);

// 12. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user = { name: 'Ghost', age: 20 };
const newUser = { ...user, age: 30 };
console.log("2:", newUser);

// 13. person 객체에 동적으로 key와 value를 추가하세요. (key: hobby, value: soccer)
const person3 = { name: 'Ghost' };
const key = 'hobby';
const value = 'soccer';
person3[key] = value;
console.log("3:", person3);

// 14. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log("4:", merged);

// 15. person 객체의 모든 key와 value를 "key:value" 형태의 문자열 배열로 만드세요.
const person = { name: 'Ghost', age: 20 };
const keyValueArray = Object.entries(person).map(([k, v]) => `${k}:${v}`);
console.log("5:", keyValueArray);

// 16. users 배열에서 나이가 20 이상인 사람만 추출하세요.
const adultUsers = users.filter(user => user.age >= 20);
console.log("6:", adultUsers);

// 17. person 객체의 key와 value를 모두 대문자로 변환한 새 객체를 만드세요.
const upperPerson = {};
Object.entries({ name: 'Ghost', hobby: 'soccer' }).forEach(([k, v]) => {
  upperPerson[k.toUpperCase()] = v.toUpperCase();
});
console.log("7:", upperPerson);

// 18. 중첩 객체에서 내부 값에 접근하세요.
const nested = { name: 'Ghost', info: { email: 'ghost@email.com' } };
console.log("8:", nested.info.email);

// 19. 객체의 모든 값이 숫자인지 true/false로 판별하세요.
const obj = { a: 1, b: 2, c: 3 };
const areAllNumbers = Object.values(obj).every(value => typeof value === 'number');
console.log("9:", areAllNumbers);

// 20. users 배열에서 가장 나이가 많은 사람의 이름을 출력하세요.
const oldest = users.reduce((prev, curr) => (curr.age > prev.age ? curr : prev));
console.log("10:", oldest.name);

