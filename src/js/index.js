const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

//add um event listener a cada botão para saber qual foi clicado
botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");

        personagens[indice].classList.add("selecionado");
    })
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
