module.exports.function = function GetStretchingStep (stretchingSel,stretchingStep) {

  var idx = 0

  return {
    imgAddress : stretchingSel.processList[idx].imgAddress,
    imgPath : stretchingSel.processList[idx].imgPath,
    description : stretchingSel.processList[idx].description,
    idx : idx,
    length : stretchingSel.processList.length
  }
}
