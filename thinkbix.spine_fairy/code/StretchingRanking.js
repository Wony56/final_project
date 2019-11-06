var http=require('http')
var console = require('console')
var config = require('config')
module.exports.function = function StretchingRanking () {
  url = encodeURI(config.get('remoteURL')+'find/view');
  var response = http.getUrl(url,{format:'json'}).datas;
  console.log(response)
  let stretchingRank = [];
  for(let i = 0; i < response.length; i++){
      if(response[i] != null){
        stretchingRank.push(response[i]);
      }
  }
  return stretchingRank;
}