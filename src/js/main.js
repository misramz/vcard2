import $ from 'jquery';

//console.log($);

let url = 'https://api.github.com/users/misramz';

//grab elements from HTML

let name = $('.name');
let basicInfo = $('.info');

//data from URL link
var html;
$.getJSON(url).then(function(res){
  console.log(res);
  var html = title(res.name);
  name.append(html);

  var htmlBasic = basics(res)
  basicInfo.append(htmlBasic);
});

function title(name){
  return `<h1>${name}</h1>`;
};

function basics(namesmall){
  console.log('namesmall', namesmall)
  return `
    <div class="info">
      <h4> Name : ${namesmall.name}</h4>
      <h4> GitHub :<a href="${namesmall.html_url}">${namesmall.login}</a> </h4>
      <h4> Email: ${namesmall.email}</h4>
      <h4> Company : ${namesmall.company}</h4>
      <h4> Website : ${namesmall.url}</h4>
    </div>
  `;
}
