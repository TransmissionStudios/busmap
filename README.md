README
======

**NOTE: to run the application, simply load index.html in your browser. All files are provided.**

The notes below may be of interest to developers.

Developing the theme
--------------------

This site has been designed and developed using a mobile-first approach.
We follow a [SMACSS](https://smacss.com/) / [BEM](https://css-tricks.com/bem-101/) pattern for writing and organising the Sass.  

**Sass directory structure:**  

    base/  
    _variables.scss  
    _normalize.scss  

    components/  
    - Components that make up the site. Smaller components can be combined into larger ones eg button + input field = form.

    layout/  
    - Overall positioning of elements that make up the overall structure of the site eg sidebar. 
    
**Naming selectors:**
  
Block component.

    .button {}

Element that depends upon the block. Separate with a double underscore.
   
    .button__submit {}

Modifier that changes the style of the block. Separate with a double hyphen.

    .button--red {} 
    .button--wide {}

Tools
-----

**We use [Gulp](http://gulpjs.com/) as a build system.**   
The current plugins are:

  - gulp-sass (compiles Sass files using LibSass)
  
  - gulp-sourcemaps (generates sourcemaps)
  
  - gulp-autoprefixer (add vendor prefixes to CSS rules using values from Can I Use)
  
  - gulp-minify-css (minification for production)
  
  - gulp-if (write if statements)
  
  - yargs (accept arguments)
  
  - gulp-load-plugins (JIT loading of plugins)
  
  - gulp-scss-lint (Sass linting)

Compiling the Sass To CSS
-------------------------
Run this commands first:

    $ npm install     # Install gulp & dependencies

One-off Sass compilation
------------------------
    
    $ gulp sass


Watching for changes
--------------------

If you wish your sass auto-compiled as you change the files, run the following command, which initially compiles, then watches for further changes.

    $ gulp watch
    
Additionally run BrowerSync for browser autoreload across devices.
    
    $ gulp sync
    
Production CSS
--------------
    
Produces minifed CSS without a sourcemap.
    
    $ gulp sass --production
