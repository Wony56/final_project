var db = require('lib/database.js')
module.exports.function = function StartStretching (stretchingSel,stretchingStep) {
  db.viewCount(stretchingSel._id)
  var idx = 0
  return{
    imgAddress : stretchingSel.processList[idx].imgAddress,
    imgPath : stretchingSel.processList[idx].imgPath,
    description : stretchingSel.processList[idx].description,
    idx : idx,
    length : stretchingSel.processList.length
  }
}