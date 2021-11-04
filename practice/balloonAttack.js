/* 
class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }
 
  status() {
    console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
  }
}

Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after 10 minutes 
(using the hitsPerMinute property) and returns the name of the winner.
If the result is a tie, return the string 'Tie'.
*/

class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
  }
}

const balloonAttack = (player1, player2) => {
  for (let i = 1; i <= 10; i++){
    player2.balloonCount -= player1.hitsPerMinute
    player1.balloonCount -= player2.hitsPerMinute
    player1.status();
    player2.status();
  }
  if (player1.balloonCount > player2.balloonCount) {
    return player1.name;
  }else if (player2.balloonCount > player1.balloonCount)
    return player2.name

  return 'Tie'
}
 
