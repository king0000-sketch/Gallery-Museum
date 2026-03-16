document.addEventListener("DOMContentLoaded", ()=>
  console.log("DOM Loaded"
))
const galleryItems = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const exitButton = document.getElementById("close-btn");
const fullImg = document.getElementById("lightbox-image");
const descriptionText = document.querySelector(".description-text");

const descriptions = {
  stonehenge: "Ancient Stonehenge",
  storm: "Disastrous Storm",
  trees: "Sahara Land"
};

function getFullUrl(url) {
  const modifiedUrl = url.split("-")[0] + ".jpg";
  
  
  lightBox.style.display = "flex";
  fullImg.setAttribute("src", modifiedUrl);
 // Extract the image key from the modified URL to get the description
  const imageKey = modifiedUrl.split('/').pop().split('.')[0].toLowerCase();
  descriptionText.textContent = descriptions[imageKey] || "Image description not available.";
}

exitButton.addEventListener("click", () => {
  lightBox.style.display = "none";
  fullImg.setAttribute("src", ""); 
  descriptionText.textContent = ""; 
});


galleryItems.forEach(img => {
  img.addEventListener("click", () => getFullUrl(img.src)); 
});