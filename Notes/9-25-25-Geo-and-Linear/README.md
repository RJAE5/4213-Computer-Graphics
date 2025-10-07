## Computer Graphics Notes
### 9-25-2025 Geometry and Linear Algebra

Geometry is the study of the relationships among objects in an n-dimensional space
> In computer graphics, we are interested in objects that exist in three dimensions.

We want a minimum set of primitives from which we can build more sophisticated objects. This leads to the need for 3 major items:
* Scalars
* Vectors
* Points

This gives a natural rise to the use of linear algebra.

#### Scalars
Scalars can be defined as members of sets which can be combined by two operations (addition and multiplication) obeying some fundamental axioms (associativity, commutivity, inverses)
> Basically just simple numbers

Examples include the real and complex number systems under the ordinary rules with which we are familiar.

Scalars alone have no geometric properties.

#### Vectors
Vectors are a collection of numbers which naturally posess a magnitude and a direction. There is no position defined.

Some common examples are force, velocity, and directed line segments.

In dimension n, a vector can be defined as an order n-tuple: Since it's easier to type and not confusing with arrays, I will be using row vector notation for my notes: `<n1, n2, n3>`

We covered how to find the magnitude of the vectors, which is just the square root of the sum of the squares of the components.

Vectors can be multiple by scalar multiples, in which each component is multiplied by the scalar. You can **NOT** add a scalar to a vector

A **Unit Vector** is a vector of magnitude 1, in any direction.

We covered vector addition, and dot product.

#### Dot product
The dot product becomes useful when calculating light in graphics. If the result is negative, it means the angle between the vectors is obtuse, and acute if it's a positive result.

Extrapolating it out, if the angle is obtuse, the face may not be lit up by a light source. 

the dot product is commutative, associative, and distributive.

We briefly covered projections and how it could relate to shadows.

#### Cross Product
The cross product produces a normal vector to two others. However recall that `u x v = -(v x u)`

`a x a = 0`

#### Span
We briefly covered basis and span, and how basis vectors are typically perpendicular to one another, but that is not strictly necessary
