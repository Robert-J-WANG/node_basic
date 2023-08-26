//1. 引入内置模块fs
const fs = require("fs");
// console.log(fs);

// 2. 调用readFile()方法读取文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时采用的编码格式，一般默认指定UTF8
// 参数3：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile("./files/11.txt", "utf8", function (err, dataStr) {
  // 2.1 打印失败的结果:
  // 读取成功时：err为null
  console.log(err); // null

  // 读取失败时：err为 错误信息对象：
  /* 
  [Error: ENOENT: no such file or directory, open './files/11.txt']
    {
      errno: -2,
      code: 'ENOENT',
      syscall: 'open',
      path: './files/11.txt'
    } 
    */
  console.log("-----------------");
  // 2.2 打印成功的结果
  // 读取成功时：dataStr为 文件中的内容
  // 读取成功时：dataStr为 undefined
  console.log(dataStr); // 1111111
});
