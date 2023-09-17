document.querySelector('.menu').addEventListener('click',()=>{
  /*
we need to select the navbar and the menu icon.
Actually, we can do that separately, but would be better if we assign to both elements the same class and then select both of them simultaneously. So let's assign to them class 'target' in the html.

 - We need to loop through the node list which is returned by the query selector all method and we have to add to each element a new class using toggle method.

- After that we will define new styles using this class from CSS.

- So in order to loop through the node list, I'm going to use one of the array helper methods called forEach.

- Actually forEach method takes one argument, which is a callback function and this function will be executed for each item in the node list.
*/
  document.querySelectorAll('.target').forEach((item)=>{
    item.classList.toggle('change');
  })
})




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
