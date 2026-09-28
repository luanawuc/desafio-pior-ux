function irParaCadastro() {
    window.location.href = "cadastro.html";
}


function validarCadastro() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "" || senha === "") {

        mensagem.innerHTML =
            "ERRO: Parabéns! Você quase conseguiu. Agora preencha os campos que estão vazios.";

        return;
    }

    if (senha.length < 4) {

        mensagem.innerHTML =
            "ERRO 404: Sua senha existe, mas aparentemente não existe o suficiente.";

        return;
    }

    mensagem.innerHTML =
        "SUCESSO! O erro ocorreu corretamente. Redirecionando...";

    setTimeout(function() {
        window.location.href = "confirmacao.html";
    }, 1500);
}


function confirmarCadastro() {

    const termos = document.getElementById("termos");
    const mensagem = document.getElementById("confirmacaoMensagem");

    if (!termos.checked) {

        mensagem.innerHTML =
            "Erro: você precisa NÃO concordar para continuar.";

        return;
    }

    mensagem.innerHTML =
        "Operação cancelada com sucesso. Parabéns!";

    setTimeout(function() {
        window.location.href = "final.html";
    }, 1500);
}
