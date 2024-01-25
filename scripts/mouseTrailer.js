const trailer = document.getElementById("trailer");

window.onmousemove = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyFrames = {
    transform: `translate(${x}px, ${y}px)`,
  };

  trailer.animate(keyFrames, {
    duration: 900,
    fill: "forwards",
  });
};

// window.onmousedown = e => {
// console.log(e.target.className, e.target.parentNode.className)
//   const keyFrames = {
//     backgroundColor: counter % 2 === 0 ? 'orange' : "white"
//   }
//   trailer.animate(keyFrames, {
//     duration: 900,
//     fill: "forwards"
//   })
//   console.log(trailer)
// }
