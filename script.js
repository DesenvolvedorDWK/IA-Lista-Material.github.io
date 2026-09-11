let pecas = JSON.parse(localStorage.getItem("pecas")) || [];

atualizarTabela();

function salvarDados() {
    localStorage.setItem("pecas", JSON.stringify(pecas));

    document.getElementById("ultimaAtualizacao").textContent =
        "Última atualização: " +
        new Date().toLocaleString("pt-BR");
}

function adicionarPeca() {

    const codigo = document.getElementById("codigo").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const quantidade = document.getElementById("quantidade").value;

    if (!codigo || !descricao || !quantidade) {
        alert("Preencha todos os campos.");
        return;
    }

    pecas.push({
        codigo,
        descricao,
        quantidade
    });

    atualizarTabela();

    document.getElementById("codigo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("quantidade").value = "";
}

function removerPeca(indice) {
    pecas.splice(indice, 1);

    atualizarTabela();
}

function atualizarTabela() {

    const tabela = document.getElementById("tabelaPecas");

    tabela.innerHTML = "";

    pecas.forEach((item, index) => {

        const linha = `
            <tr>
                <td>${item.codigo}</td>
                <td>${item.descricao}</td>
                <td>${item.quantidade}</td>
                <td>
                    <button
                        class="remover"
                        onclick="removerPeca(${index})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;

        tabela.innerHTML += linha;
    });

    salvarDados();
}

function exportarExcel() {

    if (pecas.length === 0) {
        alert("Não há peças para exportar.");
        return;
    }

    const worksheet = XLSX.utils.json_to_sheet(pecas);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "Peças"
    );

    XLSX.writeFile(
        workbook,
        "Lista_de_Pecas.xlsx"
    );
}
