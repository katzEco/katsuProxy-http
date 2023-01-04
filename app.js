let httpProxy = require('http-proxy')

let link = ""

// Proxy Create :D
httpProxy.createProxyServer({target: link}).listen(1980);