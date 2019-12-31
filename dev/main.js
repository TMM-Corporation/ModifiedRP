function getJson(path){
	return FileTools.ReadText(__dir__+path);
}

function random(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

var t_string = java.lang.String,
		nativeLogger = java.lang.Class.forName("zhekasmirnov.launcher.api.log.DialogHelper", true, UI.getContext().getClass().getClassLoader()),
		showLog = nativeLogger.getMethod("openFormattedDialog", t_string, t_string),
		formateLog = nativeLogger.getMethod("getFormattedLog");

Logger.showLog = function () {
	showLog.invoke(null, formateLog.invoke(null), "InnerCore Log:");
};
var splashes = getJson("/res/splashes.json"),
		p_s = getJson("/res/ui/progress_screen.json");

// Callback.addCallback("NativeGuiChanged", function (screenName) {
	for(var i in p_s){
		alert(i)
	}
	alert(JSON.stringify(p_s))
	//  = splashes["splashes"][random(0, 402)];
	// FileTools.WriteJSON("/res/ui/progress_screen.json", obj, beautify)
	// alert(p_s);
	alert(splashes["splashes"][random(0, 402)]);
// });
setTimeout(function(){
	Logger.showLog();
}, 2000);