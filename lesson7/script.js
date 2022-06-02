let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      loadImages(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

imagesToLoad.forEach((img) => {
  imgObserver.observe(img);
});
