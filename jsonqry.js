/**
 * Created by info2301 on 2015/06/19.
 */
var jsonQuery = require('json-query')

var data = {
  people: [
    {name: 'Matt', country: 'NZ'},
    {name: 'Pete', country: 'AU'}
  ]
}

var res = jsonQuery('people[country=NZ].name', {
  data: data
}) //=> {value: 'Matt', parents: [...], key: 0} ... etc
console.log(res)
