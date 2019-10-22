var http=require('http')
var console = require('console')
module.exports.function = function SelectStretchingSearch (place, part) {
  // const fakeData = require("./data/SelectData.js");
  console.log("잘거면 숙박비 내라");
  var response = http.getUrl('http://52.79.199.186:8080/find/all',{format:'json'}).datas;
  
  console.log(response);
  
  // const console = require("console");
  let stretchingSel = [];
  for(let i = 0; i < response.length; i++){
      stretchingSel.push(response[i]);
  }
  return stretchingSel;
}