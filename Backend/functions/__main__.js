/**
* @param {string} name 
* @returns {string}
*/

module.exports = (name = 'Gucci Belt', context, callback) => {
  // Hack for NodeJS dependencies on non local environments
  if (context.service.environment !== 'local') {
    process.env.HOME = '/tmp';
  }

  const translate = require('google-translate-api');
  const https = require('https');

  let taobao_query = "https://s.taobao.com/search?q=";

  translate(name, {to: 'zh-CN'}).then(chinese => {
    let s = chinese.text;
    var convert = function(str) {
      var codeStr = "";
      for(var i = 0; i < str.length; i++){
        var _code = str.charCodeAt(i).toString(16).toUpperCase();
        codeStr += '\\u'+"0000".substr(0,4-_code.length) + _code
      }

      return codeStr;
    }
    
    convert(s);
    const taobao = taobao_query + s;
    callback(null, taobao);
  });
};
