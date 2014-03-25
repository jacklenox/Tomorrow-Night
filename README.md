# Tomorrow Night

Developer-slanted theme, based on the [Tomorrow Night](https://github.com/ChrisKempson/Tomorrow-Theme) editor theme by Chris Kempson. Compiled with some lovely [Compass](http://compass-style.org/) and [Gulp](http://gulpjs.com/).

I am using the [Breakpoint](http://breakpoint-sass.com/) extension for Compass to manage the responsive type sizing.

I also need to credit and thank Andrej Milnarević as I have used his [Sass & Compass Vertical Rhythm technique](https://medium.com/typography/34fe2f1d2c02).

Built with [_s](http://underscores.me/)

## How to install the theme

This theme is ready to roll in the usual way. Just upload it to the wp-content/themes/ directory of your WordPress site.

## Contributing to or developing this theme

In order to develop this theme's stylesheet, you need to install Gulp and the Gulp plugins listed in the gulpfile.js. These are:
- [Autoprefixer](https://www.npmjs.org/package/gulp-autoprefixer/)
- [Compass](https://www.npmjs.org/package/gulp-compass/)
- [Livereload](https://www.npmjs.org/package/gulp-livereload/)
- [Watch](https://www.npmjs.org/package/gulp-watch/)

You also need to install the Breakpoint module for Compass: [Getting started with Breakpoint](http://breakpoint-sass.com/#get_started)

Once everything is set up properly, you should just be able to run the `gulp` command in the command line and the theme's stylesheet will be automatically compiled with your changes.

## Todos

- Strip out unused bloat from _s
- Think about styling a bit more...
- Write more readme stuff