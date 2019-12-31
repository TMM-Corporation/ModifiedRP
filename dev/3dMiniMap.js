// var context = UI.getContext();
// var Renderer = android.opengl.GLSurfaceView.Renderer;
// var GL11 = javax.microedition.khronos.opengles.GL11;
// var GLU = android.opengl.GLU;
// var GLSurfaceView = android.opengl.GLSurfaceView;
// var Context = android.content.Context;
(function(){
	alert("Starting 3D MiniMap MOD, may lags")
})
// function getFloatBuffer(array) {
// 	try {
// 		var tmp = new java.nio.ByteBuffer.allocateDirect(array.length * 4);
// 		tmp.order(java.nio.ByteOrder.nativeOrder());
// 		var buffer = tmp.asFloatBuffer();
// 		buffer.put(array);
// 		buffer.position(0);
// 		return buffer;
// 	} catch (e) {
// 		// alert(e + "\n" + e.lineNumber);
// 		alert(0)
// 	}
// }
// function getByteBuffer(array) {
// 	try {
// 		var buffer = new java.nio.ByteBuffer.allocateDirect(array.length);
// 		buffer.put(array);
// 		buffer.position(0);
// 		return buffer;
// 	} catch (e) {
// 		// alert(e + "\n" + e.lineNumber);
// 		alert(1)
// 	}
// }

// context.runOnUiThread(new java.lang.Runnable({
// 	run: function () {
// 		try {
// 			var layout = new android.widget.LinearLayout(context);
// 			layout.setOrientation(1);
// 			layout.setLayoutParams(new android.view.ViewGroup.LayoutParams(-1, -1));
// 			layout.setGravity(android.view.Gravity.LEFT);

// 			var xRot = 45;
// 			var yRot = 45;
// 			var block = {
// 				draw: function (gl, x, y, z) {
// 					try {
// 						var vertices = [
// 							x - 0.5, y + 0.5, z + 0.5,
// 							x + 0.5, y + 0.5, z + 0.5,
// 							x + 0.5, y - 0.5, z + 0.5,
// 							x - 0.5, y - 0.5, z + 0.5,

// 							x - 0.5, y + 0.5, z - 0.5,
// 							x + 0.5, y + 0.5, z - 0.5,
// 							x + 0.5, y - 0.5, z - 0.5,
// 							x - 0.5, y - 0.5, z - 0.5];
// 						var indices = [
// 							0, 3, 2,
// 							0, 1, 2,
// 							0, 4, 7,
// 							0, 3, 7,
// 							4, 7, 6,
// 							4, 5, 6,
// 							5, 1, 2,
// 							5, 6, 2,
// 							0, 4, 5,
// 							0, 1, 5,
// 							3, 7, 6,
// 							3, 2, 6];
// 						var colors = [
// 							1.0, 1.0, 1.0, 1.0,
// 							1.0, 1.0, 1.0, 1.0,
// 							0.5, 0.5, 0.5, 1.0,
// 							0.5, 0.5, 0.5, 1.0,
// 							1.0, 1.0, 1.0, 1.0,
// 							1.0, 1.0, 1.0, 1.0,
// 							0.5, 0.5, 0.5, 1.0,
// 							0.5, 0.5, 0.5, 1.0];
// 						var mVertexBuffer = getFloatBuffer(vertices);
// 						var mIndexBuffer = getByteBuffer(indices);
// 						var mColorBuffer = getFloatBuffer(colors);

// 						gl.glLoadIdentity();
// 						gl.glTranslatef(0, 0, -15);
// 						gl.glFrontFace(GL11.GL_CW);
// 						gl.glColor4f(1.0, 1.0, 1.0, 1.0);
// 						gl.glEnableClientState(GL11.GL_VERTEX_ARRAY);
// 						gl.glVertexPointer(3, GL11.GL_FLOAT, 0, mVertexBuffer);
// 						gl.glEnableClientState(GL11.GL_COLOR_ARRAY);
// 						gl.glColorPointer(4, GL11.GL_FLOAT, 0, mColorBuffer);
// 						gl.glRotatef(xRot, 1, 0, 0);
// 						gl.glRotatef(yRot, 0, 1, 0);
// 						gl.glDrawElements(GL11.GL_TRIANGLES, indices.length, GL11.GL_UNSIGNED_BYTE, mIndexBuffer);
// 						gl.glDisableClientState(GL11.GL_VERTEX_ARRAY);
// 						gl.glDisableClientState(GL11.GL_COLOR_ARRAY);
// 					} catch (e) {
// 						// alert(e + "\n" + e.lineNumber);
// 						alert(2)
// 					}
// 				}
// 			};
// 			var player = {
// 				draw: function (gl) {
// 					try {
// 						var vertices = [
// 							-0.5, -0.5, 0.5,
// 							0.5, -0.5, 0.5,
// 							0.5, -1.5, 0.5,
// 							-0.5, -1.5, 0.5,

// 							-0.5, -0.5, -0.5,
// 							0.5, -0.5, -0.5,
// 							0.5, -1.5, -0.5,
// 							-0.5, -1.5, -0.5];
// 						var indices = [
// 							0, 3, 2,
// 							0, 1, 2,
// 							0, 4, 7,
// 							0, 3, 7,
// 							4, 7, 6,
// 							4, 5, 6,
// 							5, 1, 2,
// 							5, 6, 2,
// 							0, 4, 5,
// 							0, 1, 5,
// 							3, 7, 6,
// 							3, 2, 6];
// 						var colors = [
// 							0.8, 0.8, 0.4, 1.0,
// 							0.8, 0.8, 0.4, 1.0,
// 							0.3, 0.3, 0.0, 1.0,
// 							0.3, 0.3, 0.0, 1.0,
// 							0.8, 0.8, 0.4, 1.0,
// 							0.8, 0.8, 0.4, 1.0,
// 							0.3, 0.3, 0.0, 1.0,
// 							0.3, 0.3, 0.0, 1.0];
// 						var mVertexBuffer = getFloatBuffer(vertices);
// 						var mIndexBuffer = getByteBuffer(indices);
// 						var mColorBuffer = getFloatBuffer(colors);

// 						gl.glLoadIdentity();
// 						gl.glTranslatef(0, 0, -15);
// 						gl.glFrontFace(GL11.GL_CW);
// 						gl.glColor4f(0.8, 0.8, 0.4, 1.0);
// 						gl.glEnableClientState(GL11.GL_VERTEX_ARRAY);
// 						gl.glVertexPointer(3, GL11.GL_FLOAT, 0, mVertexBuffer);
// 						gl.glEnableClientState(GL11.GL_COLOR_ARRAY);
// 						gl.glColorPointer(4, GL11.GL_FLOAT, 0, mColorBuffer);
// 						gl.glRotatef(xRot, 1, 0, 0);
// 						gl.glRotatef(yRot, 0, 1, 0);
// 						gl.glDrawElements(GL11.GL_TRIANGLES, indices.length, GL11.GL_UNSIGNED_BYTE, mIndexBuffer);
// 						gl.glDisableClientState(GL11.GL_VERTEX_ARRAY);
// 					} catch (e) {
// 						// alert(e + "\n" + e.lineNumber);
// 						alert(3)
// 					}
// 				}
// 			};

