import { Router } from 'express';
import { createBlockchain, getBlockchain, getAllBlockchains, updateBlockchain } from '../services/blockchain.srvices.js';

export const blockchainRouter = Router();

blockchainRouter.post('/blockchain', async (req, res) => {
    const blockchain = req.body;
    const id = await createBlockchain(blockchain);
    res.send(id.toString());  
});

blockchainRouter.get('/blockchain', async (req, res) => {
    const blockchainArray = await getAllBlockchains();
    res.send(blockchainArray);  
});

blockchainRouter.patch('/blockchain',async (req, res) => {
    const {name, updateObject} = req.body;
    const updatedBlockchain = await updateBlockchain(name, updateObject);
    res.status(200).send('This is updated');
}) 


