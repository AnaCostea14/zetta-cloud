export const enableAuth = function (server) {
    const cloud = server.httpServer.cloud

    cloud.use(function (handle){
        handle('request', function(env, next) {
            if (env.request.method === 'POST') {
                env.argo._routed = true
                env.response.statusCode = 200
                env.response.statusMessage = "OK"
            }
            next(env)
        })
    })
}