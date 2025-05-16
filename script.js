// LEVEL-WISE DATA

const levelData = {
  1: {
    question: "Save the fish from dying. <br> Use grid properties to move the fish to water cell.",
    code: 
`#island {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

.fish {
    <input id="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "20% 20% 20% 20% 20%",
      rows: "20% 20% 20% 20% 20%"
    },
    elements: [
      { type: "big-fish", col: 2, row: 3 },
      { type: "ocean", col: 5, row: 1 },
    ],
    goal: [
      { type: "big-fish", col: 5, row: 1 }
    ]
  },

  2: {
    question: "Move the crab to the sand!",
    code: 
`#island {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

.crab {
    <input id="css-input" placeholder="Type your grid CSS property"></input>
}`,
    gridTemplate: {
      columns: "repeat(5, 20%)",
      rows: "repeat(5, 20%)"
    },
    elements: [
      { type: "crab", col: 1, row: 1 },
      { type: "sand", col: 4, row: 3 }
    ],
    goal: [
      { type: "crab", col: 4, row: 3 }
    ]
  }
  // Add more levels...
};


// -----------------------------------------------------------------------------------------------------------------------------
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


// -----------------------------------------------------------------------------------------------------------------------------
// LOADING NEW LEVEL CONTENT

const island = document.getElementById("island");
let currentGoal = [];

function loadNextLevel(newLevel) {

  // Update header: level number in levelBox
  updateLevelBox(newLevel);
  const currentLevel = level;

  // Update content-left: question and editor data
  document.getElementById("question-text").innerHTML = levelData[currentLevel].question;
  document.getElementById("default-code").innerHTML = levelData[currentLevel].code;

  // Update grid layout
  if (levelData[currentLevel].gridTemplate) {
    const grid = levelData[currentLevel].gridTemplate;
    island.style.gridTemplateColumns = grid.columns;
    island.style.gridTemplateRows = grid.rows;
  }

  // Clear old elements (fish, ocean, crab)
  island.querySelectorAll(".big-fish, .crab, .small-fish, .tree, .ocean, .sand").forEach(el => el.remove());

  // Add new elements
  levelData[currentLevel].elements.forEach(el => {

    if (el.type === "big-fish" || el.type === "small-fish" || el.type === "crab" || el.type === "tree") {
      const img = document.createElement("img");
      if(el.type === "big-fish") img.src = "images/big-fish.png";
      if(el.type === "small-fish") img.src = "images/small-fish.png";
      if(el.type === "crab") img.src = "images/crab.png";
      if(el.type === "tree") img.src = "images/coconut_tree.png";
      img.className = `${el.type} cell`;
      img.style.gridColumn = el.col;
      img.style.gridRow = el.row;
      island.appendChild(img);
    } 
    else if (el.type === "ocean" || el.type === "sand") {
      const div = document.createElement("div");
      div.style.gridColumn = el.col;
      div.style.gridRow = el.row;
      div.className = `${el.type} cell`;
      island.appendChild(div);
    }
  });

  // Update win condition
  currentGoal = levelData[currentLevel].goal;
}


// --------------------------------------------------------------------------------------------------------------
// APPLYING CSS TO ISLAND GRID

/* LEVEL-1 */

function applyCSS() {
  const cssInput = document.getElementById("css-input").value;
  
  // Extract unique element types from goal (e.g., ["big-fish", "crab"])
  const goalTypes = [...new Set(currentGoal.map(goal => goal.type))];

  // Get only elements on the grid that match goal types
  const targetElements = [...island.querySelectorAll(".cell")].filter(el =>
    goalTypes.some(type => el.classList.contains(type))
  );

  // Apply CSS input to each matching element
  targetElements.forEach(el => {
    // Reset style
    el.style.backgroundColor = "transparent";
    el.style.border = "none";
    el.style.boxShadow = "none";

    try {
      const lines = cssInput.split(";");
      lines.forEach(line => {
        if (line.trim() !== "") {
          const [prop, value] = line.split(":");
          if (prop && value) {
            el.style.setProperty(prop.trim(), value.trim());
          }
        }
      });
    } catch (e) {
      alert("Invalid CSS!");
    }
  });
}

const apply_button= document.getElementById('apply-button');
apply_button.addEventListener("click", applyCSS);


// -------------------------------------------------------------------------------------------------------------------------------
// NEXT BUTTON- Check answer correct or not

function checkAnswer() {
  const overlay= document.getElementById("overlay");
  const title= document.getElementById("result-title");
  const message= document.getElementById("result-message");
  overlay.classList.remove("hidden");

  // Collect all movable elements from DOM
  const movableElements = island.querySelectorAll(".big-fish, .crab, .small-fish, .tree");

  // Check if all goal conditions are satisfied
  const isCorrect = currentGoal.every(goal => {
    return Array.from(movableElements).some(el => {
      const gridCol = parseInt(el.style.gridColumn);
      const gridRow = parseInt(el.style.gridRow);
      return el.classList.contains(goal.type) &&
             gridCol === goal.col &&
             gridRow === goal.row;
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
    // Remain on same level

  }
}

const next_button= document.getElementById('next-button');
next_button.addEventListener("click", checkAnswer);

// main
loadNextLevel(1);