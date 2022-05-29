const expresss = require('express');
const serverConfig = require('./configs/server.config');
const app = expresss();

app.listen(serverConfig.PORT, () => {
    console.log('listening on port :${serverConfig.PORT}');
});