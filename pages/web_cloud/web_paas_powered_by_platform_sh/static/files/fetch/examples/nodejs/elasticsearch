const elasticsearch = require("elasticsearch");
const config = require("platformsh-config").config();

exports.usageExample = async function () {
    const credentials = config.credentials("elasticsearch");

    const client = new elasticsearch.Client({
        host: `${credentials.host}:${credentials.port}`,
    });

    const index = "my_index";
    const type = "People";

    // Index a few document.
    const names = ["Ada Lovelace", "Alonzo Church", "Barbara Liskov"];

    const message = {
        refresh: "wait_for",
        body: names.flatMap((name) => [
            { index: { _index: index, _type: type } },
            { name },
        ]),
    };

    await client.bulk(message);

    // Search for documents.
    const response = await client.search({
        index,
        q: "name:Barbara Liskov",
    });

    const outputRows = response.hits.hits
        .map(
            ({ _id: id, _source: { name } }) =>
                `<tr><td>${id}</td><td>${name}</td></tr>\n`
        )
        .join("\n");

    // Clean up after ourselves.
    await Promise.allSettled(
        response.hits.hits.map(({ _id: id }) =>
            client.delete({
                index: index,
                type: type,
                id,
            })
        )
    );

    return `
    <table>
        <thead>
            <tr>
                <th>ID</th><th>Name</th>
            </tr>
        </thhead>
        <tbody>
            ${outputRows}
        </tbody>
    </table>
    `;
};
