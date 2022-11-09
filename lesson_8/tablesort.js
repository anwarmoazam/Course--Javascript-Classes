function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll('tr'));

    // Sort each row
    const sortedRows = rows.sort((a,b) => {
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

        console.log(aColText);
        console.log(bColText);

    })
}

sortTableByColumn(document.querySelector('table'),1);

// let anwarTable = document.querySelector('table');
// console.log(anwarTable.tBodies[0]);
// let arr = anwarTable.tBodies[0].querySelector('tr');
// console.log(arr)