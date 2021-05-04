// when we import built-in modules, we don't need to pass './'

const os = require('os')

// information about current user
const user = os.userInfo()
console.log('user: ', user);

// system update
console.log('uptime: ', os.uptime())

// information about current operational system
const currentOsInfo = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log('OS information: ', currentOsInfo)
