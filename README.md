![galaxy.js logo](images/logo.png?raw=true)

A simple drop-in JavaScript API to play multiplayer, web-based games (with authentication, friends, leaderboards).

Used in conjunction with the [Galaxy API](https://github.com/mozilla/galaxy-api).


## Downloads

* [galaxy.js](https://raw.githubusercontent.com/mozilla/galaxy.js/master/build/galaxy.js)
* [galaxy.min.js](https://raw.githubusercontent.com/mozilla/galaxy.js/master/build/galaxy.min.js) (3.4k gzipped)


## Installation

To install Node dependencies:

    npm install


## Development

To rebuild (compile and minify) the scripts while developing:

    gulp dev

Two files will be written to the `build/` directory:

* [galaxy.js](https://raw.githubusercontent.com/mozilla/galaxy.js/master/build/galaxy.js)
* [galaxy.min.js](https://raw.githubusercontent.com/mozilla/galaxy.js/master/build/galaxy.min.js)

Alternatively, to rebuild the files and documentation just once:

    gulp


## Documentation

To convert to Markdown the docs that appear as comments in `galaxy.js`:

    gulp docs

[Read the documentation here.](docs/docs.md)
