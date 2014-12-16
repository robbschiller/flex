'use strict'

var Metalsmith = require('metalsmith');
var sass = require('metalsmith-sass');
var autoprefixer = require('metalsmith-autoprefixer');

Metalsmith(__dirname)
  .source('src/')
  .destination('')
  .use(sass())
  .use(autoprefixer())
  .build(function(err){
    if (err) throw err;
  });
