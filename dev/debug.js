var debug = __config__.getBool("debug");
var callback = {
	playerAttack: __config__.getBool("CallBacks.playerAttack"),
	itemUse: __config__.getBool("CallBacks.itemUse"),
	guiChanged: __config__.getBool("CallBacks.guiChanged")
}
var Color = {
	AQUA: "§b",
	BEGIN: "§",
	BLACK: "§0",
	BLUE: "§9",
	BOLD: "§l",
	DARK_AQUA: "§3",
	DARK_BLUE: "§1",
	DARK_GRAY: "§8",
	DARK_GREEN: "§2",
	DARK_PURPLE: "§5",
	DARK_RED: "§4",
	GOLD: "§6",
	GRAY: "§7",
	GREEN: "§a",
	LIGHT_PURPLE: "§d",
	RED: "§c",
	RESET: "§r",
	WHITE: "§f",
	YELLOW: "§e"
}

Callback.addCallback("PlayerAttack", function (player, victim) {
	var item = Player.getCarriedItem();
	if (callback.playerAttack != false)
	Game.message(
		"You hit Entity with" + Item.getName(item.id, item.data) + " Type: " + Entity.getType(victim) +
		", Name: " + Entity.getNameTag(victim) +
		", Health: " + Entity.getHealth(victim) +
		"/" + Entity.getMaxHealth(victim));
});
Callback.addCallback("ItemUse", function (coords, item, block) {
	if (callback.itemUse != false) Game.message("Name: " + Item.getName(item.id, item.data, false) + ", ID: " + item.id + ", data: " + item.data);
});
Callback.addCallback("NativeGuiChanged", function (name) {
	if (callback.guiChanged != false) alert(name);
});
/*
	(╯°□°）╯︵ ┻━┻
*/
var File = java.io.File;
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
var FOS = java.io.FileOutputStream;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var sdcard = android.os.Environment.getExternalStorageDirectory();
var FileAPI = {
		getName: function (dir) {
				let name = new File(dir).name;
				return (name.replace('.png', ''));
		},
		select: function (dir, Name) {
				return (new File(dir, Name));
		},
		createNewDir: function (dir, newDirName) {
				return (new File(dir, newDirName).mkdir());
		},
		exists: function (file) {
				return file.exist();
		},
		create: function (path, name) {
				new File(path, name).createNewFile();
				return File;
		},
		deleteF: function (path) {
				try {
						var filed = new java.io.File(path);
						if (filed.isDirectory()) {
								var directoryFiles = filed.listFiles();
								for (var i in directoryFiles) {
										FileAPI.deleteF(directoryFiles[i].getAbsolutePath());
								}
								// filed.deleteF();
						}
						if (filed.isFile()) {
								filed.deleteF();
						}
				} catch (e) {
						alert(e);
				}
		},
		read: function (selectedFile) {
				var readed = (new BufferedReader(new FileReader(selectedFile)));
				var data = new StringBuilder();
				var string;
				while ((string = readed.readLine()) != null) {
						data.append(string);
						data.append('\n');
				}
				return data.toString();
		},
		readLine: function (selectedFile, line) {
				var readT = new FileAPI.read(selectedFile);
				var lineArray = readT.split('\n');
				return lineArray[line - 1];
		},
		write: function (selectedFile, text) {
				FileAPI.rewrite(selectedFile, (new FileAPI.read(selectedFile)) + text);
		},
		rewrite: function (selectedFile, text) {
				var writeFOS = new FOS(selectedFile);
				writeFOS.write(new String(text).getBytes());
		},
		getFilesList: function (path, endsWith) {
				var c = [], d = (new java.io.File(path)).listFiles();
				for (var e = 0; e < d.length; e++) {
						var f = d[e];
						f.isDirectory() || endsWith && !f.getName().endsWith(endsWith) || c.push(f.getName())
				}
				return c
		},
		//my
		filesIfIsDirectory: function (path) {
				var files = new java.io.File(path);
				if (files.isDirectory()) {
						return files.listFiles();
				}
		},
		checkDir: function (name) {
				for (let i in name) {
						if (FileTools.isExists(__dir__ + name[i]) == false)
								FileAPI.createNewDir(__dir__, name[i]);
				}
		},
		list: function (dir) {
				let list = [];
				for (let i in dir) {
						list.push(FileTools.GetListOfFiles(__dir__ + dir[i]));
				}
				return list;
		},
		getFilesCount: function (list) {
				let count = 0;
				for (let i in list) count++;
				return count;
		},
		getGuiItems: function (gui) {
				let count = 0;
				for (let i in gui.elements) {
						if (gui.elements[i] != null) { count++; }
				}
				if (count > 0) return true; else return false;
		}
};
/*
	┬─┬ノ( º _ ºノ)
*/
var t_bool = java.lang.Boolean.TYPE;
var t_int = java.lang.Integer.TYPE;
var t_double = java.lang.Double.TYPE;
var t_string = java.lang.String;

