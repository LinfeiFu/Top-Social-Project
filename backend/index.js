//npm init
//npm i express cors axios json-server
//npm i nodemon -D
//npm run json:server
//npm run server (npm nodemon index.js)在package.json script里面修改

const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const { handleErrors } = require("./middleware/errorMiddleware");
const app = express();

app.use(cors());
app.use(express.json());

//router需要挂在在数据解析(json)和跨域全局中间件(cors)后面
app.use("/api",router);
// use error middleware at the end
app.use(handleErrors);

const PORT = 80;
app.listen(PORT, function() {
    console.log("Server is running on http://localhost:80")
});

//app.use(express.json())// parse JSON requests
//app.use(express.urlencoded({extended:true})) //parse URL-encoded requests
//app.use(cors()) //必须在路由之前挂在，解决跨域问题
//app.use(authMiddleware);// custom authentication middleare 比如用户验证，api授权之类的
//app.use(routes) // route handlers
//app.use(handleErrors) // error handling middleware (at the end) error中间件在路由后挂载