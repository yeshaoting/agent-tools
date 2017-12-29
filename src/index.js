/**
 * @author yeshaoting
 * @description 应用首页
 * @date Oct 24, 2016 4:14:30 PM
 */

var workspace = "/Users/yeshaoting/workspace/scripts/js/electron/agent-tools";
var app2 = require("/Users/yeshaoting/workspace/scripts/js/electron/agent-tools/src/app.js");
// var app2 = require("../src/app.js");

var data = {
    app_name2: "abc",
    app_name: app2.name,
};

var home = new Vue({
    el: '#home',
    data: data
});

console.log("app3=%s", JSON.stringify(app3));
console.log("app2=%s", JSON.stringify(app2));
console.log("app=%s", JSON.stringify(app));
console.log("data=%s", JSON.stringify(data));