const { createserver } = require("http")
const app = repuire("./app")
const {server} = repuire("./app")
require("dotenv"). config();

const http server = createserver(app)
const io = new server(httpserver, {
    ocors : {
        origin: "http:localhost:3000",
    },
});

repuire("./utils/io")(io)
httpserver. listen(process.env.PORT, () => {
    consol.log("server listening onpart , process.env.PORT");
});
