const pg = require("pg");
const config = require("platformsh-config").config();

exports.usageExample = async function () {
    const credentials = config.credentials("postgresql");

    const client = new pg.Client({
        host: credentials.host,
        port: credentials.port,
        user: credentials.username,
        password: credentials.password,
        database: credentials.path,
    });

    client.connect();

    // Creating a table.
    await client.query(
        `CREATE TABLE IF NOT EXISTS People (
            id SERIAL PRIMARY KEY,
            name VARCHAR(30) NOT NULL,
            city VARCHAR(30) NOT NULL
        )`
    );

    // Insert data.
    await client.query(
        `INSERT INTO People (name, city)
        VALUES
            ('Neil Armstrong', 'Moon'),
            ('Buzz Aldrin', 'Glen Ridge'),
            ('Sally Ride', 'La Jolla');`
    );

    // Show table.
    const result = await client.query("SELECT * FROM People");

    // Drop table.
    await client.query("DROP TABLE People");

    const outputRows = result.rows
        .map(({ name, city }) => `<tr><td>${name}</td><td>${city}</td></tr>\n`)
        .join("\n");

    return `
    <table>
        <thead>
            <tr>
                <th>Name</th><th>City</th>
            </tr>
        </thhead>
        <tbody>
            ${outputRows}
        </tbody>
    </table>
    `;
};
