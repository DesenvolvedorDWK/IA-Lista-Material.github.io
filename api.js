async function consultarIA() {

    const descricao =
        document.getElementById(
            "descricao"
        ).value;

    try {

        const resposta =
        await fetch(
            "https://use.ai/pt?model=gpt-5.6&utm_source=bing&utm_medium=cpc&utm_campaign=AI_BR_PT_Chat_DSK_SEA_LLM_ChatGPT&utm_campaign_id=524286085&utm_adgroup=AI_BR_PT_ChatGPT_Exact&utm_adgroup_id=1326013930979676&utm_term=chat+gpt&utm_match_type=e&utm_content=&utm_content_id=&utm_funnel=&partner=WM&url=https%3A%2F%2Fuse.ai%2Fpt%3Fmodel%3Dgpt-5.6&msclkid=f807bc25a0a4179f4922d681b2cdd160",
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
