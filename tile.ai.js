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

function minimax(tileStates, players, depth, curPlayer, alpha, beta){
    let x = players[curPlayer].coord[0], y = players[curPlayer].coord[1];

    if (depth == 0) return getScore3(tileStates, x, y);

    if (curPlayer == 0){ // a maximizing player, which is our team's monster
        let maxEval = Number.MIN_VALUE,  toRet = [maxEval, x, y];
        let allValidMoves = getValidMoves(tileStates, x, y);

        for (let move of allValidMoves){
            let tileStatesCopy = deepCopy2D(tileStates); //make a copy  
            tileStatesCopy[move[0]][move[1]]--; // make a move
            let eval = minimax(tileStatesCopy, players, depth - 1, curPlayer ^ 1, alpha, beta);
            if (eval[0] > maxEval){
                maxEval = eval[0];
                toRet = [maxEval, move[0], move[1]];
            }

            alpha = Math.max(alpha, eval[0]);
            if (beta <= alpha){
                break;
            }
        }
        return toRet;
    }else{// a minimizing player, which is opponent
        let minEval = Number.MAX_VALUE, toRet = [minEval, x, y];
        let allValidMoves = getValidMoves(tileStates, x, y);
        
        for (let move of allValidMoves){
            let tileStatesCopy = deepCopy2D(tileStates); //make a copy  
            tileStatesCopy[move[0]][move[1]]--; // make a move

            let eval = minimax(tileStatesCopy, players, depth - 1, curPlayer ^ 1, alpha, beta);
            if (eval[0] < minEval){
                minEval = eval[0];
                toRet = [minEval, move[0], move[1]];
            }

            beta = Math.min(beta, eval[0]);
            if (beta <= alpha){
                break;
            }
        }
        return toRet;
    }
}

function deepCopy2D(matrix){
    let copy = [];
    matrix.forEach(arr =>{
      let row = [];
      arr.forEach(ele =>{ row.push(ele);});
      copy.push(row);
    });
    return copy;
}

function coordToDirection(x, y, newX, newY){
    if (newX == x && newY == y) return 'none'; // just jump
    else if (newX == x - 1) return 'north'; // go north
    else if (newX == x + 1) return 'south'; // go south
    else if (newY == y - 1) return 'west'; // go west
    else return 'east'; // go east
}
  
function findNextMove(tileStates, x, y){
    // console.log('findNextMove --> tileStates', JSON.stringify(tileStates));
    if (tileStates[x][y] == 3) return [x, y]; //just jump

    let seen = new Set;
    let bestScore = 0, move = [x, y];

    seen.add((x + 1) + '_' + y);
    let s1 = maxMovesTowardsSouth(x + 1, y, seen, tileStates, maxMovesToSearch, 1);
    if (s1 > bestScore){
        bestScore = s1;
        move = [x+1, y];
    }
    seen.clear();

    seen.add((x - 1) + '_' + y);
    let s2 = maxMovesTowardsNorth(x - 1, y, seen, tileStates, maxMovesToSearch, 1);
    if (s2 > bestScore){
        bestScore = s2;
        move = [x-1, y];
    }
    seen.clear();

    seen.add(x + '_' + (y + 1));
    let s3 = maxMovesTowardsEast(x, y + 1, seen, tileStates, maxMovesToSearch, 1);
    if (s3 > bestScore){
        bestScore = s3;
        move = [x, y+1];
    }
    seen.clear();

    seen.add(x + '_' + (y - 1));
    let s4 = maxMovesTowardsWest(x, y - 1, seen, tileStates, maxMovesToSearch, 1);
    if (s4 > bestScore){
        bestScore = s4;
        move = [x, y-1];
    }
    seen.clear();

    //console.log('s1, s2, s3, s4, bestScore', s1, s2, s3, s4, bestScore)

    tileStates[move[0]][move[1]]--; //update tile so that gives next monster latest status

    return move;
}

let round = 0;
let maxMovesToSearch = 50;
function main(gameState, side) {
    let tStart = Date.now();
    console.log('-------entering main of dfsScript-----', side);
    maxMovesToSearch = ++round < 3 ? 10 : 40;
    const myTeam = gameState.teamStates[side];
    var curTileStates = deepCopy2D(gameState.tileStates);
    let nextMoves = [];
    for (let member of myTeam){
      if (!member.isDead){
        let x = member.coord[0], y = member.coord[1];
        let move = findNextMove(curTileStates, x, y);
        let direction = coordToDirection(x, y, move[0], move[1]);

        nextMoves.push(direction);
      }else{
        nextMoves.push('none');
      }
    }
    console.log('nextMoves decided:', nextMoves);
    let tEnd = Date.now();
    console.log('-------leaving main of dfsScript-----', side, ' time spent(ms): ', tEnd - tStart);

    return nextMoves;
}

