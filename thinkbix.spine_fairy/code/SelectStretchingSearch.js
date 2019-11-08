var db = require('lib/database.js')
module.exports.function = function SelectStretchingSearch (place, part, situation) {
  let data
  let stretchingSel = []
  let stretchingRank = []

  if(place===undefined && part===undefined && situation===undefined){
    data = db.findByViews()
    for(let i = 0; i < data.length; i++){
      if(data[i] != null){
        stretchingRank.push(data[i])
      }
    }
  }else{
    if(part===undefined && situation===undefined){
      data = db.findByPlace(place)
    }else if(place===undefined&&situation===undefined){
      data = db.findByPlace(part)
    }else if(place===undefined&&part===undefined){
      data = db.findBySituation(situation)
    }else if(place===undefined){
      data = db.findByPartAndSituation(part, situation)
    }else if(part===undefined){
      data = db.findByPlaceAndSituation(place, situation)
    }else if(situation===undefined){
      data = db.findByPlaceAndPart(place, part)
    }else{
      data = db.findByPlaceAndPartAndSituation(place, part, situation)
    }

    for(let i = 0; i < data.length; i++){
      if(data[i] != null){
        stretchingSel.push(data[i])
      }
    }
  }
  return stretchingSel
}