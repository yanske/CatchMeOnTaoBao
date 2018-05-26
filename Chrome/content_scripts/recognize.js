// Returns true if it is on a page where we can transform the buy link
function onProductPage(currentLink) {
  const product = "/products/";
  return (currentLink.indexOf(product) >= 0);
}

function onTaoBao(currentLink) {
  const taobao = "taobao.com/search?q=";
  return (currentLink.indexOf(taobao) >= 0);
}

function parseProductName(currentLink) {
  const product_route = "/products/"
  const sluggedProductName = currentLink.split(product_route).pop()

  // Throw errors if this link contains unexpected symbols
  if (sluggedProductName.indexOf('/') >= 0) {
    throw "Not a proper product name!";
  }

  const humanizedProductName = sluggedProductName.replace(/-/g, " ");
  return humanizedProductName;
}

// Throws error if buy button is not present
function ensureBuyPresent() {
  var addElements = document.getElementsByName("add");
  if (addElements.length <= 0) {
    throw "No add to cart button found";
  }

  if (addElements[0].nodeName != "BUTTON") {
    throw "Expected a button";
  }
}