// 			var surfaceView = GLSurfaceView(context);
// 			surfaceView.setRenderer(new Renderer(
// 				{
// 					onSurfaceCreated: function (gl, config) {
// 						try {
// 							gl.glShadeModel(GL11.GL_SMOOTH);
// 							gl.glClearColor(0.1, 0.1, 0.1, 1.0);
// 							gl.glClearDepthf(1.0);
// 							gl.glEnable(GL11.GL_DEPTH_TEST);
// 							gl.glDepthFunc(GL11.GL_LEQUAL);
// 							gl.glHint(GL11.GL_PERSPECTIVE_CORRECTION_HINT, GL11.GL_NICEST);
// 						} catch (error) {
// 							alert(5.2)
// 						}
// 					},
// 					onSurfaceChanged: function (gl, width, height) {
// 						try {
// 							gl.glViewport(0, 0, width, height);
// 							gl.glMatrixMode(GL11.GL_PROJECTION);
// 							gl.glLoadIdentity();
// 							GLU.gluPerspective(gl, 45.0, width / height, 1.0, 50.0);
// 							gl.glMatrixMode(GL11.GL_MODELVIEW);
// 							gl.glLoadIdentity();
// 						} catch (error) {
// 							alert(5.1)
// 						}
// 					},
// 					onDrawFrame: function (gl) {
// 						try {
// 							gl.glClear(GL11.GL_COLOR_BUFFER_BIT | GL11.GL_DEPTH_BUFFER_BIT);
// 							gl.glLoadIdentity();
// 							gl.glTranslatef(0, 0, -15);
// 							// Callback.addCallback("LevelLoaded", function () {
// 								if(Player.get())
// 								try{
// 									try{player.draw(gl);}catch(e){alert(4.3)}
// 									try{
// 										var pos = Player.getPosition(),
// 										lookAngle = Entity.getLookAngle(Player.get());
// 										yRot = Math.floor(lookAngle.pitch * (180 / Math.PI));
// 										playerX = Math.floor(pos.x);
// 										playerY = Math.floor(pos.y);
// 										playerZ = Math.floor(pos.z);
// 									}catch(e){alert(4.4)}
// 									try{
// 										for (var x = playerX - 2; x <= playerX + 2; x++) {
// 											for (var y = playerY - 3; y <= playerY + 2; y++) {
// 												for (var z = playerZ - 2; z <= playerZ + 2; z++) {
// 													if (World.getBlock(x, y, z)) {
// 														block.draw(gl, x - playerX, y - playerY, z - playerZ);
// 													}
// 												}
// 											}
// 										}
// 									}catch(e){alert(4.2)}
// 								}catch(e){
// 									alert(4.1)
// 								}
// 							// });
// 						} catch (e) {
// 							// alert(e)
// 							alert(4)
// 						}
// 					}
// 				}));
// 			surfaceView.setLayoutParams(new android.view.ViewGroup.LayoutParams(120 * Math.ceil(context.getResources().getDisplayMetrics().density), 120 * Math.ceil(context.getResources().getDisplayMetrics().density)));
// 			layout.addView(surfaceView);
// 			context.addContentView(layout, new android.view.ViewGroup.LayoutParams(-1, -1));
// 		} catch (e) {
// 			// alert(e + "\n" + e.lineNumber);
// 			alert(5)
// 		}
// 	}
// }));
// alert("3dMiniMapLoaded")
var ctx = UI.getContext();
var Renderer = android.opengl.GLSurfaceView.Renderer;
var GL10 = javax.microedition.khronos.opengles.GL10;
var GL20 = android.opengl.GLES20;
var GLU = android.opengl.GLU;
var GLSurfaceView = android.opengl.GLSurfaceView;
var Context = android.content.Context;
var GLUtils = android.opengl.GLUtils;
var ambientLight = [0.5, 0.5, 0.5, 1];
var diffuseLight = [0.5, 0.5, 0.5, 1];
var lightPosition = [128, 500, 128, 0];
var lightDirection = [0, -1, 0];
var GONE = android.view.View.GONE;
var VISIBLE = android.view.View.VISIBLE;
var surfaceView = null;

function getFloatBuffer(array) {
    try {
        var tmp = new java.nio.ByteBuffer.allocateDirect(array.length * 4);
        tmp.order(java.nio.ByteOrder.nativeOrder());
        var buffer = tmp.asFloatBuffer();
        buffer.put(array);
        buffer.position(0);
        return buffer;
    } catch (e) {
        alert(e + "\n" + e.lineNumber);
    }
}

function getByteBuffer(array) {
    try {
        var buffer = new java.nio.ByteBuffer.allocateDirect(array.length);
        buffer.put(array);
        buffer.position(0);
        return buffer;
    } catch (e) {
        alert(e + "\n" + e.lineNumber);
    }
}

