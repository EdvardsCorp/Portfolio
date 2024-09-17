const HomeButton = document.getElementById("HomeButton");
const AboutButton = document.getElementById("AboutButton");
const SkillsButton = document.getElementById("SkillsButton");
const PortfolioButton = document.getElementById("PortfolioButton");
const ContactButton = document.getElementById("ContactButton");
const outputTextContainer = document.getElementById("outputTextContainer");

const HomeText =
  "I am not fearless. I get scared plenty. But I have also learned how to channel that emotion to sharpen me. - Bear Grylls";

const AboutText =
  "I am studying Multimedia Specialist (web developer) at the Polytechnic School. I'am reliable and effective employee who can manage his time effectively also Independent decision maker who takes responsibility for the results of my work.";

const SkillsText =
  "I mostly have experience in HTML, CSS and JavaScript." +
  "For hobbies, I have learned the following: Flutter & Dart, along with Google Firebase (Realtime Database, Firestore Database, Analytics, Authentication, Storage).";

const PortfolioText = `
  <div style="margin-bottom: 10px;">
    <img src="https://i.imgur.com/zIJHktz.jpeg" alt="Portfolio Image" style="width: 600px; height: 145.1px;">
  </div>
  <div>
    <img src="https://i.imgur.com/LfnlmLP.png" alt="Portfolio Image" style="width: 600px; height: 145.1px;">
  </div>
`;


const ContactText =
  "You can contact me from Git, LinkedIn or Facebook by clicking icon below. Also my Email is Edvard.Prosutinski@gmail.com";

HomeButton.addEventListener("click", () => {
  outputTextContainer.innerHTML = `<p>${HomeText}</p>`;
});

AboutButton.addEventListener("click", () => {
  outputTextContainer.innerHTML = `<p>${AboutText}</p>`;
});

SkillsButton.addEventListener("click", () => {
  outputTextContainer.innerHTML = `<p>${SkillsText}</p>`;
});

PortfolioButton.addEventListener("click", () => {
  outputTextContainer.innerHTML = PortfolioText;
});

ContactButton.addEventListener("click", () => {
  outputTextContainer.innerHTML = `<p>${ContactText}</p>`;
});

