'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../dist/index-cbc22438.cjs.prod.js');
var useConnect = require('../../dist/useConnect-f3bef6fc.cjs.prod.js');
var evm = require('@thirdweb-dev/react-core/evm');
require('@thirdweb-dev/react-core');
require('@thirdweb-dev/sdk');
require('react');
require('wagmi');
require('wagmi/connectors/coinbaseWallet');
require('wagmi/connectors/injected');
require('wagmi/connectors/walletConnect');
require('react/jsx-runtime');
require('tiny-invariant');
require('buffer');
require('mime/lite.js');
require('@tanstack/react-query');
require('react-cool-dimensions');
require('detect-browser');
require('react-dom');
require('ethers');
require('copy-to-clipboard');
require('@emotion/styled');
require('@emotion/react');
require('color');
require('@react-icons/all-files/fi/FiCheck');
require('@react-icons/all-files/fi/FiChevronDown');
require('@react-icons/all-files/fi/FiCopy');
require('@react-icons/all-files/fi/FiLock');
require('@react-icons/all-files/fi/FiShuffle');
require('@react-icons/all-files/fi/FiWifi');
require('@react-icons/all-files/fi/FiXCircle');
require('@zag-js/menu');
require('@zag-js/react');



exports.ConnectWallet = index.ConnectWallet;
exports.MediaRenderer = index.MediaRenderer;
exports.ThirdwebNftMedia = index.ThirdwebNftMedia;
exports.ThirdwebProvider = index.ThirdwebProvider;
exports.Web3Button = index.Web3Button;
exports.useAccount = index.useAccount;
exports.useCoinbaseWallet = index.useCoinbaseWallet;
exports.useDisconnect = index.useDisconnect;
exports.useMetamask = index.useMetamask;
exports.useNetwork = index.useNetwork;
exports.useResolvedMediaType = index.useResolvedMediaType;
exports.useWalletConnect = index.useWalletConnect;
exports.useWalletLink = index.useWalletLink;
exports.useConnect = useConnect.useConnect;
Object.keys(evm).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return evm[k]; }
	});
});
