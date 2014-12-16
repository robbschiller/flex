#!/bin/sh
sass test/test.scss test/test.css --load-path 'bower_components/flex.grid' --load-path './'  --sourcemap=none
node-sass test/test.scss test/test.css --include-path 'bower_components/flex.grid' --include-path './' --sourcemap=none
