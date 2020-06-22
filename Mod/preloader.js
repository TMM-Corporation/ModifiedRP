/*
 * Preloader.js
 * By ToxesFoxes & TooManyMods
 * 
 * Description:
 * Used for changing in minecraft ui mod count
 */
var sdcard = android.os.Environment.getExternalStorageDirectory()

var Plist = {
	manifest: __dir__.replace('innercore/mods/' + __name__ + '/', ''), //'manifest.json'
	mods: __dir__.replace(__name__ + '/', ''),
	startScreen: __dir__ + 'assets/RP/ModifiedRP/ui/' //'start_screen.json'
}

function read(selectedFile) {
	var readed = (new java.io.BufferedReader(new java.io.FileReader(selectedFile)))
	var data = new java.lang.StringBuilder()
	var string
	while ((string = readed.readLine()) != null) {
		data.append(string)
		data.append('\n')
	}
	return data.toString()
}
function ReWrite(selectedFile, text_) {
	let writeFOS = new java.io.FileOutputStream(selectedFile)
	writeFOS.write(new java.lang.String(text_).getBytes())
}
function getDirList(path) {
	let c = [], files = (new java.io.File(path)).listFiles()
	for (let i in files) {
		var f = files[i]
		if (f.isDirectory()) c.push(f.getName())
	}
	return c
}
function Select(dir, name) {
	return (new java.io.File(dir, name)) || ('This file is not exisits at ' + dir + name)
}
function GetEnabledMods() {
	var count = 0,
		list = getDirList(Plist.mods)
	for (let i in list)
		if (ReadJSON(Select(Plist.mods + list[i], 'config.json')).enabled == true)
			count++
	return count
}
function ReadJSON(selectedFile) {
	let file = ""
	eval('file=' + read(selectedFile))
	return file || {}
}
function WriteJSON(selectedFile, json) {
	ReWrite(selectedFile, JSON.stringify(json))
}
// Selecting Files
var start_screenFILE = Select(Plist.startScreen, 'start_screen.json')
var manifestFILE = Select(Plist.manifest, 'manifest.json')
// Reading Json files
var manifest = ReadJSON(manifestFILE)
var start_screen = ReadJSON(start_screenFILE)
// Changing data
let count = GetEnabledMods()
start_screen.copyright.text = count + (count != 1 ? ' mods' : ' mod') + ' loaded\n© Mojang AB\nCreated By TMM'
start_screen.development_version.text = manifest.pack + ' #' + manifest.packVersionCode + ' ' + manifest.packVersion
// Writing data
WriteJSON(start_screenFILE, start_screen)