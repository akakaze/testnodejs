/**
 * Created by PC on 2016/8/8.
 */
var http = require('http'),
    url = require("url"),
    fixieUrl = url.parse(process.env.FIXIE_URL),
    requestUrl = url.parse("http://www.example.com");
http.get({
    host: fixieUrl.hostname,
    port: fixieUrl.port,
    path: requestUrl.href,
    headers: {
      Host: requestUrl.host,
      "Proxy-Authorization": "Basic " + new Buffer(fixieUrl.auth).toString('base64'),
    }
}, function (res) {
  console.log("Got response: " + res.statusCode);
});
