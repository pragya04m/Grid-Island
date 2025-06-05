// LEVEL-WISE DATA

const levelData = {

  1: {
    // grid-row property
    question: "Save the fish from dying. <br>Use grid properties to <b>move the fish</b> to water cell.",
    code: 
`#island {
    display: grid;
    // 3x3 grid layout
}

.fish {
    <input id="css-input-red-fish" class="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "repeat(3, 1fr)",
      rows: "repeat(3, 1fr)"
    },
    elements: [
      { type: "red-fish", col: 2, row: 1 },
      { type: "ocean", col: 2, row: 2 },
    ],
    goal: [
      { type: "red-fish", col: 2, row: 2 }
    ]
  },

  2: {
    // grid-column, grid-row properties
    question: "Save the fish from dying. <br>Use grid properties to <b>move the fish</b> to water cell.",
    code: 
`#island {
    display: grid;
    // 5x5 grid layout
}

.fish {
    <input id="css-input-big-fish" class="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "20% 20% 20% 20% 20%",
      rows: "20% 20% 20% 20% 20%"
    },
    elements: [
      { type: "big-fish", col: 1, row: 1 },
      { type: "ocean", col: 4, row: 3 },
    ],
    goal: [
      { type: "big-fish", col: 4, row: 3 }
    ]
  },

  3: {
    // grid-column-start, grid-column-end
    question: "Too many fish, not enough splash! <br>Expand the ocean just enough to fit them all — <b>no more, no less!</b>",
    code: 
`#island {
    display: grid;
    // 5x5 grid layout
}

.ocean {
    <input id="css-input-ocean" class="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "repeat(5, 20%)",
      rows: "repeat(5, 20%)"
    },
    elements: [
      { type: "yellow-fish", col: 1, row: 1 },
      { type: "ocean", col: 1, row: 1 },
      { type: "yellow-fish", col: 2, row: 1 },
      { type: "yellow-fish", col: 3, row: 1 },
    ],
    goal: [
      { type: "ocean", colStart: 1, colEnd:4, row: 1 }
    ]
    // trick: grid-column-end value is exclusive (takes 1 minus)
    // bonus info: try giving it a negative value. you can give grid-column-start and grid-column-end negative values by count grid lines from the right instead of the left (based at first grid line from the right)
  },

  4: {
    question: "The mighty Coconut Tree wants more room to sway in the tropical breeze! <br>Help it stretch across <b>3 rows</b> and <b>2 columns</b>, starting right at the top-left corner of the island using the <b><code>\'grid-area\'</code></b> property.",
    code: 
`#island {
    display: grid;
    // 5x5 grid layout
}

.tree {
    <input id="css-input-tree" class="css-input" placeholder="grid-column: 1; grid-row:1;"></input>
}`,
    gridTemplate: {
      columns: "repeat(5, 20%)",
      rows: "repeat(5, 20%)"
    },
    elements: [
      { type: "tree", col: 1, row: 1 },
      { type: "sand", colStart: 1, colEnd: 3, rowStart: 1, rowEnd: 4 }
    ],
    goal: [
      { type: "tree", colStart: 1, colEnd:3, rowStart: 1, rowEnd: 4 }
    ]
  },

  5: {
    question: "Beach Break! <br>This little crab wants a cozy nap in the shade. Help it crawl to the <b>bottom-right corner of the coconut tree</b>, where the sand is cool and shady.",
    code: 
`.tree {
    grid-column: 1 span 2;
    grid-row: 1 span 3;
}

.crab {
    <input id="css-input-crab" class="css-input" placeholder="grid-column: 5; grid-row:1;"></input>
}`,
    gridTemplate: {
      columns: "repeat(5, 20%)",
      rows: "repeat(5, 20%)"
    },
    elements: [
      { type: "tree", colStart: 1, colEnd: 3, rowStart: 1, rowEnd: 4 },
      { type: "sand", colStart: 1, colEnd: 6, rowStart: 1, rowEnd: 6 },
      { type: "crab", col: 5, row: 1 }
    ],
    goal: [
      { type: "crab", col: 2, row: 3 }
    ]
  },

  6: {
    question: "Too many fish, not enough splash! <br>Expand the ocean just enough to fit them all — <b>no more, no less!</b>",
    code: 
`.fish {
    grid-row: 2 / span 3;
    grid-column: 2;
}

