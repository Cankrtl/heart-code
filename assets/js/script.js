function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}

// Bilgisayarda mouse hareketi
document.addEventListener("mousemove", function (e) {
  createHeart(e.clientX, e.clientY);
});

// Telefonda parmakla sürükleme (touchmove)
document.addEventListener("touchmove", function (e) {
  const touch = e.touches[0];
  createHeart(touch.clientX, touch.clientY);
});
