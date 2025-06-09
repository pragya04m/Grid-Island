// LEVEL-WISE DATA

const levelData = {

  1: {
    // grid-row property
    question: "The big fishes gets hungry quick. <br>Use grid properties to <b>move the red fish</b> to eat the small fish.",
    hint: "The red fish is a grid item. You need to use the <b>'grid-row'</b> property to move it.",
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
      { type: "small-fish", col: 2, row: 2 },
      { type: "ocean", col: 2, row: 2 }
    ],
    goal: [
      { type: "red-fish", col: 2, row: 2 }
    ]
  },

  2: {
    // grid-column, grid-row properties
    question: "Save the fish from dying. <br>Use grid properties to <b>move the fish</b> to water cell.",
    hint: "Use both <b>'grid-row'</b> and <b>'grid-column'</b> properties to move the fish across grid to the desired cell.",
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
      { type: "ocean", randomize: true }
    ],
    goal: [
      { type: "big-fish" }
    ]
  },

  3: {
    // grid-column-start, grid-column-end- exclusive
    question: "Too many fishes, not enough splash! <br>Expand the ocean just enough to fit them all — <b>no more, no less!</b>",
    hint: "'grid-column-end' value is <b>exclusive</b> w.r.t. cells (occupies 1 less) - <br>because start and end actually counts grid lines, not cells",
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
  },
  
  4: {
    // grid-column-start + grid-row-end: diagonal- normal
    // grid-column: 1/ 5; grid-row-end: 4;
    // grid-column: 1/ span 4; grid-row-end: -2;
    question: "The fish needs to swim diagonally across a current that flows from <b>top-right to bottom-left</b>.<br>Use start and end grid lines to stretch the ocean diagonally, but pay attention! <b>Don't let the crab bite the fish.</b>",
    code: 
`#island {
    display: grid;
    // 4x4 grid layout
}

.ocean {
    <input id="css-input-ocean" class="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "repeat(4, 25%)",
      rows: "repeat(4, 25%)"
    },
    elements: [
      { type: "red-fish", col: 4, row: 1 },
      { type: "crab", col: 1, row: 4 },
      { type: "sand", colStart: 1, colEnd: 5, rowStart: 4, rowEnd: 5 },
      { type: "ocean", colStart: 4, colEnd: 5, rowStart: 1, rowEnd: 2 }
    ],
    goal: [
      { type: "ocean", colStart: 1, colEnd:5, rowStart: 1, rowEnd: 4 }
    ]
  },

  5: {
    // grid-row: shorthand
    // grid-row: 2/ 6;
    // grid-row: 2/ span 4;
    question: "The lighthouse keeper climbed to the top to light the beacon — but the structure is too short!<br>Stretch the lighthouse to stand tall across <b>4 rows- second to last</b>, guiding ships from afar; <b>using a single property!</b>",
    hint: "'grid-row/column' is a shorthand property that can accept both start and end values at once, separated by a slash. Syntax-<br><code><i>grid-row: &lt;start-line&gt; / &lt;end-line&gt;</i></code>",
    code: 
`#island {
    display: grid;
    // 3x3 grid layout
}

