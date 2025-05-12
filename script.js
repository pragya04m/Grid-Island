
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