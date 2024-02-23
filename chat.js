const mongoose = require("mongoose");

const chatschema = new mongoose.Schema(
    {
        chat: String,
        user: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            },
            name: String,
        },
    },
    { timestamps: true}
);

module.exports = mongoose.model("chat", chatschema);