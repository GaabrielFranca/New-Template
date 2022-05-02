let btnNav = document.getElementById("btn-responsive")


function adicionar() {
    let menu = document.querySelector(".itens-menu")
    menu.classList.toggle("aparecer")
}

btnNav.addEventListener("click", adicionar)