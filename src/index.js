/**
 * @author yeshaoting
 * @description 应用首页
 * @date Oct 24, 2016 4:14:30 PM
 */


console.log("home vue js~");

var url = "http://sentence.iciba.com/index.php";
var home = new Vue({
    el: '#home',
    data: {
        title: "",
        content: "",
        note: "",
        translation: "",
        picture: "",
        picture2: "",
        picture3: "",
        caption: "每日一句",
        tts: "",
    },
    ready: function() {
        console.log("123~");
        this.get();
    },
    methods: {
        get: function(title) {
            var now = moment();
            var params = {
                "c": "dailysentence",
                "m": "getdetail",
                "title": title ? title : "" + now.format('YYYY-MM-DD')
            }

            var options = {
                params: params
            };

            console.log("params: {}", JSON.stringify(params));
            result = this.$http.jsonp(url, options);

            result.then((response) => {
                console.log("get response: %s", JSON.stringify(response));
                this.apply(response.data);
            });
        },
        request: function(title) {
            var now = moment();
            var params = {
                "c": "dailysentence",
                "m": "getdetail",
                "title": title ? title : now.format('YYYY-MM-DD')
            }

            $.ajax({
                url: url,
                dataType: 'jsonp',
                data: $.param(params, true),
                jsonp: 'callback',
                timeout: 3000,
                success: function(response) {
                    console.log("request response: %s", JSON.stringify(response));
                    this.apply(response);
                }
            });
        },
        apply: function(data) {
            console.info("apply data into page, data: %s", JSON.stringify(data));
            this.$set('title', data.title);
            this.$set('content', data.content);
            this.$set('note', data.note);
            this.$set('translation', data.translation);
            this.$set('picture', data.picture);
            this.$set('picture2', data.picture2);
            this.$set('picture3', data.picture3);
            this.$set('caption', data.caption);
            this.$set('tts', data.tts);
        }
    }
});

// var log4js = require('log4js');
// var logger = log4js.getLogger();
// logger.level = 'debug';
// logger.debug("Some debug messages");

// const log4js = require('./logger.js');
var logger = log4js.getLogger('log_file');
logger.info("this is a log4js test1111111111111!");
console.log("test test!!");

//
// var workspace = "/Users/yeshaoting/workspace/scripts/js/electron/agent-tools";
// var app2 = require("/Users/yeshaoting/workspace/scripts/js/electron/agent-tools/src/app.js");
// // var app2 = require("../src/app.js");
//
// var data = {
//     app_name2: "abc",
//     app_name: app2.name,
// };
//
// var home = new Vue({
//     el: '#home',
//     data: data
// });
//
// console.log("app3=%s", JSON.stringify(app3));
// console.log("app2=%s", JSON.stringify(app2));
// console.log("app=%s", JSON.stringify(app));
// console.log("data=%s", JSON.stringify(data));