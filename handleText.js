const config = require('./config');
const axios = require('axios');

module.exports = async (ctx) => {
    const { text } = ctx.message;

    if (text.length > 100) {
        ctx.reply('Your message is too long');
        return;
    }

    const sound = await axios({
        method: 'post',
        url: 'https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize',
        headers: {
            Authorization: `Bearer ${config.yandex.token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: new URLSearchParams({
            text: text,
            lang: 'ru-RU',
            voice: 'jane',
            emotion: 'good',
            format: 'oggopus',
            folderId: config.yandex.folderId,
        }),
        responseType: 'arraybuffer',
    });

    ctx.sendVoice({ source: sound.data, filename: 'autio' });
};
