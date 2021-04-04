import { MongoClient } from 'mongodb'

export async function openDB() {
    const client = new MongoClient(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    if (!client.isConnected()) await client.connect();

    return client.db("bts")
} 