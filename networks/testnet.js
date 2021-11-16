const types = require('../polkadot-types.json');
const metadata = require('./metadata/testnet-metadata.json');

module.exports = {
  blockchain: 'Substrate',
  network: 'Dock Testnet',
  nodeAddress: 'ws://localhost:9944',
  ss58Format: 42,
  properties: {
    ss58Format: 42,
    tokenDecimals: 6,
    tokenSymbol: 'DCK',
    poaModule: {
      treasury: '5EYCAe5d818kja8P5YikNggRz4KxztMtMhxP6qSTw7Bwahwq',
    },
  },
  genesis: '0x3f0608444cf5d7eec977430483ffef31ff86dfa6bfc6d7114023ee80cc03ea3f',
  name: 'Poa Testnet',
  specName: 'dock-testnet',
  // Next 2 fields need to change whenever they change on the chain.
  specVersion: 17,
  transactionVersion: 1,
  types,
  metadataRpc: metadata.metadataRpc,
};
