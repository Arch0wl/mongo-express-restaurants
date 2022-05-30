import { MongoClient } from 'mongodb';
// connetc to MONGODB 
export const getDb = async () => {
    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect();

    return client.db('mongo3');
};

export const getBlockchainCollection = async () => {
    const db = await getDb();

    return db.collection('blockchains');
}

