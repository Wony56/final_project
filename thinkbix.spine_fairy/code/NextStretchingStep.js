var console = require('console')
module.exports.function = function nextStretchingStep (stretchingSel,stretchingStep) {

  var idx = 0
  if(stretchingStep==null){
    idx = 0;
  }else{
    idx = stretchingStep.idx +1
  }
  console.log(idx)
  return {
    imgAddress : stretchingSel.processList[idx].imgAddress,
    imgPath : stretchingSel.processList[idx].imgPath,
    description : stretchingSel.processList[idx].description,
    idx : idx,
    length : stretchingSel.processList.length
  }
}
