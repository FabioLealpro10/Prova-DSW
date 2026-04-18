let eventos = []

const formulario = document.getElementById('FormEvento')

formulario.addEventListener("submit", function (event) {

    event.preventDefault() 

    let titulo = document.getElementById('titulo').value
    let categoria = document.getElementById('categoria').value
    let vagas = document.getElementById('vagas').value
    let data = document.getElementById('data').value
    let local = document.getElementById('local').value
    let descricao = document.getElementById('descricao').value

    let dados = {
        titulo,
        categoria,
        vagas,
        data,
        local,
        descricao
    }

    eventos.push(dados)

    listar_eventos(eventos)

    formulario.reset() // limpa formulário
})

function listar_eventos(dados_eventos) {

    const listaEventos = document.getElementById('listaEventos')

    let dados = ''

    dados_eventos.forEach(evento => {

        dados += `
            <div class="card">
                <h3>${evento.titulo}</h3>

                <p><strong>Categoria:</strong> ${evento.categoria}</p>

                <p><strong>Data:</strong> ${evento.data}</p>

                <p><strong>Local:</strong> ${evento.local}</p>

                <p><strong>Vagas:</strong> ${evento.vagas}</p>

                <p><strong>Descrição:</strong> ${evento.descricao}</p>
            </div>
        `
    })

    listaEventos.innerHTML = dados
}


const pesquisar_titulo = document.getElementById('btnPesquisar')
pesquisar_titulo.addEventListener("click", function (){
     let titulo = document.getElementById('titulo').value

     let dados_pesquisados = []
     eventos.forEach(dados => {
        if (dados.titulo.includes(titulo)){
            dados_pesquisados.push(dados)
        }
        listar_eventos(dados_pesquisados)

   
    });
})
