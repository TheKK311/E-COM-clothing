const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://E_COMMERCE_Clothing:pallu@cluster0.k9cnwhu.mongodb.net/mern-ali'





// const mongoDbUrl = process.env.MONGODB_URL;

const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}




// const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'