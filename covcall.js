/**
 * Created by info2301 on 2015/06/19.
 */
var http = require('http');
var jsonQuery = require('json-query')
var data = {
  people: [
    {name: 'Matt', country: 'NZ'},
    {name: 'Pete', country: 'AU'}
  ]
}

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'www.google.com',
  path: '/finance?q=gg&output=json'
};

callback = function (response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    //console.log(str);
    jsonQuery('people[country=NZ].name', {
      data: data
    }) //=> {value: 'Matt', parents: [...], key: 0} ... etc
  });
}

http.request(options, callback).end();
