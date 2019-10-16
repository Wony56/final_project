module.exports.function = function findStretching (place, part) {
  const fakeData = require("./data/StoreData.js");
  const console = require("console");
  console.log(fakeData.length);

  let stretchingInfo = null;
  for(let i = 0; i < fakeData.length; i++){
    if(fakeData[i].name == String(part)){
      stretchingInfo = fakeData[i];
      break;
    }
  }
  
  return stretchingInfo;
}
