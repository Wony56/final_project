var console = require('console')
module.exports.function = function getStretchingStep (stretchingSel) {
  console.log(stretchingSel.processList[0])
  console.log("aa")
  let stretchingStep =stretchingSel.processList[0];
  return {
    imgAddress : stretchingSel.processList[0].imgAddress,
    imgPath : stretchingSel.processList[0].imgPath,
    description : stretchingSel.processList[0].description
  }
}
