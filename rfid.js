/*
====================================
MÓDULO RFID
====================================
Pronto para integração com leitor RFID real.
Não gera códigos automaticamente.
====================================
*/

function abrirRFID() {

    alert("Módulo RFID carregado e aguardando integração.");

}

/*
====================================
FUNÇÃO PARA RECEBER UMA TAG RFID
====================================
Quando você tiver um leitor RFID real,
ele poderá chamar esta função.
====================================
*/

function processarRFID(tag, descricao, quantidade = 1) {

    if (!tag) {
        console.log("TAG RFID inválida.");
        return;
    }

    pecas.push({
        codigo: tag,
        descricao: descricao || "Peça RFID",
        quantidade: quantidade
    });

    salvarDados();
    atualizarTabela();

    console.log("TAG RFID registrada:", tag);
}
