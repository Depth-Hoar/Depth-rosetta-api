const types = require('../polkadot-types.json');
const metadata = require('./metadata/devnode-metadata.json');

module.exports = {
  blockchain: 'Substrate',
  network: 'Development',
  nodeAddress: 'ws://localhost:9944',
  ss58Format: 42,
  properties: {
    ss58Format: 42,
    tokenDecimals: 6,
    tokenSymbol: 'tEDG',
    poaModule: {
      treasury: '5EYCAe5d818kja8P5YikNggRz4KxztMtMhxP6qSTw7Bwahwq',
    },
  },
  genesis: '0x1a0e75ace92345922698245e059d4d9cd37879fa05898940e3365b2c5785c4de',
  name: 'Development',
  specName: 'Development',
  // Next 2 fields need to change whenever they change on the chain.
  specVersion: 48,
  transactionVersion: 1,
  types,
  metadataRpc: metadata.metadataRpc,
};
