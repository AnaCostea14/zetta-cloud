var zetta = require('zetta');
var { enableAuth } = require('./auth')
var PORT = process.env.PORT || 3000;

zetta()
  .name('cloud')
  .use(enableAuth)
  .expose('*')
  .listen(PORT, function(err) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    console.log('running on http://localhost:', PORT)
  });
