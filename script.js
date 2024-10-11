const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");

let imgIndex = 0;

const images = [
  {
    src: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "site-1",
  },
  {
    src: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "site-2",
  },
  {
    src: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "site-3",
  },
  {
    src: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "site-4",
  },
];

for (let i = 0; i < images.length; i++) {

  const img = document.createElement("img");

  img.src = images[i].src;
  img.alt = images[i].alt;

  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });


  thumbnailContainer.appendChild(img);
}