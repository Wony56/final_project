var console = require('console')
var http=require('http')
var config = require('config')
module.exports.function = function StartStretching (stretchingSel,stretchingStep) {
  url = encodeURI(config.get('remoteURL')+'view/'+stretchingSel._id)
  http.getUrl(url,{format:'json'})
  console.log(url)
 var idx = 0
  return{
    imgAddress : stretchingSel.processList[idx].imgAddress,
    imgPath : stretchingSel.processList[idx].imgPath,
    description : stretchingSel.processList[idx].description,
    idx : idx,
    length : stretchingSel.processList.length
  }
}