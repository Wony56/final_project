var http = require('http')
var console = require('console')
var config = require('config')
// 스트레칭 상세 정보를 받아와 part와 같은 부분을 stretchingInfo에 저장하는 코드
module.exports.function = function GetStretching (place, part) {
  //const fakeData = require("./data/DetailData.js");
  var response = http.getUrl(config.get('http://52.79.199.186:8080') + '/find/all', { format: 'json' }).datas;
  const console = require("console");
  console.log(response.length);

  let stretchingInfo = null;

  for(let i = 0; i < response.length; i++){
    console.log(place);
    if(place != undefined){
      for(let j = 0; j < response[i].tag.length; j++){
          if(response[i].tag.places[j] == String(place)){
            stretchingInfo = response[i];
            break;
          }
      }
    }
    console.log(part);
    if(part != undefined){
      console.log(response[i].tag.parts.length);
      for(let j = 0; j < response[i].tag.parts.length; j++){
          console.log(response[i].tag.parts[j]);
          if(response[i].tag.parts[j] == String(part)){
            stretchingInfo = response[i];
            break;
          }
      }
    }
  }
  
  return stretchingInfo;
}
