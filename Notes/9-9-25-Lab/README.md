## Computer Graphics Notes
### 9-9-2025 "Lab" Day

Each section has a part to focus on, with the rest being encapsulated into the `hidden.js` script.

#### Section 1: Geometry
Creates a canvas and gets the context. Also adds an array `squareOfTriangles` which we will fill in on our own. It really resembles the vertices of two triangles that we will draw at the same time. It has 6 points in total, but there are several duplicates, so it just boils down to 4.

#### Section 2: Vertex Shading
We create our own code in the `vertShaderSrcCode` variable, it resembles C. 

We have a global variable called `aPosition` which is an attribute of `vec3` which means it is an array that stores 3 things.

The `main()` function assigns an array of 4 elements `vec4` to `gl_Position`, and it takes the 3 points from aPosition (which is a `vec3`) and attaches `1.0` onto it, creating a 4 element vector.

#### Section 3: Fragment Shading
We need to tell it what color, which is done via the `fragShaderSrcCode` variable. It involves a simple main function with a single line that assigns `gl_FragColor` to a 4 element vector which is (R, G, B, opacity)

#### Section 4: Shader compilation
Like C programs, the shaders must be compiled. We do that via the creation of a shader variable `vertShdr` which uses a `gl` function `createShader(SHADER_TYPE)`. Then we specify the source code for this shader with `gl.shaderSource(shaderName, shaderSourceCode);` and finally compile the shader with `gl.compileShader(shaderName);`

#### Section 5: Fragment Compilation
Literally the exact same with a different variable name and a different creation of the shader. You must use `gl.createShader(gl.FRAGMENT_SHADER);` instead. 

Note the following lines:
```html
    console.log(gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS));
    console.log(gl.getShaderInfoLog( vertShdr ));
```
These will help you confirm that your shaders have been properly compiled. 

#### Section 6: Shader Linking
In order to use the shaders properly, you must link them into a single program, which can communicate with the GPU, this is done with the following commands:

```html
    var program = gl.createProgram();
    gl.attachShader(program, vertShdr);
    gl.attachShader(program, fragShdr);
    gl.linkProgram(program);
    gl.useProgram(program);
```

> There is a slight discrepency between the above code and the code in `index.html` and I couldn't find what it was quick enough before we move on, but it will not work if you use the above instead of what's in the file.

#### Section 7: Buffer Creation
The GPU needs reserved data in order to render, which is where buffers come in. The vertices come in `gl.ARRAY_BUFFER` which is more for raw information. This also requires the `Float32Array()` which is different for `gl.ELEMENT_ARRAY_BUFFER`.

#### Section 8: Associate Buffer with VertShdr
Create `positionLoc` and assign it the vec3 from `vertShdr`. 

The `gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0)` has the following generic parameters:
`(array, numOfValsToRead, typeOfVals, boolForInterpolation, offsetFromBeginOfArray, skipValsAfterReading)`

Finally, enabling the array via `gl.enableVertexAttribArray(positionLoc);`

#### Section 9: Rendering the Object
Clear the canvas so there are no artifacts left behind. Enable the depth test for z-index stuff.

Clear the color buffer and depth buffer to get ready for drawing. 

Finally, use the `gl.drawArrays(gl.PRIMITIVE_TYPE, beginningIndexOfVertexArray, numOfVerts)` to draw the array of points.
