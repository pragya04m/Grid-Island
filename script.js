// --------------------------------------------------------------------------------------------------------------
// CHANGING LEVELS


// LEVEL-WISE DATA

// const levelData = {
//   1: {
//     question: "Save the fish from dying. <br> Use grid properties to move the fish to water cell.",
//     code: `
//     #island {
//         display: grid;
//         grid-template-columns: 20% 20% 20% 20% 20%;
//         grid-template-rows: 20% 20% 20% 20% 20%;
//     }

//     .fish {
//         <input id="css-input" placeholder="Type your grid CSS property"></input>
//     }`,
//     fishStart: { col: 2, row: 2 },
//     goal: { col: 5, row: 1 },
//     gridHTML: ``  },
// };



// UPDATING LEVEL-BOX

let level = 1;
const maxLevel = 20;
const minLevel = 1;

const levelDisplay = document.getElementById("level-number");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

function updateLevelBox(newLevel) {
    // By Default- on function call (using argument)
    level = Math.max(minLevel, Math.min(maxLevel, newLevel)); //clamping function-> ensures level remains within the range [minLevel, maxLevel]
    levelDisplay.textContent = `Level ${level}`;
}

// Based on Click events
leftArrow.addEventListener("click", () => updateLevelBox(level - 1));
rightArrow.addEventListener("click", () => updateLevelBox(level + 1));

// Based on Keyboard arrow key events
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") updateLevelBox(level - 1);
    if (event.key === "ArrowRight") updateLevelBox(level + 1);
});



// LOADING NEW LEVEL CONTENT

function loadNextLevel() {
  updateLevelBox(level + 1); // increment level in level-box
  const currentLevel = level;
  document.getElementById("question-text").innerHTML = levelData[currentLevel].question;
  document.getElementById("default-code").innerHTML = levelData[currentLevel].code;

}




// --------------------------------------------------------------------------------------------------------------
// APPLYING CSS TO ISLAND GRID

/* LEVEL-1 */

const fishCell = document.querySelector(".big-fish");
let fishCol= fishCell.style.gridColumn;
let fishRow= fishCell.style.gridRow;
const waterCellPos = { col: 5, row: 1 };

function applyCSS() {
  const cssInput = document.getElementById("css-input").value;
  let col = fishCol;
  let row = fishRow;
  // get only fish image to move
  fishCell.style.backgroundColor = "transparent";
  fishCell.style.border= "none";
  fishCell.style.boxShadow= "none";

  try {
    const lines = cssInput.split(";");

    lines.forEach(line => {
      if (line.trim() !== "") {
        const [prop, value] = line.split(":");
        if (prop && value) {
          fishCell.style.setProperty(prop.trim(), value.trim());
        }
      }
    });

    // Update global position
    fishRow= fishCell.style.gridRow;
    fishCol= fishCell.style.gridColumn;

  } catch (e) {
    alert("Invalid CSS!");
  }
}

const apply_button= document.getElementById('apply-button');
apply_button.addEventListener("click", applyCSS);


// NEXT BUTTON- Check answer correct or not

function checkAnswer(fishCol, fishRow) {
  const overlay= document.getElementById("overlay");
  const title= document.getElementById("result-title");
  const message= document.getElementById("result-message");
  overlay.classList.remove("hidden");

  // Remove any existing retry button to avoid duplicates
    const existingRetry = document.getElementById("retry-button");
    if (existingRetry) existingRetry.remove();

  if (fishCol == waterCellPos.col && fishRow == waterCellPos.row) {
    // Correct answer
    title.textContent= "Your answer is Correct!";
    message.textContent= "Loading next level...";

    // Load next level after a short delay
    setTimeout(() => {
      overlay.classList.add("hidden");
      loadNextLevel();
    }, 1600);
  }
  else {
    // Wrong answer
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
next_button.addEventListener("click", () => checkAnswer(fishCol, fishRow));