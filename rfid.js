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
    quantidade,
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
