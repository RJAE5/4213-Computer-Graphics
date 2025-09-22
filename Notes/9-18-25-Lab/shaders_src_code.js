var JSshiftX = 0.0;
var JSshiftY = 0.0;

var vertShaderSrcCode = 
`
uniform float shiftX;
uniform float shiftY;
attribute vec3 aPosition;
attribute vec3 aColor;
varying vec3 vColor;

void main() {

    gl_Position.x = aPosition.x + shiftX;
    gl_Position.y = aPosition.y + shiftY;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;


    vColor = aColor;
}
`;

var fragShaderSrcCode = 

`precision mediump float;
varying vec3 vColor;
void main() {
    gl_FragColor = vec4(vColor, 1.0);
}
`;



vertShdr = gl.createShader( gl.VERTEX_SHADER );
gl.shaderSource( vertShdr, vertShaderSrcCode);
gl.compileShader( vertShdr );
console.log(gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS));
console.log(gl.getShaderInfoLog( vertShdr ));

fragShdr = gl.createShader( gl.FRAGMENT_SHADER );
gl.shaderSource( fragShdr, fragShaderSrcCode);
gl.compileShader( fragShdr );
console.log(gl.getShaderParameter(fragShdr, gl.COMPILE_STATUS));
console.log(gl.getShaderInfoLog( fragShdr ));

var program = gl.createProgram();
gl.attachShader( program, vertShdr );
gl.attachShader( program, fragShdr );
gl.linkProgram( program );
console.log(gl.getProgramInfoLog( program ));
gl.useProgram(program)

var connShiftX = gl.getUniformLocation(program, 'shiftX');
var connShiftY = gl.getUniformLocation(program, 'shiftY');



// We implement these:
function moveDown(event) {
    JSshiftY -= 0.01;
    gl.uniform1f(connShiftY, JSshiftY);
    console.log("Moved Down!");
    

}
function moveUp(event) {
    JSshiftY += 0.01;
    gl.uniform1f(connShiftY, JSshiftY);
    console.log("Moved Up!");
    
    
}
function moveLeft(event) {
    JSshiftX -= 0.01;
    gl.uniform1f(connShiftX, JSshiftX);
    console.log("Moved Left!");
    
}
function moveRight(event) {
    JSshiftX += 0.01;
    gl.uniform1f(connShiftX, JSshiftX);
    console.log("Moved Right!");
}



function render(event) {
    gl.clear( gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);

    gl.drawArrays( gl.TRIANGLES, 0, 6);
}


btnRender = document.getElementById("btnRender");
btnRender.addEventListener("click", render);

btLeft = document.getElementById("btnLeft");
btnLeft.addEventListener("click", moveLeft);

btnRight = document.getElementById("btnRight");
btnRight.addEventListener("click", moveRight);


btnUp = document.getElementById("btnUp");
btnUp.addEventListener("click", moveUp);

btnMDown = document.getElementById("btnDown");
btnMDown.addEventListener("click", moveDown);

