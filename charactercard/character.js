const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "snortleblat.webp",

  attacked() {
    if (this.health === 0) return;
    this.health -= 20;
    if (this.health <= 0) {
        this.health = 0;
        alert(`${this.name} has died!`);
    }
    updateCard();
},

  levelUp() {
    if (this.health === 0) {
        alert(`${this.name} cannot level up because they are dead.`);
        return;
    }
    this.level += 1;
    updateCard();
}
};

const healthElement = document.querySelector(".stats p:nth-child(3)");
const levelElement = document.querySelector(".stats p:nth-child(2)");

function updateCard() {
  levelElement.innerHTML = `<strong>Level:</strong> ${character.level}`;
  healthElement.innerHTML = `<strong>Health:</strong> ${character.health}`;
}

const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", function () {
  character.attacked();
});

buttons[1].addEventListener("click", function () {
  character.levelUp();
});