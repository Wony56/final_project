var http=require('http')
var console = require('console')
module.exports.function = function SelectStretchingSearch (place, part) {
  // const fakeData = require("./data/SelectData.js");
  console.log("잘거면 숙박비 내라");
  url = encodeURI('http://52.79.199.186:8080/find?part='+part);
  var response = http.getUrl(url,{format:'json'}).datas;

  // console.log(response);
  
  // const console = require("console");
  let stretchingSel = [];
  for(let i = 0; i < response.length; i++){
      if(response[i] != null){
        stretchingSel.push(response[i]);
      }
  
  }
  console.log(stretchingSel)
  return stretchingSel;
}