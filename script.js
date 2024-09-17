const HomeButton = document.getElementById("HomeButton");
const AboutButton = document.getElementById("AboutButton");
const SkillsButton = document.getElementById("SkillsButton");
const PortfolioButton = document.getElementById("PortfolioButton");
const ContactButton = document.getElementById("ContactButton");
const outputTextElement = document.getElementById("outputText");

const HomeText =
  "I am not fearless. I get scared plenty. But I have also learned how to channel that emotion to sharpen me. - Bear Grylls";

const AboutText =
  "I am studying Multimedia Specialist (web developer) at the Polytechnic School. I'am reliable and effective employee who can manage his time effectively also Independent decision maker who takes responsibility for the results of my work.";

const SkillsText =
  "I mostly have experience in HTML, CSS and JavaScript." +
  "For hobbies, I have learned the following: Flutter & Dart, along with Google Firebase(Realtime Database, Firestore Database, Analytics, Authentication, Storage).";

const PortfolioText = `
      <p>The portfolio is currently being updated. Soon, I will add the projects I have been working on in my free time.</p>
      <blockquote class="imgur-embed-pub" lang="en" data-id="a/a09p58K" data-context="false">
        <a href="//imgur.com/a/a09p58K">View Portfolio</a>
      </blockquote>
      <script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
    `;

const ContactText =
  "You can contact me from Git, LinkedIn or Facebook by clicking icon bellow. Also my Email is Edvard.Prosutinski@gmail.com";

HomeButton.addEventListener("click", () => {
  outputTextElement.textContent = HomeText;
});
AboutButton.addEventListener("click", () => {
  outputTextElement.textContent = AboutText;
});
SkillsButton.addEventListener("click", () => {
  outputTextElement.textContent = SkillsText;
});
PortfolioButton.addEventListener("click", () => {
  outputTextElement.textContent = PortfolioText;
});
ContactButton.addEventListener("click", () => {
  outputTextElement.textContent = ContactText;
});
