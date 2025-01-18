// Buttons and Output
const viewStarsButton = document.getElementById("view-stars");
const changeMoodButton = document.getElementById("change-mood");
const surpriseMeButton = document.getElementById("surprise-me");
const output = document.getElementById("output");

// Random Star Facts
const starFacts = [
  "The Sun is a star and the heart of our solar system.",
  "There are about 100 billion stars in the Milky Way galaxy.",
  "The largest known star is UY Scuti, a red supergiant.",
  "Some stars shine for billions of years before fading away.",
  "Stars are born in clouds of gas and dust called nebulae."
];

// Random Animations
const animations = [
  { transform: "rotate(360deg)", transition: "all 2s ease" },
  { transform: "scale(1.5)", transition: "all 2s ease" },
  { transform: "translateX(50vw)", transition: "all 2s ease" },
  { transform: "translateY(-50vh)", transition: "all 2s ease" }
];

// Background Mood Colors
const moods = [
  "linear-gradient(120deg, #ff5f6d, #ffc371)", // Sunset
  "linear-gradient(120deg, #24c6dc, #514a9d)", // Ocean Blue
  "linear-gradient(120deg, #02aab0, #00cdac)", // Tropical Green
  "linear-gradient(120deg, #e94057, #f27121)", // Warm Glow
  "linear-gradient(120deg, #ff512f, #dd2476)"  // Pink Sunrise
];

// Button Event Handlers
viewStarsButton.addEventListener("click", () => {
  const randomFact = starFacts[Math.floor(Math.random() * starFacts.length)];
  output.textContent = randomFact;
});

changeMoodButton.addEventListener("click", () => {
  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  document.querySelector(".galaxy-background").style.background = randomMood;
  document.querySelector(".galaxy-background").style.animation = "none"; // Reset animation
});

surpriseMeButton.addEventListener("click", () => {
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  const section = document.querySelector(".section");
  Object.assign(section.style, randomAnimation);

  // Reset after 2 seconds
  setTimeout(() => {
    section.style.transform = "none";
  }, 2000);
});
