import {APIGatewayEvent, Callback, Context, Handler} from 'aws-lambda';
import fetch from 'node-fetch';
import {parse} from 'qs';

export const anonymous: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
    // Get only the message text from the request and ignore other metadata to keep it private
    const {text = '', response_url = ''} = parse(event.body || '');

    if (!text || !response_url) {
        cb(null, {
            body: JSON.stringify({
                response_type: 'ephemeral',
                text: 'Invalid message',
            }),
            statusCode: 200,
        });
        return;
    }

    // Respond to the original request
    cb(null, {
        body: JSON.stringify({
            response_type: 'ephemeral',
            text: 'Twoja wiadomość zostanie opublikowana anonimowo.\n' +
            'Dziękujemy za skorzystanie z usług AnonimowychVazcoPytań :ghost:',
        }),
        statusCode: 200,
    });

    // Reply with the same text in the same channel, but anonymously
    fetch(response_url, {
        body: JSON.stringify({
            response_type: 'in_channel',
            text,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    }).catch(err => console.error(err));
};
