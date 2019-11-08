var db = require('lib/database.js')
module.exports.function = function StretchingRanking () {
  let data = db.findByViews()
  let stretchingRank = []
  for(let i = 0; i < data.length; i++){
      if(data[i] != null){
        stretchingRank.push(data[i])
      }
  }
  return stretchingRank
}