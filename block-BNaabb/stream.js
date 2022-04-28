// Create a basic http server in `stream.js`

// - add a listener on port 3456
// - send text data from postman using `POST` request on `/` route.
// - add `data` and `end` event on request to capture data
// - capture the data sent from postman on server side
// - send captured data in response using `res.write`

let http=require('http');
let server=http.createServer(handleServer);

function handleServer(req,res){
let store="";
req.on("data",(chunk)=>{
    store=store+chunk;
});
req.on('end',()=>{
    res.write(store)
    res.end()
})

}

server.listen(3456,()=>{
    console.log("we are using local host 3456")
})