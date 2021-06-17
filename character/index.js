let Character = document.querySelector(".Character_spritesheet");

document.addEventListener("keydown", keyPressed);

function keyPressed(e) {
  let key = e.keyCode;
  let prevDir = Character.classList[2];
  switch (key) {
    case 37:
      Character.classList.remove(prevDir);
      Character.classList.add("face-left");
      break;
    case 38:
      Character.classList.remove(prevDir);
      Character.classList.add("face-up");
      console.log("up");
      break;
    case 39:
      Character.classList.remove(prevDir);
      Character.classList.add("face-right");
      console.log("right");
      break;
    case 40:
      Character.classList.remove(prevDir);
      Character.classList.add("face-down");
      console.log("down");
      break;
    default:
    // code block
  }
}
