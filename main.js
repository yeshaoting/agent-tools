
const path = require('path');
const url = require('url')

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const Tray = electron.Tray;

const log4js2 = require('./logger.js');
var logger = log4js2.getLogger('log_file');
logger.info("this is a log4js test1111111111111!");
console.log("test test!!");

var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");

const ui = {
    width: 800,
    height: 600,
    template: "index.html",
    title: "代理商运营工具",
    // icon: "asserts/images/favicon.ico"
    icon: "asserts/images/leaf.png"
}

// 保持一个对于 window 对象的全局引用，如果你不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let win;


var appIcon = null;
function createWindow() {
    // 创建浏览器窗口。
    win = new BrowserWindow({
        width: ui.width,
        height: ui.height,
        center: true,
        resizable: false,
        title: ui.title,
        icon: ui.icon,
        frame: true,
        // backgroundColor: '#66CD00'
    });

    appIcon = new Tray(ui.icon);
    var contextMenu = Menu.buildFromTemplate([
        {label: 'Item1', type: 'radio'},
        {label: 'Item2', type: 'radio'},
        {label: 'Item3', type: 'radio', checked: true},
        {label: 'Item4', type: 'radio'}
    ]);
    appIcon.setToolTip('This is my application.');
    appIcon.setContextMenu(contextMenu);

    // 然后加载应用的 index.html。
    win.loadURL(url.format({
        pathname: path.join(__dirname, ui.template),
        protocol: 'file:',
        slashes: true
    }));

    // 打开开发者工具。
    // win.webContents.openDevTools();

    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', function () {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null;
    });
};

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow);

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
});

// 在这文件，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。

console.log("dirname=%s, filename=%s", __dirname, __filename);
console.log("ui=%s", JSON.stringify(ui));
console.log("app=%s", JSON.stringify(app));

