
// CHANGING LEVEL

let level = 1;
const maxLevel = 20;
const minLevel = 1;

const levelDisplay = document.getElementById("level-number");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

function updateLevel(newLevel) {
    level = Math.max(minLevel, Math.min(maxLevel, newLevel)); //clamping function-> ensures level remains within the range [minLevel, maxLevel]
    levelDisplay.textContent = `Level ${level}`;
}

// Click events
leftArrow.addEventListener("click", () => updateLevel(level - 1));
rightArrow.addEventListener("click", () => updateLevel(level + 1));

// Keyboard arrow key events
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") updateLevel(level - 1);
    if (event.key === "ArrowRight") updateLevel(level + 1);
});


// APPLYING CSS TO ISLAND GRID

/* LEVEL-1 */

// const fishCell = document.querySelector("#big-fish-cell");
const fishImage = document.querySelector(".big-fish");
let fishCol = 2;
let fishRow = 2;
const waterCellPos = { col: 5, row: 1 };

function applyCSS() {
  const cssInput = document.getElementById("css-input").value;
  let col = fishCol;
  let row = fishRow;

  try {
    const lines = cssInput.split(";");

    lines.forEach(line => {
      if (line.trim() !== "") {
        const [prop, value] = line.split(":");
        if (prop && value) {
          const p = prop.trim();
          const v = value.trim();
          if (p === "grid-column") col = parseInt(v);
          if (p === "grid-row") row = parseInt(v);

          // fishCell.style.setProperty(prop.trim(), value.trim());
        }
      }
    });
    
    // Move the fish smoothly across the grid
    let moveCol= col - fishCol;
    let moveRow= row - fishRow;
    fishImage.style.transform= `translate(${(moveCol) * 100}%, ${(moveRow) * 100}%)`;
    fishImage.style.top= moveCol;
    fishImage.style.row= moveRow;
    
    // Update global position
    fishCol = col;
    fishRow = row;
    
  } catch (e) {
    alert("Invalid CSS!");
  }
}

const apply_button= document.getElementById('apply-button');
apply_button.addEventListener("click", applyCSS);


  // Always get current top/left fresh
  // const topPerc = parseFloat(fishImage.style.top) || 0;
  // const leftPerc = parseFloat(fishImage.style.left) || 0;

//     // Calculate movement delta- each cell is 20% in 5*5 grid
//     const targetLeft = (col - 1) * 20;
//     const targetTop = (row - 1) * 20;
//     const deltaX = targetLeft - leftPerc;
//     const deltaY = targetTop - topPerc;
    
    // Animate via transform (each grid cell is 100% x 100%)
//     fishImage.style.transition = 'transform 0.75s ease';
//     fishImage.style.transform = `translate(${deltaX}%, ${deltaY}%)`;



// NEXT BUTTON- Check answer correct or not

function checkAnswer(fishCol, fishRow) {
  const overlay= document.getElementById("overlay");
  const title= document.getElementById("result-title");
  const message= document.getElementById("result-message");
  overlay.classList.remove("hidden");

  if (fishCol === waterCellPos.col && fishRow === waterCellPos.row) {
    // Correct answer
    title.textContent= "Your answer is Correct!";
    message.textContent= "Loading next level...";

    // Remove any existing retry button for correct answer
    const existingRetry = document.getElementById("retry-button");
    if (existingRetry) existingRetry.remove();

    // Load next level after a short delay
    setTimeout(() => {
      overlay.classList.add("hidden");
      loadNextLevel(); // your function
    }, 1600);
  }
  else {
    // Wrong answer
    title.textContent= "You answer is Incorrect!";

    // Remove any existing retry button to avoid duplicates
    const existingRetry = document.getElementById("retry-button");
    if (existingRetry) existingRetry.remove();

    // Adding Retry button
    let retryButton= document.createElement("button");
    retryButton.innerText= "Retry";
    retryButton.setAttribute("id","retry-button");
    title.insertAdjacentElement("afterend", retryButton);

    // Hide overlay again on clicking retry button
    retryButton.addEventListener("click", () => {
      overlay.classList.add("hidden");
    })
  }
}

const next_button= document.getElementById('next-button');
next_button.addEventListener("click", () => checkAnswer(fishCol, fishRow));