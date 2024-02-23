const mongoose = require("mongoose")

const chatschema = new mongoose. Schema(
    {
        chat: String,
        user: {
            id: {
                type: mongoose
                ref: "user"
            },
            name: String,
        },
    },
    { timestamp: true}
);

module.export = mongoose.Schema.model("chat", chatschema)
    