<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# nditerMatrixEntries

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which returns `[index, matrix]` pairs for each matrix in a stack of matrices.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import nditerMatrixEntries from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-iter-matrix-entries@v0.1.0-deno/mod.js';
```

#### nditerMatrixEntries( x\[, options] )

Returns an iterator which returns `[index, matrix]` pairs for each matrix in a stack of matrices.

```javascript
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditerMatrixEntries( x );

var v = iter.next().value;
// returns [...]

var idx = v[ 0 ];
// returns [ 0, null, null ]

var mat = ndarray2array( v[ 1 ] );
// returns [ [ 1, 2 ], [ 3, 4 ] ]

v = iter.next().value;
// returns [...]

idx = v[ 0 ];
// returns [ 1, null, null ]

mat = ndarray2array( v[ 1 ] );
// returns [ [ 5, 6 ], [ 7, 8 ] ]

// ...
```

The function accepts the following `options`:

-   **readonly**: boolean indicating whether returned [`ndarray`][@stdlib/ndarray/ctor] views should be read-only. In order to return writable [`ndarray`][@stdlib/ndarray/ctor] views, the input [`ndarray`][@stdlib/ndarray/ctor] must be writable. If the input [`ndarray`][@stdlib/ndarray/ctor] is read-only, setting this option to `false` raises an exception. Default: `true`.

By default, the iterator returns [`ndarray`][@stdlib/ndarray/ctor] views which are **read-only**. To return writable [views][@stdlib/ndarray/slice], set the `readonly` option to `false`.

```javascript
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditerMatrixEntries( x, {
    'readonly': false
});

var v = iter.next().value;
// returns [...]

var mat = ndarray2array( v[ 1 ] );
// returns [ [ 1, 2 ], [ 3, 4 ] ]

v[ 1 ].set( 0, 0, 10 );

mat = ndarray2array( v[ 1 ] );
// returns [ [ 10, 2 ], [ 3, 4 ] ]
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Each returned index is a Cartesian index (i.e., an array of subscripts/dimension indices). A dimension index equal to `null` indicates that all values along the respective dimension are included in the returned [`ndarray`][@stdlib/ndarray/ctor].
-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   A returned iterator does **not** copy a provided [`ndarray`][@stdlib/ndarray/ctor]. To ensure iterable reproducibility, copy the input [`ndarray`][@stdlib/ndarray/ctor] **before** creating an iterator. Otherwise, any changes to the contents of input [`ndarray`][@stdlib/ndarray/ctor] will be reflected in the returned iterator.
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke an ndarray's `@@iterator` method, regardless of whether this method is defined.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import zeroTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@deno/mod.js';
import nditerMatrixEntries from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-iter-matrix-entries@v0.1.0-deno/mod.js';

// Define an input array:
var x = array( zeroTo( 27 ), {
    'shape': [ 3, 3, 3 ]
});

// Create an iterator for returning [index, matrix] pairs:
var it = nditerMatrixEntries( x );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value[ 0 ] );
    console.log( ndarray2array( v.value[ 1 ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-iter/column-entries`][@stdlib/ndarray/iter/column-entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns \[index, column] pairs for each column in a matrix (or stack of matrices).</span>
-   <span class="package-name">[`@stdlib/ndarray-iter/entries`][@stdlib/ndarray/iter/entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns \[index, value] pairs for each element in a provided ndarray.</span>
-   <span class="package-name">[`@stdlib/ndarray-iter/matrices`][@stdlib/ndarray/iter/matrices]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each matrix in a stack of matrices.</span>
-   <span class="package-name">[`@stdlib/ndarray-iter/row-entries`][@stdlib/ndarray/iter/row-entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns \[index, row] pairs for each row in a matrix (or stack of matrices).</span>
-   <span class="package-name">[`@stdlib/ndarray-slice`][@stdlib/ndarray/slice]</span><span class="delimiter">: </span><span class="description">return a read-only view of an input ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-iter-matrix-entries.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-iter-matrix-entries

[test-image]: https://github.com/stdlib-js/ndarray-iter-matrix-entries/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/ndarray-iter-matrix-entries/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-iter-matrix-entries/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-iter-matrix-entries?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-iter-matrix-entries.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-iter-matrix-entries/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-iter-matrix-entries/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-iter-matrix-entries/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-iter-matrix-entries/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-iter-matrix-entries/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-iter-matrix-entries/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/ndarray/slice]: https://github.com/stdlib-js/ndarray-slice/tree/deno

<!-- <related-links> -->

[@stdlib/ndarray/iter/column-entries]: https://github.com/stdlib-js/ndarray-iter-column-entries/tree/deno

[@stdlib/ndarray/iter/entries]: https://github.com/stdlib-js/ndarray-iter-entries/tree/deno

[@stdlib/ndarray/iter/matrices]: https://github.com/stdlib-js/ndarray-iter-matrices/tree/deno

[@stdlib/ndarray/iter/row-entries]: https://github.com/stdlib-js/ndarray-iter-row-entries/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
