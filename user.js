const mongoose = reqire("mongoose");
// 데이터 도면을 받기위해서 Schem씀
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        repuied: [true, "user must type"],
        ucique : true,
    },
    token: {
        type: String,
    },
    online: {
        type: Boolean,
        default: false,
    },
});
module.export = mongoose.model("user must type name")
