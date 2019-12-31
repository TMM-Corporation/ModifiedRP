
/* author: Manasseh Pierce
Here I was messing around with
the idea of 3D Armor,
I made 4 functions (1 for each armor piece)
and merged them dynamically with others to
try to make this possible.
WARNING NOT FINISHED
*/

var GLOBAL = this;

// this will merge two functions into one, useful for making multiple models with the same bits
function mergeFunctions(funcName, func1, func2, parameterNames) {
	var func1 = func1.toString();
	var func1open = func1.indexOf("{");
	var codeInsideFunc1 = func1.substring(func1open + 1, func1.length - 1);
	var func2 = func2.toString();
	var func2open = func2.indexOf("{");
	var codeInsideFunc2 = func2.substring(func2open + 1, func2.length - 1);
	GLOBAL.eval("function "+funcName+"("+parameterNames.join(",")+") {"+codeInsideFunc1+codeInsideFunc2+"}");
}

//0001 - 1
function addIronBootsRenderType(renderer) {
	var model = renderer.getModel();
	var rLeg = model.getPart("rightLeg");
	var lLeg = model.getPart("leftLeg");
}
var IronBootsRenderType = new Render(63);
addIronBootsRenderType(IronBootsRenderType);

//0010 - 2
function addIronLeggingsRenderType(renderer) {
	var model = renderer.getModel();
	var rLeg = model.getPart("rightLeg");
	var lLeg = model.getPart("leftLeg");
}
var IronLeggingsRenderType = new Render(63);
addIronLeggingsRenderType(IronLeggingsRenderType);

//0100 - 4
function addIronBodyRenderType(renderer) {
	var model = renderer.getModel();
	var body = model.getPart("body");
	var rArm = model.getPart("rightArm");
	var lArm = model.getPart("leftArm");
}
var IronBodyRenderType = new Render(63);
addIronBodyRenderType(IronBodyRenderType);

//1000 - 8
function addIronHelmetRenderType(renderer) {
	var model = renderer.getModel();
	var head = model.getPart("head");
	head.addBox(-4, 0, -4, 10, 1, 10, 0);
}
var IronHelmetRenderType = new Render(63);
addIronHelmetRenderType(IronHelmetRenderType);

//0011 - 3
mergeFunctions("addIronLeggingsBootsRenderType", addIronLeggingsRenderType, addIronBootsRenderType, ["renderer"]);
var IronLeggingsBootsRenderType = new Render(63);
addIronLeggingsBootsRenderType(IronLeggingsBootsRenderType);

//0101 - 5
mergeFunctions("addIronBodyBootsRenderType", addIronBodyRenderType, addIronBootsRenderType, ["renderer"]);
var IronBodyBootsRenderType = new Render(63);
addIronBodyBootsRenderType(IronBodyBootsRenderType);

//1100 - 12
mergeFunctions("addIronHelmetBodyRenderType", addIronHelmetRenderType, addIronBodyRenderType, ["renderer"]);
var IronHelmetBodyRenderType = new Render(63);
addIronHelmetBodyRenderType(IronHelmetBodyRenderType);

//1010 - 10
mergeFunctions("addIronHelmetLeggingsRenderType", addIronHelmetRenderType, addIronLeggingsRenderType, ["renderer"]);
var IronHelmetLeggingsRenderType = new Render(63);
addIronHelmetLeggingsRenderType(IronHelmetLeggingsRenderType);

//1001 - 9
mergeFunctions("addIronHelmetBootsRenderType", addIronHelmetRenderType, addIronBootsRenderType, ["renderer"]);
var IronHelmetBootsRenderType = new Render(63);
addIronHelmetBootsRenderType(IronHelmetBootsRenderType);

//0110 - 6
mergeFunctions("addIronBodyLeggingsRenderType", addIronBodyRenderType, addIronLeggingsRenderType, ["renderer"]);
var IronBodyLeggingsRenderType = new Render(63);
addIronBodyLeggingsRenderType(IronBodyLeggingsRenderType);

//0111 - 7
mergeFunctions("addIronBodyLeggingsBootsRenderType", addIronBodyLeggingsRenderType, addIronBootsRenderType, ["renderer"]);
var IronBodyLeggingsBootsRenderType = new Render(63);
addIronBodyLeggingsBootsRenderType(IronBodyLeggingsBootsRenderType);

