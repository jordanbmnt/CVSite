const trailer = document.getElementById("trailer");

window.onmousemove = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyFrames = {
    transform: `translate(${x}px, ${y}px)`,
  };

  const z = {
    zIndex: 100,
    border: "2px solid white",
    padding: "12px",
    color: "white",
    textContent: e.target.alt,
    backgroundColor: "rgba(122, 39, 167, 0.8)",
  };

  const zReset = {
    zIndex: 0,
    border: "none",
    padding: "0px",
    color: "rgba(0, 0, 0, 0)",
    backgroundColor: "rgba(122, 39, 167, 0.692)",
  };

  trailer.animate(keyFrames, {
    duration: 900,
    fill: "forwards",
  });
  if (e.target.alt) {
    trailer.animate(z, {
      duration: 300,
      fill: "forwards",
      transition: "3100ms",
    });
    trailer.textContent = e.target.alt;
  } else {
    trailer.animate(zReset, {
      duration: 300,
      fill: "forwards",
      transition: "3100ms",
    });
  }
};
