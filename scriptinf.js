const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Cloud Store",
  "Firebase",
  "React",
  "Android Studio",
  "VS Code",
  "UI/UX",
  "Analytics",
  "Animation",
  "Design",
  "WebDev",
  "Flutter",
  "Dart",
  "Google Console",
  "Authentication",
  "Multimedia Specialist",
];
const DURATION = 18000;
const ROWS = 2;
const TAGS_PER_ROW = 20;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const createInfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  const loopSlider = document.createElement("div");
  loopSlider.className = "loop-slider tag";
  loopSlider.style.setProperty("--duration", `${duration}ms`);
  loopSlider.style.setProperty("--direction", reverse ? "reverse" : "normal");

  const innerDiv = document.createElement("div");
  innerDiv.className = "inner";

  children.forEach((child) => {
    const childContainer = document.createElement("div");
    childContainer.className = "tag";
    childContainer.appendChild(document.createTextNode(child));
    innerDiv.appendChild(childContainer);
  });

  loopSlider.appendChild(innerDiv);

  return loopSlider;
};

const createTag = ({ text }) => {
  const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];

  const tag = document.createElement("div");
  tag.className = "tag";
  tag.style.setProperty("--color", randomColor);
  color;

  const span = document.createElement("span");
  span.textContent = "#";

  const tagText = document.createTextNode(` ${text}`);
  tag.appendChild(span);
  tag.appendChild(tagText);

  return tag;
};

const createApp = () => {
  const appDiv = document.createElement("div");
  appDiv.className = "app";

  const tagListDiv = document.createElement("div");
  tagListDiv.className = "tag-list";

  for (let i = 0; i < ROWS; i++) {
    const loopSlider = createInfiniteLoopSlider({
      duration: random(DURATION - 5000, DURATION + 5000),
      reverse: i % 2 === 1,
      children: shuffle(TAGS)
        .slice(0, TAGS_PER_ROW)
        .map((tagText) => tagText),
    });
    tagListDiv.appendChild(loopSlider);
  }

  const fadeDiv = document.createElement("div");
  fadeDiv.className = "fade";

  appDiv.appendChild(tagListDiv);
  appDiv.appendChild(fadeDiv);

  return appDiv;
};

document.body.appendChild(createApp());
