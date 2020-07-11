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
	ui: __dir__ + 'resource_packs/ModifiedRP/ui/'
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
function copy(src, dst){
	/*
	private static void copyFileUsingChannel(File source, File dest) throws IOException {
    FileChannel sourceChannel = null;
    FileChannel destChannel = null;
    try {
        sourceChannel = new FileInputStream(source).getChannel();
        destChannel = new FileOutputStream(dest).getChannel();
        destChannel.transferFrom(sourceChannel, 0, sourceChannel.size());
       }finally{
           sourceChannel.close();
           destChannel.close();
   }
	}*/
	try {
		let srcChannel = new java.io.FileInputStream(src).getChannel()
		let dstChannel = new java.io.FileOutputStream(dst).getChannel()
		dstChannel.transferFrom(srcChannel, 0, srcChannel.size())
	} catch (e) {
		Logger.Log(e, 'ModifiedRP preloader')
		return false
	}
	return true
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
	for (let i in list) {
		let modCfg = ReadJSON(Select(Plist.mods + list[i], 'config.json'))
		let modInfo = ReadJSON(Select(Plist.mods + list[i], 'mod.info'))
		if (modCfg.enabled == true)
			count++
			let modTexture = (modInfo.name.replace(' ', '_'))
			if (!copy(Plist.mods + list[i]+'/mod_icon.png', __dir__+'resource_packs/ModifiedRP/textures/ui/mod_icons/'+modTexture+'.png'))
				modTexture = 'mod_no_icon'
			modified_rp.dlg_panel.controls.push({
				"mod@mrp.mod_pane": {
					"$icon_texture": "textures/ui/mod_icons/" + modTexture,
					"$mod_name": modInfo.name,
					"$mod_author": modInfo.author,
					"$mod_version": modInfo.version
				}
			})
	}
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
var start_screenFILE = Select(Plist.ui, 'start_screen.json')
var modified_rpFILE = Select(Plist.ui, 'modified_rp.json')
var manifestFILE = Select(Plist.manifest, 'manifest.json')
// Reading Json files
var manifest = ReadJSON(manifestFILE)
var start_screen = ReadJSON(start_screenFILE)
var modified_rp = ReadJSON(modified_rpFILE)
// Changing data
modified_rp.dlg_panel.controls = []
let count = GetEnabledMods()
start_screen.copyright.text = ('IC ' + manifest.packVersion + '\n') + (count + (count != 1 ? ' mods' : ' mod') + ' loaded') + '\nCopyright © Mojang AB'

// start_screen.development_version.text = 'manifest.pack + ' #' + manifest.packVersionCode + ' ' + manifest.packVersion'
// Writing data
WriteJSON(start_screenFILE, start_screen)
WriteJSON(modified_rpFILE, modified_rp)