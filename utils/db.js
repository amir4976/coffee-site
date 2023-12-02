const mongoos = require("mongoose")
mongoose
.connect('mongodb://127.0.0.1:27017/next-db')
.then(() => console.log('Connected!'))
. catch((err)=>console.log(err))