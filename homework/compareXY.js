/*
Challenge from: https://www.reddit.com/r/dailyprogrammer/comments/afxxca/20190114_challenge_372_easy_perfectly_balanced/
Given a string containing only the characters x and y, find whether there are the same number of xs and ys.
*/

function balanced (string) {
let wordsArray = string.split(''); 

let onlyX = wordsArray.filter(word => word === "x")
let onlyY = wordsArray.filter(word => word === "y")

let result = onlyX.length === onlyY.length? true: false;

console.log (result);
}


balanced("xxxyyy") => true
balanced("yyyxxx") => true
balanced("xxxyyyy") => false
balanced("yyxyxxyxxyyyyxxxyxyx") => true
balanced("xyxxxxyyyxyxxyxxyy") => false
balanced("") => true
balanced("x") => false
