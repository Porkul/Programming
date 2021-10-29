// 1. Võta array [2,7,6,12,44,32,4,8,12,17] ja leidke seal olevate arvude kogusumma
let arr = [2,7,6,12,44,32,4,8,12,17];
var result = arr.reduce((sum, current) => sum + current);
console.log(result);

// 2. Võta string "2 7 6 12 44 32 4 8 12 17" ja leidke seal olevate arvude kogusumma, iga arv on eraldatud tühikuga
let strings = "2 7 6 12 44 32 4 8 12 17";
let sum = strings.split(' ').map(str => parseInt(str)).reduce((sum, current) => sum + current);
console.log(sum);

// 3. Kirjuta funktsioon mis teisendab sekundid tundideks näiteks 7582 on 2 tundi.

function toHours(sec) {
  return "Päeva: " + Math.floor(sec / 86400)+ 
    ", Tundi: " + Math.floor(sec / 3600) +
    ", Minuti: " + Math.floor(sec % 3600 / 60) +
    ", Sekundi: " +  Math.floor(sec % 3600 % 60);
}
console.log(toHours(86399));


// 4. https://www.reddit.com challenge #383

const  isString2 = (str1, string2) => {
  const str1Doubled = str1 + str1;
  if (Adoubled.includes(str2)) {
  return true;
    } else {
  return false;
    }
  }
  
  console.log(isString2("nicole", "icolen"));
  console.log(isString2("nicole", "lenico"));
  console.log(isString2("nicole", "coneli"));
  console.log(isString2("aabaaaaabaab", "aabaabaabaaa"));
  console.log(isString2("abc", "cba"));
  console.log(isString2("xxyyy", "xxxyy"));
  console.log(isString2("xyxxz", "xxyxz")) ;
  console.log(isString2("x", "x"));
  console.log(isString2("x", "xx")) ;
  console.log(isString2("x", ""));
  console.log(isString2("", ""));

// 5. Mitme korruselise torni(püramiidi) saab ehitada 55 klotsiga, kui iga korruse ehitamiseks kulub üks klots rohkem kui eelmisel korrusel.
//Ja mitu korrust 1372 klotsiga? 55-ga saab 10 korru














