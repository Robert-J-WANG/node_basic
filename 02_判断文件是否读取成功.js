const fs = require("fs");

// 读取成功
fs.readFile("./files/1.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("读取失败", err.message);
  }
  console.log("读取文件成功", dataStr);
  // 读取文件成功 11111111111111
});

// 读取失败
// fs.readFile("./files/1111.txt", "utf8", function (err, dataStr) {
//   if (err) {
//     return console.log("读取失败", err.message);
//     // 读取失败 ENOENT: no such file or directory, open './files/1111.txt'
//   }
//   console.log("读取文件成功", dataStr);
// });
