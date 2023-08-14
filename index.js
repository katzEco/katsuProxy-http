const httpProxy = require('http-proxy')
require('dotenv').config()

let link = process.env.PROXY_ENDPOINT

// Proxy Create :D
httpProxy.createProxyServer({target: link}).listen(1980);