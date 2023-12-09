import path from "path";
import fs from "fs";
import users from "@/data/db";
import userModel from "@/models/user";
import { ObjectId } from "bson";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;

    const user = await userModel.find({ _id: id });

    if (user) {
      res.json(user);
    } else {
      res.status(404);
      return res.json({ message: "user not found" });
    }
  } else if (req.method === "DELETE") {
    // {

    // // and we find a path for our database using path Method
    // const dbPath = path.join(process.cwd(), "data", "db.json");

    // // and then we have to use the dbPath to find out db.json file to see the data
    // const dbFilesystem = fs.readFileSync(dbPath);

    // // because the dbFileSystem give us an unreadable code we use json.parse to parse it and make it readable
    // const parsedData = JSON.parse(dbFilesystem);

    // // so we find our user inside the fucking database and then we fucking deleted you know wite filter method
    // const findUser = parsedData.users.filter((user) => user.id !== id);

    // // like always we set this to err variable and check it baby😎
    // const err = fs.writeFileSync(
    //   dbPath,
    //   JSON.stringify({ ...parsedData, users: findUser })
    // );
    // if (err) {
    //   res.json(err);
    // } else {
    //   res.json("user deleted successfully !!!");
    // }
    // }

    const { id } = req.query;
    console.log(id);
    const deletedUser = await userModel.findOneAndDelete({ _id: id });
    console.log(deletedUser);
    if (deletedUser) {
      res.json({ message: "user deleted" }).status(200);
    } else {
      res.json({ error: "error" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { email, username, password } = JSON.parse(req.body);
    const UpdatedUser = await userModel.findOneAndUpdate(
      { _id: id },
      {
        username,
        email,
        password,
      }
    );

    if (UpdatedUser) {
      res.json({ message: "user updated" });
    } else {
      res.json({ MESSAGE: "user not updated" }).status(402);
    }

    
  } else {
    return res.status(404).json({ Message: "not found" });
  }
};

export default handler;
