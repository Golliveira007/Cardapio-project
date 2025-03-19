//Simulação de adição de intens de pedido


//Selecionar todos os botões que possuem a classe 'adicionar'
const botoesAdicionar = document.querySelectorAll(".botao");


// Selecionar a lista onde os itens do pedido serão exibidos 
const listaPedido = document.getElementById("listaPedido");

// Selecione o elemento  que exibira o valor total do pedido
const totalElemento = document.getElementById("total");

// Criar variavel que armazena o total do pedido
let total = 0;

// Percorrer todos os botões 'adicionar' e adicionar um evento de clique em cada um
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        // Obtem o elemento pai do botao
        const produto = botao.parentElement;
        // Obtem o nome do produto a partir do texto da tag <h3>
        const nome = produto.querySelector("h3").textContent;
        
        //Obtem o preço do produto removendo o texto "R$" e converte o valor para float
        const preco = parseFloat(produto.querySelector(".preco").textContent.repeat("R$",""));
        console.log(preco)
        // Obtém um novo item de lista <li> para adicionar o produto ao pedido
        const itemPedido = document.createElement("li");

        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        //Adiciona o item criado á lista de pedidos
        listaPedido.appendChild(itemPedido);

        //Atualiza o total da compra
        total += preco;

        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

    });
});


// Simula finalização do pedido

const botaoFinalizarPedido = document.getElementById("pedido-button");

botaoFinalizarPedido.addEventListener("click", () => {
    alert("Pedido finalizado com sucesso");

    listaPedido.innerHTML = '';

    total = 0;

    totalElemento.textContent =  ${Total: R${total.toFixed(2)}}``
})