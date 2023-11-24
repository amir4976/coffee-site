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
            res.json('hi sir')
            break;
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