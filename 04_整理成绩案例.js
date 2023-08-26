// 1. 引入内置模块fs
const fs = require("fs");
// 2. 调用readFile()方法读取文件
fs.readFile("./files/成绩.js", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("读取错误", err.message);
  }
  // 3.将读取的字符串转为数组
  const oldArr = dataStr.split(" ");
  // 4. 变量数组元素，进行替换
  const newArr = [];
  oldArr.forEach((item) => newArr.push(item.replace("=", ":")));
  // console.log(newArr);
  // 5. 将新数组转换为字符串
  const str = newArr.join("\r\n");
  console.log(str);

  // 6. 调用writeFile方法，将字符写入新的文档中
  fs.writeFile("./files/新成绩.js", str, function (err) {
    // 7. 判断文件写入是否成功
    if (err) {
      return console.log(err.message);
    }
    console.log("文件写入成功！");
  });
});
