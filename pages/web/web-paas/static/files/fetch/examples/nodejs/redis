const redis = require('redis');
const config = require("platformsh-config").config();
const { promisify } = require('util');

exports.usageExample = async function() {
    const credentials = config.credentials('redis');
    const client = redis.createClient(credentials.port, credentials.host);

    // The Redis client is not Promise-aware, so make it so.
    const redisGet = promisify(client.get).bind(client);
    const redisSet = promisify(client.set).bind(client);

    const key = 'Deploy day';
    const value = 'Friday';

    // Set a value.
    await redisSet(key, value);

    // Read it back.
    const test = await redisGet(key);

    return `Found value <strong>${test}</strong> for key <strong>${key}</strong>.`;
};
