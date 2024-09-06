function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um candidato ou sigla de um partido</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let candidato = ""; 
    let proposta = "";
    let profissao = ""; 
    let patrimonio = "";
    let instrucao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        candidato = dado.candidato.toLowerCase()
        proposta = dado.proposta.toLowerCase()
        profissao = dado.profissao.toLowerCase()
        patrimonio = dado.patrimonio.toLowerCase()
        instrucao = dado.instrucao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se candidato includes campoPesquisa
        if (candidato.includes(campoPesquisa) || proposta.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.candidato}</a>
                </h2>
                <p class="proposta-meta">${dado.proposta}</p>
                <p class="proposta-meta">${dado.profissao}</p>
                <p class="proposta-meta">${dado.patrimonio}</p>
                <p class="proposta-meta">${dado.instrucao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
