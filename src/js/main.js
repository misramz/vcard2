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
      <div> Name : ${namesmall.name}</div>
      <div> GitHub :<a href="${namesmall.html_url}">${namesmall.login}</a> </div>
      <div> Email: ${namesmall.email}</div>
      <div> Company : ${namesmall.company}</div>
      <div> Website : ${namesmall.url}</div>
      <p></p>
      <img src="images/vcard.png"/>
    </div>
  `;
}