function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density)
}
Callback.addCallback("LevelLoaded", function () {
    alert("You installed Super/Pro VERSION of 3D  Mini-Map ");

    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {

                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);
                layout.setLayoutParams(new android.view.ViewGroup.LayoutParams(-1, -1));
                layout.setGravity(android.view.Gravity.LEFT);

                var xRot = 45;
                var yRot = 0;

                var lava = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];

                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var lava = BlockImageLoader.create(["still_lava", 0], ["still_lava", 0], ["still_lava", 0], 0, true);

                            var bitmap = android.graphics.Bitmap.createScaledBitmap(lava, 200, 200, false);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var leave = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];

                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);
                            var lava = BlockImageLoader.create(["leaves", 4], ["leaves", 4], ["leaves", 4], 0, true);

                            var bitmap = android.graphics.Bitmap.createScaledBitmap(lava, 200, 200, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var water = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];

                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);
                            var water_image = BlockImageLoader.create(["still_water", 0], ["still_water", 0], ["still_water", 0], 0, true);

                            var bitmap = android.graphics.Bitmap.createScaledBitmap(water_image, 200, 200, false);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var grass = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["stone", 0], ["grass_side", 0], ["grass_carried", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var granite = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["stone", 2], ["stone", 2], ["stone", 2], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var sand = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var sand_image = BlockImageLoader.create(["sand", 0], ["sand", 0], ["sand", 0], 0, true);

                            var bitmap = android.graphics.Bitmap.createScaledBitmap(sand_image, 200, 200, false);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var stone = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var stone_image = BlockImageLoader.create(["stone", 0], ["stone", 0], ["stone", 0], 0, true);

                            var bitmap = android.graphics.Bitmap.createScaledBitmap(stone_image, 200, 200, false);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var player = {
                    draw: function(gl) {
                        try {
                            var vertices = [
                                -0.5, -0.5, 0.5,
                                0.5, -0.5, 0.5,
                                0.5, -1.5, 0.5,
                                -0.5, -1.5, 0.5,

                                -0.5, -0.5, -0.5,
                                0.5, -0.5, -0.5,
                                0.5, -1.5, -0.5,
                                -0.5, -1.5, -0.5
                            ];
                            var a = 0.0;
                            var b = 1.0;
                            var x = 0;
                            var y = 0;
                            var z = 0;

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];
                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var bitmap = android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(stv, 0), 0, android.util.Base64.decode(stv, 0).length)

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);
                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);
                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var diorite = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["stone", 4], ["stone", 4], ["stone", 4], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var dirt = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["dirt", 0], ["dirt", 0], ["dirt", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var andesite = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["stone", 6], ["stone", 6], ["stone", 6], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var podzol = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["dirt", 2], ["dirt", 2], ["dirt", 2], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var mycelium = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["mycelium", 0], ["mycelium", 0], ["mycelium", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var log = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["log", 0], ["log", 0], ["log", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var redlog = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["log", 2], ["log", 2], ["log", 2], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var birchlog = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["log", 4], ["log", 4], ["log", 4], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var quartz = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["quartz_ore", 0], ["quartz_ore", 0], ["quartz_ore", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var netherrack = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["netherrack", 0], ["netherrack", 0], ["netherrack", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var netherbrick = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["nether_brick", 0], ["nether_brick", 0], ["nether_brick", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var soulsand = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["soul_sand", 0], ["soul_sand", 0], ["soul_sand", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var quartz = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["quartz_ore", 0], ["quartz_ore", 0], ["quartz_ore", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var oplank = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["planks", 0], ["planks", 0], ["planks", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var splank = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["planks", 1], ["planks", 1], ["planks", 1], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var bplank = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["planks", 2], ["planks", 2], ["planks", 2], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var jplank = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["planks", 3], ["planks", 3], ["planks", 3], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var aplank = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["planks", 4], ["planks", 4], ["planks", 4], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var dplank = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["planks", 5], ["planks", 5], ["planks", 5], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var glowstone = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["glowstone", 0], ["glowstone", 0], ["glowstone", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var obsidian = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["enchanting_table_bottom", 0], ["enchanting_table_bottom", 0], ["enchanting_table_bottom", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var portal = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["portal", 0], ["portal", 0], ["portal", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var ice = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["ice", 0], ["ice", 0], ["ice", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var snow = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["snow", 0], ["snow", 0], ["snow", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var redsand = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["sand", 1], ["sand", 1], ["sand", 1], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var bedrock = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["bedrock", 0], ["bedrock", 0], ["bedrock", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var glass = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["glass", 0], ["glass", 0], ["glass", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var endstone = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["end_stone", 0], ["end_stone", 0], ["end_stone", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var slimeblock = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["slime_block", 0], ["slime_block", 0], ["slime_block", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var musha = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["mushroom_block", 0], ["mushroom_block", 0], ["mushroom_block", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var mushb = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["mushroom_block", 1], ["mushroom_block", 1], ["mushroom_block", 1], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var mushc = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["mushroom_block", 2], ["mushroom_block", 2], ["mushroom_block", 2], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var mushd = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["mushroom_block", 3], ["mushroom_block", 3], ["mushroom_block", 3], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var gravel = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["gravel", 0], ["gravel", 0], ["gravel", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var sponge = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["sponge", 0], ["sponge", 0], ["sponge", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var brick = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["brick", 0], ["brick", 0], ["brick", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var mossystone = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["cobblestone_mossy", 0], ["cobblestone_mossy", 0], ["cobblestone_mossy", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var stonebrick = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["stonebrick", 0], ["stonebrick", 0], ["stonebrick", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };

                var clay = {
                    draw: function(gl, x, y, z) {
                        try {
                            var vertices = [
                                x - 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y + 0.5, z + 0.5,
                                x + 0.5, y - 0.5, z + 0.5,
                                x - 0.5, y - 0.5, z + 0.5,

                                x - 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y + 0.5, z - 0.5,
                                x + 0.5, y - 0.5, z - 0.5,
                                x - 0.5, y - 0.5, z - 0.5
                            ];
                            var indices = [
                                0, 3, 2,
                                0, 1, 2,
                                0, 4, 7,
                                0, 3, 7,
                                4, 7, 6,
                                4, 5, 6,
                                5, 1, 2,
                                5, 6, 2,
                                0, 4, 5,
                                0, 1, 5,
                                3, 7, 6,
                                3, 2, 6
                            ];

                            var data_tvertices = [
                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00,

                                0.00, 0.00,
                                0.00, 1.00,
                                1.00, 0.00,
                                1.00, 1.00
                            ];

                            var mVertexBuffer = getFloatBuffer(vertices);
                            var mIndexBuffer = getByteBuffer(indices);

                            var grass_image = BlockImageLoader.create(["clay", 0], ["clay", 0], ["clay", 0], 0, true);

                            var scaledBitmap = android.graphics.Bitmap.createScaledBitmap(grass_image, 200, 200, true);

                            var matrix = new android.graphics.Matrix;
                            matrix.postRotate(-90)

                            var bitmap = android.graphics.Bitmap.createBitmap(scaledBitmap, 0, 0, scaledBitmap.getWidth(), scaledBitmap.getHeight(), matrix, true);

                            var ByteBuffer = java.nio.ByteBuffer;
                            var ByteOrder = java.nio.ByteOrder;
                            var FloatBuffer = java.nio.FloatBuffer;

                            var textures = [1];
                            gl.glEnable(GL10.GL_TEXTURE_2D);
                            gl.glGenTextures(1, textures, 0);
                            texture = textures[0];
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_REPEAT);

                            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_REPEAT);

                            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);

                            tvertices = ByteBuffer.allocateDirect(data_tvertices.length * 4);
                            tvertices.order(ByteOrder.nativeOrder());
                            tvertices.asFloatBuffer().put(data_tvertices);
                            tvertices.position(0);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            gl.glFrontFace(GL10.GL_CW);
                            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, mVertexBuffer);
                            gl.glTexCoordPointer(2, GL10.GL_FLOAT, 0, tvertices);
                            gl.glBindTexture(GL10.GL_TEXTURE_2D, texture);
                            gl.glRotatef(xRot, 1, 0, 0);
                            gl.glRotatef(yRot, 0, 1, 0);
                            gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
                            gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
                            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
                        } catch (e) {
                            alert(e + "\n" + e.lineNumber);
                        }
                    }
                };
                var PixelFormat = android.graphics.PixelFormat;

                surfaceView = GLSurfaceView(ctx);
                surfaceView.setZOrderOnTop(true);

                surfaceView.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
                surfaceView.getHolder().setFormat(PixelFormat.RGBA_8888);
                surfaceView.setRenderer(new Renderer({
                    onSurfaceCreated: function(gl, config) {
                        gl.glShadeModel(GL10.GL_SMOOTH);
                        gl.glClearColor(0.0, 0.0, 0.0, 0.0);
                        gl.glClearDepthf(1.0);
                        gl.glEnable(GL10.GL_DEPTH_TEST);
                        gl.glDepthFunc(GL10.GL_LEQUAL);
                        gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);

                    },
                    onSurfaceChanged: function(gl, width, height) {
                        gl.glViewport(0, 0, width, height);
                        gl.glMatrixMode(GL10.GL_PROJECTION);
                        gl.glLoadIdentity();
                        GLU.gluPerspective(gl, 45.0, width / height, 1.0, 200.0);
                        gl.glMatrixMode(GL10.GL_MODELVIEW);
                        gl.glLoadIdentity();
                    },
                    onDrawFrame: function(gl) {
                        try {
                            gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
                            gl.glLoadIdentity();
                            gl.glTranslatef(0, 0, -15);
                            if (Player.get()) {
                                var pos = Player.getPosition(),
                                lookAngle = Entity.getLookAngle(Player.get());
                                yRot = getYaw(lookAngle) - 180;
                                player.draw(gl);
                                // xRot = rtd(lookAngle.pitch, 180)+90;
                                playerX = Math.floor(pos.x);
                                playerY = Math.floor(pos.y);
                                playerZ = Math.floor(pos.z);
                                for (var x = playerX - 2; x <= playerX + 2; x++) {
                                    for (var y = playerY - 3; y <= playerY + 2; y++) {
                                        for (var z = playerZ - 2; z <= playerZ + 3; z++) {
                                            var bid = World.getBlock(x, y, z).id;
                                            var bids = World.getBlock(x, y, z).data;
                                            // var bids = Level.getData(x, y, z);
                                            //clay
                                            if (bid == 82) {

                                                clay.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            }

                                            if (bid == 98) {
                                                stonebrick.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            }

                                            if (bid == 48) {
                                                mossystone.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            }
                                            if (bid == 45) {
                                                brick.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            }
                                            if (bid == 19) {
                                                sponge.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            }
                                            if (bid == 165) {
                                                slimeblock.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 13) {
                                                gravel.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 5 && bids == 3) {
                                                jplank.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 99 && bids == 1) {
                                                musha.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 2) {
                                                musha.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 3) {
                                                musha.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 4) {
                                                musha.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 5) {
                                                musha.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 6) {
                                                musha.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 7) {
                                                musha.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 8) {
                                                musha.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 9) {
                                                musha.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 14) {
                                                musha.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 14) {
                                                mushb.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 1) {
                                                mushb.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 2) {
                                                mushb.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 3) {
                                                mushb.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 4) {
                                                mushb.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 5) {
                                                mushb.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 6) {
                                                mushb.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 9) {
                                                mushb.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 8) {
                                                mushb.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 7) {
                                                mushb.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 0) {
                                                mushc.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 15) {
                                                mushd.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 100 && bids == 10) {
                                                mushd.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 99 && bids == 10) {
                                                mushd.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 121) {
                                                endstone.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 2) {
                                                grass.draw(gl, x - playerX, y - playerY, z - playerZ);

                                            } else if (bid == 7) {
                                                bedrock.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 20) {
                                                glass.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 102) {
                                                glass.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 80) {
                                                snow.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 79) {
                                                ice.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 174) {
                                                ice.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 90) {
                                                portal.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 49) {
                                                obsidian.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 89) {
                                                glowstone.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 1 && bids == 3) {
                                                diorite.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 17) {
                                                log.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 162) {
                                                log.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            }

                                            //jplank
                                            else if (bid == 5 && bids == 5) {
                                                dplank.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 5 && bids == 4) {
                                                aplank.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 5 && bids == 3) {
                                                jplank.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 5 && bids == 2) {
                                                bplank.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 5 && bids == 0) {
                                                oplank.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 5 && bids == 1) {
                                                splank.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 88) {
                                                soulsand.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 112 && bids == 0) {
                                                netherbrick.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 87 && bids == 0) {
                                                netherrack.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            }
                                            //ore
                                            else if (bid == 153 && bids == 0) {
                                                quartz.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 110 && bids == 0) {
                                                mycelium.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 243 && bids == 0) {
                                                podzol.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 3 && bids == 0) {
                                                dirt.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 1 && bids == 4) {
                                                diorite.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 1 && bids == 5) {
                                                andesite.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 1 && bids == 6) {
                                                andesite.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 1 && bids == 1) {
                                                granite.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 1 && bids == 2) {
                                                granite.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 1 && bids == 0) {
                                                stone.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 4 && bids == 0) {
                                                stone.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 12 && bids == 0) {
                                                sand.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 12 && bids == 1) {
                                                redsand.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 8 || bid == 9) {
                                                water.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 10 || bid == 11) {
                                                lava.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            } else if (bid == 18 || bid == 161) {
                                                leave.draw(gl, x - playerX, y - playerY, z - playerZ);
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            alert(e);
                        }
                    }
                }));

                surfaceView.setLayoutParams(new android.view.ViewGroup.LayoutParams(200 * Math.ceil(ctx.getResources().getDisplayMetrics().density), 200 * Math.ceil(ctx.getResources().getDisplayMetrics().density)));
                layout.addView(surfaceView);

                ctx.addContentView(layout, new android.view.ViewGroup.LayoutParams(-1, -1));
            } catch (e) {
                alert(e + "\n" + e.lineNumber);
            }
        }
    }));
});
Callback.addCallback("LevelLeft", function () {
	ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
					ctx.getWindow().getDecorView().removeView(surfaceView)
					//surfaceView.setVisibility(8);
			}
	}));
});

BlockTypes = {
    NONE: 0,
    CUBE: 1,
    STAIR: 2,
    SLAB: 3,
    SNOW: 4,
    PLATE: 5,
    CARPET: 5,
    TRAPDOOR: 6,
    FENCE: 7,
    PATHGRASS: 8,
    STONEWALL: 9,
    ENDPORTAL: 10,
    ENCHANTTABLE: 11,
    DAYLIGHTSENSOR: 12,
    BUTTON: 13,
    FENCEGATE: 14
};

/**
 * @namespace
 */
var BlockImageLoader = {
    TGA: null,
    META: null,
    META_MAPPED: null,
    MTRX: null,
    CANVAS: null
}

/**
 * @param {Bitmap} tga
 */
BlockImageLoader.init = function(tga) {
    if (BlockImageLoader.META == null)
        // BlockImageLoader.META = JSON.parse(new java.lang.String(ModPE.getBytesFromTexturePack("images/terrain.meta")) + '');
        BlockImageLoader.META = FileTools.ReadJSON("/sdacrd/games/com.mojang/resource_packs/vanilla/textures/terrain_texture.json");

    if (BlockImageLoader.META_MAPPED == null)
        BlockImageLoader.META_MAPPED = BlockImageLoader.META.texture_data;

    if (BlockImageLoader.TGA == null)
        // BlockImageLoader.TGA = net.zhuoweizhang.mcpelauncher.texture.tga.TGALoader.load(ModPE.openInputStreamFromTexturePack("images/terrain-atlas.tga"), false);
        // BlockImageLoader.TGA = bmpImg(new java.lang.String(FileTools.ReadText("/sdacrd/games/com.mojang/resource_packs/vanilla/textures/terrain_texture.json")) + '')
        BlockImageLoader.TGA = android.graphics.BitmapFactory.decodeFile("/sdacrd/games/com.mojang/resource_packs/innercore-resources/textures/entity/camera_tripod.png");

    if (BlockImageLoader.MTRX == null)
        BlockImageLoader.MTRX = new android.graphics.Matrix();

    if (BlockImageLoader.CANVAS == null)
        BlockImageLoader.CANVAS = new android.graphics.Canvas();
};

/**
 * @param {String} name
 * @param {Number} data
 * @returns {Bitmap}
 */
BlockImageLoader.getBlockBitmap = function(name, data) {
    // if (BlockImageLoader.META_MAPPED.indexOf(name) < 0)
    var path;
    if(data == 0)path = "/sdcard/games/com.mojang/resource_packs/vanilla/textures/blocks/"+name+".png";
    else path = "/sdcard/games/com.mojang/resource_packs/vanilla/textures/blocks/"+name+"_"+data+".png";
    // return android.graphics.Bitmap.createBitmap(android.graphics.BitmapFactory.decodeFile(path), 0, 0, 16, 16)
    // var uvs = BlockImageLoader.META[BlockImageLoader.META_MAPPED.indexOf(name)];
    // var x = uvs[0];
    // var y = uvs[1];
    // var width = uvs[2] - x;
    // var height = uvs[3] - y;
    // alert(name +": NAME")
    var options = new android.graphics.BitmapFactory.Options();
    options.inPreferredConfig = android.graphics.Bitmap.Config.ARGB_8888;
    var photoBitmap = android.graphics.BitmapFactory.decodeFile(path, options);
    if(photoBitmap == null) return android.graphics.Bitmap.createBitmap(1, 1, android.graphics.Bitmap.Config.RGB_565);
    else return photoBitmap;
    // return android.graphics.Bitmap.createScaledBitmap(android.graphics.Bitmap.createBitmap(android.graphics.BitmapFactory.decodeFile(path), 0, 0, 16, 16), 32, 32, false);
    // return android.graphics.Bitmap.createScaledBitmap(android.graphics.Bitmap.createBitmap(BlockImageLoader.TGA, x, y, width, height), 32, 32, false);
};

/**
 * Make cube-shaped image with three images
 * 
 * @param {Array} left
 * @param {Array} right
 * @param {Array} top
 * @param {Number} renderType
 * @param {Boolean} hasNoShadow
 * @returns {Bitmap}
 */
// var water_image = BlockImageLoader.create(["still_water", 0], ["still_water", 0], ["still_water", 0], 0, true);
BlockImageLoader.create = function(left, right, top, renderType, hasNoShadow) {
    // if (BlockImageLoader.TGA == null || BlockImageLoader.META == null)
    //     throw new Error("BlockImageLoader hasn't been initialized");

    if (!Array.isArray(left) || !Array.isArray(right) || !Array.isArray(top))
        throw new Error("Illegal argument type");

    var temp = android.graphics.Bitmap.createBitmap(51, 57, android.graphics.Bitmap.Config.ARGB_8888);
    left = BlockImageLoader.getBlockBitmap(left[0], left[1]);
    right = BlockImageLoader.getBlockBitmap(right[0], right[1]);
    top = BlockImageLoader.getBlockBitmap(top[0], top[1]);

    switch (renderType) {
        case BlockTypes.CUBE:
            temp = BlockImageLoader.createCube(left, right, top, temp, hasNoShadow, 32);
            break;

        case BlockTypes.STAIR:
            temp = BlockImageLoader.createStair(left, right, top, temp, hasNoShadow);
            break;

        case BlockTypes.SLAB:
            temp = BlockImageLoader.createCube(left, right, top, temp, hasNoShadow, 16);
            break;

        case BlockTypes.SNOW:
            temp = BlockImageLoader.createCube(left, right, top, temp, hasNoShadow, 4);
            break;

        case BlockTypes.CARPET:
            temp = BlockImageLoader.createCube(left, right, top, temp, hasNoShadow, 2);
            break;

        case BlockTypes.TRAPDOOR:
            temp = BlockImageLoader.createCube(left, right, top, temp, hasNoShadow, 6);
            break;

        case BlockTypes.FENCE:
            temp = BlockImageLoader.createFence(left, right, top, temp, hasNoShadow);
            break;

        case BlockTypes.PATHGRASS:
            temp = BlockImageLoader.createCube(left, right, top, temp, hasNoShadow, 30);
            break;

        case BlockTypes.STONEWALL:
            temp = BlockImageLoader.createWall(left, right, top, temp, hasNoShadow);
            break;

        case BlockTypes.ENDPORTAL:
            temp = BlockImageLoader.createCube(left, right, top, temp, hasNoShadow, 26);
            break;

        case BlockTypes.ENCHANTTABLE:
            temp = BlockImageLoader.createCube(left, right, top, temp, hasNoShadow, 24);
            break;

        case BlockTypes.DAYLIGHTSENSOR:
            temp = BlockImageLoader.createCube(left, right, top, temp, hasNoShadow, 12);
            break;

        case BlockTypes.BUTTON:
            temp = BlockImageLoader.createButton(left, right, top, temp, hasNoShadow);
            break;

        case BlockTypes.FENCEGATE:
            temp = BlockImageLoader.createFenceGate(left, right, top, temp, hasNoShadow);
            break;

        case BlockTypes.NONE:
            temp = BlockImageLoader.createCube(left, right, top, temp, hasNoShadow, 16);
            break;
        default:
            temp = android.graphics.Bitmap.createScaledBitmap(left, 16, 16, false);
            break;
    }

    return temp;
};

/**
 * @param {Bitmap} left
 * @param {Bitmap} right
 * @param {Bitmap} top
 * @param {Bitmap} temp
 * @param {Boolean} hasNoShadow
 * @param {Number} height
 * @returns {Bitmap}
 */
BlockImageLoader.createCube = function(left, right, top, temp, hasNoShadow, height) {
    var createCubeLeft = function(src) {
        src = android.graphics.Bitmap.createBitmap(src, 0, 0, 16, 16);
        src = android.graphics.Bitmap.createScaledBitmap(src, 25, height, false);
        var mSrc = [0, 0, 25, 0, 25, height, 0, height];
        var mDst = [0, 0, 25, 12, 25, 12 + height, 0, height];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(mSrc, 0, mDst, 0, 4);
        return android.graphics.Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), BlockImageLoader.MTRX, false);
    };

    var createCubeRight = function(src) {
        src = android.graphics.Bitmap.createBitmap(src, 0, 32 - height, 32, height);
        src = android.graphics.Bitmap.createScaledBitmap(src, 26, height, false);
        var mSrc = [0, 0, 26, 0, 26, height, 0, height];
        var mDst = [0, 12, 26, 0, 26, height, 0, 12 + height]
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(mSrc, 0, mDst, 0, 4);
        return android.graphics.Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), BlockImageLoader.MTRX, false);
    };

    var createCubeTop = function(src) {
        var mSrc = [0, 0, 32, 0, 32, 32, 0, 32];
        var mDst = [0, 13.5, 25, 0, 51, 13.5, 25, 26];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(mSrc, 0, mDst, 0, 4);
        return android.graphics.Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), BlockImageLoader.MTRX, false);
    };

    left = createCubeLeft(left);
    right = createCubeRight(right);
    top = createCubeTop(top);

    BlockImageLoader.CANVAS.setBitmap(temp);
    var p = new android.graphics.Paint();
    if (hasNoShadow != false)
        p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 65, 255 - 65, 255 - 65), android.graphics.PorterDuff.Mode.MULTIPLY));
    BlockImageLoader.CANVAS.drawBitmap(left, 0, temp.getHeight() - left.getHeight(), p);
    BlockImageLoader.CANVAS.drawBitmap(right, 25, temp.getHeight() - right.getHeight(), p);
    BlockImageLoader.CANVAS.drawBitmap(top, 0, 32 - height, null);
    return temp;
};

/**
 * @param {Bitmap} left
 * @param {Bitmap} right
 * @param {Bitmap} top
 * @param {Bitmap} temp
 * @param {Boolean} hasNoShadow
 * @returns {Bitmap}
 */
BlockImageLoader.createStair = function(left, right, top, temp, hasNoShadow) {
    var createLeft = function(left) {
        left = android.graphics.Bitmap.createScaledBitmap(left, 25, 32, false);
        var src = [0, 0, 25, 0, 25, 32, 0, 32];
        var dst = [0, 0, 25, 12, 25, 44, 0, 32];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        return android.graphics.Bitmap.createBitmap(left, 0, 0, left.getWidth(), left.getHeight(), BlockImageLoader.MTRX, false);
    };

    var createRight = function(right) {
        right = android.graphics.Bitmap.createScaledBitmap(right, 26, 32, false);
        var first = android.graphics.Bitmap.createBitmap(right, 0, 0, 26, 16);
        var src = [0, 0, 26, 0, 26, 16, 0, 16];
        var dst = [0, 13, 26, 0, 26, 16, 0, 29];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        first = android.graphics.Bitmap.createBitmap(first, 0, 0, first.getWidth(), first.getHeight(), BlockImageLoader.MTRX, false);

        var second = android.graphics.Bitmap.createBitmap(right, 0, 16, 26, 16);
        second = android.graphics.Bitmap.createBitmap(second, 0, 0, second.getWidth(), second.getHeight(), BlockImageLoader.MTRX, false);

        return [first, second];
    };

    var createTop = function(top) {
        top = android.graphics.Bitmap.createScaledBitmap(top, 32, 32, false);
        var first = android.graphics.Bitmap.createBitmap(top, 0, 0, 32, 16);
        var src = [0, 0, 32, 0, 32, 16, 0, 16];
        var dst = [0, 13.5, 26, 0, 38.25, 6.5, 12.75, 19.5];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        first = android.graphics.Bitmap.createBitmap(first, 0, 0, first.getWidth(), first.getHeight(), BlockImageLoader.MTRX, false);

        var second = android.graphics.Bitmap.createBitmap(top, 0, 16, 32, 16);
        second = android.graphics.Bitmap.createBitmap(second, 0, 0, second.getWidth(), second.getHeight(), BlockImageLoader.MTRX, false);

        return [first, second];
    };

    left = createLeft(left);
    right = createRight(right);
    top = createTop(top);

    BlockImageLoader.CANVAS.setBitmap(temp);
    var p = new android.graphics.Paint();
    if (hasNoShadow != false)
        p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 65, 255 - 65, 255 - 65), android.graphics.PorterDuff.Mode.MULTIPLY));
    BlockImageLoader.CANVAS.drawBitmap(left, 0, temp.getHeight() - left.getHeight(), p);
    if (hasNoShadow != false)
        p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 130, 255 - 130, 255 - 130), android.graphics.PorterDuff.Mode.MULTIPLY));
    BlockImageLoader.CANVAS.drawBitmap(right[0], 13, 6, p);
    BlockImageLoader.CANVAS.drawBitmap(right[1], 25, temp.getHeight() - right[1].getHeight(), p);
    BlockImageLoader.CANVAS.drawBitmap(top[0], 0, 0, null);
    BlockImageLoader.CANVAS.drawBitmap(top[1], 13, 22, null);

    return temp;
};

