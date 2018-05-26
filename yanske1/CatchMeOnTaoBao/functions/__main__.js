/**
* @param {string} name 
* @returns {string}
*/
module.exports = (name = 'Gucci_Belt', context, callback) => {
  const https = require('https');
  const translate = require('google-translate-api');

  let taobao_query = "https://s.taobao.com/search?q=";

  translate(name, {to: 'zh-CN'}).then(chinese => {
    let s = chinese.text;
    var convert=function(str){
      var codeStr="";
      for(var i=0;i<str.length;i++){
        var _code=str.charCodeAt(i).toString(16).toUpperCase();
        codeStr+='\\u'+"0000".substr(0,4-_code.length)+_code
      }
      return codeStr;
    }
    
    convert(s);
    const taobao = taobao_query + s;

    // Get the HTML page

    callback(null, taobao_query + s);
  });
};
