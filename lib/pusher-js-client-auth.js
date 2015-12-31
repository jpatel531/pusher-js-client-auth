var Pusher = require('pusher-websocket-iso');

console.warn( 'By using pusher-js client authentication you are exposing ' +
              'your application secret. DO NOT do this in production.' );

var ClientAuthorizer = require( './ClientAuthorizer' );

if(!Pusher) {
  console.warn('The Pusher JavaScript library has not been loaded. ' +
               'The client authentication module will not be set up.')
}
else {
  ClientAuthorizer.setUpPusher( Pusher );
}

module.exports = Pusher;