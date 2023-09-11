const Memcached = require('memcached');
const config = require("platformsh-config").config();
const { promisify } = require('util');

exports.usageExample = async function() {
    const credentials = config.credentials('memcached');
    const client = new Memcached(`${credentials.host}:${credentials.port}`);

    // The MemcacheD client is not Promise-aware, so make it so.
    const memcachedGet = promisify(client.get).bind(client);
    const memcachedSet = promisify(client.set).bind(client);

    const key = 'Deploy-day';
    const value = 'Friday';

    // Set a value.
    await memcachedSet(key, value, 10);

    // Read it back.
    const test = await memcachedGet(key);

    return `Found value <strong>${test}</strong> for key <strong>${key}</strong>.`;
};
