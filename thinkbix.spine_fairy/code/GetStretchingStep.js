var console = require('console')
module.exports.function = function getStretchingStep (stretchingSel,stretchingStep) {

  var idx = 0
  
  console.log(stretchingSel.processList.length)
  return {
    imgAddress : stretchingSel.processList[idx].imgAddress,
    imgPath : stretchingSel.processList[idx].imgPath,
    description : stretchingSel.processList[idx].description,
    idx : idx,
    length : stretchingSel.processList.length
  }
}
