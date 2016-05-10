import $ from 'jquery';

//console.log($);

let url = 'https://api.github.com/users/misramz';

//grab elements from HTML

let name = $('.name');
let basicInfo = $('.info');

//data from URL link
var html;
$.getJSON(url).then(function(res){
  //console.log(res.name);
  var html = title(res.name);
  name.append(html);
});

function title(name){
  return `<h1>${name}</h1>`;
}
