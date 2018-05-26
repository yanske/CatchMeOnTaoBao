document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get('changeColor', function(items){
    if(items.changeColor == true){
      document.getElementById('changeColor').setAttribute("style","background-color: #ffffff;");
      // document.getElementById('changeColor_check').setAttribute("style","display: inline;");
    }
  });

  document.getElementById('changeColor').addEventListener('click', function(){
    var active = false;
    chrome.storage.sync.get('changeColor', function(items){
      if(items.changeColor == true){
        document.getElementById('changeColor').setAttribute("style","background-color:	#f0f0f0;");
        document.getElementById('changeColor').innerHTML = "Disabled";
        // document.getElementById('changeColor_check').setAttribute("style","display: None;");
        chrome.storage.sync.set({'changeColor': false}, function() {});
      } else {
        document.getElementById('changeColor').setAttribute("style","background-color: #ffffff;");
        document.getElementById('changeColor').innerHTML = "Enabled";
        // document.getElementById('changeColor_check').setAttribute("style","display: inline;");
        chrome.storage.sync.set({'changeColor': true}, function() {});
      }
    });
  });
}, false);