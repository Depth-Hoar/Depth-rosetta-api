import RosettaSDK from 'rosetta-node-sdk';

import networkTypes from '../polkadot-types.json';

class SubstrateNetworkIdentifier extends RosettaSDK.Client.NetworkIdentifier {
  constructor(blockchain, network, nodeAddress, types = {}) {
    super(blockchain, network);
    this.nodeAddress = nodeAddress;
    this.types = types;
  }
}

const networkIdentifierDev = new SubstrateNetworkIdentifier('Substrate', 'Development Node', 'ws://localhost:9944', networkTypes);
const networkIdentifierTestnet = new SubstrateNetworkIdentifier('Substrate', 'Dock Testnet', 'wss://danforth-1.dock.io', networkTypes);
const networkIdentifierMainnet = new SubstrateNetworkIdentifier('Substrate', 'Dock Mainnet', 'wss://mainnet-node.dock.io', networkTypes);

export default [networkIdentifierDev, networkIdentifierTestnet, networkIdentifierMainnet];
