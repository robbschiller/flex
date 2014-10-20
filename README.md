# sass.grid
> Flexbox Grid System

## Installation
```
bower install aglobof-sass.grid
```

## Usage
The grid system exposes two variables requiring declaration. 

`$grid-gutter__width`   
and  
`$grid--item__break`   

Both variables need values for the grid to compile. Here's an example sass file for loading the grid -

```css
// Grid Settings
$grid-gutter__width: 20px;
$grid--item__break: 760px;

// Import Grid
@import './path/to/bower/aglobof-sass.grid/grid';
```
