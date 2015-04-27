# henderson

This project is a toy implementation of the "Henderson Picture Language" described in The Structure and Interpretation of Computer Programs.
It is written in Clojurescript, instead of in Scheme as in the book. It renders its pictures to an HTML canvas element.

## Overview

For more information on the original Picture Language, see [Section 2.2.4 of SICP.](http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-15.html#%_sec_2.2.4)

For fun, I decided to implement this in Clojurescript, using HTML5 Canvas to render the output. Currently, it only renders pre-compiled figures that are defined by hand in the source files. However, I intend to eventually add a front-end GUI to let users interactively draw the figues and to define how they are composed, using the primitives of the picture language. I also plan to implement this interface in Clojurescript as well, probably using Om.

For now, you can see two examples of its output [here](http://bthecohen.github.io/henderson/example1.html) and [here.](http://bthecohen.github.io/henderson/example2.html) The images are being rendered dynamically in JavaScript, so it may take a few moments for the pages to load. In particular, the second image is signifantly more complex to draw.

## Setup

First-time Clojurescript developers, add the following to your bash .profile:

    export LEIN_FAST_TRAMPOLINE=y
    alias cljsbuild="lein trampoline cljsbuild $@"

To avoid compiling ClojureScript for each build, AOT Clojurescript locally in your project with the following:

    ./scripts/compile_cljsc

Subsequent dev builds can use:

    lein cljsbuild auto dev

To start a Node REPL (requires rlwrap):

    ./scripts/repl

To get source map support in the Node REPL:

    lein npm install

Clean project specific out:

    lein clean

Optimized builds:

    lein cljsbuild once release

For more info on Cljs compilation, read [Waitin'](http://swannodette.github.io/2014/12/22/waitin/).

## License

Copyright © 2015 Benjamin Cohen

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
