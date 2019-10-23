  var db = require('lib/database.js');
  var console = require('console');
  var fail = require('fail');

  // 전체 요리 데이터베이스에서 검색
  module.exports.function = function SearchAll () {
    var data;

    data = db.findAll();

    return data;
  }