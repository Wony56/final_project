var http=require('http')
var console = require('console')
var config = require('config')
module.exports.function = function SelectStretchingSearch (place, part) {
  url = encodeURI(config.get('remoteURL')+'find?part='+part);
  var response = http.getUrl(url,{format:'json'}).datas;

  let stretchingSel = [];
  for(let i = 0; i < response.length; i++){
      if(response[i] != null){
        response[i].index = 0;
        stretchingSel.push(response[i]);
      }
  }
  console.log(stretchingSel)
  return stretchingSel;
}