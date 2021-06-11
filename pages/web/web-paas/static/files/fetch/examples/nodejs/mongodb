const mongodb = require("mongodb");
const config = require("platformsh-config").config();

exports.usageExample = async function () {
    const credentials = config.credentials("mongodb");
    const MongoClient = mongodb.MongoClient;

    const client = await MongoClient.connect(
        config.formattedCredentials("mongodb", "mongodb")
    );

    const db = client.db(credentials["path"]);

    const collection = db.collection("startrek");

    const documents = [
        { name: "James Kirk", rank: "Admiral" },
        { name: "Jean-Luc Picard", rank: "Captain" },
        { name: "Benjamin Sisko", rank: "Prophet" },
        { name: "Katheryn Janeway", rank: "Captain" },
    ];

    await collection.insertMany(documents, { w: 1 });

    const result = await collection.find({ rank: "Captain" }).toArray();

    const outputRows = Object.values(result)
        .map(({ name, rank }) => `<tr><td>${name}</td><td>${rank}</td></tr>\n`)
        .join("\n");

    // Clean up after ourselves.
    collection.deleteMany();

    return `
    <table>
        <thead>
            <tr>
                <th>Name</th><th>Rank</th>
            </tr>
        </thhead>
        <tbody>
            ${outputRows}
        </tbody>
    </table>
    `;
};
