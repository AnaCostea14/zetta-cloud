var zetta = require('zetta');
var PORT = process.env.PORT || 3000;

zetta()
  .name('cloud')
  // .use(function (server) {
  //   const cloud = server.httpServer.cloud

  //   cloud.use(function (handle) {
  //     handle('request', function (env, next) {
  //       // if (env.request.method === 'POST') {
  //         env.argo._routed = true
  //       //   env.response.statusCode = 200
  //       //   env.response.statusMessage = "OK"
  //       // }
  //       next(env)
  //     })
  //   })
  // })
  .expose('*')
  .listen(PORT, function (err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('running on http://localhost:', PORT)
  });