//1110 - 14
mergeFunctions("addIronHelmetBodyLeggingsRenderType", addIronHelmetBodyRenderType, addIronLeggingsRenderType, ["renderer"]);
var IronHelmetBodyLeggingsRenderType = new Render(63);
addIronHelmetBodyLeggingsRenderType(IronHelmetBodyLeggingsRenderType);

//1011 - 11
mergeFunctions("addIronHelmetLeggingsBootsRenderType", addIronHelmetLeggingsRenderType, addIronBootsRenderType, ["renderer"]);
var IronHelmetLeggingsBootsRenderType = new Render(63);
addIronHelmetLeggingsBootsRenderType(IronHelmetLeggingsBootsRenderType);

//1101 - 13
mergeFunctions("addIronHelmetBodyBootsRenderType", addIronHelmetBodyRenderType, addIronBootsRenderType, ["renderer"]);
var IronHelmetBodyBootsRenderType = new Render(63);
addIronHelmetBodyBootsRenderType(IronHelmetBodyBootsRenderType);

//1111 - 15
mergeFunctions("addIronHelmetBodyLeggingsBootsRenderType", addIronHelmetBodyLeggingsRenderType, addIronBootsRenderType, ["renderer"]);
var IronHelmetBodyLeggingsBootsRenderType = new Render(63);
addIronHelmetBodyLeggingsBootsRenderType(IronHelmetBodyLeggingsBootsRenderType);

function makeCustomArmorRenderType() {
	var playerIron = [ Player.getArmorSlot(0) == 306, Player.getArmorSlot(1) == 307, Player.getArmorSlot(2) == 308, Player.getArmorSlot(3) == 309 ];
	if(playerIron[0] && !playerIron[1] && !playerIron[2] && !playerIron[3]) Entity.setRender(Player.get(), IronHelmetRenderType.renderType);
	else if(!playerIron[0] && playerIron[1] && !playerIron[2] && !playerIron[3]) Entity.setRender(Player.get(), IronBodyRenderType.renderType);
	else if(!playerIron[0] && !playerIron[1] && playerIron[2] && !playerIron[3]) Entity.setRender(Player.get(), IronLeggingsRenderType.renderType);
	else if(!playerIron[0] && !playerIron[1] && !playerIron[2] && playerIron[3]) Entity.setRender(Player.get(), IronBootsRenderType.renderType);
	else if(playerIron[0] && playerIron[1] && !playerIron[2] && !playerIron[3]) Entity.setRender(Player.get(), IronHelmetBodyRenderType.renderType);
	else if(playerIron[0] && !playerIron[1] && playerIron[2] && !playerIron[3]) Entity.setRender(Player.get(), IronHelmetLeggingsRenderType.renderType);
	else if(playerIron[0] && !playerIron[1] && !playerIron[2] && playerIron[3]) Entity.setRender(Player.get(), IronHelmetBootsRenderType.renderType);
	else if(!playerIron[0] && playerIron[1] && playerIron[2] && !playerIron[3]) Entity.setRender(Player.get(), IronBodyLeggingsRenderType.renderType);
	else if(!playerIron[0] && playerIron[1] && !playerIron[2] && playerIron[3]) Entity.setRender(Player.get(), IronBodyBootsRenderType.renderType);
	else if(!playerIron[0] && !playerIron[1] && playerIron[2] && playerIron[3]) Entity.setRender(Player.get(), IronLeggingsBootsRenderType.renderType);
	
	else if(playerIron[0] && playerIron[1] && playerIron[2] && !playerIron[3]) Entity.setRender(Player.get(), IronHelmetBodyLeggingsRenderType.renderType);
	else if(playerIron[0] && playerIron[1] && !playerIron[2] && playerIron[3]) Entity.setRender(Player.get(), IronHelmetBodyBootsRenderType.renderType);
	else if(playerIron[0] && !playerIron[1] && playerIron[2] && playerIron[3]) Entity.setRender(Player.get(), IronHelmetLeggingsBootsRenderType.renderType);
	else if(!playerIron[0] && playerIron[1] && playerIron[2] && playerIron[3]) Entity.setRender(Player.get(), IronBodyLeggingsBootsRenderType.renderType);
	
	else if(playerIron[0] && playerIron[1] && playerIron[2] && playerIron[3]) Entity.setRender(Player.get(), IronHelmetBodyLeggingsBootsRenderType.renderType);
	else Entity.setRender(Player.get(), EntityRenderType.PLAYER);
}