var http = require('http');
var console = require('console');
var config = require('config');
module.exports.function = function commitYoutubeShow (stretchingSel) {
  
  var keyword = stretchingSel.title; // 검색어 지정

  var url = encodeURI('https://www.googleapis.com/youtube/v3/search?key='+config.get('youtubeAPIKey')+'&part=snippet&q='+keyword+'&order=relevance&type=video&videoLicense=creativeCommon');
  var response = http.getUrl(url,{format:'json'});
  var items = response["items"];
  for(var i in items){
    var it = items[i];
    //console.log(it["snippet"]["title"]);
    var video_id = it["id"]["videoId"];
    url = "https://www.youtube.com/watch?v=" + video_id;
    break;
  }
  
  return {
    keyword: keyword,
    url : url
  };
}