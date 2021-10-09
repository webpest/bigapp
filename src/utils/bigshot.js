export function bigShot(noOfPlays = 5) {
  let gamePicks = [];

  for (let i = 0; i < noOfPlays; i++) {
    gamePicks.push([...genaratePick(), ...generatePowerBall()]);
  }

  return gamePicks;
}

function genaratePick(num = 5, range = 69) {
  let whiteBallsSet = [];
  for (let i = 0; i < num; i++) {
    let whiteBall = Math.floor(Math.random() * range);
    if (whiteBallsSet.includes(whiteBall)) {
      i--;
    } else {
      console.log(typeof whiteBall);
      whiteBallsSet.push(whiteBall);
      //   if (whiteBall < 10) {
      //     whiteBallsSet.push(`0${whiteBall}`);
      //   } else {
      //     whiteBallsSet.push(whiteBall);
      //   }
    }
  }
  return whiteBallsSet;
}

function generatePowerBall(num = 1, range = 26) {
  let whiteBallsSet = [];
  for (let i = 0; i < num; i++) {
    let whiteBall = Math.floor(Math.random() * range);
    if (whiteBallsSet.includes(whiteBall)) {
      i--;
    } else {
      whiteBallsSet.push(whiteBall);
    }
  }
  return whiteBallsSet;
}
