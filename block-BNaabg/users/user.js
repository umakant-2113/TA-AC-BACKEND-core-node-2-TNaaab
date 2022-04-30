// Create a basic `USER CRUD application` using `fs` on a HTTP server where a user
//  can be created and stored in a file, read, updated and should be deleted 
//  from the file, all controlled by a node server.
// We will be using `POSTMAN` to request an operation on our server.
// Folder structure for our app:-
// Project folder
// - server.js
// - users(folder)
//   - user1.json
//   - user2.json
//   - ... other users
// Each user will be stored inside users dircetory by creating 
// a file which will be based on user's username which should be unique.
// Each user will have fields:-
// - name
// - email
// - username(unique)
// - bio
let fs=require('fs');
let path=require('path');
let http=require('http');
let qs=require('querystring');
let url=require('url')
let urlPath=url.parse(`/users?username=xyz`)
let userDir=__dirname;
console.log(userDir)

let server=http.createServer(handleServer)
function handleServer(req,res){
    let store='';
    req.on('data',(data)=>{
        store=store+data;
    })
    req.on('end',()=>{
        if (req.url === "/users" && req.method === "POST"){
            var username = JSON.parse(store).username;
            let fd=__dirname+username+"json";
            fs.open(userDir + username + ".json", "wx", (err, fd) => {
                
                fs.writeFile(fd, store, (err) => {
                 
                  fs.close(fd, (err) => {
                    res.end(`${username} successfully created`);
                  });
                });
              });
        }else if(urlPath.pathname==="/users"&&req.method==="GET"){
            let newPath=path.join(__dirname,".."+"/usersrajput.json")
            console.log(newPath)
            fs.readFile(newPath,(err,content)=>{
                if(err) return console.log(err);
                res.end(content);
            })
            // delete file 
        }else if(urlPath.pathname==="/users"&&req.method==='DELETE'){
            let deleteFile=path.join(__dirname,"..","/usersrajput.json")
           fs.unlink(deleteFile,deleteFilecb);
           function deleteFilecb(err){
               if(err){
                   console.log('Error in deleting file');
                
               }else{
                   console.log('Deleted Succesfully')
               }
               res.end()

           }
        }else if(urlPath.pathname==="/users"&&req.method==="PUT"){
            var username = JSON.parse(store).username;
            let fd=__dirname+username+"json";

            fs.open(userDir + username + ".json", "r+", (err, fd) => {
                fs.writeFile(fd, store, (err) => {
                    let usernamePath=path.join(__dirname,"..","/usersusername.json")
                    fs.truncate(usernamePath, 1024,(err)=>{
                        if(err) throw err
                      })
                  fs.close(fd, (err) => {
                    res.end(`${username} successfully created`);
                  });
                });
              });
        }
    })

}
server.listen(4000,()=>{
    console.log('we are using local host 4000')
})
