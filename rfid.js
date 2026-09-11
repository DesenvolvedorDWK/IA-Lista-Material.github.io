function abrirRFID() {

    alert(
        "Módulo RFID conectado."
    );
}

function simularLeituraRFID() {

    const tag =
        "RFID-" +
        Math.floor(
            Math.random() * 10000
        );

    pecas.push({
        codigo: tag,
        descricao: "Peça RFID",
        quantidade: 1
    });

    salvarDados();
    atualizarTabela();

    console.log(
        "TAG lida:",
        tag
    );
}

/* Simula leitura a cada 30 segundos */

setInterval(
    simularLeituraRFID,
    30000
);
