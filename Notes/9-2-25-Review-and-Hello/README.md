## Computer Graphics Notes
### 9-2-2025 Review & Hello Triangle

#### Image formation
Recall that one way to form an image is to follow rays.

This uses trigonometry to find projection of a point at `(x, y, z)`

* x_p = -x/z/d
* y_p = -y/z/d
* z_p = d

Image formation can be approximated with a simple pinhole camera and vectorization.

#### Physical Approaches
**Ray Tracing**
Follow rays of light from center of projection (camera) until they either are absorbed by objects or go off to infinity
* Can handle global effects
    * Multiple reflections
    * Translucent objects
* Slow
* Must have whole data base avalable at all times

**Radiosity**: Energy based approach but very slow

#### Vectorization
Spreading out the information into simple operations and using the GPU's many cores to accomplish the simple arithmetic.

**Disadvantages**:
* Local illimitation
    * Some objects are blocked from light
    * Light can reflect from object to object
    * Some objects might be translucent

#### Hello Triangle

See [Hello Triangle Program](./index.html)

WebGL applications are written in JavaScript.

The `<canvas>` tag sets the stage for using WebGL

The `vertices` array stores 3 points that have 3D coordinates.

For *lines 21-31*, you create an empty buffer, and pass the vertex data to it. This accomplishes passing the data the GPU.

The same steps are accomplished on *lines 33-43* for the `indicies` array

He mentioned making a function since the code is effectively repeated. That function is below:
```html
function create_a_buffer_object(type_buffer_object, data, optimization) 
{}
```

For shaders, we are ignoring `vertCode` and `fragCode` for now since those aren't necessarily needed for the simple introduction. But basically, they were created, and combined into more complicated programs: `shaderProgram`

On *line 97-110* You create a buffer again. Link the `coord` variable to the shader program and something.

Finally, you can draw the triangle, setting the background color, enabling the depth test, clearing the color buffer, setting the viewport, and finally drawing the element.

He showed us that changing the verticies to be really large makes the triangle disappear and asked us why.

The answer was because if the verticies are outside of the "scene", they are simply not rendered. Apparently it doesn't matter if their fill would enter the scene, at least best I could tell.

#### Coordinate Systems
There are mainly 2 choices on how to do stuff in GL
* Draw everything in OpenGL coordinate system
    * This is inconvenient: instead, choose your own abstract coordinate system to suit your needs for each object, then specify all its primitives to OpenGL using these coordinates. Specify a transformation to map the object coordinates to OpenGL coordinates.

There are many choices for a coordinate system
* Object Coordinate System
    * From the objects POV
* World Coordinate System
    * From the entire world/scene
* Camera Coordinate System
    * From the camera's POV
* Screen Coordinate System
    * In the screen (or window)

#### Shaders
Vertex shader must output in clip coordinates (GL native coordinate systems)

#### Hellow Traingle Revisited
For `vertcode`:

```html
var vertCode =
    'attribute vec3 coordinates;' +
        
    'void main(void) {' +
        ' gl_Position = vec4(coordinates, 1.0);' +
    '}';
```

#### WebGL Camera
WebGL places a camera at the origin in object space pointing in the negative z direction

The default viewing volume is a box centered at the origin with sides of length 2.

It uses Orthographic Viewing, which loses perspective. "It's like a slice of the object"
