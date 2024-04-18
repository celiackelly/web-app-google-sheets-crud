function loadDialog() {
  const htmlServ = HtmlService.createTemplateFromFile('dialog')
  const html = htmlServ.evaluate()
  html.setWidth(850).setHeight(600)
  const ui = SpreadsheetApp.getUi()

  ui.showModalDialog(html, 'Edit Customer Data');
}

function createMenu_() {
  const ui = SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  const menu = ui.createMenu('Custom Menu')
  menu.addItem('Open Dialog', 'loadDialog')
  menu.addToUi();
}

function onOpen() {
  createMenu_()
}