/**
 * @param {Bitmap} left
 * @param {Bitmap} right
 * @param {Bitmap} top
 * @param {Bitmap} temp
 * @param {Boolean} hasNoShadow
 * @returns {Bitmap}
 */
BlockImageLoader.createFence = function(left, right, top, temp, hasNoShadow) {
    var createVert = function(left, right, top) {
        left = android.graphics.Bitmap.createBitmap(left, 12, 0, 8, 32);
        left = android.graphics.Bitmap.createScaledBitmap(left, 6, 32, false);
        var src = [0, 0, 6, 0, 6, 32, 0, 32];
        var dst = [0, 0, 6, 3, 6, 35, 0, 32];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        left = android.graphics.Bitmap.createBitmap(left, 0, 0, left.getWidth(), left.getHeight(), BlockImageLoader.MTRX, false);

        right = android.graphics.Bitmap.createBitmap(right, 12, 0, 8, 32);
        right = android.graphics.Bitmap.createScaledBitmap(right, 6, 32, false);
        src = [0, 0, 6, 0, 6, 32, 0, 32];
        dst = [0, 3, 6, 0, 6, 32, 0, 35];
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        right = android.graphics.Bitmap.createBitmap(right, 0, 0, right.getWidth(), right.getHeight(), BlockImageLoader.MTRX, false);

        top = android.graphics.Bitmap.createBitmap(top, 12, 12, 8, 8);
        top = android.graphics.Bitmap.createScaledBitmap(top, 6, 6, false);
        src = [0, 0, 6, 0, 6, 6, 0, 5];
        dst = [0, 3, 6.5, 0, 12, 3, 3, 6.5];
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        top = android.graphics.Bitmap.createBitmap(top, 0, 0, top.getWidth(), top.getHeight(), BlockImageLoader.MTRX, false);

        var temp = android.graphics.Bitmap.createBitmap(12, 38, android.graphics.Bitmap.Config.ARGB_8888);
        BlockImageLoader.CANVAS.setBitmap(temp);
        var p = android.graphics.Paint();
        if (hasNoShadow != false)
            p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 65, 255 - 65, 255 - 65), android.graphics.PorterDuff.Mode.MULTIPLY));
        BlockImageLoader.CANVAS.drawBitmap(left, 0, 3, p);
        if (hasNoShadow != false)
            p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 130, 255 - 130, 255 - 130), android.graphics.PorterDuff.Mode.MULTIPLY));
        BlockImageLoader.CANVAS.drawBitmap(right, 6, 3, p);
        BlockImageLoader.CANVAS.drawBitmap(top, 0, 0, null);

        return temp;
    };

    var createHorz = function(left, right, top, type) {
        left = android.graphics.Bitmap.createBitmap(left, 0, 2 + type * 16, 32, 4);
        var src = [0, 0, 32, 0, 32, 4, 0, 4];
        var dst = [0, 0, 32, 16, 32, 20, 0, 4];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        left = android.graphics.Bitmap.createBitmap(left, 0, 0, left.getWidth(), left.getHeight(), BlockImageLoader.MTRX, false);

        right = android.graphics.Bitmap.createBitmap(right, 15, 2 + type * 16, 3, 4);
        src = [0, 0, 3, 0, 3, 4, 0, 4];
        dst = [0, 2, 3, 0, 3, 4, 0, 6];
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        right = android.graphics.Bitmap.createBitmap(right, 0, 0, right.getWidth(), right.getHeight(), BlockImageLoader.MTRX, false);

        top = android.graphics.Bitmap.createBitmap(top, 15, 0, 2, 32);
        top = android.graphics.Bitmap.createScaledBitmap(top, 2, 35, false);
        src = [0, 0, 2, 0, 2, 35, 0, 35];
        dst = [0, 2, 5, 0, 35, 15, 32, 17];
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        top = android.graphics.Bitmap.createBitmap(top, 0, 0, top.getWidth(), top.getHeight(), BlockImageLoader.MTRX, false);

        var temp = android.graphics.Bitmap.createBitmap(35, 22, android.graphics.Bitmap.Config.ARGB_8888);
        BlockImageLoader.CANVAS.setBitmap(temp);
        var p = android.graphics.Paint();
        if (hasNoShadow != false)
            p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 65, 255 - 65, 255 - 65), android.graphics.PorterDuff.Mode.MULTIPLY));
        BlockImageLoader.CANVAS.drawBitmap(left, 0, 2, p);
        if (hasNoShadow != false)
            p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 130, 255 - 130, 255 - 130), android.graphics.PorterDuff.Mode.MULTIPLY));
        BlockImageLoader.CANVAS.drawBitmap(right, 32, 16, p);
        BlockImageLoader.CANVAS.drawBitmap(top, 0, 1, null);

        return temp;
    };

    var vert = createVert(left, right, top);
    var horz1 = createHorz(left, right, top, 0);
    var horz2 = createHorz(left, right, top, 1);

    BlockImageLoader.CANVAS.setBitmap(temp);
    BlockImageLoader.CANVAS.drawBitmap(vert, 10, 5, null);
    BlockImageLoader.CANVAS.drawBitmap(vert, temp.getWidth() - vert.getWidth() - 10, temp.getHeight() - vert.getHeight() - 5, null);
    BlockImageLoader.CANVAS.drawBitmap(horz1, 8, 6, null);
    BlockImageLoader.CANVAS.drawBitmap(horz2, 8, 21, null);

    return temp;
};

