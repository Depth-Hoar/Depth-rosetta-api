const types = require('../polkadot-types.json');
const metadata = require('./metadata/mainnet-metadata.json');

module.exports = {
  blockchain: 'Substrate',
  network: 'Edgeware',
  nodeAddress: 'ws://localhost:9944', // This expects you have a synced local node running!
  ss58Format: 22, // may need to change
  properties: {
    ss58Format: 22, // may need to change
    tokenDecimals: 18,
    tokenSymbol: 'EDG',
    poaModule: {
      treasury: 'jz77v8cHXwEWbPnbfQScXnU9Qy5VkHnDLfpDsuDYUZ7ELae',
    },
  },
  genesis: '0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b',
  name: 'Edgeware',
  specName: 'Edgeware',
  // Next 2 fields need to change whenever they change on the chain.
  specVersion: 46,
  transactionVersion: 1, // TODO change
  types,
  metadataRpc: metadata.metadataRpc,
};
