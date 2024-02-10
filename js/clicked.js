function clicked() {
    const divTwo = document.getElementById("two")
    const divOne = document.getElementById("one")
    const contain = document.getElementById("contain")


    divOne.remove();
    divTwo.remove();

    const newButton = document.createElement("button")
    newButton.innerText = "Psych!! You're stuck with me either way!"
    contain.appendChild(newButton)
  }