/**
 * @param {Bitmap} left
 * @param {Bitmap} right
 * @param {Bitmap} top
 * @param {Bitmap} temp
 * @param {Boolean} hasNoShadow
 * @returns {Bitmap}
 */
BlockImageLoader.createWall = function(left, right, top, temp, hasNoShadow) {
    var createVert = function(left, right, top) {
        left = android.graphics.Bitmap.createBitmap(left, 8, 0, 16, 32);
        left = android.graphics.Bitmap.createScaledBitmap(left, 13, 32, false);
        var src = [0, 0, 13, 0, 13, 32, 0, 32];
        var dst = [0, 0, 13, 6, 13, 38, 0, 32];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        left = android.graphics.Bitmap.createBitmap(left, 0, 0, left.getWidth(), left.getHeight(), BlockImageLoader.MTRX, false);

        right = android.graphics.Bitmap.createScaledBitmap(right, 13, 32, false);
        src = [0, 0, 13, 0, 13, 32, 0, 32];
        dst = [0, 6, 13, 0, 13, 32, 0, 38];
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        right = android.graphics.Bitmap.createBitmap(right, 0, 0, right.getWidth(), right.getHeight(), BlockImageLoader.MTRX, false);

        top = android.graphics.Bitmap.createBitmap(top, 8, 8, 16, 16);
        top = android.graphics.Bitmap.createScaledBitmap(top, 13, 13, false);
        src = [0, 0, 13, 0, 13, 13, 0, 13];
        dst = [0, 6.5, 13.5, 0, 26, 6.5, 13.5, 13];
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        top = android.graphics.Bitmap.createBitmap(top, 0, 0, top.getWidth(), top.getHeight(), BlockImageLoader.MTRX, false);

        var temp = android.graphics.Bitmap.createBitmap(26, 44, android.graphics.Bitmap.Config.ARGB_8888);
        BlockImageLoader.CANVAS.setBitmap(temp);
        var p = new android.graphics.Paint();
        if (hasNoShadow != false)
            p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 65, 255 - 65, 255 - 65), android.graphics.PorterDuff.Mode.MULTIPLY));
        BlockImageLoader.CANVAS.drawBitmap(left, 0, 6, p);
        if (hasNoShadow != false)
            p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 130, 255 - 130, 255 - 130), android.graphics.PorterDuff.Mode.MULTIPLY));
        BlockImageLoader.CANVAS.drawBitmap(right, 13, 6, p);
        BlockImageLoader.CANVAS.drawBitmap(top, 0, 0, null);

        return temp;
    };

    var createHorzRight = function(right) {
        right = android.graphics.Bitmap.createBitmap(right, 8, 8, 16, 24);
        right = android.graphics.Bitmap.createScaledBitmap(right, 11, 24, false);
        var src = [0, 0, 11, 0, 11, 24, 0, 24];
        var dst = [0, 6, 11, 0, 11, 24, 0, 30];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        right = android.graphics.Bitmap.createBitmap(right, 0, 0, right.getWidth(), right.getHeight(), BlockImageLoader.MTRX, false);

        return right;
    };

    var createHorzTop = function(top) {
        top = android.graphics.Bitmap.createBitmap(top, 8, 0, 16, 32);
        var src = [0, 32, 0, 0, 16, 0, 16, 32];
        var dst = [0, 6.5, 11, 0, 21, 5, 10, 11.5];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        top = android.graphics.Bitmap.createBitmap(top, 0, 0, top.getWidth(), top.getHeight(), BlockImageLoader.MTRX, false);

        return top;
    };

    var vert = createVert(left, right, top);
    var rightHorz = createHorzRight(right);
    var topHorz = createHorzTop(top);

    BlockImageLoader.CANVAS.setBitmap(temp);
    var p = new android.graphics.Paint();
    BlockImageLoader.CANVAS.drawBitmap(vert, temp.getWidth() - vert.getWidth(), 0, null);
    if (hasNoShadow != false)
        p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 130, 255 - 130, 255 - 130), android.graphics.PorterDuff.Mode.MULTIPLY));
    BlockImageLoader.CANVAS.drawBitmap(rightHorz, 26, 18, p);
    BlockImageLoader.CANVAS.drawBitmap(topHorz, 16, 13, null);
    BlockImageLoader.CANVAS.drawBitmap(vert, 0, temp.getHeight() - vert.getHeight(), null);

    return temp;
};

