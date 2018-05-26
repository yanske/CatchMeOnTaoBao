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
  } else if (onTaoBao(currentLink)) {
    chrome.storage.sync.get('taobao', function(items) {
      chrome.storage.sync.set({ 'taobao': true });
      clickOnTaoBaoProduct();
    });
  }
}
