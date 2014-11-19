# sass.grid
> Flexbox Grid System

## Installation
```
bower install aglobof-sass.grid
```

## Usage

The grid system exposes two variables, `$grid-break`, defaulted to `768px` and `$grid-gutter-width` defaulted to `24px`.

If you want to change the values, declare new variable values before importing the partial.

```sass
// Grid Settings
$grid-break: 760px;
$grid-gutter-width: 20px;

// Import Grid
@import 'bower_components/aglobof-sass.grid/grid';
```

Or, import the glob file -

``` sass
@import "bower_components/aglobof-sass.grid/glob";
```

### Requirements

Because [flexbox](http://caniuse.com/#search=flexbox) adpoption is still growing, it's recommended you use Autoprefixer to define the required vendor prefixes.
