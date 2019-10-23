var console = require('console')
module.exports.function = function getStretchingStep (stretchingSel) {
  let stretchingStep =stretchingSel.processList[0];
  return {
    imgAddress : stretchingSel.processList[0].imgAddress,
    imgPath : stretchingSel.processList[0].imgPath,
    description : stretchingSel.processList[0].description
  }
}
