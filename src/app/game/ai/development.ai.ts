/*
NOTE: This is for development purposes only, final submission should be done through the submission tab

Fill in the contents of main with your strategy
The contents of gameState and side can be found by viewing interfaces.ts IGameState and Side interfaces (also included in this comment)
gameState represents the current state of the game (all tiles, all teams)
side will tell you which team is yours
main should return an array of MoveDirection's (also found in interfaces.ts) with size = # of monsters on one team to start

Take a look at other example scripts to get some ideas on how to leverage this data

export interface IGameState {
  boardSize: [number, number];
  tileStates: TileState[][];
  teamStates: TeamStates;
}

export enum TileState {
  Good = 3,
  Warning = 2,
  Danger = 1,
  Broken = 0,
}

export enum Side {
  Home = 'home',
  Away = 'away',
}

export enum MoveDirection {
  North = 'north',
  South = 'south',
  East = 'east',
  West = 'west',
  None = 'none',
}

export type TeamStates = Record<Side, ITeamMemberState[]>;

export interface ITeamMemberState {
  coord: Coord;
  isDead: boolean;
}

export type Coord = [number, number];


*/

// do not include "export const developmentScript = " with your submission
// export const developmentScript = `
// function main(gameState, side) {
//     const myTeam = gameState.teamStates[side];
//     return ['none', 'none', 'none'];
//   }
// `;

export const developmentScript = `
function deepCopy2D(matrix){
  let copy = [];
  matrix.forEach(arr =>{
    let row = [];
    arr.forEach(ele =>{
      //console.log('current ele', ele, typeof(ele));
      row.push(Number(ele));
    });
    //console.log('current row', row);
    copy.push(row);
  });
 // console.log('copy ret:', JSON.stringify(copy));
  return copy;
}

function findNextMove(curTitleStates, x, y){
  const rows = curTitleStates.length;
  const cols = curTitleStates[0].length;

  //console.log('finding next move for x/y', x, y, count);
  //console.log('intial curTitleStates', curTitleStates, count);
  let maxAtX = x, maxAtY = y;
  let possibleMoves = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
  for (let move of possibleMoves){
    let curX = move[0], curY = move[1];
    if (curX >= 0 && curX < rows && curY >= 0 && curY < cols && 
          curTitleStates[curX][curY] > curTitleStates[maxAtX][maxAtY]){
      maxAtX = curX;
      maxAtY = curY;  
    }
  }
  //console.log('maxAtX/maxAtY', maxAtX, maxAtY);
  //console.log('value at maxAtX/Y:', curTitleStates[maxAtX][maxAtY] );
  curTitleStates[maxAtX][maxAtY] = curTitleStates[maxAtX][maxAtY] - 1;
  //console.log('value at maxAtX/Y:', curTitleStates[maxAtX][maxAtY] );
  //console.log('After found a move curTitleStates', curTitleStates, count);

  //convert coord to direction
  if (maxAtX == x && maxAtY == y) return 'none'; // just jump
  else if (maxAtX == x - 1) return 'north'; // go north
  else if (maxAtX == x + 1) return 'south'; // go south
  else if (maxAtY == y - 1) return 'west'; // go west
  else return 'east'; // go east
}

let count = 0;
function main(gameState, side) {
  count++;
  //console.log('-----------------------entering main of developmentScript-----', side, count);
  //console.log(gameState);
  const myTeam = gameState.teamStates[side];
  let curTitleStates = [...gameState.tileStates];
  //var curTitleStates = JSON.parse(JSON.stringify(gameState.tileStates));
  //var curTitleStates = deepCopy2D(gameState.tileStates);
  let nextMoves = [];
  //console.log('before for curTitleStates', curTitleStates);
  for (let member of myTeam){
    //console.log('before in findNextMoveintial curTitleStates', curTitleStates);
    if (!member.isDead){
      //TODO: possible same move as tileStates is not updated
      let x = member.coord[0], y = member.coord[1];
      let move = findNextMove(curTitleStates, x, y);

      nextMoves.push(move);
    }else{
      nextMoves.push('none');
    }
  }
 
  //console.log('nextMoves decided:', nextMoves);
  //console.log('-----------------------Leaving main of developmentScript------', side, count);

  return nextMoves;
}
`;
