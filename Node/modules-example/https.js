const { res } = require('./response')
const { send } = require('./request')

function makeRequest(url , data){
    return ` Request : ${send(url,data)}   Response : ${res(url,data)}`
}

const responseData = makeRequest('https://www.google.com','This is some data')
console.log(responseData);

// console.log(require.cache)
