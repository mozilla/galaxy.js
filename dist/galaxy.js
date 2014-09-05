(function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @param {Boolean} jumped
   * @api public
   */

  function require(name, jumped){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];

    fn.call(m.exports, function(req){
      var dep = modules[id][1][req];
      return require(dep ? dep : req);
    }, m, m.exports, outer, modules, cache, entries);

    // expose as `name`.
    if (name) cache[name] = cache[id];

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {
(function () {

var gamepadController = require('kallaspriit/HTML5-JavaScript-Gamepad-Controller-Library@c38f53b:/gamepad.js');
var Promise = require('http://s3.amazonaws.com/es6-promises/promise-1.0.0.js');

/**
 * A simple drop-in JavaScript API to play multiplayer, web-based games
 * (with authentication, friends, leaderboards).
 *
 * @version 0.0.1
 * @exports galaxy
 * @namespace galaxy
 */
function galaxy() {
  this.paused = false;
  this.playing = false;
}

galaxy.version = '0.0.1';


/**
 * Authenticates a user.
 *
 * Opens a modal that overlays the game, prompting the user to sign in.
 * Returns a Promise that resolves with a `User` object for the user.
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.authenticate = function () {
  return new Promise(function (resolve, reject) {
    resolve({});
  });
};


/**
 * Begins the user's gameplay timer.
 *
 * Communicates with the Galaxy API that a user has begun playing the game.
 * If the user has not yet played the game before, the game is appended to the
 * list of games the user has played. If the user has played the game before,
 * the game is appended to the list of games the user is actively playing and
 * a counter is started which maintains the user's overall playtime for the
 * game.
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.beginPlaying = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};


/**
 * Connect to the Galaxy API and start a new game session.
 *
 * Establishes a WebSocket connection to the Galaxy API, indicating that the
 * user is ready to start playing the game.
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.connect = function () {
  return new Promise(function (resolve, reject) {
    resolve({});
  });
};


/**
 * Provides access to external gamepads connected via USB.
 *
 * This is a wrapper around the `navigator.getGamepads` API which provides
 * mappings to common controllers. You can either listen to events which
 * get fired when buttons/axes change or look at the `state` of a gamepad
 * in your game loop.
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.getGamepads = function () {
  return new Promise(function (resolve, reject) {
    return gamepadController;

    // TODO: Turn `WebKitPlatform` and `FirefoxPlatform` into promises.
  });
};


/**
 * Provides access to mobile-based gamepads using WebRTC.
 *
 * This controller uses a device's accelerometer (using `devicemotion` events
 * to determine controls to turn left/right/forward/backward and to accelerate
 * via `touchstart`/`touchmove`/touchend` events).
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.getWebRTCMobileGamepads = function () {
  return new Promise(function (resolve, reject) {
    resolve([]);
  });
};


/**
 * Provides access to mobile-based gamepads using WebSockets.
 *
 * This controller uses a device's accelerometer (using `devicemotion` events
 * to determine controls to turn left/right/forward/backward and to accelerate
 * via `touchstart`/`touchmove`/touchend` events).
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.getWebSocketMobileGamepads = function () {
  return new Promise(function (resolve, reject) {
    resolve([]);
  });
};


/**
 * Returns a list of the user's friends who have ever played the game.
 *
 * The Promise resolves with a list of `User` objects for each friend of the
 * user's who has ever played (or is actively playing) the game.
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.getFriends = function () {
  return new Promise(function (resolve, reject) {
    resolve([]);
  });
};


/**
 * Returns a list of the user's friends who are actively playing the game.
 *
 * The Promise resolves with a list of `User` objects for each friend of the
 * user's who is actively playing the game.
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.getFriendsPlaying = function () {
  return new Promise(function (resolve, reject) {
    resolve([]);
  });
};


/**
 * Ends the user's gameplay timer.
 *
 * Communicates with the Galaxy API that a user has stopped playing the game.
 * The game is removed from the list of games the user is actively playing and
 * the playtime counter is stopped, tallying the counter to the user's overall
 * playtime for the game.
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.endPlaying = function () {
  return new Promise(function (resolve, reject) {
    if (!this.playing) {
      return reject({reason: 'User must first be playing the game.'});
    }
    resolve();
  });
};


/**
 * Pauses the game and the user's gameplay timer.
 *
 * Communicates with the Galaxy API that a user has paused the game. The
 * user's playtime counter for the game is paused. It is the game's
 * responsibility to show a paused screen or overlay.
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.pause = function () {
  return new Promise(function (resolve, reject) {
    this.paused = true;
    resolve();
  });
};


/**
 * Posts a JSON blob to a friend of the user's who is also playing the game.
 *
 * Relays any arbitrary blob (serialised JSON, object or string) from one
 * friend to another using the Galaxy API. Using Redis PubSub, users are
 * automatically subscribed to their friend's data channels. It is the game's
 * responsibility to render the blobs as chat messages or virtual games in
 * the game.
 *
 * If the user is not online, the blob is stored on the server and relayed
 * to the friend when the friend plays the game next time.
 *
 * The ID of the friend appears as the `id` property in the user's `User`
 * object (returned from `galaxy.getFriends` or `galaxy.getFriendsPlaying`).
 *
 * This method is throttled by the Galaxy API.
 *
 * @param {String} friendID The ID of the friend.
 * @param {String} blob The type of data to store (i.e., a key name).
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.postFriend = function (friendID, blob) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};


/**
 * Retrieves a JSON blob on the Galaxy API server.
 *
 * Returns a stringified JSON blob. It is the game's responsibility to
 * reconstitute the game from saved game state or user data.
 *
 * This method is throttled by the Galaxy API.
 *
 * @param {String} type The type of data to store (i.e., a key name).
 * @param {String} value The value of data to store (i.e., any arbitrary blob).
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.retrieve = function (type) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};


/**
 * Stores a JSON blob on the Galaxy API server.
 *
 * Stores any arbitrary blob (JSON, object or string) in the Galaxy database.
 * This can be anything pertaining to the game state or any user data.
 *
 * This method is throttled by the Galaxy API.
 *
 * @param {String} type The type of data to store (i.e., a key name).
 * @param {String} blob The value of data to store (i.e., any arbitrary blob).
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.store = function (type, blob) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};


/**
 * Unpauses the game and the user's gameplay timer.
 *
 * Communicates with the Galaxy API that a user has resumed the game. The user's
 * playtime counter for the game is resumed. It is the game's responsibility
 * to show a paused screen or overlay.
 *
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.unpause = function () {
  return new Promise(function (resolve, reject) {
    if (!this.paused) {
      return reject({reason: 'User must first have paused the game.'});
    }
    resolve();
  });
};


/**
 * Updates the user's score for a particular game leaderboard.
 *
 * The leaderboard must be already be created (via the REST API). The number
 * of points are incremented to the user's leaderboard score.
 *
 * This method is throttled by the Galaxy API.
 *
 * @param {String} board The slug of the game leaderboard.
 * @param {String} increment The number of points to increment by.
 * @returns {Promise}
 * @memberOf galaxy
 */
galaxy.updateScore = function (board, increment) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};


// Export the module via AMD, CommonJS or as a browser global.
// Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if (typeof exports === 'object') {
    // NodeJS. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like NodeJS.
    module.exports = factory();
  } else {
    // Browser globals (root is window).
    root.galaxy = factory();
  }
}(this, function () {
  // Just return a value to define the module export. This example returns an
  // object, but the module can return a function as the exported value.
  return galaxy;
}));

})();

}, {"kallaspriit/HTML5-JavaScript-Gamepad-Controller-Library@c38f53b:/gamepad.js":2}],
2: [function(require, module, exports) {
/*
 * Copyright 2012 Priit Kallas <kallaspriit@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function(exports) {
	'use strict';

	/**
	 * A null function - does nothing, returns nothing
	 */
	var nullFunction = function() {};

	/**
	 * The null platform, which doesn't support anything
	 */
	var nullPlatform = {
		getType: function() {
			return 'null';
		},
		isSupported: function() {
			return false;
		},
		update: nullFunction
	};

	/**
	 * This strategy uses a timer function to call an update function.
	 * The timer (re)start function can be provided or the strategy reverts to
	 * one of the window.*requestAnimationFrame variants.
	 *
	 * @class AnimFrameUpdateStrategy
	 * @constructor
	 * @param {Function} [requestAnimationFrame] function to use for timer creation
	 * @module Gamepad
	 */
	var AnimFrameUpdateStrategy = function(requestAnimationFrame) {
		var that = this;
		var win = window;

		this.update = nullFunction;

		this.requestAnimationFrame = requestAnimationFrame || win.requestAnimationFrame ||
			win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame;

		/**
		 * This method calls the (user) update and restarts itself
		 * @method tickFunction
		 */
		this.tickFunction = function() {
			that.update();
			that.startTicker();
		};

		/**
		 * (Re)Starts the ticker
		 * @method startTicker
		 */
		this.startTicker = function() {
			that.requestAnimationFrame.apply(win, [that.tickFunction]);
		};
	};

	/**
	 * Starts the update strategy using the given function
	 *
	 * @method start
	 * @param {Function} updateFunction the function to call at each update
	 */
	AnimFrameUpdateStrategy.prototype.start = function(updateFunction) {
		this.update = updateFunction || nullFunction;
		this.startTicker();
	};

	/**
	 * This strategy gives the user the ability to call the library internal
	 * update function on request. Use this strategy if you already have a
	 * timer function running by requestAnimationFrame and you need fine control
	 * over when the gamepads are updated.
	 *
	 * @class ManualUpdateStrategy
	 * @constructor
	 * @module Gamepad
	 */
	var ManualUpdateStrategy = function() {

	};

	/**
	 * Calls the update function in the started state. Does nothing otherwise.
	 * @method update
	 */
	ManualUpdateStrategy.prototype.update = nullFunction;

	/**
	 * Starts the update strategy using the given function
	 *
	 * @method start
	 * @param {Function} updateFunction the function to call at each update
	 */
	ManualUpdateStrategy.prototype.start = function(updateFunction) {
		this.update = updateFunction || nullFunction;
	};

	/**
	 * This platform is for webkit based environments that need to be polled
	 * for updates.
	 *
	 * @class WebKitPlatform
	 * @constructor
	 * @param {Object} listener the listener to provide _connect and _disconnect callbacks
	 * @param {Function} gamepadGetter the poll function to return an array of connected gamepads
	 * @module Gamepad
	 */
	var WebKitPlatform = function(listener, gamepadGetter) {
		this.listener = listener;
		this.gamepadGetter = gamepadGetter;
		this.knownGamepads = [];
	};

	/**
	 * Provides a platform object that returns true for isSupported() if valid.
	 * @method factory
	 * @static
	 * @param {Object} listener the listener to use
	 * @return {Object} a platform object
	 */
	WebKitPlatform.factory = function(listener) {
		var platform = nullPlatform;
		var navigator = window && window.navigator;

		if (navigator) {
			if (typeof(navigator.getGamepads) !== 'undefined') {
				platform = new WebKitPlatform(listener, function() {
					return navigator.getGamepads();
				});
			} else if (typeof(navigator.webkitGamepads) !== 'undefined') {
				platform = new WebKitPlatform(listener, function() {
					return navigator.webkitGamepads();
				});
			} else if (typeof(navigator.webkitGetGamepads) !== 'undefined') {
				platform = new WebKitPlatform(listener, function() {
					return navigator.webkitGetGamepads();
				});
			}
		}

		return platform;
	};

	/**
	 * @method getType()
	 * @static
	 * @return {String} 'WebKit'
	 */
	WebKitPlatform.getType = function() {
		return 'WebKit';
	},

	/**
	 * @method getType()
	 * @return {String} 'WebKit'
	 */
	WebKitPlatform.prototype.getType = function() {
		return WebKitPlatform.getType();
	},

	/**
	 * @method isSupported
	 * @return {Boolean} true
	 */
	WebKitPlatform.prototype.isSupported = function() {
		return true;
	};

	/**
	 * Queries the currently connected gamepads and reports any changes.
	 * @method update
	 */
	WebKitPlatform.prototype.update = function() {
		var that = this;
		var gamepads = Array.prototype.slice.call(this.gamepadGetter(), 0);
		var gamepad;
		var i;

		for (i = this.knownGamepads.length - 1; i >= 0; i--) {
			gamepad = this.knownGamepads[i];
			if (gamepads.indexOf(gamepad) < 0) {
				this.knownGamepads.splice(i, 1);
				this.listener._disconnect(gamepad);
			}
		}

		for (i = 0; i < gamepads.length; i++) {
			gamepad = gamepads[i];
			if (gamepad && (that.knownGamepads.indexOf(gamepad) < 0)) {
				that.knownGamepads.push(gamepad);
				that.listener._connect(gamepad);
			}
		}
	};

	/**
	 * This platform is for mozilla based environments that provide gamepad
	 * updates via events.
	 *
	 * @class FirefoxPlatform
	 * @constructor
	 * @module Gamepad
	 */
	var FirefoxPlatform = function(listener) {
		this.listener = listener;

		window.addEventListener('gamepadconnected', function(e) {
			listener._connect(e.gamepad);
		});
		window.addEventListener('gamepaddisconnected', function(e) {
			listener._disconnect(e.gamepad);
		});
	};

	/**
	 * Provides a platform object that returns true for isSupported() if valid.
	 * @method factory
	 * @static
	 * @param {Object} listener the listener to use
	 * @return {Object} a platform object
	 */
	FirefoxPlatform.factory = function(listener) {
		var platform = nullPlatform;

		if (window && (typeof(window.addEventListener) !== 'undefined')) {
			platform = new FirefoxPlatform(listener);
		}

		return platform;
	};

	/**
	 * @method getType()
	 * @static
	 * @return {String} 'Firefox'
	 */
	FirefoxPlatform.getType = function() {
		return 'Firefox';
	},

	/**
	 * @method getType()
	 * @return {String} 'Firefox'
	 */
	FirefoxPlatform.prototype.getType = function() {
		return FirefoxPlatform.getType();
	},

	/**
	 * @method isSupported
	 * @return {Boolean} true
	 */
	FirefoxPlatform.prototype.isSupported = function() {
		var navigator = window && window.navigator;
		return navigator.userAgent.indexOf('Firefox') !== -1;
	};

	/**
	 * Does nothing on the Firefox platform
	 * @method update
	 */
	FirefoxPlatform.prototype.update = nullFunction;

	/**
	 * Provides simple interface and multi-platform support for the gamepad API.
	 *
	 * You can change the deadzone and maximizeThreshold parameters to suit your
	 * taste but the defaults should generally work fine.
	 *
	 * @class Gamepad
	 * @constructor
	 * @param {Object} [updateStrategy] an update strategy, defaulting to
	 *		{{#crossLink "AnimFrameUpdateStrategy"}}{{/crossLink}}
	 * @module Gamepad
	 * @author Priit Kallas <kallaspriit@gmail.com>
	 */
	var Gamepad = function(updateStrategy) {
		this.updateStrategy = updateStrategy || new AnimFrameUpdateStrategy();
		this.gamepads = [];
		this.listeners = {};
		this.platform = nullPlatform;
		this.deadzone = 0.03;
		this.maximizeThreshold = 0.97;
	};

	/**
	 * The available update strategies
	 * @property UpdateStrategies
	 * @param {AnimFrameUpdateStrategy} AnimFrameUpdateStrategy
	 * @param {ManualUpdateStrategy} ManualUpdateStrategy
	 */
	Gamepad.UpdateStrategies = {
		AnimFrameUpdateStrategy: AnimFrameUpdateStrategy,
		ManualUpdateStrategy: ManualUpdateStrategy
	};

	/**
	 * List of factories of supported platforms. Currently available platforms:
	 * {{#crossLink "WebKitPlatform"}}{{/crossLink}},
	 * {{#crossLink "FirefoxPlatform"}}{{/crossLink}},
	 * @property PlatformFactories
	 * @type {Array}
	 */
	Gamepad.PlatformFactories = [FirefoxPlatform.factory, WebKitPlatform.factory];

	/**
	 * List of supported controller types.
	 *
	 * @property Type
	 * @param {String} Type.N64 Retrolink N64 controller
	 * @param {String} Type.PLAYSTATION Playstation controller
	 * @param {String} Type.LOGITECH Logitech controller
	 * @param {String} Type.XBOX XBOX controller
	 * @param {String} Type.UNKNOWN Unknown controller
	 */
	Gamepad.Type = {
		N64: 'n64',
		PLAYSTATION: 'playstation',
		LOGITECH: 'logitech',
		XBOX: 'xbox',
		UNKNOWN: 'unknown'
	};

	/*
	 * List of events you can expect from the library.
	 *
	 * CONNECTED, DISCONNECTED and UNSUPPORTED events include the gamepad in
	 * question and tick provides the list of all connected gamepads.
	 *
	 * BUTTON_DOWN and BUTTON_UP events provide an alternative to polling button states at each tick.
	 *
	 * AXIS_CHANGED is called if a value of some specific axis changes.
	 */
	Gamepad.Event = {
		/**
		 * Triggered when a new controller connects.
		 *
		 * @event connected
		 * @param {Object} device
		 */
		CONNECTED: 'connected',

		/**
		 * Called when an unsupported controller connects.
		 *
		 * @event unsupported
		 * @param {Object} device
		 * @deprecated not used anymore. Any controller is supported.
		 */
		UNSUPPORTED: 'unsupported',

		/**
		 * Triggered when a controller disconnects.
		 *
		 * @event disconnected
		 * @param {Object} device
		 */
		DISCONNECTED: 'disconnected',

		/**
		 * Called regularly with the latest controllers info.
		 *
		 * @event tick
		 * @param {Array} gamepads
		 */
		TICK: 'tick',

		/**
		 * Called when a gamepad button is pressed down.
		 *
		 * @event button-down
		 * @param {Object} event
		 * @param {Object} event.gamepad The gamepad object
		 * @param {String} event.control Control name
		 */
		BUTTON_DOWN: 'button-down',

		/**
		 * Called when a gamepad button is released.
		 *
		 * @event button-up
		 * @param {Object} event
		 * @param {Object} event.gamepad The gamepad object
		 * @param {String} event.control Control name
		 */
		BUTTON_UP: 'button-up',

		/**
		 * Called when gamepad axis value changed.
		 *
		 * @event axis-changed
		 * @param {Object} event
		 * @param {Object} event.gamepad The gamepad object
		 * @param {String} event.axis Axis name
		 * @param {Number} event.value New axis value
		 */
		AXIS_CHANGED: 'axis-changed'
	};

	/**
	 * List of standard button names. The index is the according standard button
	 * index as per standard.
	 *
	 * @property StandardButtons
	 */
	Gamepad.StandardButtons = [
		'FACE_1', 'FACE_2', 'FACE_3', 'FACE_4',
		'LEFT_TOP_SHOULDER', 'RIGHT_TOP_SHOULDER', 'LEFT_BOTTOM_SHOULDER', 'RIGHT_BOTTOM_SHOULDER',
		'SELECT_BACK', 'START_FORWARD', 'LEFT_STICK', 'RIGHT_STICK',
		'DPAD_UP', 'DPAD_DOWN', 'DPAD_LEFT', 'DPAD_RIGHT',
		'HOME'
	];

	/**
	 * List of standard axis names. The index is the according standard axis
	 * index as per standard.
	 *
	 * @property StandardAxes
	 */
	Gamepad.StandardAxes = ['LEFT_STICK_X', 'LEFT_STICK_Y', 'RIGHT_STICK_X', 'RIGHT_STICK_Y'];

	var getControlName = function(names, index, extraPrefix) {
		return (index < names.length) ? names[index] : extraPrefix + (index - names.length + 1);
	};

	/**
	 * The standard mapping that represents the mapping as per definition.
	 * Each button and axis map to the same index.
	 *
	 * @property StandardMapping
	 */
	Gamepad.StandardMapping = {
		env: {},
		buttons: {
			byButton: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
		},
		axes: {
			byAxis: [0, 1, 2, 3]
		}
	};

	/**
	 * Mapping of various gamepads that differ from the standard mapping on
	 * different platforms too unify their buttons and axes.
	 *
	 * Each mapping should have an 'env' object, which describes the environment
	 * in which the mapping is active. The more entries such an environment has,
	 * the more specific it is.
	 *
	 * Mappings are expressed for both buttons and axes. Buttons might refer to
	 * axes if they are notified as such.
	 *
	 * @property Mappings
	 */
	Gamepad.Mappings = [
		// Retrolink N64 controller on Firefox
		{
			env: {
				platform: FirefoxPlatform.getType(),
				type: Gamepad.Type.N64
			},
			buttons: {
				byButton: [
					// TODO: Figure out which buttons to map A and Z buttons to.
					2, // FACE_1 -- C-down button
					1, // FACE_2 -- C-right button
					3, // FACE_3 -- C-left button
					0, // FACE_4 -- C-down button
					4, // LEFT_TOP_SHOULDER -- L button
					5, // RIGHT_TOP_SHOULDER -- R button
					-1, // LEFT_BOTTOM_SHOULDER -- missing on controller
					-1, // RIGHT_BOTTOM_SHOULDER -- missing on controller
					8, // SELECT_BACK -- B button (is this right?)
					9, // START_FORWARD -- START button
					-1, // LEFT_STICK -- missing on controller
					-1, // RIGHT_STICK -- missing on controller
					12, // DPAD_UP -- not supported by API (but may eventually)
					13, // DPAD_DOWN -- not supported by API (but may eventually)
					14, // DPAD_LEFT -- not supported by API (but may eventually)
					15, // DPAD_RIGHT -- not supported by API (but may eventually)
					-1 // HOME -- missing on controller (could be START/B?)
				]
			},
			axes: {
				byAxis: [
					1, // LEFT_STICK_X
					2, // LEFT_STICK_Y
					-1, // RIGHT_STICK_X
					-1 // RIGHT_STICK_Y
				]
			}
		},
		// Retrolink N64 controller on WebKit
		{
			env: {
				platform: WebKitPlatform.getType(),
				type: Gamepad.Type.N64
			},
			buttons: {
				byButton: [
					// TODO: Figure out which buttons to map A and Z buttons to.
					2, // FACE_1 -- C-down button
					1, // FACE_2 -- C-right button
					3, // FACE_3 -- C-left button
					0, // FACE_4 -- C-down button
					4, // LEFT_TOP_SHOULDER -- L button
					5, // RIGHT_TOP_SHOULDER -- R button
					-1, // LEFT_BOTTOM_SHOULDER -- missing on controller
					-1, // RIGHT_BOTTOM_SHOULDER -- missing on controller
					8, // SELECT_BACK -- B button (is this right?)
					9, // START_FORWARD -- START button
					-1, // LEFT_STICK -- missing on controller
					-1, // RIGHT_STICK -- missing on controller
					12, // DPAD_UP -- D-Pad-up button
					13, // DPAD_DOWN -- D-Pad-down button
					14, // DPAD_LEFT -- D-Pad-left button
					15, // DPAD_RIGHT -- D-Pad-right button
					-1 // HOME -- missing on controller (could be START/B?)
				]
			},
			axes: {
				byAxis: [
					0, // LEFT_STICK_X
					1, // LEFT_STICK_Y
					-1, // RIGHT_STICK_X
					-1 // RIGHT_STICK_Y
				]
			}
		},
		// XBOX360 controller on Firefox
		{
			env: {
				platform: FirefoxPlatform.getType(),
				type: Gamepad.Type.XBOX
			},
			buttons: {
				byButton: [0, 1, 2, 3, 4, 5, 15, 16, 9, 8, 6, 7, 11, 12, 13, 14, 10]
			},
			axes: {
				byAxis: [0, 1, 2, 3]
			}
		},
		// PS3 controller on Firefox
		{
			env: {
				platform: FirefoxPlatform.getType(),
				type: Gamepad.Type.PLAYSTATION
			},
			buttons: {
				byButton: [14, 13, 15, 12, 10, 11, 8, 9, 0, 3, 1, 2, 4, 6, 7, 5, 16]
			},
			axes: {
				byAxis: [0, 1, 2, 3]
			}
		},
		// Logitech gamepad on WebKit
		{
			env: {
				platform: WebKitPlatform.getType(),
				type: Gamepad.Type.LOGITECH
			},
			buttons: { // TODO: This can't be right - LEFT/RIGHT_STICK have same mappings as HOME/DPAD_UP
				byButton: [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 10]
			},
			axes: {
				byAxis: [0, 1, 2, 3]
			}
		},
		// Logitech gamepad on Firefox
		{
			env: {
				platform: FirefoxPlatform.getType(),
				type: Gamepad.Type.LOGITECH
			},
			buttons: {
				byButton: [0, 1, 2, 3, 4, 5, -1, -1, 6, 7, 8, 9, 11, 12, 13, 14, 10],
				byAxis: [-1, -1, -1, -1, -1, -1, [2, 0, 1],
					[2, 0, -1]
				]
			},
			axes: {
				byAxis: [0, 1, 3, 4]
			}
		}
	];

	/**
	 * Initializes the gamepad.
	 *
	 * You usually want to bind to the events first and then initialize it.
	 *
	 * @method init
	 * @return {Boolean} true if a supporting platform was detected, false otherwise.
	 */
	Gamepad.prototype.init = function() {
		var platform = Gamepad.resolvePlatform(this);
		var that = this;

		this.platform = platform;
		this.updateStrategy.start(function() {
			that._update();
		});

		return platform.isSupported();
	};

	/**
	 * Binds a listener to a gamepad event.
	 *
	 * @method bind
	 * @param {String} event Event to bind to, one of Gamepad.Event..
	 * @param {Function} listener Listener to call when given event occurs
	 * @return {Gamepad} Self
	 */
	Gamepad.prototype.bind = function(event, listener) {
		if (typeof(this.listeners[event]) === 'undefined') {
			this.listeners[event] = [];
		}

		this.listeners[event].push(listener);

		return this;
	};

	/**
	 * Removes listener of given type.
	 *
	 * If no type is given, all listeners are removed. If no listener is given, all
	 * listeners of given type are removed.
	 *
	 * @method unbind
	 * @param {String} [type] Type of listener to remove
	 * @param {Function} [listener] The listener function to remove
	 * @return {Boolean} Was unbinding the listener successful
	 */
	Gamepad.prototype.unbind = function(type, listener) {
		if (typeof(type) === 'undefined') {
			this.listeners = {};

			return;
		}

		if (typeof(listener) === 'undefined') {
			this.listeners[type] = [];

			return;
		}

		if (typeof(this.listeners[type]) === 'undefined') {
			return false;
		}

		for (var i = 0; i < this.listeners[type].length; i++) {
			if (this.listeners[type][i] === listener) {
				this.listeners[type].splice(i, 1);

				return true;
			}
		}

		return false;
	};

	/**
	 * Returns the number of connected gamepads.
	 *
	 * @method count
	 * @return {Number}
	 */
	Gamepad.prototype.count = function() {
		return this.gamepads.length;
	};

	/**
	 * Fires an internal event with given data.
	 *
	 * @method _fire
	 * @param {String} event Event to fire, one of Gamepad.Event..
	 * @param {*} data Data to pass to the listener
	 * @private
	 */
	Gamepad.prototype._fire = function(event, data) {
		if (typeof(this.listeners[event]) === 'undefined') {
			return;
		}

		for (var i = 0; i < this.listeners[event].length; i++) {
			this.listeners[event][i].apply(this.listeners[event][i], [data]);
		}
	};

	/**
	 * @method getNullPlatform
	 * @static
	 * @return {Object} a platform that does not support anything
	 */
	Gamepad.getNullPlatform = function() {
		return Object.create(nullPlatform);
	};

	/**
	 * Resolves platform.
	 *
	 * @method resolvePlatform
	 * @static
	 * @param listener {Object} the listener to handle _connect() or _disconnect() calls
	 * @return {Object} A platform instance
	 */
	Gamepad.resolvePlatform = function(listener) {
		var platform = nullPlatform;
		var i;

		for (i = 0; !platform.isSupported() && (i < Gamepad.PlatformFactories.length); i++) {
			platform = Gamepad.PlatformFactories[i](listener);
		}

		return platform;
	};

	/**
	 * Registers given gamepad.
	 *
	 * @method _connect
	 * @param {Object} gamepad Gamepad to connect to
	 * @private
	 */
	Gamepad.prototype._connect = function(gamepad) {
		var mapping = this._resolveMapping(gamepad);
		var count;
		var i;

		//gamepad.mapping = this._resolveMapping(gamepad);
		gamepad.state = {};
		gamepad.lastState = {};
		gamepad.updater = [];

		count = mapping.buttons.byButton.length;
		for (i = 0; i < count; i++) {
			this._addButtonUpdater(gamepad, mapping, i);
		}

		count = mapping.axes.byAxis.length;
		for (i = 0; i < count; i++) {
			this._addAxisUpdater(gamepad, mapping, i);
		}

		this.gamepads[gamepad.index] = gamepad;

		this._fire(Gamepad.Event.CONNECTED, gamepad);
	};

	/**
	 * Adds an updater for a button control
	 *
	 * @method _addButtonUpdater
	 * @private
	 * @param {Object} gamepad the gamepad for which to create the updater
	 * @param {Object} mapping the mapping on which to work on
	 * @param {Number} index button index
	 */
	Gamepad.prototype._addButtonUpdater = function(gamepad, mapping, index) {
		var updater = nullFunction;
		var controlName = getControlName(Gamepad.StandardButtons, index, 'EXTRA_BUTTON_');
		var getter = this._createButtonGetter(gamepad, mapping.buttons, index);
		var that = this;
		var buttonEventData = {
			gamepad: gamepad,
			control: controlName
		};

		gamepad.state[controlName] = 0;
		gamepad.lastState[controlName] = 0;

		updater = function() {
			var value = getter();
			var lastValue = gamepad.lastState[controlName];
			var isDown = value > 0.5;
			var wasDown = lastValue > 0.5;

			gamepad.state[controlName] = value;

			if (isDown && !wasDown) {
				that._fire(Gamepad.Event.BUTTON_DOWN, Object.create(buttonEventData));
			} else if (!isDown && wasDown) {
				that._fire(Gamepad.Event.BUTTON_UP, Object.create(buttonEventData));
			}

			if ((value !== 0) && (value !== 1) && (value !== lastValue)) {
				that._fireAxisChangedEvent(gamepad, controlName, value);
			}

			gamepad.lastState[controlName] = value;
		};

		gamepad.updater.push(updater);
	};

	/**
	 * Adds an updater for an axis control
	 *
	 * @method _addAxisUpdater
	 * @private
	 * @param {Object} gamepad the gamepad for which to create the updater
	 * @param {Object} mapping the mapping on which to work on
	 * @param {Number} index axis index
	 */
	Gamepad.prototype._addAxisUpdater = function(gamepad, mapping, index) {
		var updater = nullFunction;
		var controlName = getControlName(Gamepad.StandardAxes, index, 'EXTRA_AXIS_');
		var getter = this._createAxisGetter(gamepad, mapping.axes, index);
		var that = this;

		gamepad.state[controlName] = 0;
		gamepad.lastState[controlName] = 0;

		updater = function() {
			var value = getter();
			var lastValue = gamepad.lastState[controlName];

			gamepad.state[controlName] = value;

			if ((value !== lastValue)) {
				that._fireAxisChangedEvent(gamepad, controlName, value);
			}

			gamepad.lastState[controlName] = value;
		};

		gamepad.updater.push(updater);
	};

	/**
	 * Fires an AXIS_CHANGED event
	 * @method _fireAxisChangedEvent
	 * @private
	 * @param {Object} gamepad the gamepad to notify for
	 * @param {String} controlName name of the control that changes its value
	 * @param {Number} value the new value
	 */
	Gamepad.prototype._fireAxisChangedEvent = function(gamepad, controlName, value) {
		var eventData = {
			gamepad: gamepad,
			axis: controlName,
			value: value
		};

		this._fire(Gamepad.Event.AXIS_CHANGED, eventData);
	};

	/**
	 * Creates a getter according to the mapping entry for the specific index.
	 * Currently supported entries:
	 *
	 * buttons.byButton[index]: Number := Index into gamepad.buttons; -1 tests byAxis
	 * buttons.byAxis[index]: Array := [Index into gamepad.axes; Zero Value, One Value]
	 *
	 * @method _createButtonGetter
	 * @private
	 * @param {Object} gamepad the gamepad for which to create a getter
	 * @param {Object} buttons the mappings entry for the buttons
	 * @param {Number} index the specific button entry
	 * @return {Function} a getter returning the value for the requested button
	 */
	Gamepad.prototype._createButtonGetter = (function() {
		var nullGetter = function() {
			return 0;
		};

		var createRangeGetter = function(valueGetter, from, to) {
			var getter = nullGetter;

			if (from < to) {
				getter = function() {
					var range = to - from;
					var value = valueGetter();

					value = (value - from) / range;

					return (value < 0) ? 0 : value;
				};
			} else if (to < from) {
				getter = function() {
					var range = from - to;
					var value = valueGetter();

					value = (value - to) / range;

					return (value > 1) ? 0 : (1 - value);
				};
			}

			return getter;
		};

		var isArray = function(thing) {
			return Object.prototype.toString.call(thing) === '[object Array]';
		};

		return function(gamepad, buttons, index) {
			var getter = nullGetter;
			var entry;
			var that = this;

			entry = buttons.byButton[index];
			if (entry !== -1) {
				if ((typeof(entry) === 'number') && (entry < gamepad.buttons.length)) {
					getter = function() {
						var value = gamepad.buttons[entry];

						if (typeof value === 'number') {
							return value;
						}

						if (typeof value.value === 'number') {
							return value.value;
						}

						return 0;
					};
				}
			} else if (buttons.byAxis && (index < buttons.byAxis.length)) {
				entry = buttons.byAxis[index];
				if (isArray(entry) && (entry.length == 3) && (entry[0] < gamepad.axes.length)) {
					getter = function() {
						var value = gamepad.axes[entry[0]];

						return that._applyDeadzoneMaximize(value);
					};

					getter = createRangeGetter(getter, entry[1], entry[2]);
				}
			}

			return getter;
		};
	})();

	/**
	 * Creates a getter according to the mapping entry for the specific index.
	 * Currently supported entries:
	 *
	 * axes.byAxis[index]: Number := Index into gamepad.axes; -1 ignored
	 *
	 * @method _createAxisGetter
	 * @private
	 * @param {Object} gamepad the gamepad for which to create a getter
	 * @param {Object} axes the mappings entry for the axes
	 * @param {Number} index the specific axis entry
	 * @return {Function} a getter returning the value for the requested axis
	 */
	Gamepad.prototype._createAxisGetter = (function() {
		var nullGetter = function() {
			return 0;
		};

		return function(gamepad, axes, index) {
			var getter = nullGetter;
			var entry;
			var that = this;

			entry = axes.byAxis[index];
			if (entry !== -1) {
				if ((typeof(entry) === 'number') && (entry < gamepad.axes.length)) {
					getter = function() {
						var value = gamepad.axes[entry];

						return that._applyDeadzoneMaximize(value);
					};
				}
			}

			return getter;
		};
	})();

	/**
	 * Disconnects from given gamepad.
	 *
	 * @method _disconnect
	 * @param {Object} gamepad Gamepad to disconnect
	 * @private
	 */
	Gamepad.prototype._disconnect = function(gamepad) {
		var newGamepads = [],
			i;

		if (typeof(this.gamepads[gamepad.index]) !== 'undefined') {
			delete this.gamepads[gamepad.index];
		}

		for (i = 0; i < this.gamepads.length; i++) {
			if (typeof(this.gamepads[i]) !== 'undefined') {
				newGamepads[i] = this.gamepads[i];
			}
		}

		this.gamepads = newGamepads;

		this._fire(Gamepad.Event.DISCONNECTED, gamepad);
	};

	/**
	 * Resolves controller type from its id.
	 *
	 * @method _resolveControllerType
	 * @param {String} id Controller id
	 * @return {String} Controller type, one of Gamepad.Type
	 * @private
	 */
	Gamepad.prototype._resolveControllerType = function(id) {
		// Lowercase and strip all extra whitespace.
		id = id.toLowerCase().replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');

		if (id.indexOf('playstation') !== -1) {
			return Gamepad.Type.PLAYSTATION;
		} else if (
			id.indexOf('logitech') !== -1 || id.indexOf('wireless gamepad') !== -1) {
			return Gamepad.Type.LOGITECH;
		} else if (id.indexOf('xbox') !== -1 || id.indexOf('360') !== -1) {
			return Gamepad.Type.XBOX;
		} else if ((id.indexOf('79-6-generic') !== -1 && id.indexOf('joystick') !== -1) ||
			(id.indexOf('vendor: 0079 product: 0006') !== -1 &&
				id.indexOf('generic usb joystick') !== -1)) {
			return Gamepad.Type.N64;
		} else {
			return Gamepad.Type.UNKNOWN;
		}
	};

	/**
	 * @method _resolveMapping
	 * @private
	 * @param {Object} gamepad the gamepad for which to resolve the mapping
	 * @return {Object} a mapping object for the given gamepad
	 */
	Gamepad.prototype._resolveMapping = function(gamepad) {
		var mappings = Gamepad.Mappings;
		var mapping = null;
		var env = {
			platform: this.platform.getType(),
			type: this._resolveControllerType(gamepad.id)
		};
		var i;
		var test;

		for (i = 0; !mapping && (i < mappings.length); i++) {
			test = mappings[i];
			if (Gamepad.envMatchesFilter(test.env, env)) {
				mapping = test;
			}
		}

		return mapping || Gamepad.StandardMapping;
	};

	/**
	 * @method envMatchesFilter
	 * @static
	 * @param {Object} filter the filter object describing properties to match
	 * @param {Object} env the environment object that is matched against filter
	 * @return {Boolean} true if env is covered by filter
	 */
	Gamepad.envMatchesFilter = function(filter, env) {
		var result = true;
		var field;

		for (field in filter) {
			if (filter[field] !== env[field]) {
				result = false;
			}
		}

		return result;
	};

	/**
	 * Updates the controllers, triggering TICK events.
	 *
	 * @method _update
	 * @private
	 */
	Gamepad.prototype._update = function() {
		this.platform.update();

		this.gamepads.forEach(function(gamepad) {
			if (gamepad) {
				gamepad.updater.forEach(function(updater) {
					updater();
				});
			}
		});

		if (this.gamepads.length > 0) {
			this._fire(Gamepad.Event.TICK, this.gamepads);
		}
	},

	/**
	 * Applies deadzone and maximization.
	 *
	 * You can change the thresholds via deadzone and maximizeThreshold members.
	 *
	 * @method _applyDeadzoneMaximize
	 * @param {Number} value Value to modify
	 * @param {Number} [deadzone] Deadzone to apply
	 * @param {Number} [maximizeThreshold] From which value to maximize value
	 * @private
	 */
	Gamepad.prototype._applyDeadzoneMaximize = function(
		value,
		deadzone,
		maximizeThreshold) {
		deadzone = typeof(deadzone) !== 'undefined' ? deadzone : this.deadzone;
		maximizeThreshold = typeof(maximizeThreshold) !== 'undefined' ? maximizeThreshold : this.maximizeThreshold;

		if (value >= 0) {
			if (value < deadzone) {
				value = 0;
			} else if (value > maximizeThreshold) {
				value = 1;
			}
		} else {
			if (value > -deadzone) {
				value = 0;
			} else if (value < -maximizeThreshold) {
				value = -1;
			}
		}

		return value;
	};

	exports.Gamepad = Gamepad;

})(((typeof(module) !== 'undefined') && module.exports) || window);

}, {}]}, {}, {"1":""})
