// Example static Pinterest image links (replace later with API calls)
const images = [
  "https://i.pinimg.com/564x/71/8b/d1/718bd1c1a9166df0e54c8e3fbbfdf3fb.jpg",
  "https://i.pinimg.com/564x/ea/12/f0/ea12f0d6a9b9c5a7a84f7991cf0a1ef3.jpg",
  "https://i.pinimg.com/564x/2a/57/36/2a5736e2dfc7487a3d4b2e7a33d3261d.jpg",
  "https://i.pinimg.com/564x/6a/9a/2f/6a9a2fb2d3bdf37ce7f3813a8c07b4d3.jpg"
];

const gallery = document.getElementById("gallery");

images.forEach(url => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Anime NFT";
  img.loading = "lazy";
  img.onclick = () => window.open(url, "_blank");
  gallery.appendChild(img);
});
