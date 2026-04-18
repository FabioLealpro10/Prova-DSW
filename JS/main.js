let eventos = [];

const formulario = document.getElementById("FormEvento");
const pesquisar_titulo = document.getElementById("inputPesquisa");
const filtro_categoria = document.getElementById("filtroCategoria");
const listaEventos = document.getElementById("listaEventos");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let titulo = document.getElementById("titulo").value;
  let categoria = document.getElementById("categoria").value;
  let vagas = document.getElementById("vagas").value;
  let data = document.getElementById("data").value;
  let local = document.getElementById("local").value;
  let descricao = document.getElementById("descricao").value;

  let dados = {
    titulo,
    categoria,
    vagas,
    data,
    local,
    descricao,
  };

  eventos.push(dados);

  renderizar_eventos(eventos);

  formulario.reset();
});

function renderizar_eventos(lista) {
  let dados = "";

  if (lista.length === 0) {
    listaEventos.innerHTML = "<p>Nenhum evento encontrado.</p>";
    return;
  }

  lista.forEach((evento) => {
    dados += `
      <div class="card">
        <h3>${evento.titulo}</h3>
        <p><strong>Categoria:</strong> ${evento.categoria}</p>
        <p><strong>Data:</strong> ${evento.data}</p>
        <p><strong>Local:</strong> ${evento.local}</p>
        <p><strong>Vagas:</strong> ${evento.vagas}</p>
        <p><strong>Descrição:</strong> ${evento.descricao}</p>
      </div>
    `;
  });

  listaEventos.innerHTML = dados;
}

function aplicarFiltros() {
  let tituloBuscado = pesquisar_titulo.value.toLowerCase().trim();
  let categoriaSelecionada = filtro_categoria.value;

  let dados_filtrados = eventos.filter((evento) => {
    let filtroTitulo = evento.titulo.toLowerCase().includes(tituloBuscado);
    let filtroCategoria =
      categoriaSelecionada === "" || evento.categoria === categoriaSelecionada;

    return filtroTitulo && filtroCategoria;
  });

  renderizar_eventos(dados_filtrados);
}

pesquisar_titulo.addEventListener("input", aplicarFiltros);
filtro_categoria.addEventListener("change", aplicarFiltros);
