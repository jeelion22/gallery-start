const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const imgSrc = [
  "./images/pic1.jpg",
  "./images/pic2.jpg",
  "./images/pic3.jpg",
  "./images/pic4.jpg",
  "./images/pic5.jpg",
];

/* Declaring the alternative text for each image file */
const imgTxt = {
  "./images/pic1.jpg": "blue-eye",
  "./images/pic2.jpg": "texure",
  "./images/pic3.jpg": "flower",
  "./images/pic4.jpg": "art",
  "./images/pic5.jpg": "butterfly",
};

/* Looping through images */

for (const url of imgSrc) {
  const img = document.createElement("img");

  img.setAttribute("src", url);
  img.setAttribute("alt", imgTxt.url);
  img.addEventListener("click", () => {
    displayedImage.src = url;
    displayedImage.alt = imgTxt.url;
  });

  thumbBar.appendChild(img);
}

// const newImage = document.createElement("img");
// newImage.setAttribute("src", xxx);
// newImage.setAttribute("alt", xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.value === "Darken") {
    btn.value = "Lighten";
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  } else {
    btn.value = "Darken";
    btn.textContent = "Lighten";
    overlay.style.background = "rgb(0 0 0 / 50%)";
  }
});
