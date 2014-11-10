# sass.grid
> Flexbox Grid System

## Installation
```
bower install aglobof-sass.grid
```

## Usage

The grid system exposes two variables requiring declaration, `$grid-break` and `$grid-gutter-width`.

Both variables need values for the grid to compile. Here's an example sass file for loading the grid -

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
