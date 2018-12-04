const { createServer } = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const { constructRoutes } = require('./utils/route.util');
const { applicationRoutes } = require('./routes');


const cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
    allowHeaders: ['x-token'],
    exposeHeaders: ['x-token-expiry']
});

const server = createServer();


server.pre(cors.preflight);
server.use(cors.actual);
constructRoutes(server)(applicationRoutes);


server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});