const dotenv = require('dotenv');
const path = require('node:path');

dotenv.config({
    path: path.join(__dirname, './', '.env'),
});


module.exports = {
    // mongodb: {
    //     uri: uri[process.env.NODE_ENV],
    // },
    server: {
        port: 3000,
    },
    app: {
        nodeEnv: process.env.NODE_ENV,
    },
    bot: {
        token: process.env.BOT_TOKEN,
    }, 
    yandex: {
        token: process.env.YANDEX_TOKEN,
        folderId: process.env.YANDEX_FOLDER_ID,
    }
};
