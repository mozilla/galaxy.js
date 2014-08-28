(function () {

var gamepad = new galaxy.gamepad();
this.gamepad = gamepad;

gamepad.bind(galaxy.gamepad.Event.CONNECTED, function (device) {
  console.log('Connected', device);
});

if (!gamepad.init()) {
  console.error('Your browser does not support gamepads; download ' +
                'the latest Google Chrome or Mozilla Firefox.');
}

var gp = this.gamepad.gamepads[0];

var state = gp.state;
var lastState = gp.lastState;

console.log(state);

})();
