export const minimaxScript = `
function maxMovesTowardsEast(x, y, seen, tileStates, targetMoveCt, curMoveCt){
    if (curMoveCt == targetMoveCt) return 1;
    if (x < 0 || x >= tileStates.length || y < 0 || y >= tileStates[0].length || tileStates[x][y] < 2) return 0;

    let validMoveCt = 0;
    //go east
    var newX = x, newY = y + 1, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsEast(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go north
    var newX = x - 1, newY = y, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsEast(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go south
    var newX = x + 1, newY = y, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsEast(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }

    return validMoveCt;
}

function maxMovesTowardsNorth(x, y, seen, tileStates, targetMoveCt, curMoveCt){
    if (curMoveCt == targetMoveCt) return 1;
    if (x < 0 || x >= tileStates.length || y < 0 || y >= tileStates[0].length || tileStates[x][y] < 2) return 0;

    let validMoveCt = 0;
    //go east
    var newX = x, newY = y + 1, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsNorth(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go north
    var newX = x - 1, newY = y, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsNorth(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go west
    var newX = x, newY = y - 1, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsNorth(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }

    return validMoveCt;
}

function maxMovesTowardsSouth(x, y, seen, tileStates, targetMoveCt, curMoveCt){
    if (curMoveCt == targetMoveCt) return 1;
    if (x < 0 || x >= tileStates.length || y < 0 || y >= tileStates[0].length || tileStates[x][y] < 2) return 0;

    let validMoveCt = 0;
    //go east
    var newX = x, newY = y + 1, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsSouth(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go south
    var newX = x + 1, newY = y, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsSouth(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go west
    var newX = x, newY = y - 1, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsSouth(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }

    return validMoveCt;
}

function maxMovesTowardsWest(x, y, seen, tileStates, targetMoveCt, curMoveCt){
    if (curMoveCt == targetMoveCt) return 1;
    if (x < 0 || x >= tileStates.length || y < 0 || y >= tileStates[0].length || tileStates[x][y] < 2) return 0;

    let validMoveCt = 0;
    //go west
    var newX = x, newY = y - 1, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsSouth(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go south
    var newX = x + 1, newY = y, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsWest(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go north
    var newX = x - 1, newY = y, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsWest(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }

    return validMoveCt;
}

function maxMovesTowardsAnywhere(x, y, seen, tileStates, targetMoveCt, curMoveCt){
    if (curMoveCt == targetMoveCt) return 1;
    if (x < 0 || x >= tileStates.length || y < 0 || y >= tileStates[0].length || tileStates[x][y] < 2) return 0;

    let validMoveCt = 0;
    //go east
    var newX = x, newY = y + 1, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsAnywhere(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go west
    var newX = x, newY = y - 1, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsAnywhere(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go south
    var newX = x + 1, newY = y, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsAnywhere(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }
    if (validMoveCt == targetMoveCt) return validMoveCt;

    //go north
    var newX = x - 1, newY = y, coordKey = newX + "_" + newY;
    if (!seen.has(coordKey)){ // not visited
        seen.add(coordKey);
        let maxMoves = 1 + maxMovesTowardsAnywhere(newX, newY, seen, tileStates, targetMoveCt, curMoveCt + 1);
        validMoveCt = Math.max(validMoveCt, maxMoves);
        seen.delete(coordKey);
    }

    return validMoveCt;
}

function deepCopy2D(matrix){
    let copy = [];
    matrix.forEach(arr =>{
      let row = [];
      arr.forEach(ele =>{
        // console.log('current ele', ele, typeof(ele));
        row.push(Number(ele));
      });
    //   console.log('current row', row);
      copy.push(row);
    });
    // console.log('copy ret:', JSON.stringify(copy));
    return copy;
}

function getValidMoves(curTileStates, x, y){
    const rows = curTileStates.length;
    const cols = curTileStates[0].length;
  
    // console.log();
    // console.log('getting ValidMoves for (x,y):', x, y);
    // console.log('   in getValidMoves: current tileStates', curTileStates);

    let allMoves = [[x+1, y], [x-1, y], [x, y+1], [x, y-1], [x, y]];
    let validMoves = [];
    for (let move of allMoves){
      let curX = move[0], curY = move[1];
      if (curX >= 0 && curX < rows && curY >= 0 && curY < cols && 
            curTileStates[curX][curY] > 1){
            validMoves.push(move);
      }
    }
    // console.log('   in getValidMoves: ValidMoves found for (x,y):', x, y, validMoves);
    // console.log();

    return validMoves;
}
  
function getClosestEnemy(gameState, side, x, y){
    const enemySide = side === 'home' ? 'away' : 'home';
    let enemies = gameState.teamStates[enemySide];
    
    let closestEnemy = enemies[0], minDistance = Number.MAX_VALUE;
    for (let enemy of enemies){
        if (!enemy.isDead){
            let ex = enemy.coord[0], ey = enemy.coord[1];
            let distance = Math.abs(x - ex) + Math.abs(y - ey);
            if (distance < minDistance){
                closestEnemy = enemy;
                minDistance = distance;
            }
        }
    }

    return closestEnemy;
}

function coordToDirection(x, y, newX, newY){
    if (newX == x && newY == y) return 'none'; // just jump
    else if (newX == x - 1) return 'north'; // go north
    else if (newX == x + 1) return 'south'; // go south
    else if (newY == y - 1) return 'west'; // go west
    else return 'east'; // go east
}
  
function getScore(tileStates, x, y){
    const rows = tileStates.length;
    const cols = tileStates[0].length;
    let xs = [0], ys = [0];
    for (let level = 1; level <= levelToCover; level++){
        xs.push(level);
        xs.push(-level);
        ys.push(level);
        ys.push(-level);
    }

    let score = 0;
    for (let dx of xs){
        for (let dy of ys){
            let newX = x + dx, newY = y + dy;
            // console.log(newX, newY);
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols){
                // times itself as weight
                score += tileStates[newX][newY] * tileStates[newX][newY]; 
          }
        }
    }

    // console.log('returned value: ', [score, x, y]);
    return [score, x, y];
}


function getScore2(tileStates, x, y){
    let seen = new Set;
    // seen.add(x + '_' + y);
    // let score = maxMovesTowardsAnywhere(x, y, seen, tileStates, 10, 1);

    // seen.add((x + 1) + '_' + y);
    // let bestScore = maxMovesTowardsSouth(x + 1, y, seen, tileStates, 10, 1);
    // seen.clear();

    // seen.add((x - 1) + '_' + y);
    // bestScore = Math.max(bestScore, maxMovesTowardsNorth(x - 1, y, seen, tileStates, 10, 1));
    // seen.clear();

    // seen.add(x + '_' + (y + 1));
    // bestScore = Math.max(bestScore, maxMovesTowardsEast(x, y + 1, seen, tileStates, 10, 1));
    // seen.clear();

    // seen.add(x + '_' + (y - 1));
    // bestScore = Math.max(bestScore, maxMovesTowardsWest(x, y - 1, seen, tileStates, 10, 1));
    // seen.clear();
    
    seen.add((x + 1) + '_' + y);
    let s1 = maxMovesTowardsSouth(x + 1, y, seen, tileStates, 10, 1);
    seen.clear();

    seen.add((x - 1) + '_' + y);
    let s2 = maxMovesTowardsNorth(x - 1, y, seen, tileStates, 10, 1);
    seen.clear();

    seen.add(x + '_' + (y + 1));
    let s3 = maxMovesTowardsEast(x, y + 1, seen, tileStates, 10, 1);
    seen.clear();

    seen.add(x + '_' + (y - 1));
    let s4 = maxMovesTowardsWest(x, y - 1, seen, tileStates, 10, 1);
    seen.clear();

    let score = s1 + s2 + s3 + s4;

    console.log(' getScore2 returned value: ', [score, x, y]);
    return [score, x, y];
}

function getScore3(tileStates, x, y){
    //console.log('getScore3 --> tileStates', JSON.stringify(tileStates));
    // if (tileStates[x][y] == 3) return [x, y]; //just jump

    let seen = new Set;
    let bestScore = 0, move = [x, y];

    seen.add((x + 1) + '_' + y);
    let s1 = maxMovesTowardsSouth(x + 1, y, seen, tileStates, maxMovesToReach, 1);
    if (s1 > bestScore){
        bestScore = s1;
        move = [x+1, y];
    }
    seen.clear();

    seen.add((x - 1) + '_' + y);
    let s2 = maxMovesTowardsNorth(x - 1, y, seen, tileStates, maxMovesToReach, 1);
    if (s2 > bestScore){
        bestScore = s2;
        move = [x-1, y];
    }
    seen.clear();

    seen.add(x + '_' + (y + 1));
    let s3 = maxMovesTowardsEast(x, y + 1, seen, tileStates, maxMovesToReach, 1);
    if (s3 > bestScore){
        bestScore = s3;
        move = [x, y+1];
    }
    seen.clear();

    seen.add(x + '_' + (y - 1));
    let s4 = maxMovesTowardsWest(x, y - 1, seen, tileStates, maxMovesToReach, 1);
    if (s4 > bestScore){
        bestScore = s4;
        move = [x, y-1];
    }
    seen.clear();

    //console.log('s1, s2, s3, s4, bestScore', s1, s2, s3, s4, bestScore)

    tileStates[move[0]][move[1]]--; //update tile so that give next monster latest status

    return [bestScore, move[0], move[1]];
    // return move;
}

function minimax(tileStates, players, depth, curPlayer, alpha, beta){
    let x = players[curPlayer].coord[0], y = players[curPlayer].coord[1];

    if (depth == 0) return getScore3(tileStates, x, y);

    if (curPlayer == 0){ // a maximizing player, which is our team's monster
        let maxEval = Number.MIN_VALUE,  toRet = [maxEval, x, y];
        let allValidMoves = getValidMoves(tileStates, x, y);
        console.log('maximizing allValidMoves', allValidMoves);

        for (let move of allValidMoves){
            // console.log('maximizing: tileStates received', tileStates);
            let tileStatesCopy = deepCopy2D(tileStates); //make a copy  
            tileStatesCopy[move[0]][move[1]]--; // make a move
            // console.log('maximizing: tileStatesCopy after move', move, tileStatesCopy);
            let eval = minimax(tileStatesCopy, players, depth - 1, curPlayer ^ 1, alpha, beta);
            if (eval[0] > maxEval){
                maxEval = eval[0];
                toRet = [maxEval, move[0], move[1]];
                // console.log('maximizing: updated toRet:', toRet);
            }

            alpha = Math.max(alpha, eval[0]);
            if (beta <= alpha){
                break;
            }
            // console.log();
        }

        return toRet;
    }else{// a minimizing player, which is opponent
        let minEval = Number.MAX_VALUE, toRet = [minEval, x, y];
        let allValidMoves = getValidMoves(tileStates, x, y);
        console.log('~minimizing allValidMoves', allValidMoves);
        
        for (let move of allValidMoves){
            // console.log('--minimizing: tileStates received', tileStates);
            let tileStatesCopy = deepCopy2D(tileStates); //make a copy  
            tileStatesCopy[move[0]][move[1]]--; // make a move
            // console.log('--minimizing: tileStatesCopy after move', move, tileStatesCopy);

            let eval = minimax(tileStatesCopy, players, depth - 1, curPlayer ^ 1, alpha, beta);
            if (eval[0] < minEval){
                minEval = eval[0];
                toRet = [minEval, move[0], move[1]];
                // console.log('--minimizing: updated toRet:', toRet);
            }

            beta = Math.min(beta, eval[0]);
            if (beta <= alpha){
                break;
            }
            // console.log();
        }

        return toRet;
    }
}

const depth = 3;
const maxMovesToReach = 5;
const levelToCover = 2; // how many levels radiate from (x,y) for computing score
function main(gameState, side) {
    console.log('-----------------------entering main of minimaxScript-----', side);
    console.log(gameState);
    const myTeam = gameState.teamStates[side];
    let curTileStates = deepCopy2D(gameState.tileStates);
    let nextMoves = [];
    console.log('before for curTileStates', curTileStates);
    for (let member of myTeam){
        console.log(side, member);
        if (!member.isDead){
            let x = member.coord[0], y = member.coord[1];
            let players = [member, getClosestEnemy(gameState, side, x, y)];
            console.log('closestEnemy found:', players[1]);
            
            let bestMove = minimax(curTileStates, players, depth, 0, Number.MIN_VALUE, Number.MAX_VALUE);
            let move = coordToDirection(x, y, bestMove[1], bestMove[2]);
            console.log('bestMove for (x,y)', x, y, ' is ', bestMove, move);

            //make the bestMove to update tileStates from other teammates
            curTileStates[bestMove[1]][bestMove[2]]--;

            nextMoves.push(move);
        }else{
            nextMoves.push('none');
        }
    }
    
    console.log('nextMoves decided:', nextMoves);
    console.log('-----------------------Leaving main of minimaxScript------', side);

    return nextMoves;
}
`;