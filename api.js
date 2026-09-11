async function consultarIA() {

    const descricao =
        document.getElementById(
            "descricao"
        ).value;

    try {

        const resposta =
        await fetch(
            "https://SUA_API_AQUI.com",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({
                    consulta: descricao
                })
            }
        );

        const resultado =
            await resposta.json();

        console.log(
            "Resposta IA:",
            resultado
        );

    } catch (erro) {

        console.log(
            "IA não conectada.",
            erro
        );
    }
}
