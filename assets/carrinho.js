const itens_carrinho = document.getElementById("itens-carrinho")
const qtde_total = document.getElementById("qtde-total")
const total_carrinho = document.getElementById("total-carrinho")
const limpar_carrinho = document.getElementById("limpar-carrinho")

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
console.log(carrinho)

// Exibir os itens do carrinho em uma lista
 carrinho.forEach((item)=>{
    const lista_item = document.createElement("li")
    lista_item.innerHTML = `&nbsp;&nbsp;&nbsp;${item.nome} | quantidade = ${item.qtde} |  R$ = ${item.preco}`
    itens_carrinho.appendChild(lista_item)
 })

//  Calcular o total dos itens e do preço final
const total = carrinho.reduce((total, item)=> total + item.preco,0)
const qtde_item = carrinho.reduce((total_item, item)=> total_item + item.qtde,0)
console.log(total)
console.log(qtde_item)

qtde_total.textContent = qtde_item
total_carrinho.textContent = total.toFixed(2)

// limpando carrinho, ou seja, o localStorage
limpar_carrinho.addEventListener("click", ()=>{
    localStorage.removeItem("carrinho")

    // ATUALIZAR O ICONE DO CARRINHO
    const carrinho_icone = document.getElementById("carrinho-icon")
    carrinho_icone.src = "./assets/img/carrinho_vazio.png"

    // LIMPA A LISTA DO CARRINHO E O TOTAL DA PÁGINA
    itens_carrinho.innerHTML = ""
    qtde_total.textContent = "0"
    total_carrinho.textContent = "0.0"
})