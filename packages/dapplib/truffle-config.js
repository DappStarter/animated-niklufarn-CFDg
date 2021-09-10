require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember snake hidden glove flower section'; 
let testAccounts = [
"0xb066831cd62bc59a492cac4f157db1586d2dba1081bf68797cbf1dec605bcaa4",
"0x6f2f77ff6937d06512bf3e0aac321f58b68b1e03c5f3f606834afd38aa964bc9",
"0x40d06cc1bf956916b324ba9c158ae7ef36ff6227891c4af99a038ec2e3da5af4",
"0xef0e7677e6bc84a40da64d6451d6aa393a974df90f349e9499de2cd098a19007",
"0xbd532a14c3fdcef5a39c6311625f1af43360f4104c3fad405eb14193d1d87c67",
"0x3ff6e57bc4a8d6c6cbadc3992a49e3b7dbaf4e1c6bcc3b851a65effff2629612",
"0x1b36517a13652f4d48c917427b7b2e0f789ea0e6ab0cea413ab8f90e6bc69cea",
"0xc697c412fab63fd48fb197a6767e0ecd4dbd49112fd6eb4ccbd094714b9030f4",
"0xc0b994b0630ff1500b1db4a0d0303732d745ceafd877100a743fc81593aee5fe",
"0x1669de708d4414bba5be679ac5bda2f67dffb615a74df06a02cff50d91939c80"
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

