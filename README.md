# Contra AI Code 
## Tyler Technologies Virtual Coding Competition
This repo contains all my code for the Tyler Technologies Virtual Coding Competition, in which I won the first place of inner Mines competition and won the grand finale by beating a team from University of Maine.
Shout out to all the Tyler developers for building up this fun game. In fact, most of the code in this repo are developed by the incrediable developers at Tyler.

```src/app/game/ai/dfs.ai.ts``` contains my code for the competition. The whole idea of this AI is based on DFS, which basically search in four directions to find a move that maximize the valid moves in the future.

```src/app/game/ai/minimax.ai.ts``` contains my code for the attempt of Minimax Algorithm with Alpha-Beta pruning. It doesn't run as well as expected, very likely due to the problematic scoring metrics I used for the last search step.



## To run:
At the top level directiory run

```npm install```

After initial installation you can run the app with

```npm start```