.lighthouse {
    <input id="css-input-lighthouse" class="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "repeat(5, 1fr)",
      rows: "repeat(5, 1fr)"
    },
    elements: [
      { type: "lighthouse", colStart: 3, colEnd:4, rowStart: 3, rowEnd: 5 },
      { type: "sand", colStart: 2, colEnd: 5, rowStart: 4, rowEnd: 6 },
      { type: "ocean", colStart: 1, colEnd: 2, rowStart: 1, rowEnd: 6 },
      { type: "ocean", colStart: 5, colEnd: 6, rowStart: 1, rowEnd: 6 },
      { type: "ocean", colStart: 1, colEnd: 6, rowStart: 1, rowEnd: 4 },
    ],
    goal: [
      { type: "lighthouse", colStart: 3, colEnd:4, rowStart: 2, rowEnd: 6 }
    ]
  },
  
  6: {
    // reverse/ end-to-start - negative value
    // grid-row: -1/-3; grid-column: -1/-4;
    question: "A reverse ocean current pulls the fish from right, diagonally towards left. They start at the last column and swim <b>3 cells toward the left, 1 cell up.</b>",
    hint: "Try using a <b>negative value</b>.<br>Count grid lines <i>from the end</i> [right/ bottom] using negative values.<br>(-1 means the very last grid line; -2 means one before it.)",
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
      { type: "pufferfish", col: 5, row: 5 },
      { type: "ocean", colStart: 5, colEnd: 6, rowStart: 5, rowEnd: 6 }
    ],
    goal: [
      { type: "ocean", colStart: 3, colEnd:6, rowStart: 4, rowEnd: 6 }
    ]
  },
  
  7: {
    // span
    // grid-column: 2/ span 3;
    // grid-column-end: span 3;
    question: "The clever crab discovered a shortcut — a long sandbar that lets it reach the other side without stepping into the water!<br>Stretch the sandbar using <code><b>'span'</b></code> keyword, across exactly <b>3 columns</b> to connect the shorelines.",
    hint: "'span' lets you directly use <b>desired column/row width</b> instead of defining start and end grid lines.<br>Note: Keep in mind that span only works with <i>positive values.</i><br>Try using span with <i>both 'grid-column' and 'grid-column-start'</i>",
    code: 
`#island {
  display: grid;
  // 5x3 grid layout
}
  
.sand {
  <input id="css-input-sand" class="css-input" placeholder="Use span"></input>
}`,
        gridTemplate: {
      columns: "repeat(5, 20%)",
      rows: "repeat(3, 1fr)"
    },
    elements: [
      { type: "crab", col: 2, row: 2 },
      { type: "ocean", col: 1, row: 2 },
      { type: "ocean", col: 5, row: 2 },
      { type: "sand", col: 2, row: 2 }
    ],
    goal: [
      { type: "sand", colStart: 2, colEnd: 5, row: 2 }
    ]
  },
  
  8: {
    // random easy
    // grid-row: 3; grid-column: 2;
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

  9: {
    // grid-area property
    // grid-area: 1/ 1/ 4/ 3;
    question: "The mighty Coconut Tree wants more room to sway in the tropical breeze! <br>Help it stretch across <b>3 rows</b> and <b>2 columns</b>, starting right at the top-left corner of the island using the <b><code>\'grid-area\'</code></b> property.",
    hint: "'grid-area' is a shorthand property for specifying an element's position. Syntax-<br><code><i>grid-area: row-start / column-start / row-end / column-end;</i></code>",
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

  10: {
    // start greater than end
    // grid-row-end: 2;
    // grid-row-end: -5;
    question: "Too many fish, not enough splash! <br>Expand the ocean just enough to fit them all — <b>no more, no less!</b>",
    hint: "'grid-row-start' can take a value <b>greater</b> than 'grid-column-end'<br><i>(or even a negative value!)</i>",
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

  11: {
    // position properties- justify-self
    question: "Operation Side Swipe! <br>The sneaky crabs are creeping closer to the peaceful yellow fishes. <br>Move the <b>yellow fishes to the far left</b> of their ocean zone and <b>crabs to the far right</b> to avoid a clash!",
    hint: "Aligning elements within their cell requires positioning properties: <b>'justify-self'</b> (along inline-axis) and <b>'align-self'</b> (along block-axis).",
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

  12: {
    // grid item property *-self
    // place-self: center;
    question: "Center the lonely seagull in its cell <b>using a single property!</b>",
    hint: "A shorthand property for positioning cell items is 'place-self'. Syntax-<br><i><code>place-self: &lt;align-self&gt; &lt;justify-self&gt;</code></i>",
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

  13: {
    // grid container property *-items
    // place-items: end;
    question: "The ocean breeze suddenly shifts!</b><br>Our peacefully perched seagull, must now <b>huddle in the bottom-right corner</b> to stay safe from the gusts.<br><i>Note: Looks familiar? Then look carefully.</i>",
    hint: "Align the seagull within its cell at the bottom-right (end) corner.",
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

  14: {
    // stretch
    question: "The dolphins are practicing synchronized yoga. <br><b>Stretch them vertically</b> across their cells.",
    code: 
`.island {
    // 3x3 grid
    <input id="css-input-island" class="css-input" placeholder="Type your grid CSS property"></input>
}

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

  15: {
    // grid-template properties- absolute px
    question: "The island needs reshaping to plan coconut tree planting. <br>Set the grid to be <b>3 columns, each 200px wide</b>, and <b>2 rows, each 300px tall</b>.",
    hint: "Re-define grid number of rows and columns using <b>'grid-template-rows'</b> and <b>'grid-template-columns'</b>.<br>Bonus: Try using <i>'repeat'</i> keyword to shorten the code.",
    code: 
`.island {
    <input id="css-input-island" class="css-input" placeholder="Make columns and rows"></input>
}`,
    elements: [
      { type: "sand", col: 1, row: 1 },
      { type: "tree", col: 1, row: 1 }
    ],
    goal: [
      { type: "island", "grid-template-columns":"200px 200px 200px", "grid-template-rows":"300px 300px" }
    ]
  },

  16: {
    // percentage, fr
    question: "The villagers are setting up fish market by the shore. Two stalls of each fish type were placed side by side — but now the sellers are arguing!<br>Rearrange them into <b>4 equally-spaced neat rows</b>, so each seller gets their own tidy pair!",
    hint: "Use either <b>percentage</b> or <b>fr</b> (fractional unit) to get equal-sized divisions.<br>(Each fr unit allocates one share of the available space)",
    code: 
`.island {
    <input id="css-input-island" class="css-input" placeholder="Set up stalls"></input>
}`,
    gridTemplate: {
      columns: "1fr 1fr",
      rows: "1fr"
    },
    elements: [    ],
    goal: [
      { type: "island", "grid-template-rows":"1fr 1fr 1fr 1fr" }
    ]
  },

  17: {
    // fr only use
    question: "The ocean wants flexibility.<br>Divide the shore into 3 rows, where the <b>middle rows is twice as wide</b> as the others. Make room for wide water flow in the center!",
    hint: "Use fr to <b>divide space evenly</b> when divisions are unequal — 1fr 1fr splits it into 2 equal parts, 1fr 2fr gives twice as much space to the second column!",
    code: 
`.island {
    <input id="css-input-island" class="css-input" placeholder="Divide the shores"></input>
}`,
    elements: [
      { type: "sand", col: 1, row: 1 }
    ],
    goal: [
      { type: "island", "grid-template-rows":"1fr 2fr 1fr" }
    ]
  },

  18: {
    // mixed px, %, fr use
    // grid-template-columns: 1fr 150px 20%;
    question: "The lighthouse sits between land and sea — its column must be <b>fixed (150px)</b>, but the land should <b>stretch</b>, and the sea should stay <b>one-fifth of the grid width</b>.<br>Shape the columns according to proportion.</b>",
    hint: "The lighthouse taked fixed space, but other columns are relative. You can blend <b>different units - both fixed and relative</b> in a single statement.<br>Note: one-fifth is equivalent to 20%.",
    code: 
`.island {
    <input id="css-input-island" class="css-input" placeholder="Divide the shores"></input>
}`,
    gridTemplate: {
      columns: "1fr 1fr 1fr",
      rows: "1fr"
    },
    elements: [
      { type: "sand", col: 1, row: 1 },
      { type: "lighthouse", col: 2, row: 1 },
      { type: "ocean", col: 3, row: 1 },
    ],
    goal: [
      { type: "island", "grid-template-columns":"1fr 150px 20%" }
    ]
  },

  19: {
    // column-gap
    // column-gap: 2rem;
    question: "These crabs like to have their territory marked and fortified!<br>Help them build <b>horizontal aisles</b> of width <b>2rem</b> to separate and distance their boundaries.",
    hint: "Use <b>'column-gap'</b> to add space <i>between columns</i>.",
    code: 
  `.island {
    <input id="css-input-island" class="css-input" placeholder="Add horizontal space"></input>
  }`,
    gridTemplate: {
      columns: "repeat(3, 1fr)",
      rows: "1fr"
    },
    elements: [
      { type: "crab", colStart: 1, colEnd: 4, rowStart: 1, rowEnd: 2 },
      { type: "sand", colStart: 1, colEnd: 4, rowStart: 1, rowEnd: 2 }
    ],
    goal: [
      { type: "island", "column-gap": "2rem" }
    ]
  },

  20: {
    // row-gap: 1rem; column-gap: 2rem;
    question: "Plant a healthy tree grove!<br>Give each tree <b>sunlight space- 2rem (column-gap)</b> and <b>room to grow roots- 1rem (row-gap)</b>.",
    hint: "Use both <code>row-gap</code> and <code>column-gap</code> for complete grid spacing.<br>Try using shorthand <b>'gap'</b> property to set both at once. Syntax-<br><code><i>gap: &lt;row-gap&gt; &lt;column-gap&gt;;</i></code>",
    code: 
  `.island {
    <input id="css-input-island" class="css-input" placeholder="Add both row and column gaps"></input>
  }`,
    gridTemplate: {
      columns: "repeat(3, 1fr)",
      rows: "repeat(2, 1fr)"
    },
    elements: [
      { type: "tree", col: 1, row: 1 },
      { type: "tree", col: 2, row: 1 },
      { type: "tree", col: 3, row: 1 },
      { type: "tree", col: 1, row: 2 },
      { type: "tree", col: 2, row: 2 },
      { type: "tree", col: 3, row: 2 },
      { type: "sand", colStart: 1, colEnd: 4, rowStart: 1, rowEnd: 3 },
    ],
    goal: [
      { type: "island", "row-gap": "1rem", "column-gap": "2rem" }
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
    level = Math.max(minLevel, Math.min(maxLevel, newLevel)); // clamping function-> ensures level remains within the range [minLevel, maxLevel] - check if changing to newLevel possible, then change
    levelDisplay.textContent = `Level ${level}`;
    // Save the current level to localStorage
    localStorage.setItem('lastLevel', level.toString());
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

// --------------------------------------------------------------------
// FUNCTION TO CREATE A NEW ELEMENT- USED WHEN LOADING LEVEL
function createElement(el) {
  let element;
  const { type, col, row } = el;
        
  // Create appropriate element type
  if (type === "sand" || type === "ocean") {
    element = document.createElement("div");
  } else {
    element = document.createElement("img");
    // Set image source based on type
    if(type === "big-fish") element.src = "images/big-fish.png";
    if(type === "red-fish") element.src = "images/red-fish.png";
    if(type === "yellow-fish") element.src = "images/yellow-fish.png";
    if(type === "small-fish") element.src = "images/small-fish.png";
    if(type === "pufferfish") element.src = "images/pufferfish.png";
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

// Helper to get random unique grid position
function getRandomGridPosition(colCount, rowCount, excludePositions = []) {
  let randomCol, randomRow;
  let isUnique = false;
  while (!isUnique) {
    randomCol = Math.floor(Math.random() * colCount) + 1;
    randomRow = Math.floor(Math.random() * rowCount) + 1;
    isUnique = true;
    for (const excludePos of excludePositions) {
      if (randomCol === excludePos.col && randomRow === excludePos.row) {
        isUnique = false;
        break;
      }
    }
  }
  return { col: randomCol, row: randomRow };
}


function loadNextLevel(newLevel) {

  const levelDataForNewLevel = levelData[newLevel];
  if (!levelDataForNewLevel) {
    console.error("Error: No level data found for level:", newLevel);
    alert("Level doesn't exist!");
    return;
  }

  // Update header: level number in levelBox
  updateLevelBox(newLevel);
  const currentLevel = level;
  console.log("Current level after updateLevelBox:", currentLevel);

  // Update content-left: question and editor data
  const questionTextElement = document.getElementById("question-text");
  const defaultCodeElement = document.getElementById("default-code");
  const hintButton = document.getElementById("hint-button");
  
  questionTextElement.innerHTML = levelData[currentLevel].question;
  defaultCodeElement.innerHTML = levelData[currentLevel].code;

  // Show or hide the hint button based on levelData
  if (levelData[currentLevel].hint) {
    hintButton.style.display = "flex";
  } else {
    hintButton.style.display = "none";
  }

  // --- Clear ALL previous elements from the island ---
  while (island.firstChild) {
    island.removeChild(island.firstChild);
  }

  // Reset gap properties to default
  island.style.gap = "0.18rem";

  // Update grid layout from levelData and calculate dimensions
  let colCount = 0;
  let rowCount = 0;
  const grid = levelData[currentLevel].gridTemplate;

  if (grid && grid.columns) {
    island.style.gridTemplateColumns = grid.columns;
  } else {
    island.style.gridTemplateColumns = "1fr";
  }

  if (grid && grid.rows) {
    island.style.gridTemplateRows = grid.rows;
  } else {
    island.style.gridTemplateRows = "1fr";
  }

  // Calculate row and column counts from the set grid template using the helper function
  colCount = getGridDimensions(island.style.gridTemplateColumns);
  rowCount = getGridDimensions(island.style.gridTemplateRows);

  // --- Randomize positions for Level 2 ---
  if (currentLevel === 2) {
    let initialFishPos = null;
    let oceanElement = null;
    let goalFishElement = null;

    // Find initial fish position and ocean element
    levelData[currentLevel].elements.forEach(el => {
      if (el.type === "big-fish") {
        initialFishPos = { col: el.col, row: el.row };
      } else if (el.type === "ocean" && el.randomize) {
        oceanElement = el;
      }
    });

    // Find goal fish element
    levelData[currentLevel].goal.forEach(goalEl => {
      if (goalEl.type === "big-fish") {
        goalFishElement = goalEl;
      }
    });

    if (oceanElement && goalFishElement && initialFishPos) {
      const newOceanPos = getRandomGridPosition(colCount, rowCount, [initialFishPos]);
      oceanElement.col = newOceanPos.col;
      oceanElement.row = newOceanPos.row;
      // Goal fish position matches ocean position
      goalFishElement.col = newOceanPos.col;
      goalFishElement.row = newOceanPos.row;
    }
  }

  // --- Dynamically create base grid cell elements ---
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= colCount; col++) {
      const baseCell = document.createElement('div');
      baseCell.className = 'cell';
      baseCell.style.gridColumn = col;
      baseCell.style.gridRow = row;
      island.appendChild(baseCell);
    }
  }

  // --- Add level-specific elements from levelData ---
  readdLevelElements(currentLevel);

  // Update win condition
  currentGoal = levelData[currentLevel].goal;
  console.log("Current goal set:", currentGoal);
}

// New helper function to re-add level-specific elements
function readdLevelElements(currentLevel) {
  if (levelData[currentLevel].elements) {
    levelData[currentLevel].elements.forEach(el => {
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
        
        // Apply justify-self and align-self if present
        if (el["justify-self"]) {
          img.style.justifySelf = el["justify-self"];
        }
        if (el["align-self"]) {
          img.style.alignSelf = el["align-self"];
        }
        
        island.appendChild(img);
      }
      // Case for spanning elements (except tree and lighthouse)
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
    });
  } else {
      console.log("No level-specific elements defined in levelData.");
  }
}

// Helper to get grid dimensions from template string
const getGridDimensions = (template) => {
  if (!template) return 0; // Handle empty template string
  if (template.includes('repeat')) {
    const match = template.match(/repeat\(\s*(\d+)[,\s]/);
    return match ? parseInt(match[1]) : 0;
  }
   // Handle comma-separated values or space-separated values or null/empty/false values
  return template.trim().split(/[\s,]+/).filter(Boolean).length;
};



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
    'css-input-pufferfish': 'pufferfish',
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
    if (element.id === 'island') {
         element.style[propertyName] = value.trim();
        // if template change
         if (propertyName === 'gridTemplateColumns' || propertyName === 'gridTemplateRows') {
           recreateGridCells();
         }
    } 
    // For grid item properties, use setProperty
    else {
      // Special handling for align-self and justify-self
      if (prop.includes('self')) {
        element.style[propertyName] = value.trim();
      } else {
        element.style.setProperty(prop.trim(), value.trim());
      }
    }
  };

  // Helper function to create a base cell
  const createCell = (col, row) => {
    const baseCell = document.createElement('div');
    baseCell.className = 'cell';
    baseCell.style.gridColumn = col;
    baseCell.style.gridRow = row;
    return baseCell;
  };

  // Helper function to recreate grid cells after template changes
  const recreateGridCells = () => {
    // Get current grid dimensions
    const colCount = getGridDimensions(island.style.gridTemplateColumns);
    const rowCount = getGridDimensions(island.style.gridTemplateRows);
    
    // Remove existing cells
    const existingCells = island.querySelectorAll('.cell');
    existingCells.forEach(cell => cell.remove());
    
    // Create new cells
    for (let row = 1; row <= rowCount; row++) {
      for (let col = 1; col <= colCount; col++) {
        
        // For Level 15, add sand and tree to all cells
        if (level === 15) {
          const sand = document.createElement('div');
          sand.className = 'sand cell';
          sand.style.gridColumn = col;
          sand.style.gridRow = row;
          
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

        // For Level 16, add different fishes in each row - fish market
        else if (level === 16) {
          // First create and append the base cell
          island.appendChild(createCell(col, row));

          // Create fish element
          const fish = document.createElement('img');
          fish.style.backgroundColor = 'transparent';
          fish.style.border = 'none';
          fish.style.boxShadow = 'none';
          fish.style.gridColumn = col;
          fish.style.gridRow = row;
          // Explicitly remove these styles as they were re-introduced
          fish.style.maxWidth = '';
          fish.style.maxHeight = '100px';
          fish.style.objectFit = '';

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
            default:
              fish.className = 'fish';
              fish.src = '';
              break;
          }
          island.appendChild(fish);
        }

        // Level 17- add ocean and beach
        else if(level===17) {
          island.appendChild(createCell(col, row));

          if (row === 1 || row === rowCount) { // First and last row for sand
            const sand = document.createElement('div');
            sand.className = 'sand cell';
            sand.style.gridColumn = col;
            sand.style.gridRow = row;
            island.appendChild(sand);
          } else if (row === 2) { // Middle row for ocean
            const ocean = document.createElement('div');
            ocean.className = 'ocean cell';
            ocean.style.gridColumn = col;
            ocean.style.gridRow = row;
            island.appendChild(ocean);
          }
        }

        // For all other levels- default action
        else {
          island.appendChild(createCell(col, row));
        }
      }
    }
    readdLevelElements(level);
  };

  Object.entries(inputMap).forEach(([inputId, className]) => {
    const cssInput = document.getElementById(inputId);
    if (!cssInput) return; // Skip if not present in this level

    const cssValue = cssInput.value;
    
    // Special handling for island element (grid container) - Level 14 onwards
    // Check if grid-template was changed
    if (className === 'island') {
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

  // Collect all movable elements from DOM (elements that have a goal defined for them)
  const movableElements = island.querySelectorAll(".yellow-fish, .red-fish, .big-fish, .crab, .small-fish, .pufferfish, .tree, .seagull, .dolphin, .lighthouse, .sky, .sun, .ocean, .sand");

  // Helper function to get cell sizes as numbers
  const getCellSizesNumeric = (template) => {
    // Handle repeat() syntax
    if (template.includes('repeat')) {
      const match = template.match(/repeat\(\s*(\d+)[,\s]/);
      if (match) {
        const count = parseInt(match[1]);
        const value = template.substring(match[0].length).trim();
        if (!value || value === ')') return [];

        // Recursively parse the value part (handles repeat(2, 1fr 1fr) or repeat(2, repeat(2, 1fr)))
        const repeatedSizes = getCellSizesNumeric(value);
        // Repeat the parsed sizes 'count' times
        return Array(count).fill(repeatedSizes).flat();
      }
      // If repeat format is invalid but includes repeat
      return [];
    }

    return template.trim().split(/[\s,]+/).filter(Boolean).map(size => {

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
  };

  // Helper function to normalize property values
  const normalizeValue = (value) => {
    return value.toLowerCase().trim();
  };

  let isCorrect;

  // Check if all goal conditions are satisfied
  isCorrect = currentGoal.every(goal => {

    // --- CHECKING GRID CONTAINER ("ISLAND" ELEMENT) GOALS ---
    if (goal.type === "island") {
      const computedStyle = window.getComputedStyle(island);

      // checking grid layout properties (grid-template-columns/rows)
      if (goal["grid-template-columns"] || goal["grid-template-rows"]) {

        let columnsMatch = true;
        let rowsMatch = true;
        let dimensionsMatch = true;

        // Get total grid dimensions for percentage and fr calculations
        const totalGridWidth = island.offsetWidth;
        const totalGridHeight = island.offsetHeight;

        // Helper to calculate oneFrEquivalentPx for a given dimension
        const calculateOneFrPx = (expectedSizes, totalDimension) => {
          let totalExpectedFixedPx = 0;
          let totalExpectedPercentPx = 0;
          let totalExpectedFrUnits = 0;

          expectedSizes.forEach(size => {
            if (size.type === 'px') {
              totalExpectedFixedPx += size.value;
            } else if (size.type === 'percent') {
              totalExpectedPercentPx += (size.value / 100) * totalDimension;
            } else if (size.type === 'fr') {
              totalExpectedFrUnits += size.value;
            }
          });

          const remainingSpaceForFr = totalDimension - totalExpectedFixedPx - totalExpectedPercentPx;
          return totalExpectedFrUnits > 0 ? remainingSpaceForFr / totalExpectedFrUnits : 0;
        };

        // Check columns if specified in goal
        if (goal["grid-template-columns"]) {
            const computedColumns = getCellSizesNumeric(computedStyle.gridTemplateColumns);
            const expectedColumnsSizes = getCellSizesNumeric(goal["grid-template-columns"]);

            dimensionsMatch = computedColumns.length === expectedColumnsSizes.length;
            if (dimensionsMatch) {
              const oneFrPxColumns = calculateOneFrPx(expectedColumnsSizes, totalGridWidth);

              columnsMatch = computedColumns.every((size, index) => {
                const expected = expectedColumnsSizes[index];

                if (expected.type === 'fr') {
                  const diff = Math.abs(size.value - (expected.value * oneFrPxColumns));
                  return diff < 10;
                } 
                else if (expected.type === 'px') {
                  const diff = Math.abs(size.value - expected.value);
                  return diff < 1;
                } 
                else if (expected.type === 'percent') {
                  // Check if computed value is px (as it will be after browser rendering)
                  if (size.type === 'px') {
                    const expectedPxFromPercent = (expected.value / 100) * totalGridWidth;
                    const diff = Math.abs(size.value - expectedPxFromPercent);
                    return diff < 10;
                  }
                  return false;
                }
                return false;
              });
            }
        }

        // Check rows if specified in goal
        if (goal["grid-template-rows"]) {
            const computedRows = getCellSizesNumeric(computedStyle.gridTemplateRows);
            const expectedRowsSizes = getCellSizesNumeric(goal["grid-template-rows"]);

            // row count should also match the already checked column dimensionsMatch, if column exists
            dimensionsMatch = (goal["grid-template-columns"])
                ? (dimensionsMatch && (computedRows.length === expectedRowsSizes.length))
                : (computedRows.length === expectedRowsSizes.length);

            if (dimensionsMatch) {
              const oneFrPxRows = calculateOneFrPx(expectedRowsSizes, totalGridHeight);

              rowsMatch = computedRows.every((size, index) => {
                const expected = expectedRowsSizes[index];

                if (expected.type === 'fr') {
                  const diff = Math.abs(size.value - (expected.value * oneFrPxRows));
                  return diff < 10;
                } 
                else if (expected.type === 'px') {
                  const diff = Math.abs(size.value - expected.value);
                  return diff < 1;
                } 
                else if (expected.type === 'percent') {
                  if (size.type === 'px') {
                    const expectedPxFromPercent = (expected.value / 100) * totalGridHeight;
                    const diff = Math.abs(size.value - expectedPxFromPercent);
                    return diff < 10;
                  }
                  return false;
                }
                return false;
              });
            }
        }

        // Return true only if all specified dimensions match
        return dimensionsMatch && columnsMatch && rowsMatch;
      }

      // checking other island (position) properties
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

        return justifyItemsMatch && alignItemsMatch && placeItemsMatch;
      }

      // checking gap properties (column-gap, row-gap, gap)
      if (goal["column-gap"] || goal["row-gap"] || goal["gap"]) {
        let columnGapMatch = true;
        let rowGapMatch = true;
        let gapMatch = true;

        // Helper function to convert rem to pixels (assuming 1rem = 16px)
        const remToPx = (rem) => parseFloat(rem) * 16;

        // Helper function to normalize gap values
        const normalizeGapValue = (value) => {
          if (value.includes('rem')) {
            return remToPx(value);
          }
          return parseFloat(value);
        };

        if (goal["column-gap"]) {
          const computedValue = normalizeGapValue(computedStyle.columnGap);
          const goalValue = normalizeGapValue(goal["column-gap"]);
          columnGapMatch = Math.abs(computedValue - goalValue) < 1;
        }

        if (goal["row-gap"]) {
          const computedValue = normalizeGapValue(computedStyle.rowGap);
          const goalValue = normalizeGapValue(goal["row-gap"]);
          rowGapMatch = Math.abs(computedValue - goalValue) < 1;
        }

        if (goal["gap"]) {
          const computedValue = normalizeGapValue(computedStyle.gap);
          const goalValue = normalizeGapValue(goal["gap"]);
          gapMatch = Math.abs(computedValue - goalValue) < 1;
        }

        return columnGapMatch && rowGapMatch && gapMatch;
      }
    }

    // --- HANDLING GRID ITEMS (MOVABLE ELEMENTS) GOALS ---

    return Array.from(movableElements).some(el => {
      const computedStyle = window.getComputedStyle(el);
      
      // Get grid position values
      const gridColStart = parseInt(computedStyle.gridColumnStart) || 1;
      const gridColEnd = parseInt(computedStyle.gridColumnEnd) || (gridColStart + 1);
      const gridRowStart = parseInt(computedStyle.gridRowStart) || 1;
      const gridRowEnd = parseInt(computedStyle.gridRowEnd) || (gridRowStart + 1);

      const typeMatches = el.classList.contains(goal.type);

      let colMatches = true;
      let rowMatches = true;
      let justifyMatches = true;
      let alignMatches = true;

      // MATCHING COLUMN
      if (goal.colStart !== undefined && goal.colEnd !== undefined) {
        const expectedSpan = goal.colEnd - goal.colStart;
        let computedColStart = parseInt(computedStyle.gridColumnStart);
        let computedColEnd = parseInt(computedStyle.gridColumnEnd);
        let actualSpan = computedColEnd - computedColStart;

        // Convert negative grid lines to positive for comparison
        const islandComputedStyle = window.getComputedStyle(island);
        const currentIslandColCount = getGridDimensions(islandComputedStyle.gridTemplateColumns);
        const totalColLines = currentIslandColCount + 1; // total number of grid lines for columns

        if (computedColStart < 0) {
          computedColStart = totalColLines + computedColStart + 1;
        }
        if (computedColEnd < 0) {
          computedColEnd = totalColLines + computedColEnd + 1;
        }

        // Attempt to handle 'span' keyword in computed style
        if (isNaN(computedColEnd)) {
            const spanMatch = computedStyle.gridColumnEnd.match(/span\s*(\d+)/);
            if (spanMatch) {
                actualSpan = parseInt(spanMatch[1]);
                computedColEnd = computedColStart + actualSpan; // Calculate end based on start and span
            }
        }
        // Recalculate actualSpan after potential span handling
        actualSpan = computedColEnd - computedColStart;

        // Check if the computed range matches the goal range, considering start/end can be swapped
        // Normalize computed range (min and max lines)
        const normalizedComputedColStart = Math.min(computedColStart, computedColEnd);
        const normalizedComputedColEnd = Math.max(computedColStart, computedColEnd);

        // Normalize goal range
        const normalizedGoalColStart = Math.min(goal.colStart, goal.colEnd);
        const normalizedGoalColEnd = Math.max(goal.colStart, goal.colEnd);

        // Check if normalized ranges match
        colMatches = (normalizedComputedColStart === normalizedGoalColStart) &&
                     (normalizedComputedColEnd === normalizedGoalColEnd);

      } else if (goal.col !== undefined) {
        colMatches = gridColStart === goal.col;
      }

      // MATCHING ROW
      if (goal.rowStart !== undefined && goal.rowEnd !== undefined) {
         const expectedSpan = goal.rowEnd - goal.rowStart;
         let computedRowStart = parseInt(computedStyle.gridRowStart);
         let computedRowEnd = parseInt(computedStyle.gridRowEnd);
         let actualSpan = computedRowEnd - computedRowStart;

         // Convert negative grid lines to positive for comparison
         const islandComputedStyle = window.getComputedStyle(island);
         const currentIslandRowCount = getGridDimensions(islandComputedStyle.gridTemplateRows);
         const totalRowLines = currentIslandRowCount + 1; // total number of grid lines for rows

         if (computedRowStart < 0) {
           computedRowStart = totalRowLines + computedRowStart + 1;
         }
         if (computedRowEnd < 0) {
           computedRowEnd = totalRowLines + computedRowEnd + 1;
         }

         // Attempt to handle 'span' keyword in computed style
         if (isNaN(computedRowEnd)) {
             const spanMatch = computedStyle.gridRowEnd.match(/span\s*(\d+)/);
             if (spanMatch) {
                 actualSpan = parseInt(spanMatch[1]);
                 computedRowEnd = computedRowStart + actualSpan; // Calculate end based on start and span
             }
         }
         // Recalculate actualSpan after potential span handling
         actualSpan = computedRowEnd - computedRowStart;

        // Check if the computed range matches the goal range, considering start/end can be swapped
        // Normalize computed range (min and max lines)
        const normalizedComputedRowStart = Math.min(computedRowStart, computedRowEnd);
        const normalizedComputedRowEnd = Math.max(computedRowStart, computedRowEnd);

        // Normalize goal range
        const normalizedGoalRowStart = Math.min(goal.rowStart, goal.rowEnd);
        const normalizedGoalRowEnd = Math.max(goal.rowStart, goal.rowEnd);

        // Check if normalized ranges match
        rowMatches = (normalizedComputedRowStart === normalizedGoalRowStart) &&
                     (normalizedComputedRowEnd === normalizedGoalRowEnd);

      } else if (goal.row !== undefined) {
        rowMatches = gridRowStart === goal.row;
      }

      // MATCHING JUSTIFY-SELF and ALIGN-SELF
      if (goal["justify-self"] !== undefined) {
        justifyMatches = computedStyle.justifySelf === goal["justify-self"];
      }
      if (goal["align-self"] !== undefined) {
        alignMatches = computedStyle.alignSelf === goal["align-self"];
      }

      if(level >= 1 && level <= 10) return typeMatches && colMatches && rowMatches;

      if(level >= 11 && level <= 14) {
          if (level === 14 && goal.type === 'dolphin') {
               return typeMatches && alignMatches;
          }
          return typeMatches && justifyMatches && alignMatches;
      }

      // Default check for item goals: all relevant properties must match
      const itemGoalMatch = typeMatches && colMatches && rowMatches && justifyMatches && alignMatches;
      return itemGoalMatch;

    }); // End of Array.from(movableElements).some()
  }); // End of currentGoal.every()


  // -----------------------------------------------------------------------------
  // Remove any existing retry button to avoid duplicates
  const existingRetry = document.getElementById("retry-button");
  if (existingRetry) existingRetry.remove();

  if (isCorrect) {
    // SPECIAL ANIMATIONS: LEVEL-WISE

    if (level === 1) {
      const redFish = island.querySelector('.red-fish');
      if (redFish) {
        // Force a reflow
        redFish.offsetHeight;
        // Now add the transition and transform
        redFish.style.transition = 'transform 0.5s ease-in-out';
        redFish.style.transform = 'scale(1.1)';
        
        // Wait for animation to complete before showing overlay and loading next level
        setTimeout(() => {
          title.textContent = "Your answer is Correct!";
          message.textContent = "Loading next level...";
          overlay.classList.remove("hidden");
          
          // Load next level after showing overlay
          setTimeout(() => {
            overlay.classList.add("hidden");
            level = Math.min(maxLevel, level + 1);
            loadNextLevel(level);
          }, 1600);
        }, 600); // Wait for animation to complete
        return;
      }
    } 

    else if (level === 4) {
      const redFish = island.querySelector('.red-fish');
      if (redFish) {
        redFish.offsetHeight; // Force reflow
        redFish.style.transition = 'grid-column 2s ease-in-out, grid-row 2s ease-in-out';
        redFish.style.gridColumn = '1';
        redFish.style.gridRow = '3';

        setTimeout(() => {
          title.textContent = "Your answer is Correct!";
          message.textContent = "Loading next level...";
          overlay.classList.remove("hidden");
          
          setTimeout(() => {
            overlay.classList.add("hidden");
            level = Math.min(maxLevel, level + 1);
            loadNextLevel(level);
          }, 1000);
        }, 500); // Wait for fish movement animation to complete
        return;
      }
    }

    else if (level === 6) {
      const pufferFish = island.querySelector('.pufferfish');
      if (pufferFish) {
        pufferFish.offsetHeight; // Force reflow
        pufferFish.style.transition = 'grid-column 0.3s ease-in-out';
        pufferFish.style.gridColumn = '3';

        setTimeout(() => {
          pufferFish.style.transition = 'grid-row 0.3s ease-in-out';
          pufferFish.style.gridRow = '4';

        setTimeout(() => {
            title.textContent = "Your answer is Correct!";
            message.textContent = "Loading next level...";
            overlay.classList.remove("hidden");
            
            setTimeout(() => {
              overlay.classList.add("hidden");
              level = Math.min(maxLevel, level + 1);
              loadNextLevel(level);
            }, 1000); // Wait for overlay to show, then load next level
          }, 300); // Wait for row movement animation to complete
        }, 300); // Wait for column movement animation to complete
        return;
      }
    }

    // Default behavior for other levels
    title.textContent = "Your answer is Correct!";
    message.textContent = "Loading next level...";
    overlay.classList.remove("hidden");

    setTimeout(() => {
      overlay.classList.add("hidden");
      level = Math.min(maxLevel, level + 1);
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


// -------------------------------------------------------------------------------------
// HINT BUTTON
const hint_button = document.getElementById('hint-button');
hint_button.addEventListener("click", () => {
  const hintDialogue = document.getElementById("hint-dialogue");
  const hintMessage = document.getElementById("hint-message");
  const hintCloseButton = document.getElementById("hint-close-button");

  hintMessage.innerHTML = levelData[level].hint || "No hint available for this level.";
  hintDialogue.classList.remove("hidden");

  hintCloseButton.addEventListener("click", () => {
    hintDialogue.classList.add("hidden");
  }, { once: true }); // to remove the listener after it's called
});


// main
const initialLevel = parseInt(localStorage.getItem('lastLevel')) || 1;
loadNextLevel(initialLevel);