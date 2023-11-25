import path from "path";
import fs from "fs";
import users from "@/data/db";

const handler = (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;
    console.log(id);
    const user = users.find((user) => user.id == +id);
    if (user) {
      res.json(user);
    } else {
      res.status(404);
      return res.json({ message: "user not found" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    // and we find a path for our database using path Method
    const dbPath = path.join(process.cwd(), "data", "db.json");

    // and then we have to use the dbPath to find out db.json file to see the data
    const dbFilesystem = fs.readFileSync(dbPath);

    // because the dbFileSystem give us an unreadable code we use json.parse to parse it and make it readable
    const parsedData = JSON.parse(dbFilesystem);

    // so we find our user inside the fucking database and then we fucking deleted you know wite filter method
    const findUser = parsedData.users.filter((user) => user.id !== id);

    // like always we set this to err variable and check it baby😎
    const err = fs.writeFileSync(
      dbPath,
      JSON.stringify({ ...parsedData, users: findUser })
    );
    if (err) {
      res.json(err);
    } else {
      res.json("user deleted successfully !!!");
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { email, username, password } = JSON.parse(req.body);
    const dbPath = path.join(process.cwd(), "data", "db.json");

    const data = fs.readFileSync(dbPath);
    const parsedData = JSON.parse(data);


    const isUser = parsedData.users.some((user) => String(user.id) === String(id));
    

    if (isUser) {
      parsedData.users.some((user) => {
        if (String(user.id) === String(id)) {
          user.email = email;
          user.username = username;
          user.password = password;
          return true;
        }
      });

      console.log(req.body)
      const err = fs.writeFileSync(dbPath,JSON.stringify({...parsedData}));
      if(err){
        res.json({message:"error"})
      }else{
        res.json({message:"user updated successfully"})
      }

  } else {
      return res.status(404).json({ Message: "not found" });
  }
}
}

export default handler;
