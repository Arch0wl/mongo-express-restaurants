
import { getBlockchainCollection } from "../gateway/mongo.js"

export const createBlockchain = async (blockchain) => {
    const col = await getBlockchainCollection();
    const { insertedId } = await col.insertOne(blockchain);
// TODO: we should validate name is unique;
    return insertedId;
};
export const getBlockchain = async (name) => {
    const col = await getBlockchainCollection();
    const blockchain = await col.findOne({ name }).toArray();

    return blockchain;
};

export const getAllBlockchains = async () => {
    const col = await getBlockchainCollection();
    //TODO: filter by deleted flag so we don;t return deleted blockchains;
    const blockchains = await col.find({}).toArray();

    return blockchains;
};

export const updateBlockchain = async (name, updateObject) => {
    const col = await getAllBlockchainCollection();
    // TODO: update should not allow the name field to be updated;
        await col.updateOne({name}, { $set: updateObject });
};

export const deleteBlockchain = async (name) => {
    await updateBlockchain(name, {deletedAt: new Date() });
};  



