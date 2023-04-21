// MAIN - ARTICLE
const shortBioTextBox = document.getElementById("short-bio-text");
const articleTitle = document.querySelector("#short-bio-text > h2");
const articleParagraph = document.querySelector(".article-text-front");
const techButton = document.getElementById("technologies");

//HEADER

const avatarBox = document.getElementById("avatar-box");
const avatarPic = document.getElementById("avatar-pic");
const emailNav = document.getElementById("email-field-navigation");
const viberNav = document.getElementById("viber-field-navigation");
const helloBtn = document.getElementById("hello-btn");

// MAIN - EDUCATION

const collegeSchoolBox = document.getElementById("college-school-box");
const culinarySchoolBox = document.getElementById("culinary-school-box");
const economicsSchoolBox = document.getElementById("economics-school-box");
const moreInfoButton = document.getElementById("more-education-info");
const showAllButton = document.getElementById("show-all");
//
const certReact = document.getElementById("react");
const certHtml = document.getElementById("htmlcss");
const certOop = document.getElementById("pythonOOP");
const certDjango = document.getElementById("pythonDjango");
const certWeb = document.getElementById("pythonWeb");
const certPyAdv = document.getElementById("pyhtonAdv");
const certPyFund = document.getElementById("pythonFund");

// String constants

const additionalInfo =
  "I'm 33 years old and I live in Sofia. When I was in high school my buddy and I were creating websites using Joomla. Photoshop became quite popular at the time and I've spend hundreds of hours of going through tutorials, forums, youtube videos and galleries. A forum named Signature-BG was a place were other photoshop enthusiasts would hang out and post their latest works in a form of healthy competition.";
const additionalInfoMore =
  "The experience that I've aquired was able to place one of my works as a Semi-Pro level in another forum with thousands of young designers. A year later an opportunity presented itself - I was offered the job of a product designer and did for a year before I signed up for college so I could further improve my skills.";

const additionalInfoParagraph =
  "I love any kind of water sport but rafting is my top choice. I also like reading, cooking, craft beer and games.";

// GLOBAL HANDLERS
function createNewParagraphElement(text) {
  let newParagraph = document.createElement("p");
  newParagraph.classList.add("article-text-front");
  newParagraph.textContent = text;
  return newParagraph;
}

function pageRefresh() {
  location.reload();
  return;
}

// ARTICLE //
function toggleBio() {
  articleTitle.textContent = "Bio";
  helloBtn.textContent = "Let's sum up.";

  let newP = createNewParagraphElement(additionalInfo);
  shortBioTextBox.appendChild(newP);
  let newPP = createNewParagraphElement(additionalInfoMore);
  shortBioTextBox.appendChild(newPP);
  helloBtn.style.display = "none";
  techButton.style.display = "block";
  let helloBackground = document.getElementById("separator");
  helloBackground.style.display = "none";
}

function toggleTechnologies() {
  articleTitle.textContent = "Sum up";
  articleParagraph.textContent = additionalInfo;
  let newP = createNewParagraphElement(additionalInfoParagraph);
  shortBioTextBox.appendChild(newP);

  techButton.textContent = "Return";
  techButton.style.fontSize = "1.5rem";
  techButton.addEventListener("click", pageRefresh);
}

// modals //
const reactModal = document.getElementById("cert-react");
reactModal.addEventListener("click", handleReactModal);
const htmlcssModal = document.getElementById("cert-htmlcss");
htmlcssModal.addEventListener("click", handleHtmlcssModal);
const pythonOOPModal = document.getElementById("cert-pythonOOP");
pythonOOPModal.addEventListener("click", handlePythonOopModal);
const pythonDjangoModal = document.getElementById("cert-pythonDjango");
pythonDjangoModal.addEventListener("click", handlePythonDjangoModal);
const pythonWebModal = document.getElementById("cert-pythonWeb");
pythonWebModal.addEventListener("click", handlePythonWebModal);
const pyhtonAdvModal = document.getElementById("cert-pyhtonAdv");
pyhtonAdvModal.addEventListener("click", handlePyhtonAdvModal);
const pythonFundModal = document.getElementById("cert-pythonFund");
pythonFundModal.addEventListener("click", handlePythonFundModal);

// SIDE BAR //
function displayEmail() {
  emailNav.textContent = "hr.kutsarov@gmail.com";
  // setTimeout(() => {
  //   emailNav.textContent = "E-mail";
  // }, "5000");
}

function displayPhone() {
  viberNav.textContent = "+359 889 162334";
}

function showAvatar() {
  avatarPic.style.display = "block";
}
function hideAvatar() {
  avatarPic.style.display = "none";
}

function showInfoEducation() {
  collegeSchoolBox.style.display = "block";
  culinarySchoolBox.style.display = "block";
  economicsSchoolBox.style.display = "block";
  moreInfoButton.textContent = "Show less";
  moreInfoButton.addEventListener("click", clearInfoEducation);
}

function clearInfoEducation() {
  let timelineBox = document.querySelector(".timeline");
  timelineBox.classList.add("invisible");
  timelineBox.style.display = "none";
  showAllButton.style.display = "block";
  showAllButton.addEventListener("dblclick", showEverythingEducation);
  moreInfoButton.style.display = "none";
}

function showEverythingEducation() {
  let timelineBox = document.querySelector(".timeline");
  timelineBox.style.display = "block";
  showAllButton.style.display = "none";
}

// modals handlers //

function hideModals() {
  reactModal.style.display = "none";
  htmlcssModal.style.display = "none";
  pythonOOPModal.style.display = "none";
  pythonDjangoModal.style.display = "none";
  pythonWebModal.style.display = "none";
  pyhtonAdvModal.style.display = "none";
  pythonFundModal.style.display = "none";
}

function handleReactModal() {
  hideModals();
}

function handleHtmlcssModal() {
  hideModals();
}

function handlePythonOopModal() {
  hideModals();
}

function handlePythonDjangoModal() {
  hideModals();
}

function handlePythonWebModal() {
  hideModals();
}

function handlePyhtonAdvModal() {
  hideModals();
}

function handlePythonFundModal() {
  hideModals();
}

// toggle modals
function toggleReactModal() {
  reactModal.style.display = "flex";
}
function toggleHtmlModal() {
  htmlcssModal.style.display = "flex";
}
function togglePyOopModal() {
  pythonOOPModal.style.display = "flex";
}
function toggleDjangoModal() {
  pythonDjangoModal.style.display = "flex";
}
function togglePyWebModal() {
  pythonWebModal.style.display = "flex";
}
function togglePyAdvModal() {
  pyhtonAdvModal.style.display = "flex";
}
function togglePyFundModal() {
  pythonFundModal.style.display = "flex";
}

//  EVENT LISTENTERS //
helloBtn.addEventListener("click", toggleBio);
techButton.addEventListener("click", toggleTechnologies);
emailNav.addEventListener("mouseover", displayEmail);
viberNav.addEventListener("mouseover", displayPhone);
avatarPic.addEventListener("click", hideAvatar);
moreInfoButton.addEventListener("click", showInfoEducation);
//
certReact.addEventListener("click", toggleReactModal);
certHtml.addEventListener("click", toggleHtmlModal);
certOop.addEventListener("click", togglePyOopModal);
certDjango.addEventListener("click", toggleDjangoModal);
certWeb.addEventListener("click", togglePyWebModal);
certPyAdv.addEventListener("click", togglePyAdvModal);
certPyFund.addEventListener("click", togglePyFundModal);
