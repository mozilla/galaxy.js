![galaxy.js logo](https://github.com/mozilla/galaxy.js/raw/master/images/logo.png?raw=true)

A simple drop-in JavaScript API to play multiplayer, web-based games (with authentication, friends, leaderboards).

Used in conjunction with the [Galaxy API](https://github.com/mozilla/galaxy-api).


## Downloads

* [galaxy.js](https://raw.githubusercontent.com/mozilla/galaxy.js/master/dist/galaxy.js)
* [galaxy.min.js](https://raw.githubusercontent.com/mozilla/galaxy.js/master/dist/galaxy.min.js) (3.4k gzipped)


## Installation

To install Node dependencies:

    npm install

To set up symlinks for updating GitHub pages:

    gulp symlink-git-hooks


## Development

To rebuild (compile and minify) the scripts while developing:

    gulp dev

Two files will be written to the `dist/` directory:

* [galaxy.js](https://raw.githubusercontent.com/mozilla/galaxy.js/master/dist/galaxy.js)
* [galaxy.min.js](https://raw.githubusercontent.com/mozilla/galaxy.js/master/dist/galaxy.min.js)

Alternatively, to rebuild the files and documentation just once:

    gulp


## Documentation

To generate pretty docs from the code comments in [`galaxy.js`](https://github.com/mozilla/galaxy.js/blob/master/src/galaxy.js):

    gulp docs

[Read the docs.](http://mozilla.github.io/galaxy.js/docs/)

When updating the docs, be sure to update GitHub pages. If you install the Git hooks, you're all set.
