var http = require('http');
var config = require('config');
var console = require('console');
var fail = require('fail');

module.exports.findAll = function(){
  let data = http.getUrl(config.get('remoteURL')+'/find/all', { format: 'json' })
  return data;
}

module.exports.findByTitle = function(title){
  let url = encodeURI(config.get('remoteURL')+'find?title='+title)
  let data = http.getUrl(url,{format:'json'}).datas;
  return data;
}

module.exports.findByViews = function(title){
  let url = encodeURI(config.get('remoteURL')+'find/view')
  let data = http.getUrl(url,{format:'json'}).datas;
  return data;
}

module.exports.findByPlace = function(place){
  let url = encodeURI(config.get('remoteURL')+'find?place='+place)
  let data = http.getUrl(url,{format:'json'}).datas;
  return data;
}

module.exports.findByPart = function(part){
  let url = encodeURI(config.get('remoteURL')+'find?part='+part)
  let data = http.getUrl(url,{format:'json'}).datas;
  return data;
}

module.exports.findBySituation = function(situation){
  let url = encodeURI(config.get('remoteURL')+'find?situation='+situation)
  let data = http.getUrl(url,{format:'json'}).datas;
  return data;
}

module.exports.findByPartAndSituation = function(part, situation){
  let url = encodeURI(config.get('remoteURL')+'find?part='+part+'&situation='+situation)
  let data = http.getUrl(url,{format:'json'}).datas;
  return data;
}

module.exports.findByPlaceAndSituation = function(place, situation){
  let url = encodeURI(config.get('remoteURL')+'find?place='+place+'&situation='+situation)
  let data = http.getUrl(url,{format:'json'}).datas;
  return data;
}

module.exports.findByPlaceAndPart = function(place, part){
  let url = encodeURI(config.get('remoteURL')+'find?place='+place+'&part='+part)
  let data = http.getUrl(url,{format:'json'}).datas;
  return data;
}

module.exports.findByPlaceAndPartAndSituation = function(place, part, situation){
  let url = encodeURI(config.get('remoteURL')+'find?place='+place+'&part='+part+'&situation='+situation)
  let data = http.getUrl(url,{format:'json'}).datas;
  return data;
}

module.exports.viewCount = function(id){
  let url = encodeURI(config.get('remoteURL')+'view/'+ id)
  http.getUrl(url,{format:'json'}).datas;
}