# Grid-Island
An interactive game to master CSS Grid through fun, story-based challenges.

Grid-Island is an interactive, web-based game designed to help users understand and practice CSS Grid properties through 20 progressively challenging levels, using engaing visual puzzles to provide users a hands-on learning experience on CSS Grid and its various properties, making complex layout concepts intuitive and fun.

**Play it now:** https://grid-island.vercel.app/ (Deployed using Vercel)

##Gameplay Preview:
![image](https://github.com/user-attachments/assets/50e7642e-8d3c-4134-9f25-ade66b5be493)
![image](https://github.com/user-attachments/assets/2877d793-1617-41d4-bcd9-55977d46d196)
![image](https://github.com/user-attachments/assets/cc6fb042-caf2-42b2-ad56-f83b23e8c699)
![image](https://github.com/user-attachments/assets/637a21a1-1a64-4d89-8377-f2671fb0f239)



## Some Challenges I faced during development (as a JS learner):

### 1. Automating Level Changes
Challenge: Initially I started with trying to hardcode each level's pre and post layout, elements and goal condition, but I needed a more robust, modularized approach to make the game scalable and easy to maintain.
Solution: Built a centralized, data-driven levelData structure to manage all level properties (UI, goal, grid layout, etc.).

### 2. Dynamic Parsing of Grid Shorthands
Challenge: 
a) grid-column shorthands (1 / 4) don’t populate gridColumnStart/gridColumnEnd directly in JS. Handling '/' separated values and providing them to corresponding properties to allow robust goal checking.
b) Keywords like span 2 and functions like repeat(4, 1fr) are returned as strings, and not handled directly. They need to be parsed and interpreted to incorporate in changing grid layout according to user input.
Solution: Fallback logic using gridColumn?.split("/") with parseInt for reliability, regex parsing to handle strings.

### 4. Supporting Multiple Valid Inputs
Challenge: Some levels allow multiple correct answers (e.g. span or start/end equivalents, using grid-column or grid-column-start property, etc). To make the game robust and accurate (especially as a teaching platform), it should allow accepting all plausible answers as correct, not just the one the level intends to teach. Strict matching would penalize valid answers and hurt the learning experience.
Solution: Built a flexible goal-checking engine to match any semantically correct equivalent, accounting for:
- span vs. explicit end values
- start > end (reverse direction)
- shorthand vs longhand
- negative indexing
- repeat() vs manual expansion

### 5. Multi-Cell (spanning) Elements Strategy
a) Some elements (e.g. tree, ocean) should span multiple cells as a single image.
b) Others (e.g. sand, fish) should repeat across cells.
Solution: Differentiated behavior via type-based rendering logic.

### 6. Resetting Grid Layout on Level Switch
Challenge: Levels 15 onwards (based on grid-template-* properties) change the grid layout (number and size of rows and columns) using user input, which holds priority over manually defined grid styles in loadNextLevel function, hence they persisted across levels, distorting pre-defined, desired grid layouts in all levels.
Solution: Completely clear and recreate grid cells and styles on every level load.
