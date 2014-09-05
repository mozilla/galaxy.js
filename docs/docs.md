

<!-- Start /opt/galaxy.js/src/galaxy.js -->

galaxy

Copyright (C) 2014 Chris Van

MIT Licensed

## galaxy()

A simple drop-in JavaScript API to play multiplayer, web-based games
(with authentication, friends, leaderboards).

## authenticate()

Authenticates a user.

Opens a modal that overlays the game, prompting the user to sign in.
Returns a Promise that resolves with a `User` object for the user.

## beginPlaying()

Begins the user's gameplay timer.

Communicates with the Galaxy API that a user has begun playing the game.
If the user has not yet played the game before, the game is appended to the
list of games the user has played. If the user has played the game before,
the game is appended to the list of games the user is actively playing and
a counter is started which maintains the user's overall playtime for the
game.

## connect()

Connect to the Galaxy API and start a new game session.

Establishes a WebSocket connection to the Galaxy API, indicating that the
user is ready to start playing the game.

## getGamepads()

Provides access to external gamepads connected via USB.

This is a wrapper around the `navigator.getGamepads` API which provides
mappings to common controllers. You can either listen to events which
get fired when buttons/axes change or look at the `state` of a gamepad
in your game loop.

## getWebRTCMobileGamepads()

Provides access to mobile-based gamepads using WebRTC.

This controller uses a device's accelerometer (using `devicemotion` events
to determine controls to turn left/right/forward/backward and to accelerate
via `touchstart`/`touchmove`/touchend` events).

## getWebSocketMobileGamepads()

Provides access to mobile-based gamepads using WebSockets.

This controller uses a device's accelerometer (using `devicemotion` events
to determine controls to turn left/right/forward/backward and to accelerate
via `touchstart`/`touchmove`/touchend` events).

## getFriends()

Returns a list of the user's friends who have ever played the game.

The Promise resolves with a list of `User` objects for each friend of the
user's who has ever played (or is actively playing) the game.

## getFriendsPlaying()

Returns a list of the user's friends who are actively playing the game.

The Promise resolves with a list of `User` objects for each friend of the
user's who is actively playing the game.

## endPlaying()

Ends the user's gameplay timer.

Communicates with the Galaxy API that a user has stopped playing the game.
The game is removed from the list of games the user is actively playing and
the playtime counter is stopped, tallying the counter to the user's overall
playtime for the game.

## pause()

Pauses the game and the user's gameplay timer.

Communicates with the Galaxy API that a user has paused the game. The
user's playtime counter for the game is paused. It is the game's
responsibility to show a paused screen or overlay.

## postFriend(friendID, blob)

Posts a JSON blob to a friend of the user's who is also playing the game.

Relays any arbitrary blob (serialised JSON, object or string) from one
friend to another using the Galaxy API. Using Redis PubSub, users are
automatically subscribed to their friend's data channels. It is the game's
responsibility to render the blobs as chat messages or virtual games in
the game.

If the user is not online, the blob is stored on the server and relayed
to the friend when the friend plays the game next time.

The ID of the friend appears as the `id` property in the user's `User`
object (returned from `galaxy.getFriends` or `galaxy.getFriendsPlaying`).

This method is throttled by the Galaxy API.

### Params: 

* **String** *friendID* The ID of the friend.
* **String** *blob* The type of data to store (i.e., a key name).

## retrieve(type, value)

Retrieves a JSON blob on the Galaxy API server.

Returns a stringified JSON blob. It is the game's responsibility to
reconstitute the game from saved game state or user data.

This method is throttled by the Galaxy API.

### Params: 

* **String** *type* The type of data to store (i.e., a key name).
* **String** *value* The value of data to store (i.e., any arbitrary blob).

## store(type, blob)

Stores a JSON blob on the Galaxy API server.

Stores any arbitrary blob (JSON, object or string) in the Galaxy database.
This can be anything pertaining to the game state or any user data.

This method is throttled by the Galaxy API.

### Params: 

* **String** *type* The type of data to store (i.e., a key name).
* **String** *blob* The value of data to store (i.e., any arbitrary blob).

## unpause()

Unpauses the game and the user's gameplay timer.

Communicates with the Galaxy API that a user has resumed the game. The user's
playtime counter for the game is resumed. It is the game's responsibility
to show a paused screen or overlay.

## updateScore(board, increment)

Updates the user's score for a particular game leaderboard.

The leaderboard must be already be created (via the REST API). The number
of points are incremented to the user's leaderboard score.

This method is throttled by the Galaxy API.

### Params: 

* **String** *board* The slug of the game leaderboard.
* **String** *increment* The number of points to increment by.

<!-- End /opt/galaxy.js/src/galaxy.js -->

