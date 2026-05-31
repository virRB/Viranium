# Behind The Scenes

## Map creation
- The map is created in `map.js`, and is fully dynamic.
- Currently the map size is 9x9, but can be easily edited by adjusting one variable
- The equation for the variable is (a + 1) x (b + 1)
- **Example:** 6x6 = 5x5 board

## Tiles
- Currently only one tile is in use, sand
- However, there are many more possible tiles.
- Each tile is stored with a number, following the table given below
  - **Empty:** 0
  - **Sand:** 1
  - **Water:** 2
  - **Rock:** 3

## Ruleset
- The rules for the tiles are:
  - if bottom is empty, move down
  - if bottom is full and down right is empty, move down right
  - if bottom is full and down right is full and down left is empty, move down left
  - else, stay put