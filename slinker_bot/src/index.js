/**
 * Voyage-2 Team-Bears-23
 * @date 29/09/2017
 *
 * @ticket SLNKR-003
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
 
import * as Botkit from 'botkit';

let slinkerBot = function() {
    if (!process.env.token) {
        console.log('Error: Specify token in environment');
        process.exit(1);
    }
    
    const controller = Botkit.slackbot({});
    
    const bot = controller.spawn({
        token: process.env.token,
    }).startRTM();
    
    function addHandler(handles: string | Array<string>, fileName: string) {
        require('./commands/' + fileName + '.js')(handles, controller, bot);
    }
    
    addHandler(['hi', 'hey', 'hello'], 'greeting');
};

export { slinkerBot };