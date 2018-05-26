window.addEventListener("load", onLoad, false);

function onLoad() {
  const currentLink = window.location.href;
  if (onProductPage(currentLink)){
    var productName = ""
    try {
      productName = parseProductName(currentLink);
      ensureBuyPresent();
    }
    catch(err) {
      console.log(err);
      return null;
    }

    transformToTaoBao(productName);
  }
}
