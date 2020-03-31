const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(path.join(__dirname,'files'));

util.log(path.basename(__filename));
util.log(v8.getHeapCodeStatistics())

