function init() {
  const div = document.querySelector("div");
  if (div !== null) {
    div.addEventListener("mousemove", mouseMove);
    div.addEventListener("mouseleave", mouseLeave);
  }
}

function mouseMove() {
  console.log("mouse moved");
}

function mouseLeave() {
  console.log("mouse left");
}

document.addEventListener("DOMContentLoaded", init);
