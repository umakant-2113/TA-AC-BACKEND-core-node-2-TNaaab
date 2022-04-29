//first question
// let path=require('path');
// let http =require('http')
// console.log(__filename)
// var filename = __filename.replace("server.js", 'app.js');
// let abHTML=path.join(__dirname,"/index.html")
// console.log(filename,abHTML)
// console.log('./index.html')
// second question
let server=http.createServer(handleServer);
function handleServer(req,res){
if(req.method==='POST'&&req.url==="/"){
let store="";
let dataFormat=req.headers['content-type'];
req.on('data',(chunk)=>{
store=store + chunk;
})
req.on('end',()=>{
    res.statusCode=201;
    res.end(store)
})
}
}
server.listen(4444,()=>{
    console.log('we are using local host 4k')
})

// third question
let server2=http.createServer(handleServer)

function handleServer(req,res){
 if(req.method==="POST"&& req.url==="/"){ 
    let data="";
req.on('data',(chunk)=>{
data=data+chunk;
})
req.on('end',()=>{
let parseData2=JSON.parse(data)
res.end(parseData2.captain)
})
}
}
server2.listen(4400,()=>{
    console.log('we are using localhost 4400')
})


let qs=require('querystring')
let server3=http.createServer(handleServer);
function handleServer(req,res){
if(req.method==="POST"&&req.url==="/"){
let contentType=req.headers['content-type'];
let store2='';
req.on('data',(chunk)=>{
store2=store2+chunk;
})
req.on('end',()=>{
   if(contentType==='application/json'){
       let parseData3=JSON.parse(store2);
       res.write(store2)
       res.end();
   }else if(contentType==='application/x-www-form-urlencoded') {
var parse=qs.parse(store2);
res.end(JSON.stringify(parse.captain))
   }
})

}
}
server3.listen(5000,()=>{
    console.log('we are using local host 5000')
})

let srver4=http.createServer(handleServer);
function handleServer(req,res){
    if(req.method==='POST'&& req.url==='/'){
    let contentType5=req.headers['content-type']
    let storeData='';
req.on('data',(chunk)=>{
storeData=storeData+chunk;
});
req.on('end',()=>{
    if(contentType5==="application/json"){
    let parsed=JSON.parse(storeData)
    console.log(parsed)
    res.setHeader('content-type','text/html')
    res.end(`<h1>${parsed.name}</h1><h2>${parsed.email}</h2>`)
}
});
}
}
srver4.listen(3000,()=>{
    console.log('we are using local host 6000')
});

let server6=http.createServer(handleServer);
function handleServer(req,res){
    if(req.method==='POST' &&req.url==='/'){
   let content=req.headers['content-type']; 
    let store='';
req.on("data",(chunk)=>{
store=store+chunk;
})
req.on('end',()=>{
   if(content==='application/x-www-form-urlencoded'){
       let parseDAta=qs.parse(store);
       res.end(`<h2${parseDAta.email}</h2>`)
   } 
})
}
}
server6.listen(4500,()=>{
    console.log('we are using local host 4500')
})


let server7=http.createServer(handleServer)
function handleServer(req,res){
 if(req.method==='POST'&& req.url==="/"){   
let contentTYPE=req.headers['content-type']
let storeDATA='';
req.on('data',(chunk)=>{
storeDATA=storeDATA+chunk;
})
req.on('end',()=>{
    if(contentTYPE==='application/x-www-form-urlencoded'){
let parseD= qs.parse(storeDATA)
res.end(JSON.stringify(parseD))
}
})
}
}
server7.listen(5555,()=>{
    console.log('we are using local host 5555')
})