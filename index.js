const qrcode = require('qrcode-terminal');

const { Client, LocalAuth, MessageMedia} = require('whatsapp-web.js');
const client = new Client({ autostrategy: new LocalAuth() });

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on ('message', async(message) => {
    if(message.body.includes('cat')) {
        // const media = await MessageMedia.fronUrl('https://unsplash.com/photos/ECfPmkOVZPA')
     message.react('🐱')   
    return message.getChat().then(chat => chat.sendMessage('I Love Cat More Then You'))
    }

})

client.on ('message', async(message) => {
    if(message.body.includes('!menu')) {
        // const media = await MessageMedia.fronUrl('https://unsplash.com/photos/ECfPmkOVZPA')
     message.react('👻')   
    return message.getChat().then(chat => chat.sendMessage(' Ａｋａ付き ｐａｉｎ BOT \n 1. sticker \n 2. antilink \n 3. antispam \n 4. antifake'))
    }

})

client.initialize();