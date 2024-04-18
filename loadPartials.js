function loadPartialHTML_(partial) {
  const htmlServ = HtmlService.createTemplateFromFile(partial)
  return htmlServ.evaluate().getContent()
}

// function loadHomeView() {
//   return loadPartialHTML_("home")
// }

function loadSearchView() {
  return loadPartialHTML_('search')
}

function loadAddCustomerView() {
  return loadPartialHTML_('addCustomer')
}

function loadEditCustomerView() {
  return loadPartialHTML_('editCustomer')
}
