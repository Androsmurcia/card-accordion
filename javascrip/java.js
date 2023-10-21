const dropdowns = Array.from(document.querySelectorAll(".click"));

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    const msg = event.currentTarget.children[1];
    const isClosed = msg.classList.contains("closed");

    dropdowns.forEach((otherDropdown) => {
      otherDropdown.children[1].classList.add("closed");
    });

    if (isClosed) {
      msg.classList.remove("closed");
    }
  });
});
