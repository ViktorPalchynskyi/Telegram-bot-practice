const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const config = require('./config');
const handleText = require('./handleText');

const bot = new Telegraf(config.bot.token);
bot.start((ctx) => ctx.reply('Send me any message to convert it to an audio'));
bot.help((ctx) => ctx.reply('Send me any message to convert it to an audio'));
bot.on(message('text'), handleText);

module.exports = bot;