var nativeLogger = java.lang.Class.forName("zhekasmirnov.launcher.api.log.DialogHelper", true, UI.getContext().getClass().getClassLoader());
var nativeGameMode = java.lang.Class.forName("zhekasmirnov.launcher.api.NativeAPI", true, UI.getContext().getClass().getClassLoader());
// var pressBack = java.lang.Class.forName("com.mojang.minecraftpe.MainActivity", true, UI.getContext().getClass().getClassLoader());

var showLog = nativeLogger.getMethod("openFormattedDialog", t_string, t_string);
var formateLog = nativeLogger.getMethod("getFormattedLog");
var gameMode = nativeGameMode.getMethod("getGameMode");
// var pressBackButton = pressBack.getMethod("onBackPressed");

// var pressBackButton = pressBack.getClass();
Player.getGameMode = function() {
		alert("Not working...")
		return gameMode.invoke(null);
}
Logger.showLog = function () {
		showLog.invoke(null, formateLog.invoke(null), "InnerCore Log:");
};
Callback.addCallback("NativeCommand", function (str) {
	// base commands
	switch (str) {
		case "/help":
			Game.message("MCJEI Debug commands:\n/debug (true/false) - switches the debug mode\n/log - show InnerCore Log\n/getGM - return player GameMode")
			break;
		case "/getGM":
			Game.prevent();
			alert("Player current game mode is: " + Player.getGameMode());
			break;
		case "/debug":
			Game.prevent();
			Game.message("Debug mode = " + debug);
			break;
		case "/debug true":
			Game.prevent();
			debug = true;
			Game.message("Debug mode enabled");
			break;
		case "/debug false":
			Game.prevent();
			debug = false;
			Game.message(Color.AQUA+"Debug mode disabled");
			break;
		case "/log":
			Game.prevent();
			Logger.showLog();
			break;
	}
});


var PlayerRotation = {
	isEnabled: false,
	container: null,
	Window: new UI.Window({
		location: { x: 1e3/3, y: 34, width: 1e3/2, height: 15 },
		drawing: [{ type: "background", color: 0 }],
		elements: {
			"text1": { type: "text", font: { size: 20, color: android.graphics.Color.WHITE }, x: 0, y: 0, width: 1e3, height: 30, text: "No data" },
		}
	})
}
PlayerRotation.Window.setAsGameOverlay(true);

var currentUIscreen;
Callback.addCallback("NativeGuiChanged", function (screenName) {
	currentUIscreen = screenName;
	if (screenName != "hud_screen" && screenName != "in_game_play_screen") {
		if (PlayerRotation.container) {
			PlayerRotation.container.close();
			PlayerRotation.container = null;
		}
	}
});
function rtd(rotation, dgr) {
	var pi = Math.PI;
	return Math.floor(rotation * (dgr / pi));
}
function getYaw(r) {
	var yawRTD = rtd(r.yaw, 180);
	var yaw = 0;
	yaw = yawRTD%360;
	yaw = (yaw +360)%360;
	return yaw;
}

Callback.addCallback("tick", function () {
	var rotation = Entity.getLookAngle(Player.get());
	var v = Entity.getLookVector(Player.get());
	var pitchT = "Pitch: " + rtd(rotation.pitch, 180);
	var yawT = " Yaw: " + getYaw(rotation);
	var vX = ", Vector x: " + Math.floor(v.x * 10) / 10;
	var vY = " y: " + Math.floor(v.y * 10) / 10;
	var vZ = " z: " + Math.floor(v.z * 10) / 10;
	var time = (World.getWorldTime() % 24000);
	var timeT = ", Time: " + time;
	var cycles = ["Sunset", "Day", "Sunrise", "Night"];
	var cycle = Math.floor((World.getWorldTime() % 24000) / 6000);
	var text = pitchT + yawT + vX + vY + vZ + timeT + ", Cycle: " + cycles[cycle];
	if(debug != false)
	if (currentUIscreen == "hud_screen" || currentUIscreen == "in_game_play_screen") {
		if (!PlayerRotation.container) {
			PlayerRotation.container = new UI.Container();
			PlayerRotation.container.openAs(PlayerRotation.Window);
		}
		PlayerRotation.container.setText("text1", text);
	} else if (PlayerRotation.container) {
		PlayerRotation.container.close();
		PlayerRotation.container = null;
	}
});