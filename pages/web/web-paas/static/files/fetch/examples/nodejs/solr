const solr = require("solr-node");
const config = require("platformsh-config").config();

exports.usageExample = async function () {
    const client = new solr(config.formattedCredentials("solr", "solr-node"));

    // Add a document.
    const addResult = await client.update({
        id: 123,
        name: "Valentina Tereshkova",
    });

    // Flush writes so that we can query against them.
    await client.softCommit();

    // Select one document:
    const strQuery = client.query().q();
    const writeResult = await client.search(strQuery);

    // Delete one document.
    const deleteResult = await client.delete({ id: 123 });

    return `
    Adding one document. Status (0 is success): ${addResult.responseHeader.status}<br />
    Selecting documents (1 expected): ${writeResult.response.numFound}<br />
    Deleting one document. Status (0 is success): ${deleteResult.responseHeader.status}<br />
    `;
};
