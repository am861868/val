function clicked() {
    const divTwo = document.getElementById("two")
    const divOne = document.getElementById("one")
    
    const newButton = document.createElement("button")
    newButton.innerText = "pSYCH"
    
    divOne.appendChild(newButton)
    divTwo.children[1].remove()
  }