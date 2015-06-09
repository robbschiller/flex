# Flex [![Build Status](https://travis-ci.org/robbschiller/flex.svg?branch=master)](https://travis-ci.org/robbschiller/flex)
> A flexbox grid system

![](http://f.cl.ly/items/1K2V3H163g3Q3g2D1O2v/Image%202014-12-08%20at%206.26.35%20PM.png)

## Installation
```
bower install flex.grid
// or
npm install flex.grid
```

## Usage

The grid system exposes two variables, `$gridBreak`, defaulted to `767px` and `$gutterWidth` defaulted to `1em`.

If you want to change the values, declare new variable values before importing the partial.

```sass
// Grid Settings
$gridBreak: 760px;
$gridGutterWidth: 20px;

// Import Grid
@import 'bower_components/flex.grid/grid';
//Or import from npm
@import 'node_module/flex.grid/grid';
```

### Requirements

Because [flexbox](http://caniuse.com/#search=flexbox) adpoption is still growing, this package is designed to use Autoprefixer to define the required vendor prefixes.
