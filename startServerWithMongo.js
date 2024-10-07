let express = require('express');
let app = express();
// const { MongoClient, ServerApiVersion } = require('mongodb');
// // const uri
const uri = "mongodb+srv://s220194805:nC0IFkpgBCS1fp0q@cluster0.k3wz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
let port = process.env.port || 3040;
require('./dbConnection');

let collection;
let router = require('./routers/router');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });


async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('Cat');
        console.log(collection);
    } catch(ex) {
        console.error(ex);
    }
}



app.listen(port, ()=>{
    console.log('express server started');
    runDBConnection();
});