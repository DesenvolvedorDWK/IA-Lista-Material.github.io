/*
=================================
RFID.JS
=================================
Sem geração automática
=================================
*/

function abrirRFID() {

    console.log("RFID pronto.");

}

function processarRFID(
    tag,
    descricao,
    quantidade = 1
) {

    if (!tag) return;

    pecas.push({
        codigo: tag,
        descricao: descricao,
        quantidade: quantidade
    });

    salvarDados();
    atualizarTabela();

    console.log(
        "RFID registrado:",
        tag
    );
}
