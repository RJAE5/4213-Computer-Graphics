## Computer Graphics Notes
### 10-7-2025 Geometric Transformation

Linear transformations can be represented as invertible (non-singular) matrices

Linear transformation is essentially matrix multiplication

#### Scaling
Scaling is a diagonal matrix with the scaling values along the main diagonal

#### Rotation
In 2D, rotation is accomplished by placing `cos(a) -sin(a)` on the first row and `sin(a) cos(a)` on the second row. Rotation works around the origin, it will not rotate around it's center point. If you want to rotate something around it's center, you must first translate it to the origin and then perform a rotation, before inverting the translation

#### Translation
Translation is hard in 2D, so exapnd it out to a 3x3 Identity matrix. In the last column, put the desired dx, the desired dy, and a translation matrix is accomplised.

#### Inverses
For scaling, just do `1/s` for each scaling factor. For Rotation, swap the `-sin(a)` with the `sin(a)`. For translation, just negate dx and dy. Inverse of multiplication flips the order:


#### Composition
You can compose different transformations by treating them as functions and just doing normal function composition. Visually, this looks like successive matrix multiplication, but remember, order matters since matrix multiplication is **NOT** commutiative