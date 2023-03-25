// GLOBAL ELEMENTS

// MAIN - ARTICLE
let shortBioTextBox = document.getElementById("short-bio-text");
let articleTitle = document.querySelector("#short-bio-text > h2");
let articleParagraph = document.querySelector(".article-text-front");
let techButton = document.getElementById("technologies");

//HEADER

let avatarBox = document.getElementById("avatar-box");
let avatarPic = document.getElementById("avatar-pic");
const emailNav = document.getElementById("email-field-navigation");
const viberNav = document.getElementById("viber-field-navigation");
let helloBtn = document.getElementById("hello-btn");

// MAIN - EDUCATION
let collegeSchoolBox = document.getElementById("college-school-box");
let culinarySchoolBox = document.getElementById("culinary-school-box");
let economicsSchoolBox = document.getElementById("economics-school-box");
let moreInfoButton = document.getElementById("more-education-info");
let showAllButton = document.getElementById("show-all");

// String constants

const additionalInfo =
  "I'm 33 years old and I live in Sofia. When I was in high school my buddy and I were making websites and forum pages for various clients. Photoshop became quite popular at the time and I've spend hundreds of hours of going through tutorials, forums, youtube videos and galleries. A forum named Signature-BG (I might be wrong) was a place were other photoshop aspirants would hang out and post their latest works in a form of healthy competition.";
const additionalInfoMore =
  "The experience that I've aquired was able to place one of my works as a Semi-Pro level in another forum with thousands of young designers. A year later an opportunity presented itself - I was offered the job of a product designer and did for a year before I signed up for college so I could further improve my skills.";

const additionalInfoParagraph =
  "I love any kind of water sport but rafting is my top choice. I also like architecture, cycling, reading, good food, craft beer and deep conversaions.";

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
// ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE ARTICLE //

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

// SIDE BAR SIDE BAR SIDE BAR SIDE BAR //
function displayEmail() {
  emailNav.textContent = "some_email@gmail.com";
  setTimeout(() => {
    emailNav.textContent = "E-mail";
  }, "5000");
}

function displayPhone() {
  viberNav.textContent = "+359 889 232323";
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
// ======================== EVENT LISTENTERS ======================//
helloBtn.addEventListener("click", toggleBio);
techButton.addEventListener("click", toggleTechnologies);
emailNav.addEventListener("mouseover", displayEmail);
viberNav.addEventListener("mouseover", displayPhone);
avatarPic.addEventListener("click", hideAvatar);
moreInfoButton.addEventListener("click", showInfoEducation);
