const mysql = require("mysql2/promise");
const config = require("platformsh-config").config();

exports.usageExample = async function () {
    const credentials = config.credentials("database");

    const connection = await mysql.createConnection({
        host: credentials.host,
        port: credentials.port,
        user: credentials.username,
        password: credentials.password,
        database: credentials.path,
    });

    // Creating a table.
    await connection.query(
        `CREATE TABLE IF NOT EXISTS People (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(30) NOT NULL,
            city VARCHAR(30) NOT NULL
        )`
    );

    // Insert data.
    await connection.query(
        `INSERT INTO People (name, city)
        VALUES
            ('Neil Armstrong', 'Moon'),
            ('Buzz Aldrin', 'Glen Ridge'),
            ('Sally Ride', 'La Jolla');`
    );

    // Show table.
    const [rows] = await connection.query("SELECT * FROM People");

    // Drop table.
    await connection.query("DROP TABLE People");

    const outputRows = rows
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
