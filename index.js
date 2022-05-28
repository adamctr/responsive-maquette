const btn = document.querySelector(".box");
const lines = document.getElementsByClassName("line");
const menu = document.querySelector(".menu");
const a = document.getElementsByClassName("link");

btn.addEventListener("click", () => {
  for (i = 0; i <= 2; i++) {
    lines[i].classList.toggle("active");
  }
  menu.classList.toggle("active");
});

for (i = 0; i <= 2; i++) {
  a[i].addEventListener("click", () => {
    for (i = 0; i <= 2; i++) {
      lines[i].classList.toggle("active");
    }
    menu.classList.toggle("active");
  });
}
