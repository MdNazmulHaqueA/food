// THis code will work one time. After that Uncaught TypeError: Cannot read properties of null (reading 'classList')

// const icons = document.querySelectorAll(".section-1-icons i");
// setInterval(() => {
//   const icon = document.querySelector(".section-1-icons .change");
//   icon.classList.remove("change");
//   icon.nextElementSibling.classList.add("change");
// }, 2000);

const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;
setInterval(() => {
  i++;
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");
  if (i > icons.length) {
    icons[0].classList.add("remove");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 2000);
