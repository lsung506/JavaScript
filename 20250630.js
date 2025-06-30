const Ages = [23, 17, 15, 34, 50, 5];

// quiz 1. Check if all are adults (age >= 18)
const allAdults = Ages.every(age => age >= 18) 
  ? '모두 성인입니다.' 
  : '성인이 아닌 사람이 있습니다.';
console.log(allAdults);

// quiz 2. Check if there's any preschool child (age < 6)
const hasPreschoolChild = Ages.some(age => age < 6) 
  ? '미취학 아동이 있습니다.' 
  : '미취학 아동이 없습니다.';
console.log(hasPreschoolChild);

const scores = [32, 85, 73, 50, 3, 93];

// quiz 3. Check if everyone passed (score >= 50)
const allPassed = scores.every(score => score >= 50)
  ? '모두 통과했습니다.'
  : '통과하지 못한 사람이 있습니다.';
console.log(allPassed);

// quiz 4. Find average score
const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log('평균 점수:', avgScore);

// quiz 5. Print numbers from 1 to 50 using Array.fill().map()
const nums = Array(50).fill().map((_, i) => i + 1);
console.log('1부터 50까지:', nums);

// quiz 7. Check if today is weekend
const today = new Date();
const day = today.getDay(); // 0: 일요일, 6: 토요일
const isWeekend = day === 0 || day === 6 
  ? '오늘은 주말입니다.' 
  : '오늘은 평일입니다.';
console.log(isWeekend);

const animals = ["PUPPY", "CAT", "FOX"];

// quiz 8. Add 'PARET' and 'RABBIT' between PUPPY and CAT
animals.splice(1, 0, "PARET", "RABBIT");
console.log('동물 배열 추가 후:', animals);

// quiz 9. Reverse animals array
const reversedAnimals = [...animals].reverse();
console.log('역순 배열:', reversedAnimals);

const str = "hello";

// quiz 10. Convert to uppercase array
const charArray = str.toUpperCase().split('');
console.log('문자 배열:', charArray);

const conf = ["Today", "is", "monday", "!"];

// quiz 11. Join with spaces
const sentence = conf.join(' ');
console.log('문장:', sentence);
