const buttons = document.querySelectorAll(".link-btn");

buttons.forEach(button =>{
    button.addEventListener(
        "click", () => {
            console.log("Você clicou em:", button.textContent);
        }
    )
})
