// 1. Võta array [2,7,6,12,44,32,4,8,12,17] ja leidke seal olevate arvude kogusumma

let arr = [2,7,6,12,44,32,4,8,12,17];
var result = arr.reduce((sum, current) => sum + current);
console.log(result);

// 2. Võta string "2 7 6 12 44 32 4 8 12 17" ja leidke seal olevate arvude kogusumma, iga arv on eraldatud tühikuga
let strings = "2 7 6 12 44 32 4 8 12 17";
let sum = strings.split(' ').map(str => parseInt(str)).reduce((sum, current) => sum + current);
console.log(sum);

// 3. Kirjuta funktsioon mis teisendab sekundid tundideks näiteks 7582 on 2 tundi.
// 4. https://www.reddit.com/r/dailyprogrammer/comments/cdieag/20190715_challenge_379_easy_progressive_taxation/?utm_source=BD&utm_medium=Search&utm_name=Bing&utm_content=PSR1
