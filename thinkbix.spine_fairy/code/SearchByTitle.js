var http=require('http')
var console = require('console')
var config = require('config')
module.exports.function = function SearchByTitle (title, searchKeyword) {
  console.log(title)
  url = encodeURI(config.get('remoteURL')+'find?title='+title);
  var response = http.getUrl(url,{format:'json'}).datas;

  if(response==null){
    url = encodeURI(config.get('remoteURL')+'find/view');
    response = http.getUrl(url,{format:'json'}).datas;
  }
  let stretchingSel = [];
  for(let i = 0; i < response.length; i++){
      if(response[i] != null){
        response[i].index = 0;
        stretchingSel.push(response[i]);
      }
  }
  return stretchingSel;
}