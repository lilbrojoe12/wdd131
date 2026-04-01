const copyright = document.getElementById("copyright");
const lastModified = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

copyright.textContent = `© ${currentYear} Write to Create`;
lastModified.textContent = `Last Modified: ${lastModifiedDate}`;


const subjects = [
  "A mysterious stranger",
  "An old friend",
  "A lost child",
  "A detective",
  "A forgotten hero",
  "A retired villain",
  "A time traveler",
  "A runaway prince",
  "An artificial intelligence",
  "A ghost with unfinished business",
  "A magic apple",
  "A cursed mirror",
  "A glowing key",
  "A broken watch that still ticks",
  "A journal that writes back",
  "A locked box with no keyhole",
  "A map that redraws itself",
  "A ring that whispers secrets",
  "A lantern that never goes out"
];

const locations = [
  "in an abandoned city",
  "on a distant planet",
  "inside a hidden library",
  "in the midst of a storm",
  "at the edge of the world",
  "beneath the ocean floor",
  "in a town that doesn't exist on any map",
  "inside an inescapable dream",
  "at a train station frozen in time",
  "in the ruins of a forgotten kingdom"
];

const challenges = [
  "Write a story without using the letter 'e'.",
  "Write only in dialogue.",
  "Write 100 words exactly.",
  "Write a story in reverse order.",
  "Write a story where every sentence starts with the same letter.",
  "Write a scene that takes place in complete darkness.",
  "Write a story in second person ('you').",
  "Write a story with no punctuation except periods.",
  "Write a story where the ending changes the meaning of the beginning.",
  "Write a story that takes place over exactly one minute."
];

const showDontTell = [
  "Show excitement without using the word 'excited'.",
  "Show fear using body language.",
  "Describe sadness through surroundings.",
  "Show anger through dialogue.",
  "Show nervousness through small physical actions.",
  "Show love without using the word 'love'.",
  "Show jealousy through internal thoughts.",
  "Show exhaustion through movement and pacing.",
  "Show confidence through dialogue and posture.",
  "Show confusion through a character’s reactions."
];

const starters = [
  "The door creaked open, but no one was there.",
  "I shouldn't have answered that call.",
  "The sky turned green, then everything changed.",
  "Nobody remembered me except one person.",
  "The message arrived exactly one year too late.",
  "Every clock in the house stopped at the same time.",
  "I found my name written in a place it shouldn’t be.",
  "The first time I died, it felt strangely familiar.",
  "There was a second reflection behind me that wasn’t mine.",
  "The rules were simple—don’t look outside after midnight."
];

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Writing Prompt Generator
const promptDisplay = document.getElementById("promptDisplay");
const generatePromptBtn = document.getElementById("generatePromptBtn");

if (generatePromptBtn) {
    generatePromptBtn.addEventListener("click", () => {
        const subject = getRandomItem(subjects);
        const location = getRandomItem(locations);

        promptDisplay.textContent = `${subject} was last seen ${location}.`;
    });
}

//Writing Challenges
const challengeDisplay = document.getElementById("challengeDisplay");
const generateChallengeBtn = document.getElementById("generateChallengeBtn");

if (generateChallengeBtn) {
    generateChallengeBtn.addEventListener("click", () => {
        challengeDisplay.textContent = getRandomItem(challenges);
    });
}

//Show, Don't Tell
const showDisplay = document.getElementById("showDontTellDisplay");
const generateShowBtn = document.getElementById("generateShowBtn");

if (generateShowBtn) {
    generateShowBtn.addEventListener("click", () => {
        showDisplay.textContent = getRandomItem(showDontTell);
    });
}

//Story Starters
const starterDisplay = document.getElementById("starterDisplay");
const generateStarterBtn = document.getElementById("generateStarterBtn");

if (generateStarterBtn) {
    generateStarterBtn.addEventListener("click", () => {
        starterDisplay.textContent = getRandomItem(starters);
    });
}


let lastPrompt = "";

generatePromptBtn.addEventListener("click", () => {
    let newPrompt;

    do {
        const subject = getRandomItem(subjects);
        const location = getRandomItem(locations);
        newPrompt = `${subject} was last seen ${location}.`;
    } while (newPrompt === lastPrompt);

    lastPrompt = newPrompt;
    promptDisplay.textContent = newPrompt;
});


const displays = [
    promptDisplay,
    challengeDisplay,
    showDisplay,
    starterDisplay
];

displays.forEach(display => {
    if (display) {
        display.textContent = "Click the button to generate content!";
    }
});