.ocean {
    grid-row-start: 5;
    <input id="css-input-ocean" class="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "repeat(5, 20%)",
      rows: "repeat(5, 20%)"
    },
    elements: [
      { type: "yellow-fish", rowStart: 2, rowEnd: 5, colStart: 2, colEnd: 3 },
      { type: "ocean", colStart: 2, colEnd: 3, rowStart: 5, rowEnd: 6 }
    ],
    goal: [
      { type: "ocean", rowStart: 2, rowEnd: 5, col: 2 }
    ]
  },

  7: {
    question: "Operation Side Swipe! <br>The sneaky crabs are creeping closer to the peaceful yellow fishes. <br>Move the <b>yellow fishes to the far left</b> of their ocean zone and <b>crabs to the far right</b> to avoid a clash!",
    code: 
`.crab {
    grid-column: 4;
    grid-row: 1 / span 4;
    <input id="css-input-crab" class="css-input" placeholder="Type your grid CSS property"></input>
}

.fish {
    grid-column: 3;
    grid-row: 1 / span 4;
    <input id="css-input-yellow-fish" class="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "repeat(4, 25%)",
      rows: "repeat(4, 25%)"
    },
    elements: [
      { type: "yellow-fish", colStart: 3, colEnd: 4, rowStart: 1, rowEnd: 5 },
      { type: "ocean", colStart: 3, colEnd: 4, rowStart: 1, rowEnd: 5 },
      { type: "sand", colStart: 4, colEnd: 5, rowStart: 1, rowEnd: 5 },
      { type: "crab", colStart: 4, colEnd: 5, rowStart: 1, rowEnd: 5 }
    ],
    goal: [
      { type: "yellow-fish", "justify-self":"start" },
      { type: "crab", "justify-self":"end" }
    ]
  },

  8: {
    question: "Center the lonely seagull in its cell <b>using a single property!</b>",
    code: 
`.seagull {
    grid-column: 3;
    grid-row: 3;
    <input id="css-input-seagull" class="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "1fr 1fr 1fr",
      rows: "1fr 1fr 1fr"
    },
    elements: [
      { type: "seagull", col: 2, row: 2, "justify-self":"start", "align-self":"end" }
    ],
    goal: [
      { type: "seagull", "justify-self":"center", "align-self":"center" }
    ]
  },

  9: {
    question: "The ocean breeze suddenly shifts!</b><br>Our peacefully perched seagull, must now <b>huddle in the bottom-right corner</b> to stay safe from the gusts.<br><i>Note: Looks familiar? Then look carefully.</i>",
    code: 
`.island {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    <input id="css-input-island" class="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "1fr 1fr 1fr",
      rows: "1fr 1fr 1fr"
    },
    elements: [
      { type: "seagull", col: 2, row: 2 }
    ],
    goal: [
      { type: "island", "justify-items":"end", "align-items":"end" }
    ]
  },

  10: {
    question: "The dolphins are practicing synchronized yoga. <br><b>Stretch them vertically</b> across their cells.",
    code: 
`.island {
    // 3x3 grid
    <input id="css-input-island" class="css-input" placeholder="Type your grid CSS property"></input>

.dolphin {
    <input id="css-input-dolphin" class="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "1fr 1fr 1fr",
      rows: "1fr 1fr 1fr"
    },
    elements: [
      { type: "dolphin", colStart: 1, colEnd: 4, rowStart: 2, rowEnd: 3 },
      { type: "ocean", colStart: 1, colEnd: 4, rowStart: 2, rowEnd: 3 }
    ],
    goal: [
      { type: "island", "align-items": "stretch" },
      { type: "dolphin", "align-self": "stretch" }
    ]
  },

  11: {
    question: "The island needs reshaping to plan coconut tree planting. <br>Set the grid to be <b>3 columns, each 200px wide</b>, and <b>2 rows, each 300px tall</b>.",
    code: 
`.island {
    <input id="css-input-island" class="css-input" placeholder="Make columns and rows"></input>
}`,
    gridTemplate: {
      columns: "1fr",
      rows: "1fr"
    },
    elements: [
      { type: "sand", col: 1, row: 1 },
      { type: "tree", col: 1, row: 1 }
    ],
    goal: [
      { type: "island", "grid-template-columns":"200px 200px 200px", "grid-template-rows":"300px 300px" }
    ]
  },

  12: {
    question: "The villagers are setting up fish market by the shore. Two stalls of each fish type were placed side by side — but now the sellers are arguing!<br>Rearrange them into <b>4 equally-spaced neat rows</b>, so each seller gets their own tidy pair!",
    code: 
`.island {
    <input id="css-input-island" class="css-input" placeholder="Set up stalls"></input>
}`,
    gridTemplate: {
      columns: "1fr 1fr",
      rows: "1fr"
    },
    elements: [

    ],
    goal: [
      { type: "island", "grid-template-rows":"1fr 1fr 1fr 1fr" }
    ]
  }
  
};


