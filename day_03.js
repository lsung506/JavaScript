const heights = [150, 169, 185, 170];
const ghost = 167;

// 01. ghost보다 키가 큰 사람이 몇 명인지 출력
const count = heights.filter(h => h > ghost).length;
console.log("ghost보다 키 큰 사람 수:", count); // 👉 3

const words = ["hello", "ghost", "apple", "grape", "Lemon"];

// 02. 'l'이 포함된 단어만 추출 (대소문자 무시)
const result = words.filter(word => word.toLowerCase().includes('l'));
console.log("l이 포함된 단어들:", result); // 👉 ['hello','apple','Lemon']