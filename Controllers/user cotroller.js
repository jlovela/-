const User = require("../Models.user");
const userController = {};

userController.saveUser=async(userName,sid) => {
//이미 있느 유저인지 확인
const user = await user. findone({name: userName})
// 없다면 새로 유저 정보 만들기
if(!user) {
    user = new user({
    name: userName,
    token: sid,
    online: true
    });
}
// 이미 있는 유저라면 연결정도 token값만 바꿔주자
user. token = sid;
user. token;

await user.save();
};
module.exports = userController;