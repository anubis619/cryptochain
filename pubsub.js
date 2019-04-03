const PubNub = require ('pubnub');

const credentials = {
    publishKey: 'pub-c-c997d127-95c6-423e-8994-79dd4be8a031',
    subscribeKey: 'sub-c-f64492e8-5621-11e9-a377-422f056c2d08',
    secretKey: 'sec-c-NWE0YjgyMjUtNmJhOS00NDg3LTg5YWUtNjM4ZGVmMTFmZGI4'
};

const CHANNELS = {
    TEST: 'TEST'
};

class PubSub{
    constructor(){
        this.pubnub = new PubNub(credentials);

        this.pubnub.subscribe({channels: Object.values(CHANNELS) });

        this.pubnub.addListener( this.listener());
    }

    listener(){
        return {
            message: messageObject =>{
                const { channel, message} = messageObject;

                console.log(`Message received. Channel: ${channel}. Message: ${message}`);
            }
        };
    }

    publish({ channel, message}) {
        this.pubnub.publish({ channel, message});
    }
}

module.exports = PubSub;