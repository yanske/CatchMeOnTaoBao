window.addEventListener("load", onLoad, false);

function onLoad() {
  // Only op if the Chrome extension is enabled
  chrome.storage.sync.get('changeColor', function(items) {
    if (items.changeColor == true) {
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
          if (items.taobao == true) {
            chrome.storage.sync.set({ 'taobao': false });
            clickOnTaoBaoProduct();
          }
        });
      }
    }
  });
}