// --------------------------------------------------------------------------------------------------------------
// UPDATING LEVEL-BOX

let level = 1;
const maxLevel = 20;
const minLevel = 1;

const levelDisplay = document.getElementById("level-number");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

function updateLevelBox(newLevel) {
    // By Default- on function call (using argument)
    level = Math.max(minLevel, Math.min(maxLevel, newLevel)); //clamping function-> ensures level remains within the range [minLevel, maxLevel] - check if changing to newLevel possible, then change
    levelDisplay.textContent = `Level ${level}`;
}

// Based on Click events
leftArrow.addEventListener("click", () => loadNextLevel(level - 1));
rightArrow.addEventListener("click", () => loadNextLevel(level + 1));

// Based on Keyboard arrow key events
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") loadNextLevel(level - 1);
  if (event.key === "ArrowRight") loadNextLevel(level + 1);
});




// --------------------------------------------------------------------------------------------------------------
// LOADING NEW LEVEL CONTENT

const island = document.getElementById("island");
let currentGoal = [];

function loadNextLevel(newLevel) {
  console.log("Loading level:", newLevel);
  console.log("Level data:", levelData[newLevel]);

  // Update header: level number in levelBox
  updateLevelBox(newLevel);
  const currentLevel = level;
  console.log("Current level:", currentLevel);

  // Update content-left: question and editor data
  document.getElementById("question-text").innerHTML = levelData[currentLevel].question;
  document.getElementById("default-code").innerHTML = levelData[currentLevel].code;

  // --- Clear previous inline grid styles on the island ---
  island.style.gridTemplateColumns = '';
  island.style.gridTemplateRows = '';
  island.style.justifyItems = '';
  island.style.alignItems = '';
  island.style.placeItems = '';
  island.style.justifyContent = '';
  island.style.alignContent = '';
  island.style.placeContent = '';
  island.style.gap = '';
  island.style.gridGap = ''; // Clear both standard and prefixed gap properties
  // Add any other relevant grid container properties that can be set by user input
  // ---------------------------------------------------------

  // Reset island grid template if not Level 11
  /* // Removed this specific Level 11 check as broader clearing is added above
  if (currentLevel !== 11) {
    island.style.gridTemplateColumns = "";
    island.style.gridTemplateRows = "";
  }
  */

  // Update grid layout from levelData
  if (levelData[currentLevel].gridTemplate) {
    const grid = levelData[currentLevel].gridTemplate;
    island.style.gridTemplateColumns = grid.columns;
    island.style.gridTemplateRows = grid.rows;
    console.log("Grid template set from levelData:", grid);
  }

  // Clear old elements (fish, ocean, crab)
  const oldElements = island.querySelectorAll(".yellow-fish, .red-fish, .big-fish, .crab, .small-fish, .tree, .seagull, .dolphin, .lighthouse, .sky, .sun, .ocean, .sand");
  console.log("Clearing old elements:", oldElements.length);
  oldElements.forEach(el => el.remove());

  // --------------------------------------------------------------------
  // FUNCTION TO CREATE A NEW SINGLE-CELL ELEMENT- USED WHEN LOADING LEVEL
  function createElement(el) {
    let element;
    const { type, col, row } = el;
          
    // Create appropriate element type
    if (type === "sand" || type === "ocean" || type === "sky" || type === "sun") {
      element = document.createElement("div");
    } else {
      element = document.createElement("img");
      // Set image source based on type
      if(type === "big-fish") element.src = "images/big-fish.png";
      if(type === "red-fish") element.src = "images/red-fish.png";
      if(type === "yellow-fish") element.src = "images/yellow-fish.png";
      if(type === "small-fish") element.src = "images/small-fish.png";
      if(type === "crab") element.src = "images/crab.png";
      if(type === "tree") element.src = "images/tree.png";
      if(type === "seagull") element.src = "images/seagull.png";
      if(type === "dolphin") element.src = "images/dolphin.png";
      if(type === "lighthouse") element.src = "images/lighthouse.png";
      
      // Reset CSS style for image
      element.style.backgroundColor = "transparent";
      element.style.border = "none";
      element.style.boxShadow = "none";
    }

    // Set common properties
    element.className = `${type} cell`;
    element.style.gridColumn = col;
    element.style.gridRow = row;

    // Apply justify-self and align-self if present
    if (el["justify-self"]) {
      element.style.justifySelf = el["justify-self"];
    }
    if (el["align-self"]) {
      element.style.alignSelf = el["align-self"];
    }
    
    return element;
  }
  // --------------------------------------------------------------------

  // Add new elements
  levelData[currentLevel].elements.forEach(el => {
    if (el.type === "yellow-fish" || el.type === "red-fish" || el.type === "big-fish" || el.type === "small-fish" || 
      el.type === "crab" || el.type === "tree" || el.type === "seagull" || el.type === "dolphin" ||
      el.type === "lighthouse" || el.type === "sky" || el.type === "sun" || el.type === "sand" || el.type === "ocean") {

      // Special case for tree and lighthouse with spanning
      if ((el.type === "tree" || el.type === "lighthouse") && el.colStart && el.colEnd && el.rowStart && el.rowEnd) {
        const img = document.createElement("img");
        if(el.type === "tree") img.src = "images/tree.png";
        if(el.type === "lighthouse") img.src = "images/lighthouse.png";
        img.className = `${el.type} cell`;
        img.style.backgroundColor = "transparent";
        img.style.border = "none";
        img.style.boxShadow = "none";
        img.style.gridColumn = `${el.colStart} / ${el.colEnd}`;
        img.style.gridRow = `${el.rowStart} / ${el.rowEnd}`;
        island.appendChild(img);
      }
      // Case for spanning elements (except tree)
      else if (el.colStart && el.colEnd && el.rowStart && el.rowEnd) {
        for (let col = el.colStart; col < el.colEnd; col++) {
          for (let row = el.rowStart; row < el.rowEnd; row++) {
            island.appendChild(createElement({...el, col, row}));
          }
        }
      }
      // Case for single cell elements
      else {
        island.appendChild(createElement(el));
      }
    }
  });

  // Update win condition
  currentGoal = levelData[currentLevel].goal;
  console.log("Current goal:", currentGoal);

  // -----------------------------------------------------------------
  // HANDLE GRID SIZE CHANGES
  function updateGridSize() {
    const cells = island.querySelectorAll(".cell");
    // Parse the current grid's row and column sizes
    const colCount = getColumnCount(island.style.gridTemplateColumns);
    const rowCount = getRowCount(island.style.gridTemplateRows);

    cells.forEach(cell => {
      const col = parseInt(cell.style.gridColumn);
      const row = parseInt(cell.style.gridRow);

      if (col > colCount || row > rowCount) {
        cell.style.display = "none";
      } else {
        cell.style.display = "grid";
      }
    });

    // Helpers to count columns/rows from template string
    function getColumnCount(colString) {
      if (colString.includes("repeat")) {
        return parseInt(colString.match(/repeat\((\d+)/)[1]);
      }
      return colString.trim().split(/\s+/).length;
    }
    function getRowCount(rowString) {
      if (rowString.includes("repeat")) {
        return parseInt(rowString.match(/repeat\((\d+)/)[1]);
      }
      return rowString.trim().split(/\s+/).length;
    }
  }
  // -----------------------------------------------------------------

  // Update grid size (if needed)
  updateGridSize(level);
}



// --------------------------------------------------------------------------------------------------------------
// APPLYING CSS TO ISLAND GRID

function applyCSS() {
  // Map of input IDs to class selectors
  const inputMap = {
    'css-input-island': 'island',
    'css-input-ocean': 'ocean',
    'css-input-sand': 'sand',
    'css-input-crab': 'crab',
    'css-input-tree': 'tree',
    'css-input-yellow-fish': 'yellow-fish',
    'css-input-big-fish': 'big-fish',
    'css-input-red-fish': 'red-fish',
    'css-input-small-fish': 'small-fish',
    'css-input-sky': 'sky',
    'css-input-sun': 'sun',
    'css-input-seagull': 'seagull',
    'css-input-dolphin': 'dolphin',
    'css-input-lighthouse': 'lighthouse'
  };

  // Helper function to convert CSS property names to camelCase
  const toCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  };

  // Helper function to apply CSS property
  const applyProperty = (element, prop, value) => {
    const propertyName = toCamelCase(prop.trim());
    // For grid container properties, use direct assignment
    if (prop.includes('items') || prop.includes('place')) {
      console.log("Applying grid container property:", propertyName, value.trim(), "to", element.id);
      element.style[propertyName] = value.trim();
    } else {
      // For grid item properties, use setProperty
      console.log("Applying grid item property:", prop.trim(), value.trim(), "to", element.className);
      // Special handling for align-self and justify-self
      if (prop.includes('self')) {
        console.log("Applying self property:", propertyName, value.trim());
        element.style[propertyName] = value.trim();
      } else {
        element.style.setProperty(prop.trim(), value.trim());
      }
    }
  };

  // Helper function to create a cell
  const createCell = (col, row) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.gridColumn = col;
    cell.style.gridRow = row;
    return cell;
  };

  // Helper function to get grid dimensions from template
  const getGridDimensions = (template) => {
    if (template.includes('repeat')) {
      const match = template.match(/repeat\((\d+)/);
      return match ? parseInt(match[1]) : 1;
    }
    return template.trim().split(/\s+/).length;
  };

  Object.entries(inputMap).forEach(([inputId, className]) => {
    const cssInput = document.getElementById(inputId);
    if (!cssInput) return; // Skip if not present in this level

    const cssValue = cssInput.value;
    
    // Special handling for island element (grid container) - Level 11 onwards
    // Check if grid-template was changed
    if (className === 'island') {
      try {
        const lines = cssValue.split(";");
        let hasGridTemplate = false;
        
        lines.forEach(line => {
          if (line.trim() !== "") {
            const [prop, value] = line.split(":");
            if (prop && value) {
              if (prop.includes('grid-template')) {
                hasGridTemplate = true;
              }
              applyProperty(island, prop, value);
            }
          }
        });

        // If grid template was changed, update cells- recreate new cells based on no. of rows and columns
        if (hasGridTemplate) {
          // Clear all cells
          const existingCells = island.querySelectorAll('.cell');
          existingCells.forEach(cell => cell.remove());

          // Get new grid dimensions
          const colCount = getGridDimensions(island.style.gridTemplateColumns);
          const rowCount = getGridDimensions(island.style.gridTemplateRows);

          // Create new cells
          for (let col = 1; col <= colCount; col++) {
            for (let row = 1; row <= rowCount; row++) {
              const newCell = createCell(col, row);

              // SPECIFIC HANDLING FOR DIFF LEVELS

              // For Level 11, add sand and tree to all cells
              if (level === 11) {
                // Create sand element
                const sand = document.createElement('div');
                sand.className = 'sand cell';
                sand.style.gridColumn = col;
                sand.style.gridRow = row;
                
                // Create tree element
                const tree = document.createElement('img');
                tree.className = 'tree cell';
                tree.src = 'images/tree.png';
                tree.style.backgroundColor = 'transparent';
                tree.style.border = 'none';
                tree.style.boxShadow = 'none';
                tree.style.gridColumn = col;
                tree.style.gridRow = row;
                
                island.appendChild(sand);
                island.appendChild(tree);
              } 
              // For Level 12, add different fishes in each row - fish market
              else if (level === 12) {
                // First create and append the base cell
                island.appendChild(newCell);
  
                // Create fish element
                const fish = document.createElement('img');
                fish.style.backgroundColor = 'transparent';
                fish.style.border = 'none';
                fish.style.boxShadow = 'none';
                fish.style.gridColumn = col;
                fish.style.gridRow = row;
                fish.style.maxWidth = '120px'; // Set a fixed max width
                fish.style.maxHeight = '120px'; // Set a fixed max height
  
                // Assign different fish types based on row number
                switch(row) {
                  case 1:
                    fish.className = 'red-fish';
                    fish.src = 'images/red-fish.png';
                    break;
                  case 2:
                    fish.className = 'yellow-fish';
                    fish.src = 'images/yellow-fish.png';
                    break;
                  case 3:
                    fish.className = 'big-fish';
                    fish.src = 'images/big-fish.png';
                    break;
                  case 4:
                    fish.className = 'small-fish';
                    fish.src = 'images/small-fish.png';
                    break;
                }
                  
                island.appendChild(fish);
              }
              // For all other levels- default action
              else {
                island.appendChild(newCell);
              }
            }
          }
        }
      } catch (e) {
        alert("Invalid CSS!");
      }
      return;
    }

    // Handle grid items
    const targetElements = [...island.querySelectorAll(`.${className}.cell`)];
    targetElements.forEach(el => {
      // Reset style
      el.style.backgroundColor = "transparent";
      el.style.border = "none";
      el.style.boxShadow = "none";
      try {
        const lines = cssValue.split(";");
        lines.forEach(line => {
          if (line.trim() !== "") {
            const [prop, value] = line.split(":");
            if (prop && value) {
              applyProperty(el, prop, value);
            }
          }
        });
      } catch (e) {
        alert("Invalid CSS!");
      }
    });
  });
}

const apply_button = document.getElementById('apply-button');
apply_button.addEventListener("click", applyCSS);


// --------------------------------------------------------------------------------------------------------------
// Check answer correct or not

function checkAnswer() {
  const overlay= document.getElementById("overlay");
  const title= document.getElementById("result-title");
  const message= document.getElementById("result-message");
  overlay.classList.remove("hidden");

  // Collect all movable elements from DOM
  const movableElements = island.querySelectorAll(".yellow-fish, .red-fish, .big-fish, .crab, .small-fish, .tree, .seagull, .dolphin, .lighthouse, .sky, .sun, .ocean, .sand");

  // Helper function to get cell sizes as numbers
  const getCellSizesNumeric = (template) => {
    // Split by space and handle different size units
    const sizes = template.split(' ').map(size => {

      // Handle pixel values
      const pxMatch = size.match(/^(\d+\.?\d*)px$/);
      if (pxMatch) {
        return { type: 'px', value: parseFloat(pxMatch[1]) };
      }
      // Handle fr values
      const frMatch = size.match(/^(\d+\.?\d*)fr$/);
      if (frMatch) {
        return { type: 'fr', value: parseFloat(frMatch[1]) };
      }
      // Handle percentage
      const percentMatch = size.match(/^(\d+\.?\d*)%$/);
      if (percentMatch) {
        return { type: 'percent', value: parseFloat(percentMatch[1]) };
      }
      // Handle auto
      if (size === 'auto') {
        return { type: 'auto', value: 0 };
      }

      return null;
    }).filter(size => size !== null);

    return sizes;
  };

  // Check if all goal conditions are satisfied
  const isCorrect = currentGoal.every(goal => {

    // a) CHECKING GRID CONTAINER ("ISLAND" ELEMENT) PROPERTIES
    if (goal.type === "island") {
      const computedStyle = window.getComputedStyle(island);

      // checking grid layout
      if (goal["grid-template-columns"] || goal["grid-template-rows"]) { 

        let columnsMatch = true;
        let rowsMatch = true;
        let dimensionsMatch = true;

        // Check columns if specified in goal
        if (goal["grid-template-columns"]) {
            const computedColumns = getCellSizesNumeric(computedStyle.gridTemplateColumns);
            const expectedColumnsSizes = getCellSizesNumeric(goal["grid-template-columns"]);

            dimensionsMatch = computedColumns.length === expectedColumnsSizes.length;
            columnsMatch = dimensionsMatch && computedColumns.every((size, index) => {
              const expected = expectedColumnsSizes[index];
              // If expected is fr and computed is px, compare the px value
              if (expected.type === 'fr' && size.type === 'px') {
                  // For 1fr units, all computed px values should be roughly equal.
                  if (computedColumns.length > 0 && computedColumns[0].type === 'px') {
                      // Compare the current computed column size (in px) with the first computed column size
                      return Math.abs(size.value - computedColumns[0].value) < 1;
                  }
                  // Fallback or handle cases where computedColumns[0] is not px
                  return false;
              }
              if (expected.type === 'px') {
                return Math.abs(size.value - expected.value) < 0.5;
              } else if (expected.type === 'fr') {
                return size.type === 'fr' && Math.abs(size.value - expected.value) < 0.01;
              } else if (expected.type === 'auto') {
                return size.type === 'auto';
              } else if (expected.type === 'percent') {
                return size.type === 'percent' && Math.abs(size.value - expected.value) < 0.01;
              }
              return false;
            });
        }

        // Check rows if specified in goal
        if (goal["grid-template-rows"]) {
            const computedRows = getCellSizesNumeric(computedStyle.gridTemplateRows);
            const expectedRowsSizes = getCellSizesNumeric(goal["grid-template-rows"]);

            // If columns were not checked, update dimensionsMatch based on rows
            if (!goal["grid-template-columns"]) {
                 dimensionsMatch = computedRows.length === expectedRowsSizes.length;
            } else {
                // If columns were checked, ensure row count also matches
                dimensionsMatch = dimensionsMatch && (computedRows.length === expectedRowsSizes.length);
            }

            rowsMatch = dimensionsMatch && computedRows.every((size, index) => {
              const expected = expectedRowsSizes[index];
              // If expected is fr and computed is px, compare the px value
              if (expected.type === 'fr' && size.type === 'px') {
                  // For 1fr units, all computed px values should be roughly equal.
                  if (computedRows.length > 0 && computedRows[0].type === 'px') {
                      // Compare the current computed row size (in px) with the first computed row size
                      return Math.abs(size.value - computedRows[0].value) < 1;
                  }
                  // Fallback or handle cases where computedRows[0] is not px
                  return false;
              }
              // Original comparison for matching unit types
              if (expected.type === 'px') {
                return Math.abs(size.value - expected.value) < 0.5;
              } else if (expected.type === 'fr') {
                return size.type === 'fr' && Math.abs(size.value - expected.value) < 0.01;
              } else if (expected.type === 'auto') {
                return size.type === 'auto';
              } else if (expected.type === 'percent') {
                return size.type === 'percent' && Math.abs(size.value - expected.value) < 0.01;
              }
              
              return false; // Default return if none of the above unit types match
            });

          }
        if (dimensionsMatch && columnsMatch && rowsMatch) return true;
      } 
      
      // Check for other island (position) properties
      if (goal["justify-items"] || goal["align-items"] || goal["place-items"]) {
        let justifyItemsMatch = true;
        let alignItemsMatch = true;
        let placeItemsMatch = true;

        // Helper function to normalize property values
        const normalizeValue = (value) => {
          return value.toLowerCase().trim();
        };

        if (goal["justify-items"]) {
          const computedValue = normalizeValue(computedStyle.justifyItems);
          const goalValue = normalizeValue(goal["justify-items"]);
          justifyItemsMatch = computedValue === goalValue;
        }
        if (goal["align-items"]) {
          const computedValue = normalizeValue(computedStyle.alignItems);
          const goalValue = normalizeValue(goal["align-items"]);
          alignItemsMatch = computedValue === goalValue;
        }
        if (goal["place-items"]) {
          const computedValue = normalizeValue(computedStyle.placeItems);
          const goalValue = normalizeValue(goal["place-items"]);
          placeItemsMatch = computedValue === goalValue;
        }

        if(justifyItemsMatch && alignItemsMatch && placeItemsMatch) return true;
      }
    }

    // ----------------------------------------------------------------------------
    // HANDLE GRID ITEMS CHECKING- This logic applies if the goal type is not 'island'
    return Array.from(movableElements).some(el => {
      const computedStyle = window.getComputedStyle(el);

      // Get grid position values
      const gridColStart = parseInt(computedStyle.gridColumnStart);
      const gridColEnd = parseInt(computedStyle.gridColumnEnd);
      const gridRowStart = parseInt(computedStyle.gridRowStart);
      const gridRowEnd = parseInt(computedStyle.gridRowEnd);

      const typeMatches = el.classList.contains(goal.type);

      // Handle different matching strategies
      let colMatches = true;
      let rowMatches = true;

      // MATCHING COLUMN
      if (goal.colStart && goal.colEnd) {
        const expectedSpan = goal.colEnd - goal.colStart;
        let gridColStartNum = parseInt(computedStyle.gridColumnStart);
        let gridColEndNum = parseInt(computedStyle.gridColumnEnd);
        let actualSpan = gridColEndNum - gridColStartNum;
        let computedEnd = gridColEndNum;

        // If gridColEnd is not a number, try to extract span from string
        if (isNaN(gridColEndNum)) {
            // Try to match "span N" anywhere in the string
            const match = computedStyle.gridColumnEnd.match(/span\s*(\d+)/);
            if (match) {
                actualSpan = parseInt(match[1]);
                computedEnd = gridColStartNum + actualSpan;
            }
        }
        colMatches = (gridColStartNum === goal.colStart &&
            (gridColEndNum === goal.colEnd || actualSpan === expectedSpan || computedEnd === goal.colEnd))
            ||
            (gridColStartNum === goal.colEnd &&
            (gridColEndNum === goal.colStart || actualSpan === expectedSpan || computedEnd === goal.colStart));
            // because (level-6), end value can also be smaller than the start value
      } else if (goal.col) {
        colMatches = gridColStart === goal.col;
      }

      // MATCHING ROW
      if (goal.rowStart && goal.rowEnd) {
        rowMatches = (gridRowStart === goal.rowStart &&
            (gridRowEnd === goal.rowEnd || actualSpan === expectedSpan || computedEnd === goal.rowEnd))
            ||
            (gridRowStart === goal.rowEnd &&
            (gridRowEnd === goal.rowStart || actualSpan === expectedSpan || computedEnd === goal.rowStart));
      } else if (goal.row) {
        rowMatches = gridRowStart === goal.row;
      }

      let justifyMatches = true;
      let alignMatches = true;

      if (goal["justify-self"]) {
        justifyMatches = computedStyle.justifySelf === goal["justify-self"];
      }
      if (goal["align-self"]) {
        alignMatches = computedStyle.alignSelf === goal["align-self"];
      }

      if(level >= 1 && level <= 6) return typeMatches && colMatches && rowMatches;
      if(level >= 7 && level <= 10) {
        // Special case for level 10 - check for either align-items on island or align-self on dolphin
        if (level === 10) {
          // Check if either condition is met:
          const islandStyle = window.getComputedStyle(island);
          const dolphinElements = island.querySelectorAll('.dolphin');
          // 1. Island has align-items: stretch
          const hasIslandAlignItems = islandStyle.alignItems === 'stretch';
          // 2. Any dolphin has align-self: stretch
          const hasDolphinAlignSelf = Array.from(dolphinElements).some(dolphin => {
            const style = window.getComputedStyle(dolphin);
            return style.alignSelf === 'stretch';
          });
          // Return true if either condition is met
          return hasIslandAlignItems || hasDolphinAlignSelf;
        }
        return typeMatches && justifyMatches && alignMatches;
      }

      return false; // Default return if no specific level/item condition is met within the .some() loop
    });
  });

  // -----------------------------------------------------------------------------
  // Remove any existing retry button to avoid duplicates
  const existingRetry = document.getElementById("retry-button");
  if (existingRetry) existingRetry.remove();

  if (isCorrect) {
    title.textContent= "Your answer is Correct!";
    message.textContent= "Loading next level...";

    // Load next level after a short delay
    setTimeout(() => {
      overlay.classList.add("hidden");
      level = Math.min(maxLevel, level + 1); // increment level safely
      loadNextLevel(level);
    }, 1600);
  }
  else { // Wrong answer
    title.textContent= "You answer is Incorrect!";
    message.textContent= "";

    // Adding Retry button
    let retryButton= document.createElement("button");
    retryButton.innerText= "Retry";
    retryButton.setAttribute("id","retry-button");
    title.insertAdjacentElement("afterend", retryButton);

    // Hide overlay again on clicking retry button
    retryButton.addEventListener("click", () => {
      overlay.classList.add("hidden");
    })

    // If retry button not clicked, hide overlay after some time automatically
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 10000);

    // Remain on same level
  }
}

const next_button= document.getElementById('next-button');
next_button.addEventListener("click", checkAnswer);

// main
loadNextLevel(1);