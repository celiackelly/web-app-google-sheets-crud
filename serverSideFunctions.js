function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName('Customers')
  return ws.getRange(2, 1, ws.getLastRow() - 1, 3).getValues()
}

function deleteById(id) {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName('Customers')
  const customerIds = ws
    .getRange(2, 1, ws.getLastRow() - 1, 1)
    .getValues()
    .map(row => row[0].toString().toLowerCase())
  //converts 2D array to 1D, and norms to lower case strings (even though the ids are numbers in the sheet)
  const positionIndex = customerIds.indexOf(id.toString().toLowerCase()) //returns array position of match; row number will be + 2 because of header and rows starting with 1
  const rowNumber = positionIndex === -1 ? 0 : positionIndex + 2 //use 0 to get an error if no match
  ws.deleteRow(rowNumber)
}
