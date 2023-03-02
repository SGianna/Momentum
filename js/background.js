const images = ["puppy1.jpg","puppy2.jpg","puppy3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/puppy${Math.ceil(Math.random()*images.length)}.jpg`;

document.body.appendChild(bgImage);
bgImage.classList.add("wrap");