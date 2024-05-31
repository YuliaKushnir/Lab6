function checkBrackets(str) {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const stack = [];
  
  for (const char of str) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
  
let str1 = "function checkBrackets(str) {const brackets = {'(': ')', '{': '}', '[': ']'};}";
console.log(checkBrackets(str1)); 
document.getElementsByClassName('task10_1')[0].innerHTML = checkBrackets(str1);

let str2 = "function checkBrackets(str) {const";
console.log(checkBrackets(str2)); 
document.getElementsByClassName('task10_2')[0].innerHTML = checkBrackets(str2);
