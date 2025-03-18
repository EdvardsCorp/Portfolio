const HomeButton = document.getElementById("HomeButton");
const AboutButton = document.getElementById("AboutButton");
const SkillsButton = document.getElementById("SkillsButton");
const PortfolioButton = document.getElementById("PortfolioButton");
const ContactButton = document.getElementById("ContactButton");
const imagesContainer = document.querySelector(".images");

const HomeText =
  "Iga uus väljakutse on võimalus õppida ja kasvada. Keskendun lahendustele, mis toovad tulemusi ning inspireerivad kasutajaid tegutsema.";

const AboutText =
  "Minu eesmärk on luua veebikogemusi, mis keskenduvad kasutaja mugavusele ja suunamisele. Pakun teadmisi veebidisaini ja mobiilirakenduste arendamise valdkonnas, et tagada sujuv ja lihtne kasutajakogemus.";

const SkillsText =
  "Valdan Adobe Creative Cloudi tööriistu (Photoshop, Illustrator, Premiere Pro, After Effects) ning täiendan oma oskusi ka Flutter/Dart, HTML-i, CSS-i ja JavaScripti alal. Kasutan UX/UI disainitööriistu, nagu Figma ja Sketch, et luua selge ja mugava kasutajakogemusega lahendusi.";


const PortfolioText = `
<div>
<div>
 <img src="https://i.imgur.com/KxF05lP.png" alt="Portfolio Image" style="width: 600px; height: 205px;">
  </div>
<div>
 <img src="https://i.imgur.com/e2LqbJ8.png" alt="Portfolio Image" style="width: 600px; height: 205px;">
  </div>
<div>
 <img src="https://i.imgur.com/zIJHktz.jpeg" alt="Portfolio Image" style="width: 600px; height: 145.1px;">
  </div>
    <img src="https://i.imgur.com/LfnlmLP.png" alt="Portfolio Image" style="width: 600px; height: 145px;">
  </div>
  <div>
    <img src="https://i.imgur.com/4z2WoGG.png" alt="Portfolio Image" style="width: 600px; height: 340.8px;">
  </div>
<div>
    <img src="https://i.imgur.com/qME8Z5Q.png" alt="Portfolio Image" style="width: 300px; height: 424px;">
    <img src="https://i.imgur.com/f8KNQw4.jpeg" alt="Portfolio Image" style="width: 300px; height: 424px;">
  </div>
<div>
    <img src="https://i.imgur.com/GmqUgE2.png" alt="Portfolio Image" style="width: 300px; height: 424px;">
    <img src="https://i.imgur.com/CNVl6xI.png" alt="Portfolio Image" style="width: 300px; height: 424px;">
  </div>
 
</div>
  
  
`;

const ContactText =
  "You can contact me from Git, LinkedIn or Facebook by clicking icon below. Also my Email is Edvard.Prosutinski@gmail.com";

function updateContentAndStyle(content, isPortfolio = false) {
  outputTextContainer.innerHTML = content;
  if (isPortfolio) {
    outputTextContainer.classList.add("profiletop");
    outputTextContainer.classList.remove("default-height");
  } else {
    outputTextContainer.classList.remove("profiletop");
    outputTextContainer.classList.add("default-height");
  }
}

HomeButton.addEventListener("click", () => {
  updateContentAndStyle(`<p>${HomeText}</p>`);
});

AboutButton.addEventListener("click", () => {
  updateContentAndStyle(`<p>${AboutText}</p>`);
});

SkillsButton.addEventListener("click", () => {
  updateContentAndStyle(`<p>${SkillsText}</p>`);
});

PortfolioButton.addEventListener("click", () => {
  updateContentAndStyle(PortfolioText);
  // Hide the images container
  imagesContainer.classList.add("hide");
});

ContactButton.addEventListener("click", () => {
  updateContentAndStyle(`<p>${ContactText}</p>`);
});

function updateContentAndStyle(content) {
  outputTextContainer.innerHTML = content;
  // Show the images container for other content
  if (content !== PortfolioText) {
    imagesContainer.classList.remove("hide");
  }
}
