let pecas =
JSON.parse(localStorage.getItem("pecas")) || [];

document.addEventListener(
    "DOMContentLoaded",
    atualizarTabela
);

function adicionarPeca() {

    const codigo =
        document.getElementById("codigo").value.trim();

    const descricao =
        document.getElementById("descricao").value.trim();

    const quantidade =
        document.getElementById("quantidade").value;

    if (
        !codigo ||
        !descricao ||
        !quantidade
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    pecas.push({
        codigo,
        descricao,
        quantidade
    });

    salvarDados();
    atualizarTabela();

    limparCampos();
}

function limparCampos() {

    document.getElementById("codigo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("quantidade").value = "";
}

function removerPeca(index) {

    pecas.splice(index, 1);

    salvarDados();
    atualizarTabela();
}

function salvarDados() {

    localStorage.setItem(
        "pecas",
        JSON.stringify(pecas)
    );

    document.getElementById(
        "ultimaAtualizacao"
    ).textContent =
        "Última atualização: "
        + new Date().toLocaleString("pt-BR");
}

function atualizarTabela() {

    const tabela =
        document.getElementById(
            "tabelaPecas"
        );

    tabela.innerHTML = "";

    pecas.forEach((item, index) => {

        tabela.innerHTML += `
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
    });
}

function abrirDashboard() {

    window.location.href = "index.html";
}

window.pecas = pecas;
