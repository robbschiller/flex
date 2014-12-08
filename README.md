# Flex
> A flexbox grid system

![](http://f.cl.ly/items/1K2V3H163g3Q3g2D1O2v/Image%202014-12-08%20at%206.26.35%20PM.png)

## Installation
```
bower install flex.grid
```

## Usage

The grid system exposes two variables, `$grid-break`, defaulted to `768px` and `$grid-gutter-width` defaulted to `24px`.

If you want to change the values, declare new variable values before importing the partial.

```sass
// Grid Settings
$grid-break: 760px;
$grid-gutter-width: 20px;

// Import Grid
@import 'bower_components/flex/grid';
```

### Requirements

Because [flexbox](http://caniuse.com/#search=flexbox) adpoption is still growing, it's recommended you use Autoprefixer to define the required vendor prefixes.
