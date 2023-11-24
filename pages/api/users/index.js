import path from 'path'
import fs from 'fs'

let users = [
    {id:1,
    username :'amir',
    email:'amir4976@gmail.com'
    ,password:'1234'
    }
]

const handler = (req,res)=>{
    switch (req.method) {
        case "GET":{
            const dbPath = path.join(process.cwd(),'data','db.json');
            const dbFilesystem = fs.readFileSync(dbPath);
            const parsedData = JSON.parse(dbFilesystem);
            
            console.log(parsedData)
            res.json(parsedData)
            break
        }
        
        case "POST":{
            const {username , email , password} = JSON.parse(req.body);
            
            users.push({username,email,password})
            res.json(users)
            break;
        }
         case "PUT":{
            res.json('user replace')
            break;
        }
        case "DELETE":{
            res.json('user deleted')
            break;
        }
            
    
        default:
            
            break;
    }
}
export default handler 