/**
 * @param {Bitmap} left
 * @param {Bitmap} right
 * @param {Bitmap} top
 * @param {Bitmap} temp
 * @param {Boolean} hasNoShadow
 * @returns {Bitmap}
 */
BlockImageLoader.createButton = function(left, right, top, temp, hasNoShadow) {
    var createLeft = function(left) {
        left = android.graphics.Bitmap.createBitmap(left, 10, 12, 12, 8);
        left = android.graphics.Bitmap.createScaledBitmap(left, 9, 8, false);
        var src = [0, 0, 9, 0, 9, 8, 0, 9];
        var dst = [0, 0, 9, 5, 9, 13, 0, 9];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        left = android.graphics.Bitmap.createBitmap(left, 0, 0, left.getWidth(), left.getHeight(), BlockImageLoader.MTRX, false);

        return left;
    };

    var createRight = function(right) {
        right = android.graphics.Bitmap.createBitmap(right, 30, 12, 2, 8);
        right = android.graphics.Bitmap.createScaledBitmap(right, 4, 8, false);
        var src = [0, 0, 4, 0, 4, 8, 0, 8];
        var dst = [0, 2, 4, 0, 4, 8, 0, 10];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        right = android.graphics.Bitmap.createBitmap(right, 0, 0, right.getWidth(), right.getHeight(), BlockImageLoader.MTRX, false);

        return right;
    };

    var createTop = function(top) {
        top = android.graphics.Bitmap.createBitmap(top, 10, 0, 12, 4);
        var src = [0, 0, 12, 0, 12, 4, 0, 4];
        var dst = [3, 0, 13, 5, 9, 7, 0, 2];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        top = android.graphics.Bitmap.createBitmap(top, 0, 0, top.getWidth(), top.getHeight(), BlockImageLoader.MTRX, false);

        return top;
    };

    left = createLeft(left);
    right = createRight(right);
    top = createTop(top);

    BlockImageLoader.CANVAS.setBitmap(temp);
    var p = new android.graphics.Paint();
    if (hasNoShadow != false)
        p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 65, 255 - 65, 255 - 65), android.graphics.PorterDuff.Mode.MULTIPLY));
    BlockImageLoader.CANVAS.drawBitmap(left, 5, (temp.getHeight() - left.getHeight()) / 2 + 4, p);
    if (hasNoShadow != false)
        p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 130, 255 - 130, 255 - 130), android.graphics.PorterDuff.Mode.MULTIPLY));
    BlockImageLoader.CANVAS.drawBitmap(right, 14, (temp.getHeight() - left.getHeight()) / 2 + 8, p);
    BlockImageLoader.CANVAS.drawBitmap(top, 5, (temp.getHeight() - left.getHeight()) / 2 + 2, null);

    return temp;
};

