var console = require('console')
module.exports.function = function getStretchingStep (stretchingSel,stretchingStep) {
  // console.log(stretchingSel.processList[step])
  // console.log("aa")
  // let stretchingStep =stretchingSel.processList[step];
  // var idx =0;
  // if(step == null){
  //   idx = 0
  // }else{
  //   idx = step+1
  // }
  // console.log(idx)
  // console.log(stretchingSel.processList[idx])
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
    idx : idx
  }
}
