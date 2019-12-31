// var debug = __config__.getBool("debug");
// var callback = {
// 	playerAttack: __config__.getBool("CallBacks.playerAttack"),
// 	itemUse: __config__.getBool("CallBacks.itemUse"),
// 	guiChanged: __config__.getBool("CallBacks.guiChanged")
// }
// var Color = {
// 	AQUA: "§b",
// 	BEGIN: "§",
// 	BLACK: "§0",
// 	BLUE: "§9",
// 	BOLD: "§l",
// 	DARK_AQUA: "§3",
// 	DARK_BLUE: "§1",
// 	DARK_GRAY: "§8",
// 	DARK_GREEN: "§2",
// 	DARK_PURPLE: "§5",
// 	DARK_RED: "§4",
// 	GOLD: "§6",
// 	GRAY: "§7",
// 	GREEN: "§a",
// 	LIGHT_PURPLE: "§d",
// 	RED: "§c",
// 	RESET: "§r",
// 	WHITE: "§f",
// 	YELLOW: "§e"
// }
// if (callback.playerAttack != false){
// 	Callback.addCallback("PlayerAttack", function (player, victim) {
// 		var item = Player.getCarriedItem();
// 			Game.message(
// 				"You hit Entity with" + Item.getName(item.id, item.data) + " Type: " + Entity.getType(victim) +
// 				", Name: " + Entity.getNameTag(victim) +
// 				", Health: " + Entity.getHealth(victim) +
// 				"/" + Entity.getMaxHealth(victim));
// 	});
// }
// if (callback.itemUse != false){
// 	Callback.addCallback("ItemUse", function (coords, item, block) {
// 		Game.message("Name: " + Item.getName(item.id, item.data, false) + ", ID: " + item.id + ", data: " + item.data, JSON.stringify(item.extra));
// 	});
// }

// // var setGameSpeed = ModAPI.requireGlobal("GameAPI.setGameSpeed");
// // World.setTickingSpeed = function(a){
// // 	setGameSpeed(Math.floor(20*(a||0)));
// // } 


// var t_string = java.lang.String;
// var t_int = java.lang.Integer.TYPE;
// var nativeLogger = java.lang.Class.forName("zhekasmirnov.launcher.api.log.DialogHelper", true, UI.getContext().getClass().getClassLoader());
// var mainActivity = java.lang.Class.forName("com.mojang.minecraftpe.MainActivity", true, UI.getContext().getClass().getClassLoader());

// var showLog = nativeLogger.getMethod("openFormattedDialog", t_string, t_string);
// var formateLog = nativeLogger.getMethod("getFormattedLog");
// var pressBackButton = mainActivity.getMethod("onBackPressedOrScriptExit");

// var pressBack = function(){
// 	pressBackButton.invoke(null);
// }
// Logger.showLog = function () {
// 	showLog.invoke(null, formateLog.invoke(null), "InnerCore Log:");
// };
// var back = false;
// var backCount = 0;
// Callback.addCallback("NativeCommand", function (str) {
// 	// base commands
// 	switch (str) {
// 		case "/help":
// 			Game.message("MCJEI Debug commands:\n/log - show InnerCore Log")
// 			break;
// 		case "/log":
// 			Game.prevent();
// 			Logger.showLog();
// 			break;
// 		case "/pause":
// 			Game.prevent();
// 			// Logger.showLog();
// 			back = true;
// 			break;
// 	}
// });



// function decodeBmp(string) {
// 	string = android.util.Base64.decode(string, 0);
// 	return android.graphics.BitmapFactory.decodeByteArray(string, 0, string.length);
// }
// function bmpImg(string) {
// 	var decodedBmp = decodeBmp(string),
// 		bmp = android.graphics.Bitmap.createBitmap(35, 35, android.graphics.Bitmap.Config.ARGB_8888),
// 		canvas = new android.graphics.Canvas(bmp);
// 	canvas.drawBitmap(decodedBmp, 0, 0, null);
// 	return bmp;
// }
// function rtd(rotation, dgr) {
// 	var pi = Math.PI;
// 	return Math.floor(rotation * (dgr / pi));
// }

// function getYaw(r) {
// 	var yawRTD = rtd(r.yaw, 180);
// 	var yaw = 0;
// 	yaw = yawRTD % 360;
// 	yaw = (yaw + 360) % 360;
// 	return yaw;
// }
// var PlayerRotation = {
// 	isEnabled: false,
// 	container: null,
// 	Window: new UI.Window({
// 		location: { x: 1e3 / 3, y: 34, width: 1e3 / 2, height: 15 },
// 		drawing: [{ type: "background", color: 0 }],
// 		elements: {
// 			"text1": { type: "text", font: { size: 20, color: android.graphics.Color.WHITE }, x: 0, y: 0, width: 1e3, height: 30, text: "No data" },
// 		}
// 	})
// }
// PlayerRotation.Window.setAsGameOverlay(true);

// var currentUIscreen;
// Callback.addCallback("NativeGuiChanged", function (screenName) {
// 	currentUIscreen = screenName;
// 	if(screenName == "pause_screen")backCount=0, back = false;
// 	if (screenName != "hud_screen" && screenName != "in_game_play_screen") {
// 		if (PlayerRotation.container) {
// 			PlayerRotation.container.close();
// 			PlayerRotation.container = null;
// 		}
// 	}
// });
// Callback.addCallback("tick", function () {
// 	if(World.getThreadTime() % 5 == 0){
// 		if(back == true && backCount !=3)pressBack(), backCount++;
// 		// if(backCount == 3)backCount=0, back = false;
// 	}
// 	let rotation = Entity.getLookAngle(Player.get()),
// 	v = Entity.getLookVector(Player.get()),
// 	pitchT = "Pitch: " + rtd(rotation.pitch, 180),
// 	yawT = " Yaw: " + getYaw(rotation),
// 	vX = ", Vector x: " + Math.floor(v.x * 10) / 10,
// 	vY = " y: " + Math.floor(v.y * 10) / 10,
// 	vZ = " z: " + Math.floor(v.z * 10) / 10,
// 	time = (World.getWorldTime() % 24000),
// 	timeT = ", Time: " + time,
// 	cycles = ["Sunset", "Day", "Sunrise", "Night"],
// 	cycle = Math.floor((World.getWorldTime() % 24000) / 6000);
// 	var text = pitchT + yawT + vX + vY + vZ + timeT + ", Cycle: " + cycles[cycle];
// 	if (debug != false)
// 		if (currentUIscreen == "hud_screen" || currentUIscreen == "in_game_play_screen") {
// 			if (!PlayerRotation.container) {
// 				PlayerRotation.container = new UI.Container();
// 				PlayerRotation.container.openAs(PlayerRotation.Window);
// 			}
// 			PlayerRotation.container.setText("text1", text);
// 		} else if (PlayerRotation.container) {
// 			PlayerRotation.container.close();
// 			PlayerRotation.container = null;
// 		}
// });