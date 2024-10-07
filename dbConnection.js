const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s220194805:nC0IFkpgBCS1fp0q@cluster0.k3wz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;