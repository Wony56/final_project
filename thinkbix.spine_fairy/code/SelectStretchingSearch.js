var http=require('http')
var console = require('console')
var config = require('config')
module.exports.function = function SelectStretchingSearch (place, part, situation) {
  console.log(part+" , "+place+" , "+situation)
  
  let stretchingSel = [];
  let stretchingRank = [];

  if(place===undefined&&part===undefined&&situation===undefined){
      url = encodeURI(config.get('remoteURL')+'find/view');
  var response = http.getUrl(url,{format:'json'}).datas;
  console.log(response)
  for(let i = 0; i < response.length; i++){
      if(response[i] != null){
        stretchingRank.push(response[i]);
      }
  }
  console.log("come here"+stretchingSel);
  }else{
    if(part===undefined&&situation===undefined){
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
    for(let i = 0; i < response.length; i++){
      if(response[i] != null){
        stretchingSel.push(response[i]);
      }
    }
  }
  return stretchingSel;
}