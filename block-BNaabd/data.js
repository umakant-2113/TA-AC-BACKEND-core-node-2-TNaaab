// 1. Create a basic server `data.js`

// - add a listener on port 7000
// - send different types of data from postman and check `req.headers` for `content-type` after creating below server
// - send json data from postman using `POST` request on `/json` and parse it into the server.
// - send form data from postman using `POST` request on `/form` and parse it into the server.
// - send in response the entire data received by server.

let http=require('http')
let qs=require('querystring')
let server=http.createServer(handleServer)
function handleServer(req,res){
    let store='';
    let contentType=req.headers['content-type'];
req.on('data',(chunk)=>{
store=store+chunk;
})
req.on('end',()=>{
    if(contentType==="application/json"){
    var parseData=JSON.parse(store);
    res.end(store);
    }else if(contentType==="application/x-www-form-urlencoded"){
      var parseData= qs.parse(store);
      res.end(JSON.stringify(parseData)) 
    }
})
}

server.listen(7000,()=>{
    console.log('we are using local host 7000 ')
})