## Computer Graphics Notes
### 9-11-2025 Quick Day (QUIZ)

We will introduce the Graphics Library Shading Language (GLSL) which allows for colorization (manipulating geometry/triangle colors) and interaction.

#### Graphics Library Shading Language (GLSL)
GLSL is a C-style language with control structures (for-loops, if/else statements).

All names beginning with `gl_` are reserved words (i.e. `gl_Position`)

* Qualifiers: additional properties to the variable to enable certain behavior
* Attribute: indicates the variable will receive data from the application.

We briefly covered data-types, but he zoomed past them. There are no pointers in the language.

#### Qualifiers
GLSL has many of the same qualifiers such as `const` from C/C++. It needs others due to the nature of the execution model. Variables can change the following times:
* Once per vertext (assigned)
* Once per fragment (assigned)
* At any time in the application

Attribute-qualified variables can change at most once per vertext. There are a few build in variables such as `gl_Position` but most have been deprecated. 

In your vertex shader source code, if you want to send something to the fragment shader, it has to be declared in the vertex shader source code.

```cpp
#version 300 es
// Vertext Shader Source Code

uniform float angle; // The uniform keyword makes it sort of like "read-only" It can be defined in either vert or frag code
attribute vec3 aPosition;
attribute vec3 aColor;
varying vec3 vColor; // varrying is the keyword to send it out

void main()
{
    // Assigning this variable her to send to frag shader
    vColor = aColor;
    gl_Position = vec4(aPosition, 1.0);
}
```

```cpp
varying vec3 vColor; // We can use the 3 element vector in here now

void main()
{
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

}
```

```

```