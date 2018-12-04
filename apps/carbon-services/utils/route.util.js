const { HttpMethods } = require('../constants/http-methods');

/**
 * 
 * @param server -- instance of restify.createServer
 */
function constructRoutes(server) {
    /**
     * @param applicationRoutes -- route definition for app
     * @param baseUrl -- baseUrl for all the routes
     */
    return function (applicationRoutes, baseUrl) {
        if (!baseUrl) baseUrl = '';
        applicationRoutes.forEach(route => {
            const path = `${baseUrl}${route.path}`;
            switch (route.method) {
                case HttpMethods.GET: server.get(path, route.controller);
                    break;
                case HttpMethods.PUT: server.put(path, route.controller);
                    break;
                case HttpMethods.POST: server.post(path, route.controller);
                    break;
                case HttpMethods.DELETE: server.delete(path, route.controller);
                    break;
                case HttpMethods.PATCH: server.patch(path, route.controller);
                    break;
                case HttpMethods.HEAD: server.head(path, route.controller);
                    break;
                default: server.get(path, route.controller);
            }
            if (route.children && route.children.length > 0) {
                constructRoutes(server)(route.children, path);
            }
        });
    }
}

module.exports = {
    constructRoutes
};
