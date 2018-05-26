document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('changeColor');
  chrome.storage.sync.get('changeColor', function(items){
    if(items.changeColor == true){
      button.setAttribute("style","background-color: #ffffff;");
    } else {
      button.setAttribute("style","background-color:	#f0f0f0;");
      button.innerHTML = "Disabled";
    }
  });

  button.addEventListener('click', function(){
    var active = false;
    chrome.storage.sync.get('changeColor', function(items){
      if(items.changeColor == true){
        button.setAttribute("style","background-color:	#f0f0f0;");
        button.innerHTML = "Disabled";
        chrome.storage.sync.set({'changeColor': false}, function() {});
      } else {
        button.setAttribute("style","background-color: #ffffff;");
        button.innerHTML = "Enabled";
        chrome.storage.sync.set({'changeColor': true}, function() {});
      }
    });
  });
}, false);
