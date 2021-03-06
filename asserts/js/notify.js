/**
 * 提示通知插件
 */
window.Notify = window.Notify || {
	
	success : function(text, layout, timeout) {
		var type = "success";
		this.notify(text, type, layout, timeout);
	},

	error : function(text, layout) {
		var type = "error";
		this.notify(text, type, layout, false);
	},

	info : function(text, layout, timeout) {
		var type = "information";
		timeout = timeout ? timeout : 3000;
		this.notify(text, type, layout, timeout);
	},
	
	warn : function(text, layout, timeout) {
		var type = "warning";
		timeout = timeout ? timeout : 4000;
		this.notify(text, type, layout, timeout);
	},
	
	warning : function(text, layout, timeout) {
		var type = "warning";
		timeout = timeout ? timeout : 4000;
		this.notify(text, type, layout, timeout);
	},

	notify : function(text, type, layout, timeout) {
		if (!timeout && timeout != false) {
			timeout = 2000;
		}
		
		var n = noty({
			text : text ? text : "无通知消息内容!",
			type : type ? type : 'alert',
			layout : layout ? layout : 'topRight',
			timeout : timeout ? timeout : false,
			theme : 'defaultTheme',
			dismissQueue : true,
			maxVisible : 5
		});
	}
};
