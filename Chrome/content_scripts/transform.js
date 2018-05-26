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
      button.addEventListener("click", function(event) {
        window.location.replace(response);
        event.preventDefault();
      })
    });
}
