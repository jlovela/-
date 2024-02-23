module.exports = function(io) {

io.on("connection", async (socket)=>{
    console.log("client us connected", socket.id);
});
};