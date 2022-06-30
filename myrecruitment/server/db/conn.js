const mongoose = require('mongoose');

const DB = "mongodb+srv://umair:shanibhatti@cluster0.zzijyhl.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Connect start")).catch((error)=> console.log(error.message))