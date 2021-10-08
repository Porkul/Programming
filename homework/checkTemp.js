/* kodutöö - Katlal on kolm temperatuurivahemikku
0-20 on liiga külm
21-40 on paras temperatuur
41-60 on liiga kuum 

Looge funktsioon checkTemp mis võtab sisendiks temperatuuri ja tagastab vahemike puhul järgneva numbri:
Liiga külm tagastab -1
Paras temperatuur tagastab 0
Liiga kuum tagastab 1 */

function checkTemp(temp){
  if (temp >= 0 && temp <= 20) {
    return -1;
  } else if (temp >= 21 && temp <= 40) {
    return 0;
  } else (temp >= 41 && temp <= 60) {
    return 1;
  }
};

console.log(checkTemp(prompt()));
