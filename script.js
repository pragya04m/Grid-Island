// LEVEL-WISE DATA

const levelData = {

  1: {
    // grid-row property
    question: "Save the fish from dying. <br>Use grid properties to move the fish to water cell.",
    code: 
`#island {
    display: grid;
    // 3x3 grid layout
}

.fish {
    <input id="css-input-red-fish" placeholder="Type your grid CSS property"></input>
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
    question: "Save the fish from dying. <br>Use grid properties to move the fish to water cell.",
    code: 
`#island {
    display: grid;
    // 5x5 grid layout
}

.fish {
    <input id="css-input-big-fish" placeholder="Type your grid CSS property"></input>
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
    question: "Too many fish, not enough splash! <br>Expand the ocean just enough to fit them all — <b>no more, no less!</b>",
    code: 
`#island {
    display: grid;
    // 5x5 grid layout
}

.ocean {
    <input id="css-input-ocean" placeholder="Type your grid CSS property"></input>
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
    // the ocean needs to span more cells, what do you do?
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
    <input id="css-input-tree" placeholder="grid-column: 1; grid-row:1;"></input>
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
    <input id="css-input-crab" placeholder="grid-column: 5; grid-row:1;"></input>
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
    grrid-column: 2;
}

.ocean {
    grid-row-start: 5;
    <input id="css-input-ocean" placeholder="Type your grid CSS property"></input>
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
    <input id="css-input-crab" placeholder="Type your grid CSS property"></input>
}

.fish {
    grid-column: 3;
    grid-row: 1 / span 4;
    <input id="css-input-yellow-fish" placeholder="Type your grid CSS property"></input>
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
    <input id="css-input-seagull" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "1fr 1fr 1fr",
      rows: "1fr 1fr 1fr"
    },
    elements: [
      { type: "seagull", col: 2, row: 2, "justify-self":"start", "align-self":"end" }
    ],
    goal: [
      { type: "seagull", "justify-self":"center", "slign-self":"center" }
    ]
  },

  9: {
    question: "The ocean breeze suddenly shifts!</b><br>Our peacefully perched seagull, must now <b>huddle in the bottom-right corner</b> to stay safe from the gusts.<br><i>Note: Looks familiar? Think again.</i>",
    code: 
`.island {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    <input id="css-input-island" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "1fr 1fr 1fr",
      rows: "1fr 1fr 1fr"
    },
    elements: [
      { type: "seagull", col: 2, row: 2 }
    ],
    goal: [
      { type: "island", "justify-items":"center", "align-items":"center" }
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
//  HANDLE GRID SIZE CHANGES
function updateGridSize(level) {
  const cells = island.querySelectorAll(".cell");
  cells.forEach(cell => {
    const col = parseInt(cell.style.gridColumn);
    const row = parseInt(cell.style.gridRow);
    
    // For level 1, hide cells beyond 3x3
    if (level === 1 && (col > 3 || row > 3)) {
      cell.style.display = "none";
    } else {
      cell.style.display = "grid";
    }
  });
}



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

  // Update grid layout
  if (levelData[currentLevel].gridTemplate) {
    const grid = levelData[currentLevel].gridTemplate;
    island.style.gridTemplateColumns = grid.columns;
    island.style.gridTemplateRows = grid.rows;
    console.log("Grid template set:", grid);
  }

  // Clear old elements (fish, ocean, crab)
  const oldElements = island.querySelectorAll(".yellow-fish, .red-fish, .big-fish, .crab, .small-fish, .tree, .seagull, .lighthouse, .sky, .sun, .ocean, .sand");
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
    if (el.type === "yellow-fish" || el.type === "red-fish" || el.type === "big-fish" || 
        el.type === "small-fish" || el.type === "crab" || el.type === "tree" || el.type === "seagull" || 
        el.type === "lighthouse" || el.type === "sky" || el.type === "sun" ||
        el.type === "sand" || el.type === "ocean") {

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
      element.style.setProperty(prop.trim(), value.trim());
    }
  };

  Object.entries(inputMap).forEach(([inputId, className]) => {
    const cssInput = document.getElementById(inputId);
    if (!cssInput) return; // Skip if not present in this level

    const cssValue = cssInput.value;
    
    // Special handling for island element (grid container)
    if (className === 'island') {
      console.log("Processing island input for level:", level);
      try {
        const lines = cssValue.split(";");
        lines.forEach(line => {
          if (line.trim() !== "") {
            const [prop, value] = line.split(":");
            if (prop && value) {
              applyProperty(island, prop, value);
            }
          }
        });
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

const apply_button= document.getElementById('apply-button');
apply_button.addEventListener("click", applyCSS);


// --------------------------------------------------------------------------------------------------------------
// NEXT BUTTON- Check answer correct or not

function checkAnswer() {
  const overlay= document.getElementById("overlay");
  const title= document.getElementById("result-title");
  const message= document.getElementById("result-message");
  overlay.classList.remove("hidden");

  // Collect all movable elements from DOM
  const movableElements = island.querySelectorAll(".yellow-fish, .red-fish, .big-fish, .crab, .small-fish, .tree, .seagull, .lighthouse, .sky, .sun, .ocean, .sand");

  // Check if all goal conditions are satisfied
  const isCorrect = currentGoal.every(goal => {
    // Special handling for island element (grid container)
    if (goal.type === "island") {
      const computedStyle = window.getComputedStyle(island);
      
      // Check grid container properties
      let justifyItemsMatch = true;
      let alignItemsMatch = true;
      let placeItemsMatch = true;
      let gridTemplateRowsMatch = true;
      let gridTemplateColumnsMatch = true;

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
      if (goal["grid-template-rows"]) {
        const computedValue = normalizeValue(computedStyle.gridTemplateRows);
        const goalValue = normalizeValue(goal["grid-template-rows"]);
        gridTemplateRowsMatch = computedValue === goalValue;
      }
      if (goal["grid-template-columns"]) {
        const computedValue = normalizeValue(computedStyle.gridTemplateColumns);
        const goalValue = normalizeValue(goal["grid-template-columns"]);
        gridTemplateColumnsMatch = computedValue === goalValue;
      }

      // For level 9, we only need to check justify-items and align-items
      if (level === 9) {
        return justifyItemsMatch && alignItemsMatch;
      }

      return justifyItemsMatch && alignItemsMatch && placeItemsMatch && 
             gridTemplateRowsMatch && gridTemplateColumnsMatch;
    }

    // Handle grid items
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

      if(level>=1 && level<=6) return typeMatches && colMatches && rowMatches;
      if(level>=7 && level<=10) return typeMatches && justifyMatches && alignMatches;
    });
  });

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