/**
 * @param {Bitmap} left
 * @param {Bitmap} right
 * @param {Bitmap} top
 * @param {Bitmap} temp
 * @param {Boolean} hasNoShadow
 * @returns {Bitmap}
 */
BlockImageLoader.createFenceGate = function(left, right, top, temp, hasNoShadow) {
    var createVert = function(left, right, top, type) {
        left = android.graphics.Bitmap.createBitmap(left, type * 28, 0, 4, 22);
        var src = [0, 0, 4, 0, 4, 22, 0, 22];
        var dst = [0, 0, 4, 3, 4, 25, 0, 22];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        left = android.graphics.Bitmap.createBitmap(left, 0, 0, left.getWidth(), left.getHeight(), BlockImageLoader.MTRX, false);

        right = android.graphics.Bitmap.createBitmap(right, 14, 0, 4, 22);
        var src = [0, 0, 4, 0, 4, 22, 0, 22];
        var dst = [0, 3, 4, 0, 4, 22, 0, 25];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        right = android.graphics.Bitmap.createBitmap(right, 0, 0, right.getWidth(), right.getHeight(), BlockImageLoader.MTRX, false);

        top = android.graphics.Bitmap.createBitmap(top, type * 28, 14, 4, 4);
        var src = [0, 0, 4, 0, 4, 4, 0, 4];
        var dst = [0, 3, 4, 0, 8, 3, 4, 6];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        top = android.graphics.Bitmap.createBitmap(top, 0, 0, top.getWidth(), top.getHeight(), BlockImageLoader.MTRX, false);

        var temp = android.graphics.Bitmap.createBitmap(8, 28, android.graphics.Bitmap.Config.ARGB_8888);
        BlockImageLoader.CANVAS.setBitmap(temp);
        var p = new android.graphics.Paint();
        if (hasNoShadow != false)
            p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 65, 255 - 65, 255 - 65), android.graphics.PorterDuff.Mode.MULTIPLY));
        BlockImageLoader.CANVAS.drawBitmap(left, 0, 3, p);
        if (hasNoShadow != false)
            p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 130, 255 - 130, 255 - 130), android.graphics.PorterDuff.Mode.MULTIPLY));
        BlockImageLoader.CANVAS.drawBitmap(right, 4, 3, p);
        BlockImageLoader.CANVAS.drawBitmap(top, 0, 0, null);

        return temp;
    };

    var createHoriz = function(left, right, top) {
        left = android.graphics.Bitmap.createBitmap(left, 0, 2, 32, 14);
        var src = [0, 0, 32, 0, 32, 14, 0, 14];
        var dst = [0, 0, 26, 13, 26, 27, 0, 14];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        left = android.graphics.Bitmap.createBitmap(left, 0, 0, left.getWidth(), left.getHeight(), BlockImageLoader.MTRX, false);

        right = android.graphics.Bitmap.createBitmap(right, 14, 0, 4, 14);
        var src = [0, 0, 4, 0, 4, 14, 0, 14];
        var dst = [3, 0, 4, 0, 4, 14, 0, 17];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        right = android.graphics.Bitmap.createBitmap(right, 0, 0, right.getWidth(), right.getHeight(), BlockImageLoader.MTRX, false);

        top = android.graphics.Bitmap.createBitmap(top, 14, 0, 4, 32);
        var src = [0, 0, 4, 0, 4, 32, 0, 32];
        var dst = [0, 3, 4, 0, 30, 13, 26, 16];
        BlockImageLoader.MTRX.reset();
        BlockImageLoader.MTRX.setPolyToPoly(src, 0, dst, 0, 4);
        top = android.graphics.Bitmap.createBitmap(top, 0, 0, top.getWidth(), top.getHeight(), BlockImageLoader.MTRX, false);

        var temp = android.graphics.Bitmap.createBitmap(30, 30, android.graphics.Bitmap.Config.ARGB_8888);
        BlockImageLoader.CANVAS.setBitmap(temp);
        var p = new android.graphics.Paint();
        if (hasNoShadow != false)
            p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 65, 255 - 65, 255 - 65), android.graphics.PorterDuff.Mode.MULTIPLY));
        BlockImageLoader.CANVAS.drawBitmap(left, 0, 3, p);
        if (hasNoShadow != false)
            p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255 - 130, 255 - 130, 255 - 130), android.graphics.PorterDuff.Mode.MULTIPLY));
        BlockImageLoader.CANVAS.drawBitmap(right, 26, 16, p);
        BlockImageLoader.CANVAS.drawBitmap(top, 0, 0, null);

        return temp;
    };

    var vert1 = createVert(left, right, top, 0);
    var vert2 = createVert(left, right, top, 1);
    var horz = createHoriz(left, right, top);

    BlockImageLoader.CANVAS.setBitmap(temp);
    BlockImageLoader.CANVAS.drawBitmap(vert1, 13, 5, null);
    BlockImageLoader.CANVAS.drawBitmap(vert2, 35, 15, null);
    BlockImageLoader.CANVAS.drawBitmap(horz, 13, 8, null);

    return temp;
};

/**
 * @param {Bitmap} left
 * @param {Bitmap} right
 * @param {Bitmap} top
 * @param {Bitmap} temp
 * @param {Boolean} hasNoShadow
 * @returns {Bitmap}
 */
BlockImageLoader.createAnvil = function(left, right, top, temp, hasNoShadow) {

};

BlockImageLoader.init();

