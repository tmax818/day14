let title = document.getElementById("title");
let button = document.querySelector(".hide");

const toggle = () => {
  if (title.style.display == "none") {
    console.log(title.style.display);
    button.textContent = "Hide title";
    title.style.display = "block";
    console.log(title.style.display);
  } else {
    console.log(title.style.display);
    button.textContent = "Show title";
    title.style.display = "none";
    console.log(title.style.display);
  }
};

button.addEventListener("click", toggle);
