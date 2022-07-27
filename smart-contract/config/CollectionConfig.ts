import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';
import { network } from 'hardhat';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.hardhatLocal,
  mainnet: Networks.fuseMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ASCIIDegens',
  tokenName: 'ASCII-Degen',
  tokenSymbol: 'ASCIID',
  hiddenMetadataUri: 'ipfs://bafybeia77yi3ps46t3iln2jz47l4ruesv2fl7xyi24iio2gmzdbmao6bve/hidden.json',
  maxSupply: 111,
  whitelistSale: {
    price: 90.00,
    maxMintAmountPerTx: 11,
  },
  preSale: {
    price: 90.00,
    maxMintAmountPerTx: 11,
  },
  publicSale: {
    price: 90.00,
    maxMintAmountPerTx: 11,
  },
  contractAddress: '0x9cf22A48fE514a8FA0478322C9Ef92AC1E2D3C98',
  marketplaceIdentifier: 'ASCII-Crosschain-Degens',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
