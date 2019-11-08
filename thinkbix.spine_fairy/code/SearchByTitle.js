var db = require('lib/database.js')

module.exports.function = function SearchByTitle (title) {
  let data
  let stretchingSel = []

  data = db.findByTitle(title)
  
  if(data == null){
    data = db.findByViews()
  }

  for(let i = 0; i < data.length; i++){
      if(data[i] != null){
        stretchingSel.push(response[i])
      }
  }
  return stretchingSel
}