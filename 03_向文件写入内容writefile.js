// 1. 引入内置模块fs
const fs = require("fs");

// 2. 调用fs.writeFile()方法，写入文件内容
// 参数1：写入文件的存放路径
// 参数2：写入文件的内容
// 参数3：回调函数，拿到写入失败和成功的结果 err

fs.writeFile("./files/2.txt", "abcd", function (err) {
  // 2.1 文件写入成功，err的值等于null:
  // 2.1 文件写入失败，err的值等于一个错误对象
  // console.log(err);

  // 3. 判断文件写入是否成功
  if (err) {
    return console.log(err.message);
  }
  console.log("文件写入成功！");
});
