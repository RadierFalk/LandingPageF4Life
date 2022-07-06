const send = document.getElementById('send')

send.addEventListener('click', (event) => {


    const nome = document.getElementById('nomeCompleto')
    const email = document.getElementById('email')
    const mensagem = document.getElementById('mensagem')

    if (nome.value == "") {
        alert('Erro no envio: Por favor insira um Nome')


    }
    if (email.value == "") {
        alert('Erro no envio: Endereço de mail inválido')

    }
    if (mensagem.value == "") {
        alert('Erro no envio: Insira uma mensagem')
        mensagem.classList.add("errorInput")

    } else(send == true)
    alert('Obrigado pelo contato,' + nome.value + '!')

})