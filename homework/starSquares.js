/*
Kirjuta funktsioon mis prindib konsooli ristküliku vastavalt mõõtmetele.
rect(7,4)
*******
*******
*******
*******
*/

var horizCount = 7;
var vertCount = 4;
var str = '*'.repeat(horizCount);
console.log(str);

for (var i=1; i < vertCount; ++i) {
  console.log(str);;
}

/*
Kirjuta funktsioon mis prindib konsooli tühja ristküliku vastavalt mõõtmetele.
hollowRect(7,4)
*******
*     *
*     *
*******
*/

let horizCount = 7;
let vertCount = 4;
let str = '*'.repeat(horizCount);

console.log(str);

for (let i=0; i < vertCount - 2; ++i) {
  console.log('*' + (' '.repeat(horizCount - 2)) + '*');
}

console.log(str);

/*
Kirjuta funktsioon mis prindib konsooli ristküliku mille sees on rist/diagonaalid vastavalt mõõtmetele.
diagonalRect(9,9)
*********
**     **
* *   * *
*  * *  *
*   *   *
*  * *  *
* *   * *
**     **
*********
*/

/*
Väiksemate ja paaris arvuliste korral tulgu enam vähem nii nagu tuleb
diagonalRect(7,5)
*******
**   **
*  *  *
**   **
*******
või
*******
* * * *
*  *  *
* * * *
*******
*/
