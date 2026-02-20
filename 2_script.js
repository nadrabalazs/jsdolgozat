function Letrehoz() {
let newTable = document.getElementById("ID_tablazat");
let rows = document.getElementById("rows");
let columns = document.getElementById("columns");
let thElements = document.getElementById("first_row");
for (let i = 0; i < rows.value; i++) {
    let newRow = document.createElement("tr");
    for (let j = 0; j < columns.value; j++) {
        let firstLineType = "td";
        if (thElements.checked && i === 0) {
            firstLineType = "th";
        }
        let newColumns = document.createElement(firstLineType);
        newRow.append(newColumns);
    }
    newTable.appendChild(newRow);
}
}
function Refresh(){
    let rowsName = document.getElementById("rows_ID");
    let columnsName = document.getElementById("columns_ID");
    rowsName.textContent = rows.value;
    columnsName.textContent = columns.value;
}