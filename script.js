const playInViewVideos = document.querySelectorAll(".video-play-in-view");

playInViewVideos.forEach((video) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { root: null, threshold: 0.28 }
  );
  observer.observe(video);
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const navItems = document.querySelectorAll(".nav-links a");
const currentPath = window.location.pathname.split("/").pop() || "index.html";

navItems.forEach((item) => {
  const href = item.getAttribute("href");
  if (href === currentPath) {
    item.classList.add("active");
  }
});

function initModelViewerInteractions() {
  const modelViewers = document.querySelectorAll("model-viewer.model-viewer");

  modelViewers.forEach((viewer) => {
    viewer.setAttribute("camera-orbit", "0deg 75deg 2.4m");
    viewer.setAttribute("field-of-view", "30deg");

    let rotateTimeout;

    viewer.addEventListener("mouseenter", () => {
      viewer.autoRotate = true;
      viewer.setAttribute("camera-orbit", "35deg 70deg 2m");
      clearTimeout(rotateTimeout);
      rotateTimeout = setTimeout(() => {
        viewer.autoRotate = false;
      }, 700);
    });

    viewer.addEventListener("mouseleave", () => {
      viewer.autoRotate = false;
      viewer.setAttribute("camera-orbit", "0deg 75deg 2.4m");
    });
  });
}

if (customElements.get("model-viewer")) {
  initModelViewerInteractions();
} else {
  customElements.whenDefined("model-viewer").then(initModelViewerInteractions);
}
