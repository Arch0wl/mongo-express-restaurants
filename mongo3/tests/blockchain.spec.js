import { createBlockchain } from "../src/services/blockchain.srvices"

describe ('Blockchain Test Suite', () => {
    it('Creates a Blockchain', async () => {
        await createBlockchain({
            name: 'Solana',
            language: 'Rust',
            marketCAp: 1,
            supportsSmartContracts: true,
        });
    });
});

