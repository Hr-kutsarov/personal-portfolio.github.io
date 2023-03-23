// alert("hello");
let shortBioTextBox = document.getElementById("short-bio-text");
let articleTitle = document.querySelector("#short-bio-text > h2");
let techButton = document.getElementById("technologies");
let articleParagraph = document.querySelector(".article-text-front");
// body-container
let aside = document.querySelector("aside");

// links
const emailNav = document.getElementById("email-field-navigation");

const viberNav = document.getElementById("viber-field-navigation");
let helloBtn = document.getElementById("hello-btn");

const additionalInfo =
  "Laudantium odio placeat magnam minima molestiae saepe tempore qui explicabo pariatur hic? Alias dignissimos expedita dicta ex nam nobis consectetur distinctio officia quisquam assumenda, nulla aspernatur placeat dolores necessitatibus tenetur voluptatum labore accusantium deleniti nihil minima enim voluptates praesentium! Magni, dolorum error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur nihil adipisci modi rem voluptatem, ullam nobis veritatis officiis nostrum recusandae rerum dicta nisi obcaecati corporis sunt molestias unde ea.";

const additionalInfoParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eos? Ipsum earum voluptatem illo harum, repudiandae, a ipsam.";
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
  articleParagraph.textContent = additionalInfo;
  helloBtn.textContent = "My interests";

  let newP = createNewParagraphElement(additionalInfo);
  shortBioTextBox.appendChild(newP);
  helloBtn.style.display = "none";
  techButton.style.display = "block";
  let helloBackground = document.getElementById("separator");
  helloBackground.style.display = "none";
}

function toggleTechnologies() {
  articleTitle.textContent = "Technologies";
  articleParagraph.textContent = additionalInfo;
  let newP = createNewParagraphElement(additionalInfoParagraph);
  shortBioTextBox.appendChild(newP);

  techButton.textContent = "Return";
  techButton.style.fontSize = "2rem";
  techButton.addEventListener("click", pageRefresh);
}

function displayEmail() {
  emailNav.textContent = "some_email@gmail.com";
  setTimeout(() => {
    emailNav.textContent = "E-mail";
  }, "5000");
}

function displayPhone() {
  viberNav.textContent = "+359 889 232323";
}

function hideAvatar() {
  let avatar = document.getElementById("avatar-pic");
  if (scrollY === 0 && avatar.style.display === "none") {
    avatar.style.display = "block";
  } else {
    avatar.style.display = "none";
  }
}

// ======================== EVENT LISTENTERS ======================//
helloBtn.addEventListener("click", toggleBio);
techButton.addEventListener("click", toggleTechnologies);
emailNav.addEventListener("mouseover", displayEmail);
viberNav.addEventListener("mouseover", displayPhone);
aside.addEventListener("click", hideAvatar);
