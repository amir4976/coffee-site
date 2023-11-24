import path from "path";
import fs from "fs";
import { randomUUID } from "crypto";

const handler = (req, res) => {
  switch (req.method) {
    case "GET": {
      const dbPath = path.join(process.cwd(), "data", "db.json");
      const dbFilesystem = fs.readFileSync(dbPath);
      const parsedData = JSON.parse(dbFilesystem);

      console.log(parsedData);
      res.json(parsedData);
      break;
    }

    case "POST": {
      // so we get information from users
      const { username, email, password } = JSON.parse(req.body);

      // and we find a path for our database using path Method
      const dbPath = path.join(process.cwd(), "data", "db.json");

      // and then we have to use the dbPath to find out db.json file to see the data
      const dbFilesystem = fs.readFileSync(dbPath);

      // because the dbFileSystem give us an unreadable code we use json.parse to parse it and make it readable
      const parsedData = JSON.parse(dbFilesystem);

      // we add our new data to db using push method
      parsedData.users.push({
        id: crypto.randomUUID(),
        username: username,
        email: email,
        password: password,
      });

      // there might be an error so we set it to a variable name err and then use writeFileSync to make our changes permanent
      // so you know that parsedData is an object now and we cant use it in json we have to turn it to json so json.stringify(parsedData)
      const err = fs.writeFileSync(dbPath, JSON.stringify(parsedData));

      // ! so now we check if there is an error so we trow some error
      // * if its not so trow status 201 (because it mean db have changed ) and show user added message (see its easy 😁)
      if (err) {
        res.json(err);
      } else {
        res.status(201).json({ message: "user added successfully" });
      }

      break;
    }
    case "PUT": {
      res.json("user replace");
      break;
    }
    case "DELETE": {
      console.log(req.query)
      res.json("user deleted");
      break;

    }

    default:
      break;
  }
};
export default handler;
