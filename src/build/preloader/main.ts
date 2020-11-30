interface ReadedResult {
	exists: boolean, result: obj, file: java.io.File
}

class ModResources {
	private rm: ResourceManager
	constructor(rm: ResourceManager) {
		this.rm = rm
	}
	/*
	 * Group 0.  0-82  /storage/emulated/0/games/horizon/packs/Inner_Core_Test/innercore/mods/ModifiedRP/
	 * Group 1.  0-71  /storage/emulated/0/games/horizon/packs/Inner_Core_Test/innercore/mods/
	 * Group 2.  0-66  /storage/emulated/0/games/horizon/packs/Inner_Core_Test/innercore/
	 * Group 3.  0-56  /storage/emulated/0/games/horizon/packs/Inner_Core_Test/
	 * Group 4.  0-40  /storage/emulated/0/games/horizon/packs/
	 * Group 4.  0-40  /storage/emulated/0/games/horizon/
	 * Group 5.  0-26  /storage/emulated/0/games/
	 * Group 6.  26-40 horizon/packs/
	 * Group 7.  40-56 Inner_Core_Test/
	 * Group 8.  56-66 innercore/
	 * Group 9.  66-71 mods/
	 * Group 10. 71-82 ModifiedRP/
	 */
	get regex_dir() {
		return new RegExp(/(((((.*)(horizon\/packs\/))(.*\/))(innercore\/))(.*mods\/))([A-z0-9]{0,}\/)/gm)
	}
	get dir() {
		return __dir__.split(this.regex_dir)
	}
	get minecraft_packs() {
		return `minecraft_packs/`
	}
	get behavior_packs() {
		return `${this.minecraft_packs}behavior/`
	}
	get resource_packs() {
		return `${this.minecraft_packs}resource/`
	}
	get mrp_resourcepack() {
		return `${__dir__}${this.resource_packs}ModifiedRP/`
	}
	get mods() {
		return `${this.dir[1]}`
	}
	get current_pack() {
		return `${this.dir[3]}`
	}
	get ui() {
		return `${this.mrp_resourcepack}ui/`
	}
	get icons() {
		return `${this.mrp_resourcepack}textures/ui/mod_icons/`
	}
	get manifest() {
		return `${this.current_pack}`
	}
	private readJson(path: string): ReadedResult {
		let file = this.rm.Select(path)
		return { exists: file.exists(), result: this.rm.ReadJSON(file) || {}, file: file }
	}
	writeJson(file: java.io.File, json: obj) {
		this.rm.WriteJSON(file, json)
	}
	get file_manifest(): ReadedResult {
		let data = this.readJson(`${this.manifest}manifest.json`)
		// log(JSON.stringify(data.result, null, 4))
		return data
	}
	get file_modified_rp(): ReadedResult {
		let data = this.readJson(`${this.ui}modified_rp.json`)
		// log(JSON.stringify(data.result, null, 4))
		return data
	}
	get file_start_screen(): ReadedResult {
		let data = this.readJson(`${this.ui}start_screen.json`)
		// log(JSON.stringify(data.result, null, 4))
		return data
	}
	logAll() {
		let matched = __dir__.split(this.regex_dir)
		for (let i in matched) {
			log(`[${i}]: ${matched[i]}`)
		}
	}
	getMods(file_modified_rp: obj) {
		let count = 0
		let list = this.rm.getFilesList(this.mods).dirs
		for (let i in list) {
			log(`${this.mods + list[i]}/config.json`)
			let selModCfg = this.readJson(`${this.mods + list[i]}/config.json`)
			let selModInfo = this.readJson(`${this.mods + list[i]}/mod.info`)
			let modStatus = "Enabled"

			if (selModCfg.exists)
				modStatus = selModCfg.result.enabled ? "Enabled" : "Disabled"
			if (selModInfo.exists) {
				let modInfo = selModInfo.result
				let iconTexture = (modInfo.name.replace(' ', '_'))
				let copied = this.rm.CopyToDest(this.mods + list[i] + '/mod_icon.png', this.icons + iconTexture + '.png')

				if (!copied) iconTexture = 'mod_no_icon'
				file_modified_rp.dlg_panel.controls.push({
					"mod@mrp.mod_pane": {
						"$icon_texture": "textures/ui/mod_icons/" + iconTexture,
						"$mod_name": modInfo.name || "",
						"$mod_author": modInfo.author || "",
						"$mod_version": modInfo.version || "",
						"$mod_status": modStatus || false
					}
				})
				count++
			}
		}
		return count
	}
	buildCopyright(packVersion: string, count: number) {
		return `IC ${packVersion}\n${count} ${(count > 1 ? ' mods' : ' mod')} loaded\nCopyright © Mojang AB`
	}
	buildDevVersion(manifest: obj) {
		return `${manifest.pack}#${manifest.packVersionCode} ${manifest.packVersion}`
	}
	init() {

		let scr = res.file_start_screen
		let mrp = res.file_modified_rp
		let mst = res.file_manifest

		if (scr.exists && scr.result != {}) {
			let start_screen_data = scr.result
			start_screen_data.main_buttons_panel["$mods_ignored"] = false
			start_screen_data.main_buttons_panel["$quickplay_ignored"] = false

			if (mrp.exists && mrp.result != {}) {
				mrp.result.dlg_panel.controls = []

				if (mst.exists && mst.result != {}) {
					let manifest = mst.result
					let count = this.getMods(mrp.result)
					mrp.result.copyright.text = res.buildCopyright(manifest.packVersion, count)
					mrp.result.dev_info.text = res.buildDevVersion(manifest)
				}
			}

			res.writeJson(scr.file, start_screen_data)
			res.writeJson(mrp.file, mrp.result)
		}
	}
}


let modified_rp_RM = new ResourceManager()
modified_rp_RM.isPreloader = true

let res = new ModResources(modified_rp_RM)
res.logAll()
res.init()