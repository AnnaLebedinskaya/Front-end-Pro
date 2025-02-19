function createPythagoreanTable(size = 10) {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  headerRow.appendChild(document.createElement("th"));

  for (let i = 1; i <= size; i++) {
    const th = document.createElement("th");
    th.textContent = i;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (let i = 1; i <= size; i++) {
    const row = document.createElement("tr");
    const rowHeader = document.createElement("th");
    rowHeader.textContent = i;
    row.appendChild(rowHeader);

    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("td");
      cell.textContent = i * j;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  document.getElementById("table-container").appendChild(table);
}

createPythagoreanTable();