var stv = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADIAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDhR1p1NHWnV5Z3saeh+la9p/x7J/u1kHofpWvaf8eyf7tSyo7khGaWgcGnZpGoqCpBTUp1K5S2DNaVjzEfpWcBxWjp4+RqlS1sTJXJ1TrS7DjpUijg0taEWsVSnzUpXinN940h4qkw5RqoN5+lcf41QCG2+prskGX69q4/xuuIbb6mnF6mNRHE0Ug6UtbJHMFFFFADKcBgUYFLQAHqaAOKXApaRC0I3HFFK/3aKpbAdcOtLTaK5zusB6H6VrWv/HtH9Kyex+la9qM2yfSkyokucAmmhsinEfKaaq5WpNupMvSnA5qaC33x+lS/YF/56H8qLXH0Ku7ArTsM7AccGq32Bf8AnofyrsvDfhWO/tVc3LjI6Y6U4U7synPlVzDDAtgdKRmVTjBOfSu5HgGEgn7Y4/4CKB4BgDA/bZP++RW/stDldfU4BhznGKTjua39e0SLTn2idm+orDEQOP51jJWOmnLmRFhhypGc4rk/HQAig+YcE12Aj5xmsvWtATVgoL9KUXZkzR5SOO/FGRXfL8P4O944PpgUp8AW/wDz+v8A98it1NHO6Z58c5J3YFCsQORmus13wnFpWmNOs7SYYDkCuUDY3KBnHeqTuZtWDknPanUgGSCTTsUCQlOHSm0UgEcDHJopH6UVSEdWG55NGT60YX3oGMd6wO3cATzmtm0OLdPYVi4yRzjmty1T/Rxz2qbFx0HuTge9Jyvy0oUnqelBbDE44qGy79TVsTmKrQqrZKDDu96t8VSkiovQTGelekeCTnT8YxtArzgADvXpPgsE6Z93jA5rooyu9DkxPwnTqw2Nz3piMcrjpShFHAXmkIbIH3QP1rd3sefbU4XxqP3wH0rkgABjnNdf4xCiVSWyeK5EcsT2rjqPU9ChsCx9SfSmqoViefzp+RjrSDBrOxq9RQpoKnFPHA60h+tO4rHMeN1H/COvyc+YteaICA5HpXpnjj/kXn/66LXmifdf6VvB+6c1VWY0ds0/NN7CjNUZRDNL2pvrTh0oBPUa/Sih+lFNAzc/tRf7n6Uf2mv901mUVlY7TTOox4BIPWr8PiCOODG1s4rnaKVgudIPEaFflVs/SkPiEGM/Lz9K50UdRU8ibHfQ9N0Of7Xp4cetaZjY1i+Ev+QMP9810PY01TRpB6EAj961bDx1D4eiMDo7beDgVn+grkfEH/H031rtwlFOZzV9Ueln4uWa4byJc/Skf4v2YH/HvLz0+WvIP4RS4ORXrfVVynHbU9HvvFUXiCUFEcD3quW2sQCCK53w99163VPOPevExNNRZ3UVoSbqfHkk1HUkB5NchqT+WaPLNS0UAcn45BHh5v8AroteZKeJPpXqPjw48Nv/ANdFry1fvNW0NjmqigjaM03vQ3WjHGasxiKeppw6U09acOlAluNfpRQ/SimgZZopaQZx3rNnW3YKKbnqO9X4dKmmhR1J5GaQ1qUyKMcVof2NOWIDHgUf2ROByT+VK4+Vo7bwl/yBv+BGugz14rl9IvotNshE4Aq9/wAJBBnt+dNMqMuU2eSRXJeIB/pTfWtM+IIQOMVQnjbVpGdOh6YrrwtRRndmdTUxewpe4rUGhzBeSc/SlOiTFAecivW+uQ5TFUmWdA6N+NbijH51naVZNbZ3VpN0OK8LFTc5XR0Q91WHHgVJbj5jUIBJHPFWLUfM1ct9C1Ysg0tKFOehpNjUwZy3jz/kW3/66LXly/eavU/HaH/hGn/66LXloQ561vDY5qrEIoH3TSlGpOnFUZRY3uakHSm4AJpBmglbiv0opsh4oqkDRb5yOaM0UDkVkzuaG45zmussjtsYSO61ybgnGDius08Z06D/AHamQ6a1LeCAGGOaCKad20DNKCVbJGahGzRSnO58elRY561LMMzE4xTNv1rRGTiNIG2un0DaLYH2rmG6dK6XQv8Aj3H0qal7e6Cjc11zk56UeYDkAcClHfJpBgZ4pRqSW5agPTGCaQjiiNSOc5pz5x0puVyZRDHT6VYswC7Z9KrDqPpVm1zvbA7VKiTFl4UcYopR0p8o2cv48H/FMv8A9dFrysdRxXqfjw/8U66/9NFry1cndx0FWjmqoDyaYyjNO7001SMYrQjPWgdaD1pR0qhLcZJRSSdTRVoZdxSUpP1oxxWDOxsaRmursONOg/3a5YAGurscGwhA/u1LKpvUmJIAxSEnNOIIxxmlIx2pI2bKMxJkNRZNTTY30zbVpMybGgmuq0CPdbg+1cswwOldZ4cf/RlB9Kbkkios1PJPNJ5Z71axntSgAgjFYyldlXKJfZ7U1p/lNJcnDkGq+CR3qlExlJk/ngEfSrVnNy3NZhq3ZHJb6U+gomuJB3o8welQ5pN2Kls1Of8AHLbvD7/76/zrzFAcv9K9M8Zkf2A4/wCmi15wuPn9xxVxehzVSMrx05qKQECrZ27R61DNjYfpVoxitCnuOcUmRTQ3zdKditSHuNc8YoofFFUhGjSGlorlOsaAN3WuqsFH2OHn+GuUKAEsTXR2V7BFaRAsPu0MqGhokBzjOMUu3CnnNVPt9qW5cD8aVtRtQMK4J+tSjovdDJwd3tUYXHerUdrcXg3RKSPalOmXv/PFqtSMnEqsMrXWeGv+PYAjoOtc7/Zd7j/VNXQaNOlhCFuTswOc0nFy0QbG4sZZyd3HpmnBmBKrjiqR1SxBLLOv50HV7ELkTLnvVKjOwvaEd4MnJqsgycgmpjPHdA7GDfSmJBKG+4cetZSUosL3GDnNW7HoagEEgDcVZs43GciquOJepQARzQowOetLSLuc34zX/iRt/vrXnAHNej+NDjQ3/wB9a84B5/CqRz1BTUUw+Q/SpDUcx+Q/SrRktigBzT6YDzT61MeoxqKGopotbGjRRRXMdAEZHNHI4HSiiga0EJNCk/jSnpTR9aBqZ6Z4SAbSASMtuPNb2xP7orB8ID/iTA/7RroCOetZtmqeghRMZ2iuR8QErd4XgE9K69ulcf4h/wCPwfWu/L0pVHczqvQyAx3Yo3HOP60g/wBZ+FKcZ617ypQ5Tj5nc6Tw2NwYHnrXQqOcYrnvDP3WP1rol69a8DFuKdjrpK47avpTkUDoMU0d6evSuC5s1YXFGKKUVSJOZ8aj/iQv/vrXm6/0r0jxt/yAn/31rzde/wBKpGNQD0qKf/UtUp6VFP8A6lq0Rj0KOBtJ96B0oP3D9aB0rUyW4p60UHrRQUaPly/3G/75o8uT+435V2mwego2D0Fc3Mdlji/Lk/uN+VKIpP8Anm//AHzXZhB6D8qlRVx0Xp6UuYOU4VkkyP3b/wDfJpTDNkbY2/EV3AQZJ2j8qAquvIUfhS5xOBp+GF8jSxG3HfmtvzFJzuH51gQZWPAmAFSk/wC1WEnqbU46G15qn+IfnXLa7b3E1wzwwySAHqqE1fB55avUPAkKvphaRUcYGAVruwtRQdzHEe6jwz7DdnDLaz57/uz/AIUfYb3LD7JPkdP3Z/wr6fW2gZSRAgx/sigW8JdR5Cc9TtFeusX7tjzm9TwPw7bTW6nz0Mef7wxW3lVP31x9a2fHvlQTBUQKTjpXDEHCkZ575rx8TOEnselQeh0IkXP3l/OlEi5xuH51zyE5+/U8QJf79cxqbgcf3hSlwB94Vlrx/Fmjr/FSuHKZnjSQHQmGR99a85VxXceMARobAH+Na89BOfwrogrq5zVexaLgd6ilcMhUGomzTa0SMERHgYpQvFSY5pdoqrkJakRHeipGUAUUJjPQc0Zo4o4rhPREqZBxUQ61MrjtimMXpmkwMYHWlJpFxng1PULFuJRsGBzUgxzUUTADrUnHrUyRpDYcK9S8A4/s7IY9BxXlp2gda9T8CBV0pG9QOa6KCuzlxK5lodeCeQ3AoUHzOTgDpTN0eMk0glQt16V3aJHCoO55x4/IEwBUEnFcNg8bmP0rtvHsqtcLgelcVgNznp2rhqxTZ6FFWQi4wSBU9uVYk+lVi2w49aljKIPmYDNZJF81i4SO2KRSB1pgeLH3xQXhx98VSiP2iMPxiR/YbEdN6155nn8K77xY8TaQyBgTuBrz/dyR6V0U1pY5K0tRc5ORRQOlJnmrMY6jj1pw6UynjpSEtxr9KKH6UU0DO6ooorlPQCpAeetQ09fvUNDJGPFNVmANK1JU21HbQVZGGcGjzZc9TSUo60NXGtB3mybetdHoup3UNkUjupFwOADXN1s6X/qvwpp22JaubqapqBU5vZfzpG1W9z/x+zDHvVRe9LgelVzNmbgirqM0l1IDJO7/AO9VN8pkAD61NP8AfqE1Dvvc1itBDj5c1g+Ip5oCvlsQPrW4PufjWB4q+5D9TVR3Mp6I58ajd5/4+HH40v8AaN3/AM93/Oqi9KdWyRzOTC4u7ieIpJIzDPc1VXaA+RzipH+9TcD0q1oQ9SMjoabnmpSBg1HimgXuki9DS0jHApR0pANfpRQ/SimhM7qiiiuU9AbT0+9RRTGPakoopMpBSiiikAtbOl/6v8KKKQjRXvS0UU0SzPn+/UVFFJlR2Ix9z8a5/wAV/ch+poopx3Mqmxyy9KdRRXQjkIn+8aj3DOKKKpCGlutRg5NFFUhEzDIpR0ooqRjX6UUUU0Jn/9k=";
alert("3D MiniMap Loading Successfull :)")