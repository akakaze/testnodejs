/**
 * Created by PC on 2016/8/8.
 */
var request = require('request'),
    customRequest = request.defaults({'proxy': process.env.FIXIE_URL});
customRequest.get("http://www.example.com");
console.log(process.env);
