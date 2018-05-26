function transformToTaoBao(productName){
  var button = document.getElementsByName("add")[0];
  var query = "https://yanske1.lib.id/CatchMeOnTaoBao@dev/"
  query += "?name=";
  query += productName;

  fetch(query)
    .then(function(response){
      return response.json();
    })
    .then(function(response){
      // Set success flag in Chrome
      chrome.storage.sync.set({ 'taobao': true });

      button.addEventListener("click", function(event) {
        window.location.replace(response);
        event.preventDefault();
      })
    });
}

function clickOnTaoBaoProduct() {
  var linkDiv = document.getElementsByClassName("row row-2 title")[0];
  var children = linkDiv.children;

  for(var i = 0; i < children.length; i++) {
    if (children[i].nodeName == "A") {
      window.location.replace(children[i].href);
    }
  }
}
