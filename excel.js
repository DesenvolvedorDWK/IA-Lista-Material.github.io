function exportarExcel() {

    if (pecas.length === 0) {

        alert(
            "Nenhuma peça cadastrada."
        );

        return;
    }

    const worksheet =
        XLSX.utils.json_to_sheet(
            pecas
        );

    const workbook =
        XLSX.utils.book_new();

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
