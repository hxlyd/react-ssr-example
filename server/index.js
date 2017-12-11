const server = require('server');


const config = require('./config');

// const routers = require('./routers');
const middlewares = require('./middlewares');


server(
    config,
    middlewares
    // routers
)
.then(
    ctx => console.log(`server run at http://localhost:${ctx.options.port}!`)
)
