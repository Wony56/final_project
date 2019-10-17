// 스트레칭 상세 정보를 받아와 part와 같은 부분을 stretchingInfo에 저장하는 코드
module.exports.function = function GetStretching (place, part) {
  const fakeData = require("./data/DetailData.js");
  const console = require("console");
  console.log(fakeData.length);

  let stretchingInfo = null;

  for(let i = 0; i < fakeData.length; i++){
    console.log(place);
    if(place != undefined){
      for(let j = 0; j < fakeData[i].tag.length; j++){
          if(fakeData[i].tag.places[j] == String(place)){
            stretchingInfo = fakeData[i];
            break;
          }
      }
    }
    console.log(part);
    if(part != undefined){
      console.log(fakeData[i].tag.parts.length);
      for(let j = 0; j < fakeData[i].tag.parts.length; j++){
          console.log(fakeData[i].tag.parts[j]);
          if(fakeData[i].tag.parts[j] == String(part)){
            stretchingInfo = fakeData[i];
            break;
          }
      }
    }
  }
  
  return stretchingInfo;
}
