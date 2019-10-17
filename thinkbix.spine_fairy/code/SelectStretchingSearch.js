module.exports.function = function SelectStretchingSearch (place, part) {
  const fakeData = require("./data/SelectData.js");
  const console = require("console");

  let stretchingSel = [];
  for(let i = 0; i < fakeData.length; i++){
      stretchingSel.push(fakeData[i]);
  }
  return stretchingSel;
}
