/**
 * Voyage-2 Team-Bears-23
 * @date 29/09/2017
 *
 * @ticket SLNKR-003
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */

module.exports = (handles: string | Array<string>, controller, bot) => {
    controller.hears(handles, 'direct_message,direct_mention,mention', (bot, message) => {
        bot.reply(message, 'Hey there! What\'s cracking?');
    });
}