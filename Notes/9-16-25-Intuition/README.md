## Computer Graphics Notes
### 9-16-2025 Intuitive Explanation of WebGL

#### 3 Different Cities
JavaScript city is responsible for prototyping 3D designs and materials, maintaining information needed for manufacturing as well as simplifying designs for manufacturing.

Manufacturing City (Vertex Shader) is responsible for manufacturing and manipulating desgns like a 3D printer.

The Colorizing City (Fragment Shader) is responsible for painting the 3D models and displaying them on the screen.

Ultimately, communication is needed, but this communication is one way: design -> manufacturing -> colorizing.

To facilitate communication, messangers are needed, and these take the form of the keywords defined in the shaders:
* Uniform: JS to VT or FG cities (Global messages)
* Attribute: JS to VT
* Varying: Internal VT to FG

The arrays for the verticies and the colors could be thought of messages. These messages will be brought by the respective messangers. However, the question arises how do these messages get to the messanger?

The buffers could be thought of as mailboxes.
* `gl.createBuffer()` -> Create mailbox
* `gl.bindBuffer()` -> Activate mailbox
* `gl.bufferData()` -> Deliver message

Depending on which messanger picks up the message, they will deliver it to the respective city. The same steps are needed for both the vertices and the color array.