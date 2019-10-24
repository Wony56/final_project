var http=require('http')
var console = require('console')
var config = require('config')
module.exports.function = function SelectStretchingSearch (place, part, situation) {
  console.log(part+" , "+place+" , "+situation)
  if(place===undefined&&part===undefined&&situation===undefined){
    url = encodeURI(config.get('remoteURL')+'find/view');
  }else if(part===undefined&&situation===undefined){
    url = encodeURI(config.get('remoteURL')+'find?place='+place);
  }else if(place===undefined&&situation===undefined){
    url = encodeURI(config.get('remoteURL')+'find?part='+part);
  }else if(place===undefined&&part===undefined){
    url = encodeURI(config.get('remoteURL')+'find?situation='+situation);
  }else if(place===undefined){
    url = encodeURI(config.get('remoteURL')+'find?part='+part+'&situation='+situation);
  }else if(part===undefined){
    url = encodeURI(config.get('remoteURL')+'find?place='+place+'&situation='+situation);
  }else if(situation===undefined){
    url = encodeURI(config.get('remoteURL')+'find?place='+place+'&part='+part);
  }else{
    url = encodeURI(config.get('remoteURL')+'find?place='+place+'&part='+part+'&situation='+situation);
  }
  console.log(url)
  var response = http.getUrl(url,{format:'json'}).datas;
  console.log(response)
  let stretchingSel = [];
  for(let i = 0; i < response.length; i++){
      if(response[i] != null){
        response[i].index = 0;
        stretchingSel.push(response[i]);
      }
  }
  return stretchingSel;
}