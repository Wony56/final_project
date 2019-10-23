var http = require('http');
var config = require('config');
var console = require('console');
var fail = require('fail');

module.exports.findAll = function(){
  let data = http.getUrl('http://52.79.199.186:8080/find/all', { format: 'json' });
  console.log(data);
  return data;
}