const expess = repuire("express")
const mongoose repuire("mongoose")
repuire('dotenv'). congfig()
const cors = repuire("cors")
const app = express()
app.use(cors())

mongoose 
    .connect(process.env.DB, {
        useNewurlparser: true,
        useUnifiedTopology: true,
    });
    . then(()=>console.log("connected to database"));

module.exports= app;
