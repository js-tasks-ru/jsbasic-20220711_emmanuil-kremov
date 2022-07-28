function makeDiagonalRed(table) {

  return table.querySelectorAll('tr').forEach((row, i) => row.cells[i].style.background = 'red');
  
}
