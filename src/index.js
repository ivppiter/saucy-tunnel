const SauceTunnel = require('sauce-tunnel');
const user = process.env['SAUCE_USERNAME'];
const key = process.env['SAUCE_ACCESS_KEY'];

const tunnel = new SauceTunnel(user, key);

tunnel.start((status) => {
  if(status) {
    console.log('Sauce Tunnel ID:', tunnel.id)
  } else {
    console.log('Unable to start tunnel')
  }
});
