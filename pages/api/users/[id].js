
import users from "@/data/db"


const handler =(req,res)=>{
    

    if (req.method === "GET"){
        const {id}= req.query;
        console.log(id)
        const user = users.find(user=>user.id == +id)
        if(user){
            res.json(user)            
        }else{
            res.status(404)
            return res.json({"message":'user not found'})
        }
    }
}

export default handler;