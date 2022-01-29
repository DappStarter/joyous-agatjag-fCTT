require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy radar outside company heavy arctic slot giggle'; 
let testAccounts = [
"0x41a458f6abe332a7cc3b319dbe2fe17439f95c6097213bd4b70ed3ac16d85527",
"0x78e8da87a035918bfe5cdefae2ef5d0c7fec901951d22682ccd03f2e4b7b1f49",
"0x8274915c9fe25ec28d5de398af42eb00432554cbafa40456ed0fed27498dd0f3",
"0x9108cf1063e52cde004782e5f83abde5aca2333a09d99c28bdeb9df058f76875",
"0xd38f08e8a388a9df1a2f80ab1647f89bcc469d0a96b5c3321c77003f5073264a",
"0x527b2c88c95731af5537433d42339d8a71d01f70717a249e1a701016e544b3c9",
"0x905b3471559b04d6a8442cca33ad14d0ff476a6deac13caf6f96f18f88121cc1",
"0x579e4ba49492b5a968732431cdeb81318b30a801eb047115c765155659ee34e2",
"0xdb2c63ce6130beaaf8ad4ba8417689c795b4d13de25237657b388bba23664b84",
"0xb5d77529b40c1429b54a558ea7e71668ac02756586ec3ded1af91d1cf626da07"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

