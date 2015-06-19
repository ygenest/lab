/**
 * Created by info2301 on 2015/06/19.
 */
var fs = require('fs') // require is a special function provided by node

var myNumber = undefined // we don't know what the number is yet since it is stored in a file

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}
addOne(logMyNumber)

// logs out undefined -- this line gets run before readFile is done
