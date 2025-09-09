## Computer Graphics Notes
### 9-4-2025 WebGL Notes

A lot of graphics boil down to three categories: Objects, Camera, and Light. We have a camera, we have light, we just need to make the objects.

#### Objects
Objects revolve around geometry & topology. We can perform operations (transformations) on the geometries which include:
* Rotation
* Scale
* Translation

#### Transformation & Viewing
In WebGL, we usually carry out projection using a projection matrix (transformation) before rasterization

Transformation functions are also used for changes in coordinate systems

Pre 3.1 OpenGL had a set of transformation functions which have been deprecated. Now, there are many choices in WebGL:
* Application code
* GLSL Functions
* MV.js
* glMatrix.js

#### WebGL Application Overview
WebGL - More of the visual aspect
1. Primitive and attribute functions
2. Viewing functions
3. Transformation functions

Application (JS) - Introduces the interactive aspect
4. Input functions
5. Control functions

#### WebGL Primitives
**Geometric Primitives:**
* Points, line segments, polygons, curves, and surfaces
* Geometric operations (transform, project or clip)
    * Rotation/translation

WebGL Geometric primitives are specified by sets of vertices (hello triangle)

An application produces vertices data (positions and other attributes)
> Put them into array that are sent to the GPU to display

GL functions (drawArrays) parameters determine how to display.

`gl.drawArrays` or `gl.drawElements` initiates the rendering of primitives

```
gl.drawArrays(gl.POINTS, 0, numPoints);
```

WebGL geometric primitives are variants of points, line segments, and triangular polygons. A point can be displayed as a single pixel or a small group of pixels. 

Finite sections of lines between two vertices (line segments)
* Line segments approximate curves
* Create graphs

Primitives List (not extensive):
* GL_POINTS
* GL_LINES
* GL_LINE_STRIP
* GL_LINE_LOOP
* GL_TRIANGLE_STRIP
* GL_TRIANGLES
* GL_TRIANGLE_FAN

Line segments and polylines can model edges of an object (known as a wireframe).
> Many curves can be approximated via a polyline

Use `gl.LINE_LOOP` to create a closed shape (polygon), but beware: The GPU does not know how to fill a line loop, and may result in artifacts or undesired graphical bugs.

Three properties will ensure that a polygon will be displayed correctly: It must be simple, convex, and flat.
* Simple - No lines crossing each other
* Convex - All angles are acute
* Flat - 2D guarantees flatness, but in 3D, this becomes harder to determine
    * We can guarantee Triangles are always flat in 3D, that's why they are so common.

WebGL will only display triangles as they are simple, convex, and flat. An application program must tessellate a polygon into triangles to be able to display it.

#### Triangularization
Not all triangles are the same, a thin long triangle may cause a rendering artifact. Equilaterial triangles render well, so they should be maximized.

We can triangularize a convex polygon by starting at a vertext, and drawing a line to each non-adjacent vertex. This will triangularize the entire polygon.

When you have a massive point cloud in 3D space, this gets complicated, but "Delaunay Triangulation" is a good algorithm.

#### Attributes
Attributes determine the appearance of objects
* Color (points, lines, polygons)
* Size and width (points, lines)
* Stipple pattern (lines, polygons)
* Polygon mode
    * Display as filled: solid color or shaded
    * Display edges
    * Display vertices

#### Vertices in Motion - Object Definition
A line is drawn by tracing a point as it moves (1st dimension added).

A rectangle is drawn by tracing that line as it moves (2nd dimension).

A cube is drawn by tracing that rectangle moving across the 3rd dimension.

#### Building 3D Primitives
3D prims are obviously made of 1D and 2D primitives. Triangles are used to make meshes that build up to entire 3D models.

The most common representation of shape in three dimensions is a triangle mesh. All vertices of a triangle are guaranteed to lie on one plane (not true for quadrilaterals or other polygons).

Uniformity makes it easy to perform mesh operations such as subdivision, simplification, transformation, etc. There are many ways to represent triangular meshes:
* Mesh transformation and deformation
* Procedural generation techniques

For a triangular mesh, you need the verticies, the edge, and a face. Since we always need these three things, we can represent it using a standard data structure. You can create a *face list* and a *vertex list*. The Face list is the most common, and it just defines which vertices make up which faces. A vertex list tells you all of the faces associated with a certain vertex.

Adjacency lists are also an option. 

#### Misc Notes

Graphics performance is measured by the rendered number of polygons per second

Raster Primitives (texture mapping):
* Preserve important properties (depth maps) for visibility

Texture mapping is effectively placing an image over your object.




