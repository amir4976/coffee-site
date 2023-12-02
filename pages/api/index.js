import connectToDB from "./../../utils/db";

const handler =(req, res)=>{
    connectToDB();
    return res.json('connected / ')
}

export default handler