// deploy code will go here
const HDwalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDwalletProvider(
	'behind deal ride subject pulp staff dismiss treat dress grain pistol amateur',
	'https://goerli.infura.io/v3/553ffc99ba444799865ea497e316f1b1'
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: bytecode, arguments: ['Hi IVOOOO']})
		.send({gas: '1000000', from: accounts[0]});
	
		console.log('Contract deployed to', result.options.address);
		provider.engine.stop();
};
deploy();