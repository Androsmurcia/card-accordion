const dropdowns = Array.from(document.querySelectorAll(".click"));

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    dropdowns.forEach((dropdown) => {
      dropdown.children[1].classList.add("closed");
    });
    const msg = event.currentTarget.children[1];
    msg.classList.toggle("closed");
  });
});
