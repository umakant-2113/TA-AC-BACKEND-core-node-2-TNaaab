let http=require('http')
let fs=require('fs')
let server=http.createServer(handleServer);
function handleServer(req,res){
   if(req.method==="GET"&&req.url==="/"){
       fs.createReadStream('./readme.txt').pipe(res)
   }
}
server.listen(3000,()=>{
    console.log("we are using local host 3000")
})