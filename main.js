function getButton() {
  let buttons = document.querySelectorAll(".btn");
  console.log(buttons);
  let display = document.querySelector("#displayScreen");
  for (let button of buttons) {
    console.log(button.textContent);
    button.addEventListener("click", function () {
      alert(buttons);
    })
      ;
  }

}
getButton();
