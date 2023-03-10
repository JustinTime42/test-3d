'use strict';

var reactCore = require('@thirdweb-dev/react-core');
var sdk = require('@thirdweb-dev/sdk');
var React = require('react');
var wagmi = require('wagmi');
var coinbaseWallet = require('wagmi/connectors/coinbaseWallet');
var injected = require('wagmi/connectors/injected');
var walletConnect = require('wagmi/connectors/walletConnect');
var jsxRuntime = require('react/jsx-runtime');
var invariant = require('tiny-invariant');
var useConnect = require('./useConnect-f3bef6fc.cjs.prod.js');
var buffer = require('buffer');
var mime = require('mime/lite.js');
var reactQuery = require('@tanstack/react-query');
var useDimensions = require('react-cool-dimensions');
var detectBrowser = require('detect-browser');
var reactDom = require('react-dom');
var ethers = require('ethers');
var copy = require('copy-to-clipboard');
var styled = require('@emotion/styled');
var react = require('@emotion/react');
var color = require('color');
var FiCheck = require('@react-icons/all-files/fi/FiCheck');
var FiChevronDown = require('@react-icons/all-files/fi/FiChevronDown');
var FiCopy = require('@react-icons/all-files/fi/FiCopy');
var FiLock = require('@react-icons/all-files/fi/FiLock');
var FiShuffle = require('@react-icons/all-files/fi/FiShuffle');
var FiWifi = require('@react-icons/all-files/fi/FiWifi');
var FiXCircle = require('@react-icons/all-files/fi/FiXCircle');
var evm = require('@thirdweb-dev/react-core/evm');
var menu = require('@zag-js/menu');
var react$1 = require('@zag-js/react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefault(React);
var invariant__default = /*#__PURE__*/_interopDefault(invariant);
var mime__default = /*#__PURE__*/_interopDefault(mime);
var useDimensions__default = /*#__PURE__*/_interopDefault(useDimensions);
var copy__default = /*#__PURE__*/_interopDefault(copy);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var color__default = /*#__PURE__*/_interopDefault(color);
var menu__namespace = /*#__PURE__*/_interopNamespace(menu);

const chain = {
  mainnet: {
    id: sdk.ChainId.Mainnet,
    name: "Ethereum Mainnet",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.Mainnet],
    rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorers: [{
      name: "Etherscan",
      url: "https://etherscan.io"
    }]
  },
  goerli: {
    id: sdk.ChainId.Goerli,
    name: "Goerli",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.Goerli],
    rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorers: [{
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    }],
    testnet: true
  },
  polygonMainnet: {
    id: sdk.ChainId.Polygon,
    name: "Polygon Mainnet",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.Polygon],
    rpcUrls: ["https://polygon-rpc.com", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com"],
    blockExplorers: [{
      name: "Polygonscan",
      url: "https://polygonscan.com"
    }]
  },
  polygonTestnetMumbai: {
    id: sdk.ChainId.Mumbai,
    name: "Mumbai",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.Mumbai],
    rpcUrls: ["https://matic-mumbai.chainstacklabs.com", "https://rpc-mumbai.maticvigil.com", "https://matic-testnet-archive-rpc.bwarelabs.com"],
    blockExplorers: [{
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    }],
    testnet: true
  },
  avalanche: {
    id: sdk.ChainId.Avalanche,
    name: "Avalanche",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.Avalanche],
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc", "https://rpc.ankr.com/avalanche"],
    blockExplorers: [{
      name: "SnowTrace",
      url: "https://snowtrace.io/"
    }],
    testnet: false
  },
  avalancheFujiTestnet: {
    id: sdk.ChainId.AvalancheFujiTestnet,
    name: "Avalanche Fuji Testnet",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.AvalancheFujiTestnet],
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    blockExplorers: [{
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io/"
    }],
    testnet: true
  },
  fantom: {
    id: sdk.ChainId.Fantom,
    name: "Fantom Opera",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.Fantom],
    rpcUrls: ["https://rpc.ftm.tools"],
    blockExplorers: [{
      name: "FTMscan",
      url: "https://ftmscan.com/"
    }],
    testnet: false
  },
  fantomTestnet: {
    id: sdk.ChainId.FantomTestnet,
    name: "Fantom Testnet",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.FantomTestnet],
    rpcUrls: ["https://rpc.testnet.fantom.network"],
    blockExplorers: [{
      name: "FTMscan",
      url: "https://testnet.ftmscan.com/"
    }],
    testnet: true
  },
  optimism: {
    id: sdk.ChainId.Optimism,
    name: "Optimism",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.Optimism],
    rpcUrls: ["https://mainnet.optimism.io"],
    blockExplorers: [{
      name: "Etherscan",
      url: "https://optimistic.etherscan.io/"
    }],
    testnet: false
  },
  optimismGoerli: {
    id: sdk.ChainId.OptimismGoerli,
    name: "Optimism Goerli Testnet",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.OptimismGoerli],
    rpcUrls: ["https://goerli.optimism.io/"],
    blockExplorers: [{
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io/"
    }],
    testnet: true
  },
  arbitrum: {
    id: sdk.ChainId.Arbitrum,
    name: "Arbitrum One",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.Arbitrum],
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorers: [{
      name: "Arbiscan",
      url: "https://arbiscan.io/"
    }],
    testnet: false
  },
  arbitrumGoerli: {
    id: sdk.ChainId.ArbitrumGoerli,
    name: "Arbitrum Goerli",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.ArbitrumGoerli],
    rpcUrls: ["https://goerli-rollup.arbitrum.io/rpc/"],
    blockExplorers: [{
      name: "Arbitrum Goerli Rollup Explorer",
      url: "https://goerli-rollup-explorer.arbitrum.io"
    }],
    testnet: true
  },
  binanceSmartChainMainnet: {
    id: sdk.ChainId.BinanceSmartChainMainnet,
    name: "Binance Smart Chain Mainnet",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.BinanceSmartChainMainnet],
    rpcUrls: ["https://bsc-dataseed1.binance.org"],
    blockExplorers: [{
      name: "BscScan",
      url: "https://bscscan.com/"
    }],
    testnet: false
  },
  binanceSmartChainTestnet: {
    id: sdk.ChainId.BinanceSmartChainTestnet,
    name: "Binance Smart Chain Testnet",
    nativeCurrency: sdk.NATIVE_TOKENS[sdk.ChainId.BinanceSmartChainTestnet],
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
    blockExplorers: [{
      name: "BscScan",
      url: "https://testnet.bscscan.com/"
    }],
    testnet: true
  }
};
const defaultSupportedChains = Object.values(chain);
function getChainFromChainId(chainId) {
  return defaultSupportedChains.find(c => c.id === chainId);
}

// SDK handles this under the hood for us

const defaultdAppMeta = {
  name: "thirdweb powered dApp"
};
const defaultWalletConnectors = ["metamask", "walletConnect", "walletLink"];

/**
 *
 * The `<ThirdwebProvider />` component lets you control what networks you want users to connect to, what types of wallets can connect to your app, and the settings for the [Typescript SDK](https://docs.thirdweb.com/typescript).
 *
 * @example
 * You can wrap your application with the provider as follows:
 *
 * ```jsx title="App.jsx"
 * import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *   return (
 *     <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
 *       <YourApp />
 *     </ThirdwebProvider>
 *   );
 * };
 * ```
 *
 * @public
 *
 */
const ThirdwebProvider = _ref => {
  let {
    sdkOptions,
    chainRpc = sdk.DEFAULT_RPC_URLS,
    supportedChains = defaultSupportedChains.map(c => c.id),
    walletConnectors = defaultWalletConnectors,
    dAppMeta = defaultdAppMeta,
    desiredChainId,
    authConfig,
    storageInterface,
    queryClient,
    autoConnect = true,
    children
  } = _ref;
  // construct the wagmi options

  const _supporrtedChains = React.useMemo(() => {
    return supportedChains.map(c => {
      if (typeof c === "number") {
        return defaultSupportedChains.find(sc => sc.id === c);
      }
      return c;
    }).filter(c => c !== undefined);
  }, [supportedChains]);
  const _rpcUrlMap = React.useMemo(() => {
    return _supporrtedChains.reduce((prev, curr) => {
      prev[curr.id] = curr.id in chainRpc ? sdk.getProviderForNetwork(chainRpc[curr.id] || curr.rpcUrls[0]) : curr.rpcUrls[0];
      return prev;
    }, {});
  }, [chainRpc, _supporrtedChains]);
  const wagmiProps = React.useMemo(() => {
    const walletConnectClientMeta = {
      name: dAppMeta.name,
      url: dAppMeta.url || "",
      icons: [dAppMeta.logoUrl || ""],
      description: dAppMeta.description || ""
    };
    const walletLinkClientMeta = {
      appName: dAppMeta.name,
      appLogoUrl: dAppMeta.logoUrl,
      darkMode: dAppMeta.isDarkMode
    };
    return {
      autoConnect,
      connectorStorageKey: "tw:provider:connectors",
      connectors: _ref2 => {
        let {
          chainId
        } = _ref2;
        return walletConnectors.map(connector => {
          if (connector instanceof wagmi.Connector) {
            return connector;
          }
          // injected connector
          if (typeof connector === "string" && (connector === "injected" || connector === "metamask") || typeof connector === "object" && (connector.name === "injected" || connector.name === "metamask")) {
            return new injected.InjectedConnector({
              options: typeof connector === "string" ? {
                shimDisconnect: true,
                shimChainChangedDisconnect: true
              } : connector.options,
              chains: _supporrtedChains
            });
          }
          if (typeof connector === "string" && connector === "walletConnect" || typeof connector === "object" && connector.name === "walletConnect") {
            return new walletConnect.WalletConnectConnector({
              options: typeof connector === "string" ? {
                chainId,
                rpc: _rpcUrlMap,
                clientMeta: walletConnectClientMeta,
                qrcode: true
              } : {
                chainId,
                rpc: _rpcUrlMap,
                clientMeta: walletConnectClientMeta,
                qrcode: true,
                ...connector.options
              },
              chains: _supporrtedChains
            });
          }
          if (typeof connector === "string" && (connector === "coinbase" || connector === "walletLink") || typeof connector === "object" && (connector.name === "coinbase" || connector.name === "walletLink")) {
            const jsonRpcUrl = _rpcUrlMap[chainId || desiredChainId || 1];
            return new coinbaseWallet.CoinbaseWalletConnector({
              chains: _supporrtedChains,
              options: typeof connector === "string" ? {
                ...walletLinkClientMeta,
                jsonRpcUrl
              } : {
                ...walletLinkClientMeta,
                jsonRpcUrl,
                ...connector.options
              }
            });
          }
          return null;
        }).filter(c => c !== null);
      }
    };
  }, [dAppMeta.name, dAppMeta.url, dAppMeta.logoUrl, dAppMeta.description, dAppMeta.isDarkMode, autoConnect, walletConnectors, _supporrtedChains, _rpcUrlMap, desiredChainId]);
  const readonlySettings = React.useMemo(() => {
    if (sdkOptions?.readonlySettings?.rpcUrl && sdkOptions?.readonlySettings?.chainId) {
      return sdkOptions.readonlySettings;
    }
    if (!desiredChainId) {
      return undefined;
    }
    let rpcUrl = _rpcUrlMap[desiredChainId];
    try {
      rpcUrl = sdk.getProviderForNetwork(rpcUrl);
    } catch (e) {
      console.error(`failed to configure rpc url for chain: "${desiredChainId}". Did you forget to pass "desiredChainId" to the <ThirdwebProvider /> component?`);
      // cannot set readonly without a valid rpc url
      return undefined;
    }
    return {
      chainId: desiredChainId,
      rpcUrl
    };
  }, [_rpcUrlMap, desiredChainId, sdkOptions?.readonlySettings]);
  const sdkOptionsWithDefaults = React.useMemo(() => {
    const opts = sdkOptions;
    return {
      ...opts,
      readonlySettings
    };
  }, [sdkOptions, readonlySettings]);
  return /*#__PURE__*/jsxRuntime.jsx(reactCore.ThirdwebConfigProvider, {
    value: {
      rpcUrlMap: _rpcUrlMap,
      supportedChains: _supporrtedChains
    },
    children: /*#__PURE__*/jsxRuntime.jsx(wagmi.WagmiProvider, {
      ...wagmiProps,
      children: /*#__PURE__*/jsxRuntime.jsx(ThirdwebSDKProviderWagmiWrapper, {
        queryClient: queryClient,
        desiredChainId: desiredChainId,
        sdkOptions: sdkOptionsWithDefaults,
        storageInterface: storageInterface,
        authConfig: authConfig,
        children: children
      })
    })
  });
};
const ThirdwebSDKProviderWagmiWrapper = _ref3 => {
  let {
    children,
    ...props
  } = _ref3;
  const provider = wagmi.useProvider();
  const [signer] = wagmi.useSigner();
  return /*#__PURE__*/jsxRuntime.jsx(reactCore.ThirdwebSDKProvider, {
    signer: signer.data,
    provider: provider,
    ...props,
    children: children
  });
};

/**
 * @internal
 */
function useAccount() {
  const wagmiContext = wagmi.useContext();
  invariant__default["default"](wagmiContext, `useNetwork() can only be used inside <ThirdwebProvider />. If you are using <ThirdwebSDKProvider /> you will have to use your own network logic.`);
  return wagmi.useAccount();
}

/**
 * Hook for getting metadata about the network the current wallet is connected to and switching networks
 *
 * @example
 * ```javascript
 * import { useNetwork, ChainId } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *   const [, switchNetwork] = useNetwork();
 *
 *   return (
 *     <button onClick={() => switchNetwork(ChainId.Polygon)}>
 *        Switch Network
 *     </button>
 *   );
 * };
```
 *
 * It's important to note that some wallet apps do not support programmatic network switching and switchNetwork will be undefined.
 * For those situations, you can typically switch networks in the wallet app this hook will still work.
 *
 * @public
 */

function useNetwork() {
  const wagmiContext = wagmi.useContext();
  invariant__default["default"](wagmiContext, `useNetwork() can only be used inside <ThirdwebProvider />. If you are using <ThirdwebSDKProvider /> you will have to use your own network logic.`);
  return wagmi.useNetwork();
}

/**
 * Hook for disconnecting the currently connected wallet
 *
 * ```javascript
 * import { useDisconnect } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * The following will enable users to disconnect their wallet from the page.
 * ```javascript
 * import { useDisconnect } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const disconnect = useDisconnect()
 *
 *   return (
 *     <button onClick={disconnect}>
 *       Disconnect
 *     </button>
 *   )
 * }
 * ```
 *
 * Once users disconnect their wallet, the `useAddress`, `useChainId`, `useAccount`, and `useNetwork` hooks will no longer return values until a user connects their wallet again.
 *
 * @public
 */
function useDisconnect(options) {
  const wagmiContext = wagmi.useContext();
  invariant__default["default"](wagmiContext, `useDisconnect() can only be used inside <ThirdwebProvider />. If you are using <ThirdwebSDKProvider /> you will have to use your own connection logic.`);
  const optsWithDefaults = {
    ...{
      reconnectPrevious: true
    },
    ...options
  };
  const [, connect] = useConnect.useConnect();
  const [data, disconnect] = wagmi.useAccount();
  return async () => {
    // if there is a previous connector get it
    const previousConnector = data?.data?.connector?.previousConnector || undefined;
    // if it's gnosis, just connect the previous connector
    if (optsWithDefaults.reconnectPrevious && previousConnector) {
      try {
        return await connect(previousConnector);
      } catch (err) {
        console.error("failed to re-connect to previous connector", err);
        // if it fails for whatever reason just disconnect
        return disconnect();
      }
    }
    return disconnect();
  };
}

function detectEnv(userAgent) {
  return detectBrowser.detect(userAgent);
}

/**
 * @internal
 */
function isAndroid() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("android") : false;
}

/**
 * @internal
 */
function isIOS() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}

/**
 * @internal
 */
function detectOS() {
  const env = detectEnv();
  return env?.os ? env.os : undefined;
}

/**
 * @internal
 */
function isMobile() {
  const os = detectOS();
  return os ? isAndroid() || isIOS() : false;
}

/**
 * Hook for connecting to a Metamask wallet.
 *
 * ```javascript
 * import { useMetamask } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * We can allow users to connect their metamask wallets as follows:
 * ```javascript
 * import { useMetamask } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const connectWithMetamask = useMetamask()
 *
 *   return (
 *     <button onClick={connectWithMetamask}>
 *       Connect Metamask
 *     </button>
 *   )
 * }
 * ```
 * Here, we use the `useMetamask` hook to handle metamask connection.
 * When a user clicks the button, we'll call the `connectWithMetamask` function, which will prompt users to connect their metamask wallet.
 *
 * @public
 */
function useMetamask() {
  const wagmiContext = wagmi.useContext();
  invariant__default["default"](wagmiContext, `useMetamask() can only be used inside <ThirdwebProvider />. If you are using <ThirdwebSDKProvider /> you will have to use your own wallet-connection logic.`);
  const [connectors, connect] = useConnect.useConnect();
  const isMetaMaskInjected = typeof window !== "undefined" && window.ethereum?.isMetaMask;
  const shouldUseWalletConnect = isMobile() && !isMetaMaskInjected;

  // injected connector
  const injectedConnector = connectors.data.connectors.find(c => c.id === "injected");
  // walletConnect connector
  const walletConnectConnector = connectors.data.connectors.find(c => c.id === "walletConnect");
  const connector = (shouldUseWalletConnect ? walletConnectConnector : injectedConnector) || injectedConnector;
  invariant__default["default"](connector, "No connector found, please make sure you provide the InjectedConnector to your <ThirdwebProvider />");
  return async () => {
    // if we don't have an injected provider
    if (!isMetaMaskInjected) {
      // this is the fallback uri that should work no matter what
      const uri = `https://metamask.app.link/dapp/${window.location.toString()}`;

      // open whatever uri we end up with in a new tab
      window.open(uri, "_blank");
      return Promise.resolve({
        error: new Error("metamask not injected")
      });
    }

    // otherwise we have MM avaiable, so we can just use it
    return await connect(connector);
  };
}

globalThis.Buffer = buffer.Buffer;

/**
 * Hook for connecting to a mobile wallet with Wallet Connect
 *
 * ```javascript
 * import { useWalletConnect } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * We can allows user to connect their mobile wallets as follows:
 * ```javascript
 * import { useWalletConnect } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const connectWithWalletConnect = useWalletConnect()
 *
 *   return (
 *     <button onClick={connectWithWalletConnect}>
 *       Connect WalletConnect
 *     </button>
 *   )
 * }
 * ```
 *
 * When users click this button, a popup will appear on the screen prompting them to scan a QR code from their phone to connect their mobile wallets.
 * Once they scan the QR code from a wallet connect supported mobile wallet, their wallet will then be connected to the page as expected.
 *
 * @public
 */
function useWalletConnect() {
  const wagmiContext = wagmi.useContext();
  invariant__default["default"](wagmiContext, `useWalletConnect() can only be used inside <ThirdwebProvider />. If you are using <ThirdwebSDKProvider /> you will have to use your own wallet-connection logic.`);
  const [connectors, connect] = useConnect.useConnect();
  if (connectors.loading) {
    return () => Promise.reject("WalletConnect connector not ready to be used, yet");
  }
  const connector = connectors.data.connectors.find(c => c.id === "walletConnect");
  invariant__default["default"](connector, "WalletConnect connector not found, please make sure it is provided to your <ThirdwebProvider />");
  return () => connect(connector);
}

globalThis.Buffer = buffer.Buffer;

/**
 * Hook for connecting to a Coinbase wallet.
 *
 * ```javascript
 * import { useCoinbaseWallet } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * We can allow users to connect with Coinbase Wallet as follows:
 * ```javascript
 * import { useCoinbaseWallet } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const connectWithCoinbaseWallet = useCoinbaseWallet()
 *
 *   return (
 *     <button onClick={connectWithCoinbaseWallet}>
 *       Connect Coinbase Wallet
 *     </button>
 *   )
 * }
 * ```
 *
 * Upon clicking this button, users will be prompted with a popup asking them scan a QR code with their Coinbase Wallet.
 * Once they scan the QR code, their wallet will then be connected to the page as expected.
 *
 * @public
 */
function useCoinbaseWallet() {
  const wagmiContext = wagmi.useContext();
  invariant__default["default"](wagmiContext, `useCoinbaseWallet() can only be used inside <ThirdwebProvider />. If you are using <ThirdwebSDKProvider /> you will have to use your own wallet-connection logic.`);
  const [connectors, connect] = useConnect.useConnect();
  if (connectors.loading) {
    return () => Promise.reject("Coinbase connector not ready to be used, yet");
  }
  const connector = connectors.data.connectors.find(c => c.id === "coinbasewallet");
  invariant__default["default"](connector, "Coinbase connector not found, please make sure it is provided to your <ThirdwebProvider />");
  return () => connect(connector);
}

/**
 * Convienience hook for connecting to a wallet via WalletLink (coinbase wallet)
 * @returns a function that will prompt the user to connect their wallet via WalletLink (coinbase wallet)
 * @internal
 */
function useWalletLink() {
  return useCoinbaseWallet();
}

const DEFAULT_IPFS_GATEWAY = "https://gateway.ipfscdn.io/ipfs/";
const DEFAULT_IPFS_RESOLVER_OPTIONS = {
  gatewayUrl: DEFAULT_IPFS_GATEWAY
};

function resolveIpfsUri(uri) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_IPFS_RESOLVER_OPTIONS;
  if (!uri) {
    return undefined;
  }
  if (uri.startsWith("ipfs://")) {
    return uri.replace("ipfs://", options.gatewayUrl);
  }
  return uri;
}
async function resolveMimeType(url) {
  if (!url) {
    return undefined;
  }
  const mimeType = mime__default["default"].getType(url);
  if (mimeType) {
    return mimeType;
  }
  const res = await fetch(url, {
    method: "HEAD"
  });
  if (res.ok && res.headers.has("content-type")) {
    return res.headers.get("content-type") || undefined;
  }
  // we failed to resolve the mime type, return null
  return undefined;
}

let video;
function supportsVideoType(mimeType) {
  if (typeof window === "undefined" || !mimeType || !mimeType.startsWith("video/")) {
    return "";
  }
  if (!video) {
    video = document.createElement("video");
  }
  return video.canPlayType(mimeType);
}
function shouldRenderVideoTag(mimeType) {
  return !!supportsVideoType(mimeType);
}
let audio;
function supportsAudioType(mimeType) {
  if (typeof window === "undefined" || !mimeType || !mimeType.startsWith("audio/")) {
    return "";
  }
  if (!audio) {
    audio = document.createElement("audio");
  }
  return audio.canPlayType(mimeType);
}
function shouldRenderAudioTag(mimeType) {
  return !!supportsAudioType(mimeType);
}

function mergeRefs(refs) {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
        // eslint-disable-next-line eqeqeq
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

const CarbonDocumentUnknown = props => {
  return /*#__PURE__*/jsxRuntime.jsxs("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    ...props,
    children: [/*#__PURE__*/jsxRuntime.jsx("circle", {
      cx: "9",
      cy: "28.5",
      r: "1.5",
      fill: "currentColor"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M10 25H8v-4h2a2 2 0 0 0 0-4H8a2.002 2.002 0 0 0-2 2v.5H4V19a4.005 4.005 0 0 1 4-4h2a4 4 0 0 1 0 8Z"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "m27.7 9.3l-7-7A.908.908 0 0 0 20 2H10a2.006 2.006 0 0 0-2 2v8h2V4h8v6a2.006 2.006 0 0 0 2 2h6v16H14v2h12a2.006 2.006 0 0 0 2-2V10a.91.91 0 0 0-.3-.7ZM20 10V4.4l5.6 5.6Z"
    })]
  });
};
const CarbonDocumentAudio = props => {
  return /*#__PURE__*/jsxRuntime.jsxs("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    ...props,
    children: [/*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M29 31a.999.999 0 0 1-.625-.22L23.65 27H20a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3.65l4.726-3.78A1 1 0 0 1 30 17v13a1 1 0 0 1-1 1Zm-8-6h3a1 1 0 0 1 .625.22L28 27.92v-8.84l-3.376 2.7A1 1 0 0 1 24 22h-3Z"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z"
    })]
  });
};
const CarbonPauseFilled = props => {
  return /*#__PURE__*/jsxRuntime.jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    ...props,
    children: /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
    })
  });
};
const CarbonPlayFilledAlt = props => {
  return /*#__PURE__*/jsxRuntime.jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    ...props,
    children: /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
    })
  });
};

/* eslint-disable @next/next/no-img-element */
const ModelViewer = /*#__PURE__*/React.lazy(() => Promise.resolve().then(function () { return require('./ModelViewer-89114a09.cjs.prod.js'); }));
const PlayButton = _ref => {
  let {
    onClick,
    isPlaying
  } = _ref;
  const [isHovering, setIsHovering] = React.useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);
  const onMouseDown = () => setIsHovering(false);
  const onMouseUp = () => setIsHovering(true);
  return /*#__PURE__*/jsxRuntime.jsx("button", {
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      transform: "translate(-25%, -25%)",
      maxWidth: "32px",
      width: "8%",
      minWidth: "24px",
      aspectRatio: "1",
      zIndex: 3,
      backgroundColor: "#fff",
      color: "rgb(138, 147, 155)",
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      border: "1px solid rgb(229, 232, 235)",
      cursor: "pointer",
      ...(isHovering ? {
        color: "rgb(53, 56, 64)",
        boxShadow: "rgb(4 17 29 / 25%) 0px 0px 8px 0px"
      } : {})
    },
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    children: !isPlaying ? /*#__PURE__*/jsxRuntime.jsx(CarbonPlayFilledAlt, {
      style: {
        width: "66%",
        height: "66%"
      }
    }) : /*#__PURE__*/jsxRuntime.jsx(CarbonPauseFilled, {
      style: {
        width: "66%",
        height: "66%"
      }
    })
  });
};
const VideoPlayer = /*#__PURE__*/React__default["default"].forwardRef((_ref2, ref) => {
  let {
    src,
    alt,
    poster,
    requireInteraction,
    style,
    width,
    height,
    controls,
    ...restProps
  } = _ref2;
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(!requireInteraction);
  const [muted, setMuted] = React.useState(true);
  React.useEffect(() => {
    if (videoRef.current) {
      if (playing) {
        try {
          videoRef.current.play();
        } catch (err) {
          console.error("error playing video", err);
        }
      } else {
        try {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        } catch (err) {
          console.error("error pausing video", err);
        }
      }
    }
  }, [playing]);
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    style: {
      position: "relative",
      ...style
    },
    ...restProps,
    children: [/*#__PURE__*/jsxRuntime.jsx("video", {
      ref: mergeRefs([videoRef, ref]),
      src: src ?? undefined,
      poster: poster ?? undefined,
      loop: true,
      playsInline: true,
      controlsList: "nodownload",
      muted: muted,
      preload: poster ? "metadata" : "auto",
      onCanPlay: () => {
        if (playing) {
          videoRef.current?.play();
        }
      },
      width: width,
      height: height,
      controls: controls,
      style: {
        height: "100%",
        width: "100%",
        objectFit: "contain",
        zIndex: 1,
        transition: "opacity .5s",
        opacity: !poster ? 1 : playing ? 1 : 0
      }
    }), poster && /*#__PURE__*/jsxRuntime.jsx("img", {
      src: poster,
      style: {
        objectFit: "contain",
        pointerEvents: "none",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 2,
        transition: "opacity .5s",
        opacity: playing ? 0 : 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      alt: alt
    }), /*#__PURE__*/jsxRuntime.jsx(PlayButton, {
      onClick: () => {
        setPlaying(prev => !prev);
        setMuted(false);
      },
      isPlaying: playing
    })]
  });
});
VideoPlayer.displayName = "VideoPlayer";
const AudioPlayer = /*#__PURE__*/React__default["default"].forwardRef((_ref3, ref) => {
  let {
    src,
    alt,
    poster,
    style,
    height,
    width,
    ...restProps
  } = _ref3;
  const audioRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  React.useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [playing]);
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    style: {
      position: "relative",
      ...style
    },
    ...restProps,
    children: [poster ? /*#__PURE__*/jsxRuntime.jsx("img", {
      height: height,
      width: width,
      src: poster,
      style: {
        height: "100%",
        width: "100%",
        pointerEvents: "none",
        objectFit: "contain"
      },
      alt: alt
    }) : /*#__PURE__*/jsxRuntime.jsx("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        pointerEvents: "none",
        backgroundColor: "#fff",
        color: "rgb(138, 147, 155)"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(CarbonDocumentAudio, {
        style: {
          height: "64px",
          width: "64px"
        }
      })
    }), /*#__PURE__*/jsxRuntime.jsx(PlayButton, {
      onClick: () => {
        setPlaying(prev => !prev);
        setMuted(false);
      },
      isPlaying: playing
    }), /*#__PURE__*/jsxRuntime.jsx("audio", {
      ref: mergeRefs([audioRef, ref]),
      src: src ?? undefined,
      loop: true,
      playsInline: true,
      muted: muted,
      preload: "none",
      controlsList: "nodownload",
      style: {
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        zIndex: -1,
        visibility: "hidden"
      }
    })]
  });
});
AudioPlayer.displayName = "AudioPlayer";
const IframePlayer = /*#__PURE__*/React__default["default"].forwardRef((_ref4, ref) => {
  let {
    src,
    alt,
    poster,
    requireInteraction,
    style,
    ...restProps
  } = _ref4;
  const {
    observe,
    width: elWidth
  } = useDimensions__default["default"]();
  const [playing, setPlaying] = React.useState(!requireInteraction);
  if (elWidth < 300) {
    return /*#__PURE__*/jsxRuntime.jsx("div", {
      ref: observe,
      children: /*#__PURE__*/jsxRuntime.jsx(LinkPlayer, {
        style: style,
        src: src,
        alt: alt,
        ...restProps
      })
    });
  }
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    style: {
      position: "relative",
      ...style
    },
    ...restProps,
    ref: observe,
    children: [/*#__PURE__*/jsxRuntime.jsx("iframe", {
      src: playing ? src ?? undefined : undefined,
      ref: ref,
      style: {
        objectFit: "contain",
        zIndex: 1,
        height: "100%",
        width: "100%",
        transition: "opacity .5s",
        opacity: !poster ? 1 : playing ? 1 : 0
      },
      sandbox: "allow-scripts",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    }), poster && /*#__PURE__*/jsxRuntime.jsx("img", {
      src: poster,
      style: {
        objectFit: "contain",
        pointerEvents: "none",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 2,
        transition: "opacity .5s",
        opacity: playing ? 0 : 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      alt: alt
    }), /*#__PURE__*/jsxRuntime.jsx(PlayButton, {
      onClick: () => {
        setPlaying(prev => !prev);
      },
      isPlaying: playing
    })]
  });
});
IframePlayer.displayName = "IframePlayer";
const LinkPlayer = /*#__PURE__*/React__default["default"].forwardRef((_ref5, ref) => {
  let {
    src,
    alt,
    style,
    ...restProps
  } = _ref5;
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    style: {
      position: "relative",
      ...style
    },
    ...restProps,
    children: /*#__PURE__*/jsxRuntime.jsx("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#fff",
        color: "rgb(138, 147, 155)"
      },
      children: /*#__PURE__*/jsxRuntime.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          flexWrap: "nowrap"
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(CarbonDocumentUnknown, {
          style: {
            maxWidth: "128px",
            minWidth: "48px",
            width: "50%",
            aspectRatio: "1"
          }
        }), /*#__PURE__*/jsxRuntime.jsx("a", {
          rel: "noopener noreferrer",
          style: {
            textDecoration: "underline",
            color: "rgb(138, 147, 155)"
          },
          href: src ?? undefined,
          target: "_blank",
          ref: ref,
          children: alt || "File"
        })]
      })
    })
  });
});
LinkPlayer.displayName = "LinkPlayer";

/**
 * This component can be used to render any media type, including image, audio, video, and html files.
 * Its convenient for rendering NFT media files, as these can be a variety of different types.
 * The component falls back to a external link if the media type is not supported.
 *
 * Props: {@link MediaRendererProps}
 *
 * @example
 * We can take a video file hosted on IPFS and render it using this component as follows
 * ```jsx
 * const Component = () => {
 *   return <MediaRenderer
 *     src="ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
 *     alt="A mp4 video"
 *   />
 * }
 * ```
 *
 * You can try switching out the `src` prop to different types of URLs and media types to explore the possibilities.
 */
const MediaRenderer = /*#__PURE__*/React__default["default"].forwardRef((_ref6, ref) => {
  let {
    src,
    poster,
    alt,
    requireInteraction = false,
    style,
    ...restProps
  } = _ref6;
  const mergedStyle = {
    objectFit: "contain",
    ...style
  };
  const videoOrImageSrc = useResolvedMediaType(src ?? undefined);
  const possiblePosterSrc = useResolvedMediaType(poster ?? undefined);
  if (!videoOrImageSrc.mimeType) {
    return /*#__PURE__*/jsxRuntime.jsx("img", {
      style: mergedStyle,
      ...restProps,
      ref: ref,
      alt: alt
    });
  } else if (videoOrImageSrc.mimeType === "text/html") {
    return /*#__PURE__*/jsxRuntime.jsx(IframePlayer, {
      style: mergedStyle,
      src: videoOrImageSrc.url,
      poster: possiblePosterSrc.url,
      requireInteraction: requireInteraction,
      ...restProps
    });
  } else if (videoOrImageSrc.mimeType.startsWith("model")) {
    return /*#__PURE__*/jsxRuntime.jsx(React.Suspense, {
      fallback: poster ? /*#__PURE__*/jsxRuntime.jsx("img", {
        style: mergedStyle,
        src: poster,
        alt: alt,
        ref: ref,
        ...restProps
      }) : null,
      children: /*#__PURE__*/jsxRuntime.jsx(ModelViewer, {
        style: mergedStyle,
        src: videoOrImageSrc.url || "",
        poster: poster,
        alt: alt,
        ...restProps
      })
    });
  } else if (shouldRenderVideoTag(videoOrImageSrc.mimeType)) {
    return /*#__PURE__*/jsxRuntime.jsx(VideoPlayer, {
      style: mergedStyle,
      src: videoOrImageSrc.url,
      poster: possiblePosterSrc.url,
      requireInteraction: requireInteraction,
      ...restProps
    });
  } else if (shouldRenderAudioTag(videoOrImageSrc.mimeType)) {
    return /*#__PURE__*/jsxRuntime.jsx(AudioPlayer, {
      style: mergedStyle,
      src: videoOrImageSrc.url,
      poster: possiblePosterSrc.url,
      requireInteraction: requireInteraction,
      ...restProps
    });
  } else if (videoOrImageSrc.mimeType.startsWith("image/")) {
    return /*#__PURE__*/jsxRuntime.jsx("img", {
      style: mergedStyle,
      src: videoOrImageSrc.url,
      alt: alt,
      ref: ref,
      ...restProps
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(LinkPlayer, {
    style: mergedStyle,
    src: videoOrImageSrc.url,
    alt: alt,
    ref: ref,
    ...restProps
  });
});
MediaRenderer.displayName = "MediaRenderer";
/**
 * @param uri - the uri to resolve (can be a url or a ipfs://\<cid\>)
 * @returns the fully resolved url + mime type of the media
 *
 * @example
 * Usage with fully formed url:
 * ```jsx
 * const Component = () => {
 *   const resolved = useResolvedMediaType("https://example.com/video.mp4");
 *   console.log("mime type", resolved.data.mimeType);
 *   console.log("url", resolved.data.url);
 *   return null;
 * }
 * ```
 *
 * Usage with ipfs cid:
 * ```jsx
 * const Component = () => {
 *   const resolved = useResolvedMediaType("ipfs://QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvsd");
 *   console.log("mime type", resolved.data.mimeType);
 *   console.log("url", resolved.data.url);
 *   return null;
 * }
 * ```
 */
function useResolvedMediaType(uri) {
  const resolvedUrl = React.useMemo(() => resolveIpfsUri(uri), [uri]);
  const resolvedMimType = reactQuery.useQuery(["mime-type", resolvedUrl], () => resolveMimeType(resolvedUrl), {
    enabled: !!resolvedUrl
  });
  return {
    url: resolvedUrl,
    mimeType: resolvedMimType.data
  };
}

/**
 * This component can be used to render NFTs from the thirdweb SDK.
 * Props: {@link ThirdwebNftMediaProps}
 *
 * @example
 * ```jsx
 * import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
 * export default function NFTCollectionRender() {
 *   const { contract } = useContract(<your-contract-address>);
 *   const { data: nft, isLoading } = useNFT(contract, 0);
 *
 *   return (
 *     <div>
 *       {!isLoading && nft ? (
 *         <ThirdwebNftMedia metadata={nft.metadata} />
 *       ) : (
 *         <p>Loading...</p>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
const ThirdwebNftMedia = /*#__PURE__*/React__default["default"].forwardRef((_ref, ref) => {
  let {
    metadata,
    ...props
  } = _ref;
  return /*#__PURE__*/jsxRuntime.jsx(MediaRenderer, {
    src: metadata.animation_url || metadata.image,
    poster: metadata.image,
    alt: metadata.name?.toString() || "",
    ref: ref,
    ...props
  });
});
ThirdwebNftMedia.displayName = "ThirdwebNftMedia";

function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

/**
 * Forces a re-render, similar to `forceUpdate` in class components.
 */
function useForceUpdate() {
  const [, dispatch] = React.useState(Object.create(null));
  return React.useCallback(() => {
    dispatch(Object.create(null));
  }, []);
}
const useIsomorphicLayoutEffect = canUseDOM() ? React.useLayoutEffect : React.useEffect;

/**
 * Portal from `@reach/portal`
 *
 * @see Docs https://reach.tech/portal#portal
 */
const PortalImpl = _ref => {
  let {
    children,
    type = "reach-portal",
    containerRef
  } = _ref;
  const mountNode = React.useRef(null);
  const portalNode = React.useRef(null);
  const forceUpdate = useForceUpdate();
  useIsomorphicLayoutEffect(() => {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) {
      return;
    }
    // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.
    const ownerDocument = mountNode.current.ownerDocument;
    const body = containerRef?.current || ownerDocument.body;
    portalNode.current = ownerDocument?.createElement(type);
    body.appendChild(portalNode.current);
    forceUpdate();
    return () => {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate, containerRef]);
  return portalNode.current ? /*#__PURE__*/reactDom.createPortal(children, portalNode.current) : /*#__PURE__*/jsxRuntime.jsx("span", {
    ref: mountNode
  });
};
const Portal = _ref2 => {
  let {
    unstable_skipInitialRender,
    ...props
  } = _ref2;
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    if (unstable_skipInitialRender) {
      setHydrated(true);
    }
  }, [unstable_skipInitialRender]);
  if (unstable_skipInitialRender && !hydrated) {
    return null;
  }
  return /*#__PURE__*/jsxRuntime.jsx(PortalImpl, {
    ...props
  });
};
Portal.displayName = "Portal";

function shortenString(str, extraShort) {
  return `${str.substring(0, extraShort ? 4 : 6)}...${str.substring(str.length - (extraShort ? 3 : 4))}`;
}
function shortenAddress(address, extraShort) {
  try {
    const formattedAddress = ethers.utils.getAddress(address);
    return shortenString(formattedAddress, extraShort);
  } catch {
    return address;
  }
}
function shortenIfAddress(address, extraShort) {
  if (typeof address === "string" && address.length > 0) {
    return shortenAddress(address, extraShort);
  }
  return address || "";
}

// extracted from chakra-ui
/**
 * React hook to copy content to clipboard
 *
 */
function useClipboard(text) {
  let optionsOrTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const [hasCopied, setHasCopied] = React.useState(false);
  const {
    timeout = 1500,
    ...copyOptions
  } = typeof optionsOrTimeout === "number" ? {
    timeout: optionsOrTimeout
  } : optionsOrTimeout;
  const onCopy = React.useCallback(() => {
    const didCopy = copy__default["default"](text, copyOptions);
    setHasCopied(didCopy);
  }, [text, copyOptions]);
  React.useEffect(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return {
    value: text,
    onCopy,
    hasCopied
  };
}

// import { TwUiTheme } from "../../theme";
const Box = styled__default["default"].div``;

const spin = react.keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
const Spinner = styled__default["default"].div`
  display: inline-block;
  border-top: 2px solid currentcolor;
  border-right: 2px solid currentcolor;
  border-bottom-style: solid;
  border-left-style: solid;
  border-radius: 99999px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-bottom-color: transparent;
  border-left-color: transparent;
  animation: 0.45s linear 0s infinite normal none running ${spin};
  width: 0.75em;
  height: 0.75em;
  flex-shrink: 0;
`;

const BaseButton = styled__default["default"].button`
  position: relative;
  border-radius: 0.5em;
  padding: 0.75em 1.25em;
  padding-right: ${props => props.hasRightElement ? "0.75em" : "1.25em"};
  padding-left: ${props => props.hasLeftElement ? "0.75em" : "1.25em"};
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.5px;
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: space-evenly;
  color: ${props => computeTextColorBasedOnBackground(props.theme.colors.accent)};
  border: 2px solid
    ${props => computeHoverColor(props.theme.colors.accent)};
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    position: relative;
    border-radius: 0.5em;
    outline: 0;
  }
  &:focus:after {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    border: 2px solid ${props => props.theme.colors.accent};
    border-radius: 11px;
  }
`;
function computeHoverColor(c) {
  const col = color__default["default"](c);
  if (col.hex() === "#000000") {
    return "#262627";
  }
  if (col.luminosity() < 0.2) {
    return col.lighten(0.1).hex();
  }
  return col.darken(0.1).hex();
}
function computeDisabledColor(c) {
  const col = color__default["default"](c);
  if (col.hex() === "#000000") {
    return "#262627";
  }
  if (col.luminosity() < 0.2) {
    return col.lighten(0.5).hex();
  }
  return col.darken(0.5).hex();
}
function computeTextColorBasedOnBackground(c) {
  const col = color__default["default"](c);
  if (col.isDark()) {
    return "#fff";
  }
  return "#000";
}
const SolidButton = styled__default["default"](BaseButton)`
  background: ${props => props.theme.colors.accent};
  &:hover {
    background: ${props => computeHoverColor(props.theme.colors.accent)};
    border-color: ${props => computeHoverColor(props.theme.colors.accent)};
  }
  &:disabled {
    background: ${props => computeDisabledColor(props.theme.colors.accent)};
    border-color: ${props => computeDisabledColor(props.theme.colors.accent)};
    color: ${props => computeTextColorBasedOnBackground(computeDisabledColor(props.theme.colors.accent))};
  }
`;
const OutlineButton = styled__default["default"](BaseButton)`
  background: transparent;
  &:hover {
    background: ${props => color__default["default"](props.theme.colors.background).alpha(0.5).hexa()};
  }
`;
const Button = _ref => {
  let {
    children,
    variant,
    rightElement,
    leftElement,
    isLoading,
    isDisabled,
    disabled,
    ...restProps
  } = _ref;
  const Btn = variant === "outline" ? OutlineButton : SolidButton;
  return /*#__PURE__*/jsxRuntime.jsxs(Btn, {
    ...restProps,
    disabled: isDisabled || disabled || isLoading,
    hasRightElement: !!rightElement,
    hasLeftElement: !!leftElement,
    children: [isLoading ? /*#__PURE__*/jsxRuntime.jsx(Spinner, {
      style: {
        position: "absolute",
        left: "calc(50% - 0.75em / 2)"
      }
    }) : null, /*#__PURE__*/jsxRuntime.jsxs("span", {
      style: {
        opacity: isLoading ? 0 : 1,
        display: "inherit",
        gap: "inherit",
        alignItems: "inherit",
        justifyContent: "inherit",
        width: "100%"
      },
      children: [leftElement, children, rightElement]
    })]
  });
};

const chainLogos = {
  ethereum: {
    svgProps: {
      viewBox: "0 0 28 28",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none"
    },
    paths: /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx("path", {
        fill: "#25292E",
        fillRule: "evenodd",
        d: "M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z",
        clipRule: "evenodd"
      }), /*#__PURE__*/jsxRuntime.jsx("path", {
        fill: "url(#a)",
        fillOpacity: ".3",
        fillRule: "evenodd",
        d: "M14 28a14 14 0 1 0 0-28 14 14 0 0 0 0 28Z",
        clipRule: "evenodd"
      }), /*#__PURE__*/jsxRuntime.jsx("path", {
        fill: "url(#b)",
        d: "M8.19 14.77 14 18.21l5.8-3.44-5.8 8.19-5.81-8.19Z"
      }), /*#__PURE__*/jsxRuntime.jsx("path", {
        fill: "#fff",
        d: "m14 16.93-5.81-3.44L14 4.34l5.81 9.15L14 16.93Z"
      }), /*#__PURE__*/jsxRuntime.jsxs("defs", {
        children: [/*#__PURE__*/jsxRuntime.jsxs("linearGradient", {
          id: "a",
          x1: "0",
          x2: "14",
          y1: "0",
          y2: "28",
          gradientUnits: "userSpaceOnUse",
          children: [/*#__PURE__*/jsxRuntime.jsx("stop", {
            stopColor: "#fff"
          }), /*#__PURE__*/jsxRuntime.jsx("stop", {
            offset: "1",
            stopColor: "#fff",
            stopOpacity: "0"
          })]
        }), /*#__PURE__*/jsxRuntime.jsxs("linearGradient", {
          id: "b",
          x1: "14",
          x2: "14",
          y1: "14.77",
          y2: "22.96",
          gradientUnits: "userSpaceOnUse",
          children: [/*#__PURE__*/jsxRuntime.jsx("stop", {
            stopColor: "#fff"
          }), /*#__PURE__*/jsxRuntime.jsx("stop", {
            offset: "1",
            stopColor: "#fff",
            stopOpacity: ".9"
          })]
        })]
      })]
    })
  },
  arbitrum: {
    svgProps: {
      viewBox: "0 0 28 28",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none"
    },
    paths: /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
        width: "26.6",
        height: "26.6",
        x: ".7",
        y: ".7",
        fill: "#2D374B",
        stroke: "#96BEDC",
        strokeWidth: "1.4",
        rx: "13.3"
      }), /*#__PURE__*/jsxRuntime.jsx("mask", {
        id: "a",
        width: "28",
        height: "28",
        x: "0",
        y: "0",
        maskUnits: "userSpaceOnUse",
        style: {
          maskType: "alpha"
        },
        children: /*#__PURE__*/jsxRuntime.jsx("rect", {
          width: "28",
          height: "28",
          fill: "#C4C4C4",
          rx: "14"
        })
      }), /*#__PURE__*/jsxRuntime.jsxs("g", {
        mask: "url(#a)",
        children: [/*#__PURE__*/jsxRuntime.jsx("path", {
          fill: "#28A0F0",
          d: "m14.0861 18.6041 6.5014 10.2239 4.0057-2.3213-7.86-12.3943-2.6471 4.4917Zm13.0744 3.4692-.003-1.8599-7.3064-11.407-2.3087 3.9173 7.091 11.4303 2.172-1.2586a.9628.9628 0 0 0 .3555-.7009l-.0004-.1212Z"
        }), /*#__PURE__*/jsxRuntime.jsx("rect", {
          width: "25.9",
          height: "25.9",
          x: "1.05",
          y: "1.05",
          fill: "url(#b)",
          fillOpacity: ".3",
          stroke: "#96BEDC",
          strokeWidth: "2.1",
          rx: "12.95"
        }), /*#__PURE__*/jsxRuntime.jsx("path", {
          fill: "#fff",
          d: "m.3634 28.2207-3.07-1.7674-.234-.8333L7.7461 9.0194c.7298-1.1913 2.3197-1.575 3.7957-1.5541l1.7323.0457L.3634 28.2207ZM19.1655 7.511l-4.5653.0166L2.24 27.9533l3.6103 2.0788.9818-1.6652L19.1655 7.511Z"
        })]
      }), /*#__PURE__*/jsxRuntime.jsx("defs", {
        children: /*#__PURE__*/jsxRuntime.jsxs("linearGradient", {
          id: "b",
          x1: "0",
          x2: "14",
          y1: "0",
          y2: "28",
          gradientUnits: "userSpaceOnUse",
          children: [/*#__PURE__*/jsxRuntime.jsx("stop", {
            stopColor: "#fff"
          }), /*#__PURE__*/jsxRuntime.jsx("stop", {
            offset: "1",
            stopColor: "#fff",
            stopOpacity: "0"
          })]
        })
      })]
    })
  },
  avalanche: {
    svgProps: {
      viewBox: "0 0 28 28",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none"
    },
    paths: /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx("path", {
        fill: "#fff",
        d: "M23 5H5v18h18V5Z"
      }), /*#__PURE__*/jsxRuntime.jsx("path", {
        fill: "#E84142",
        fillRule: "evenodd",
        d: "M14 28c-7.513.008-14-6.487-14-14C0 6.196 6.043-.008 14 0c7.95.008 14 6.196 14 14 0 7.505-6.495 13.992-14 14Zm-3.971-7.436H7.315c-.57 0-.851 0-1.023-.11a.69.69 0 0 1-.313-.54c-.01-.202.13-.45.412-.944l6.7-11.809c.285-.501.43-.752.612-.845.195-.1.429-.1.625 0 .182.093.326.344.611.845l1.377 2.404.007.013c.308.538.464.81.533 1.097a2.04 2.04 0 0 1 0 .954c-.07.289-.224.564-.536 1.11l-3.52 6.22-.009.017c-.31.542-.467.817-.684 1.024a2.048 2.048 0 0 1-.835.485c-.285.079-.604.079-1.243.079Zm6.852 0h3.888c.574 0 .862 0 1.034-.113a.687.687 0 0 0 .313-.543c.01-.196-.128-.434-.398-.9a8.198 8.198 0 0 1-.028-.048l-1.948-3.332-.022-.037c-.274-.463-.412-.697-.59-.787a.684.684 0 0 0-.621 0c-.179.093-.323.337-.608.828l-1.94 3.331-.007.012c-.284.49-.426.735-.416.936.014.22.127.423.313.543.168.11.456.11 1.03.11Z",
        clipRule: "evenodd"
      })]
    })
  },
  optimism: {
    svgProps: {
      viewBox: "0 0 28 28",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none"
    },
    paths: /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
        width: "28",
        height: "28",
        fill: "#FF3131",
        rx: "14"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        width: "28",
        height: "28",
        fill: "url(#a)",
        fillOpacity: ".3",
        rx: "14"
      }), /*#__PURE__*/jsxRuntime.jsx("path", {
        fill: "#fff",
        d: "M9.22 18.35c2.7 0 4.86-2.2 4.86-5.38 0-2.19-1.47-3.8-3.98-3.8-2.72 0-4.85 2.2-4.85 5.38 0 2.2 1.5 3.8 3.97 3.8Zm.83-7.35c1.06 0 1.74.81 1.74 2.1 0 1.9-1.11 3.42-2.51 3.42-1.06 0-1.74-.82-1.74-2.1 0-1.89 1.11-3.42 2.5-3.42Zm6.38-1.68-1.88 8.88h2.26l.55-2.6h1.47c2.43 0 4.01-1.38 4.01-3.6 0-1.61-1.17-2.68-3.1-2.68h-3.3Zm1.9 1.74h.94c.83 0 1.3.38 1.3 1.14 0 1-.68 1.7-1.74 1.7h-1.11l.6-2.84Z"
      }), /*#__PURE__*/jsxRuntime.jsx("defs", {
        children: /*#__PURE__*/jsxRuntime.jsxs("linearGradient", {
          id: "a",
          x1: "0",
          x2: "14",
          y1: "0",
          y2: "28",
          gradientUnits: "userSpaceOnUse",
          children: [/*#__PURE__*/jsxRuntime.jsx("stop", {
            stopColor: "#fff"
          }), /*#__PURE__*/jsxRuntime.jsx("stop", {
            offset: "1",
            stopColor: "#fff",
            stopOpacity: "0"
          })]
        })
      })]
    })
  },
  polygon: {
    svgProps: {
      viewBox: "0 0 28 28",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none"
    },
    paths: /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
        width: "28",
        height: "28",
        fill: "#8247E5",
        rx: "14"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        width: "28",
        height: "28",
        fill: "url(#a)",
        fillOpacity: ".3",
        rx: "14"
      }), /*#__PURE__*/jsxRuntime.jsx("path", {
        fill: "#fff",
        d: "M18.28 10.92a1.06 1.06 0 0 0-1.06 0l-2.41 1.42-1.65.93-2.41 1.43c-.31.19-.72.19-1.06 0l-1.92-1.12a1.07 1.07 0 0 1-.53-.9v-2.2a1 1 0 0 1 .53-.9l1.9-1.08c.3-.18.7-.18 1.04 0l1.9 1.09c.3.18.52.52.52.9v1.42l1.64-.96V9.52a1 1 0 0 0-.52-.9l-3.5-2.04a1.06 1.06 0 0 0-1.06 0L6.13 8.63a1 1 0 0 0-.53.9v4.12a1 1 0 0 0 .53.9l3.56 2.04c.31.19.71.19 1.06 0l2.41-1.4 1.65-.95 2.41-1.4c.31-.19.72-.19 1.06 0l1.89 1.09c.3.18.53.52.53.9v2.2a1 1 0 0 1-.53.9l-1.9 1.11c-.3.19-.7.19-1.05 0l-1.89-1.08a1.07 1.07 0 0 1-.52-.9v-1.43l-1.65.96v1.43a1 1 0 0 0 .53.9l3.56 2.04c.31.19.72.19 1.06 0l3.56-2.04c.31-.19.53-.53.53-.9v-4.13a1 1 0 0 0-.53-.9l-3.6-2.07Z"
      }), /*#__PURE__*/jsxRuntime.jsx("defs", {
        children: /*#__PURE__*/jsxRuntime.jsxs("linearGradient", {
          id: "a",
          x1: "0",
          x2: "14",
          y1: "0",
          y2: "28",
          gradientUnits: "userSpaceOnUse",
          children: [/*#__PURE__*/jsxRuntime.jsx("stop", {
            stopColor: "#fff"
          }), /*#__PURE__*/jsxRuntime.jsx("stop", {
            offset: "1",
            stopColor: "#fff",
            stopOpacity: "0"
          })]
        })
      })]
    })
  },
  fantom: {
    svgProps: {
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    },
    paths: /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsxs("defs", {
        children: [/*#__PURE__*/jsxRuntime.jsx("style", {
          children: ".cls-1{fill:#fff;fill-rule:evenodd}"
        }), /*#__PURE__*/jsxRuntime.jsx("mask", {
          id: "mask",
          width: 93.1,
          height: 20,
          x: 10,
          y: 6,
          maskUnits: "userSpaceOnUse",
          children: /*#__PURE__*/jsxRuntime.jsx("path", {
            id: "a",
            d: "M10 6h93.1v20H10Z",
            className: "cls-1"
          })
        })]
      }), /*#__PURE__*/jsxRuntime.jsx("g", {
        id: "Layer_2",
        "data-name": "Layer 2",
        children: /*#__PURE__*/jsxRuntime.jsxs("g", {
          id: "Layer_1-2",
          "data-name": "Layer 1",
          children: [/*#__PURE__*/jsxRuntime.jsx("circle", {
            cx: 16,
            cy: 16,
            r: 16,
            fill: "#13b5ec"
          }), /*#__PURE__*/jsxRuntime.jsx("path", {
            d: "m17.2 12.9 3.6-2.1V15Zm3.6 9L16 24.7l-4.8-2.8V17l4.8 2.8 4.8-2.8Zm-9.6-11.1 3.6 2.1-3.6 2.1Zm5.4 3.1 3.6 2.1-3.6 2.1Zm-1.2 4.2L11.8 16l3.6-2.1Zm4.8-8.3L16 12.2l-4.2-2.4L16 7.3ZM10 9.4v13.1l6 3.4 6-3.4V9.4L16 6Z",
            className: "cls-1"
          })]
        })
      })]
    })
  },
  binance: {
    svgProps: {
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    },
    paths: /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx("polygon", {
        fill: "#F3BA2F",
        points: "38.171,53.203 62.759,28.616 87.36,53.216 101.667,38.909 62.759,0 23.864,38.896 "
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "3.644",
        y: "53.188",
        transform: "matrix(0.7071 0.7071 -0.7071 0.7071 48.7933 8.8106)",
        fill: "#F3BA2F",
        width: "20.233",
        height: "20.234"
      }), /*#__PURE__*/jsxRuntime.jsx("polygon", {
        fill: "#F3BA2F",
        points: "38.171,73.408 62.759,97.995 87.359,73.396 101.674,87.695 101.667,87.703 62.759,126.61123.863,87.716 23.843,87.696 "
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "101.64",
        y: "53.189",
        transform: "matrix(-0.7071 0.7071 -0.7071 -0.7071 235.5457 29.0503)",
        fill: "#F3BA2F",
        width: "20.234",
        height: "20.233"
      }), /*#__PURE__*/jsxRuntime.jsx("polygon", {
        fill: "#F3BA2F",
        points: "77.271,63.298 77.277,63.298 62.759,48.78 52.03,59.509 52.029,59.509 50.797,60.742 48.254,63.28548.254,63.285 48.234,63.305 48.254,63.326 62.759,77.831 77.277,63.313 77.284,63.305 "
      })]
    })
  }
};

const CoinbaseWalletIcon = {
  svgProps: {
    viewBox: "0 0 28 28",
    width: "28",
    height: "28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  paths: /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
      width: "28",
      height: "28",
      fill: "#2C5FF6"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 23.8C19.4124 23.8 23.8 19.4124 23.8 14C23.8 8.58761 19.4124 4.2 14 4.2C8.58761 4.2 4.2 8.58761 4.2 14C4.2 19.4124 8.58761 23.8 14 23.8ZM11.55 10.8C11.1358 10.8 10.8 11.1358 10.8 11.55V16.45C10.8 16.8642 11.1358 17.2 11.55 17.2H16.45C16.8642 17.2 17.2 16.8642 17.2 16.45V11.55C17.2 11.1358 16.8642 10.8 16.45 10.8H11.55Z",
      fill: "white"
    })]
  })
};

const MetamaskIcon = {
  svgProps: {
    viewBox: "0 0 28 28",
    width: "28",
    height: "28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  paths: /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
      width: "28",
      height: "28",
      fill: "white"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M24.0891 3.1199L15.3446 9.61456L16.9617 5.7828L24.0891 3.1199Z",
      fill: "#E2761B",
      stroke: "#E2761B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M3.90207 3.1199L12.5763 9.67608L11.0383 5.7828L3.90207 3.1199Z",
      fill: "#E4761B",
      stroke: "#E4761B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M20.9429 18.1745L18.6139 21.7426L23.597 23.1136L25.0295 18.2536L20.9429 18.1745Z",
      fill: "#E4761B",
      stroke: "#E4761B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M2.97929 18.2536L4.40301 23.1136L9.38607 21.7426L7.05713 18.1745L2.97929 18.2536Z",
      fill: "#E4761B",
      stroke: "#E4761B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M9.10483 12.1456L7.71626 14.2461L12.6642 14.4658L12.4884 9.14877L9.10483 12.1456Z",
      fill: "#E4761B",
      stroke: "#E4761B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M18.8864 12.1456L15.4589 9.08725L15.3446 14.4658L20.2837 14.2461L18.8864 12.1456Z",
      fill: "#E4761B",
      stroke: "#E4761B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M9.38606 21.7426L12.3566 20.2925L9.79033 18.2888L9.38606 21.7426Z",
      fill: "#E4761B",
      stroke: "#E4761B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M15.6347 20.2925L18.6139 21.7426L18.2009 18.2888L15.6347 20.2925Z",
      fill: "#E4761B",
      stroke: "#E4761B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M18.6139 21.7426L15.6347 20.2925L15.8719 22.2348L15.8456 23.0521L18.6139 21.7426Z",
      fill: "#D7C1B3",
      stroke: "#D7C1B3",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M9.38606 21.7426L12.1544 23.0521L12.1368 22.2348L12.3566 20.2925L9.38606 21.7426Z",
      fill: "#D7C1B3",
      stroke: "#D7C1B3",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M12.1984 17.0056L9.72002 16.2762L11.4689 15.4765L12.1984 17.0056Z",
      fill: "#233447",
      stroke: "#233447",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M15.7928 17.0056L16.5223 15.4765L18.28 16.2762L15.7928 17.0056Z",
      fill: "#233447",
      stroke: "#233447",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M9.38606 21.7426L9.80791 18.1745L7.05712 18.2536L9.38606 21.7426Z",
      fill: "#CD6116",
      stroke: "#CD6116",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M18.1921 18.1745L18.6139 21.7426L20.9429 18.2536L18.1921 18.1745Z",
      fill: "#CD6116",
      stroke: "#CD6116",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M20.2837 14.2461L15.3446 14.4658L15.8016 17.0057L16.5311 15.4765L18.2888 16.2762L20.2837 14.2461Z",
      fill: "#CD6116",
      stroke: "#CD6116",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M9.72002 16.2762L11.4777 15.4765L12.1984 17.0057L12.6642 14.4658L7.71626 14.2461L9.72002 16.2762Z",
      fill: "#CD6116",
      stroke: "#CD6116",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M7.71626 14.2461L9.79033 18.2888L9.72002 16.2762L7.71626 14.2461Z",
      fill: "#E4751F",
      stroke: "#E4751F",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M18.2888 16.2762L18.2009 18.2888L20.2837 14.2461L18.2888 16.2762Z",
      fill: "#E4751F",
      stroke: "#E4751F",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M12.6642 14.4658L12.1984 17.0057L12.7784 20.0025L12.9102 16.0565L12.6642 14.4658Z",
      fill: "#E4751F",
      stroke: "#E4751F",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M15.3446 14.4658L15.1073 16.0477L15.2128 20.0025L15.8016 17.0057L15.3446 14.4658Z",
      fill: "#E4751F",
      stroke: "#E4751F",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M15.8016 17.0056L15.2128 20.0025L15.6347 20.2925L18.2009 18.2888L18.2888 16.2762L15.8016 17.0056Z",
      fill: "#F6851B",
      stroke: "#F6851B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M9.72002 16.2762L9.79033 18.2888L12.3566 20.2925L12.7784 20.0025L12.1984 17.0056L9.72002 16.2762Z",
      fill: "#F6851B",
      stroke: "#F6851B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M15.8456 23.0521L15.8719 22.2348L15.6522 22.0414H12.339L12.1368 22.2348L12.1544 23.0521L9.38606 21.7426L10.3528 22.5336L12.3126 23.8958H15.6786L17.6472 22.5336L18.6139 21.7426L15.8456 23.0521Z",
      fill: "#C0AD9E",
      stroke: "#C0AD9E",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M15.6347 20.2925L15.2128 20.0025H12.7784L12.3566 20.2925L12.1368 22.2348L12.339 22.0414H15.6522L15.8719 22.2348L15.6347 20.2925Z",
      fill: "#161616",
      stroke: "#161616",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M24.4583 10.0364L25.2053 6.45072L24.0891 3.1199L15.6347 9.39485L18.8864 12.1456L23.4827 13.4903L24.5022 12.3038L24.0628 11.9874L24.7658 11.3459L24.221 10.924L24.924 10.3879L24.4583 10.0364Z",
      fill: "#763D16",
      stroke: "#763D16",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M2.79472 6.45072L3.54174 10.0364L3.06717 10.3879L3.77024 10.924L3.23415 11.3459L3.93722 11.9874L3.4978 12.3038L4.50847 13.4903L9.10483 12.1456L12.3566 9.39485L3.90207 3.1199L2.79472 6.45072Z",
      fill: "#763D16",
      stroke: "#763D16",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M23.4827 13.4903L18.8864 12.1456L20.2837 14.2461L18.2009 18.2888L20.9429 18.2536H25.0295L23.4827 13.4903Z",
      fill: "#F6851B",
      stroke: "#F6851B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M9.10484 12.1456L4.50848 13.4903L2.97929 18.2536H7.05713L9.79033 18.2888L7.71626 14.2461L9.10484 12.1456Z",
      fill: "#F6851B",
      stroke: "#F6851B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M15.3446 14.4658L15.6347 9.39485L16.9705 5.7828H11.0383L12.3566 9.39485L12.6642 14.4658L12.7696 16.0653L12.7784 20.0025H15.2128L15.2304 16.0653L15.3446 14.4658Z",
      fill: "#F6851B",
      stroke: "#F6851B",
      strokeWidth: "0.0878845",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  })
};

const WalletConnectIcon = {
  svgProps: {
    viewBox: "0 0 28 28",
    width: "28",
    height: "28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  paths: /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
      width: "28",
      height: "28",
      fill: "#3B99FC"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M8.38969 10.3739C11.4882 7.27538 16.5118 7.27538 19.6103 10.3739L19.9832 10.7468C20.1382 10.9017 20.1382 11.1529 19.9832 11.3078L18.7076 12.5835C18.6301 12.6609 18.5045 12.6609 18.4271 12.5835L17.9139 12.0703C15.7523 9.9087 12.2477 9.9087 10.0861 12.0703L9.53655 12.6198C9.45909 12.6973 9.3335 12.6973 9.25604 12.6198L7.98039 11.3442C7.82547 11.1893 7.82547 10.9381 7.98039 10.7832L8.38969 10.3739ZM22.2485 13.012L23.3838 14.1474C23.5387 14.3023 23.5387 14.5535 23.3838 14.7084L18.2645 19.8277C18.1096 19.9827 17.8584 19.9827 17.7035 19.8277C17.7035 19.8277 17.7035 19.8277 17.7035 19.8277L14.0702 16.1944C14.0314 16.1557 13.9686 16.1557 13.9299 16.1944C13.9299 16.1944 13.9299 16.1944 13.9299 16.1944L10.2966 19.8277C10.1417 19.9827 9.89053 19.9827 9.73561 19.8278C9.7356 19.8278 9.7356 19.8277 9.7356 19.8277L4.61619 14.7083C4.46127 14.5534 4.46127 14.3022 4.61619 14.1473L5.75152 13.012C5.90645 12.857 6.15763 12.857 6.31255 13.012L9.94595 16.6454C9.98468 16.6841 10.0475 16.6841 10.0862 16.6454C10.0862 16.6454 10.0862 16.6454 10.0862 16.6454L13.7194 13.012C13.8743 12.857 14.1255 12.857 14.2805 13.012C14.2805 13.012 14.2805 13.012 14.2805 13.012L17.9139 16.6454C17.9526 16.6841 18.0154 16.6841 18.0541 16.6454L21.6874 13.012C21.8424 12.8571 22.0936 12.8571 22.2485 13.012Z",
      fill: "white"
    })]
  })
};

const StyledSvg = styled__default["default"].svg`
  border-radius: 0.25em;
  flex-shrink: 0;
  ${props => props.boxSize ? `width: ${props.boxSize};
    height: ${props.boxSize};` : ""}
`;
const iconMap = {
  metamask: MetamaskIcon,
  walletConnect: WalletConnectIcon,
  coinbaseWallet: CoinbaseWalletIcon,
  ...chainLogos
};
const Icon = _ref => {
  let {
    name,
    ...props
  } = _ref;
  const icon = iconMap[name];
  return /*#__PURE__*/jsxRuntime.jsx(StyledSvg, {
    ...icon.svgProps,
    ...props,
    children: icon.paths
  });
};

const MenuItemBase = styled__default["default"].li`
  display: flex;
  padding: 0.75em 1em;
  align-items: center;
  gap: 0.5em;
  font-size: 1em;

  ${props => props.isSelectable ? `&:hover,
  &[data-focus] {
    cursor: pointer;
    background: ${color__default["default"](props.theme.colors.text).alpha(0.15).hexa()};
  }` : ``}

  > svg {
    flex-shrink: 0;
  }
`;
const MenuItem = _ref => {
  let {
    children,
    leftElement,
    rightElement,
    isSelectable = true,
    onClick,
    ...restProps
  } = _ref;
  return /*#__PURE__*/jsxRuntime.jsxs(MenuItemBase, {
    ...restProps,
    onClick: isSelectable ? onClick : undefined,
    isSelectable: isSelectable,
    children: [leftElement, children, rightElement]
  });
};

const Menu = styled__default["default"].ul`
  padding: 0;
  margin: 0;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  list-style: none;
  border-radius: 0.5em;
  overflow: hidden;
  position: relative;
  pointer-events: auto;
  &:focus {
    outline: 0;
  }
  &:after {
    content: "";
    position: absolute;
    border: 1px solid ${props => props.theme.colors.accent};
    border-radius: 0.5em;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const lightModeTheme = {
  colors: {
    accent: "#fff",
    background: "#fff",
    text: "#000"
  }
};
const darkModeTheme = {
  colors: {
    accent: "#000",
    background: "#000",
    text: "#fff"
  }
};
const fontFamily = `SFRounded, ui-rounded, "SF Pro Rounded", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const ThemeProvider = _ref => {
  let {
    colorMode,
    accentColor,
    children
  } = _ref;
  const theme = React.useMemo(() => {
    const t = colorMode === "light" ? lightModeTheme : darkModeTheme;
    return {
      ...t,
      colors: {
        ...t.colors,
        accent: accentColor || t.colors.accent
      }
    };
  }, [accentColor, colorMode]);
  return /*#__PURE__*/jsxRuntime.jsx(react.ThemeProvider, {
    theme: theme,
    children: /*#__PURE__*/jsxRuntime.jsx("span", {
      style: {
        fontFamily
      },
      children: children
    })
  });
};

const Select = styled__default["default"].select`
  margin: -0.25em 0;
  background: ${props => color__default["default"](props.theme.colors.background).alpha(0.85).hexa()};
  color: ${props => props.theme.colors.text};
  border: 1px solid
    ${props => color__default["default"](props.theme.colors.text).alpha(0.25).hexa()};
  border-radius: 0.25em;
  padding: 0.25em;
  width: 100%;
  flex-shrink: 1;
  font-size: 1em;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 2px solid ${props => props.theme.colors.accent};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const SupportedNetworkSelect = _ref => {
  let {
    disabledChainIds,
    ...selectProps
  } = _ref;
  const {
    mainnets,
    testnets
  } = React.useMemo(() => {
    const networks = sdk.SUPPORTED_CHAIN_IDS.map(supportedChain => {
      return getChainFromChainId(supportedChain);
    });
    return {
      mainnets: networks.filter(n => !n.testnet),
      testnets: networks.filter(n => n.testnet)
    };
  }, []);
  return /*#__PURE__*/jsxRuntime.jsxs(Select, {
    ...selectProps,
    children: [/*#__PURE__*/jsxRuntime.jsx("option", {
      disabled: true,
      value: -1,
      children: "Select Network"
    }), /*#__PURE__*/jsxRuntime.jsx("optgroup", {
      label: "Mainnets",
      children: mainnets.map(mn => /*#__PURE__*/jsxRuntime.jsxs("option", {
        value: mn.id,
        disabled: disabledChainIds?.includes(mn.id),
        children: [mn.name, " (", mn.nativeCurrency?.symbol, ")"]
      }, mn.id))
    }), /*#__PURE__*/jsxRuntime.jsx("optgroup", {
      label: "Testnets",
      children: testnets.map(tn => /*#__PURE__*/jsxRuntime.jsxs("option", {
        value: tn.id,
        disabled: disabledChainIds?.includes(tn.id),
        children: [tn.name, " (", tn.nativeCurrency?.symbol, ")"]
      }, tn.id))
    })]
  });
};

const SUPPORTED_CONNECTORS = ["injected", "walletConnect", "coinbasewallet"];
function getIconForConnector(connector) {
  if (connector.name.toLowerCase().includes("coinbase")) {
    return /*#__PURE__*/jsxRuntime.jsx(Icon, {
      boxSize: "1.5em",
      name: "coinbaseWallet"
    });
  }
  if (connector.name.toLocaleLowerCase().includes("metamask")) {
    return /*#__PURE__*/jsxRuntime.jsx(Icon, {
      boxSize: "1.5em",
      name: "metamask"
    });
  }
  const id = connector.id;
  switch (id) {
    case "injected":
      return /*#__PURE__*/jsxRuntime.jsx(Icon, {
        boxSize: "1.5em",
        name: "metamask"
      });
    case "walletConnect":
      return /*#__PURE__*/jsxRuntime.jsx(Icon, {
        boxSize: "1.5em",
        name: "walletConnect"
      });
    case "coinbasewallet":
      return /*#__PURE__*/jsxRuntime.jsx(Icon, {
        boxSize: "1.5em",
        name: "coinbaseWallet"
      });
    default:
      throw new Error("unsupported connector");
  }
}
let connecting = false;
let switchingNetwork = false;
let authing = false;
let switchingWallet = false;
const chainIdToCurrencyMap = {
  [sdk.ChainId.Mainnet]: "ethereum",
  [sdk.ChainId.Goerli]: "ethereum",
  [sdk.ChainId.Arbitrum]: "arbitrum",
  [sdk.ChainId.ArbitrumGoerli]: "arbitrum",
  [sdk.ChainId.Avalanche]: "avalanche",
  [sdk.ChainId.AvalancheFujiTestnet]: "avalanche",
  [sdk.ChainId.Fantom]: "fantom",
  [sdk.ChainId.FantomTestnet]: "fantom",
  [sdk.ChainId.Optimism]: "optimism",
  [sdk.ChainId.OptimismGoerli]: "optimism",
  [sdk.ChainId.Polygon]: "polygon",
  [sdk.ChainId.Mumbai]: "polygon",
  [sdk.ChainId.BinanceSmartChainMainnet]: "binance",
  [sdk.ChainId.BinanceSmartChainTestnet]: "binance"
};

/**
 * A component that allows the user to connect their wallet.
 *
 * The button has to be wrapped in a `ThirdwebProvider` in order to function.
 *
 * @example
 * ```javascript
 * import { ConnectWallet } from '@thirdweb-dev/react';
 *
 * const App = () => {
 *  return (
 *   <div>
 *     <ConnectWallet />
 *   </div>
 * )
 * }
 * ```
 *
 *
 * @beta
 */
const ConnectWallet = _ref => {
  let {
    auth,
    className,
    btnTitle,
    ...themeProps
  } = _ref;
  const id = React.useId();
  const walletAddress = evm.useAddress();
  const [state, send] = react$1.useMachine(menu__namespace.machine({
    id,
    closeOnSelect: true,
    positioning: {
      sameWidth: true
    }
  }));
  const api = menu__namespace.connect(state, send, react$1.normalizeProps);
  const [{
    data: {
      connectors,
      connector
    }
  }, connect] = useConnect.useConnect();
  const disconnect = useDisconnect({
    reconnectPrevious: false
  });
  const supportedConnectors = connectors.filter(c => SUPPORTED_CONNECTORS.includes(c.id));
  const [network, switchNetwork] = useNetwork();
  const chainId = evm.useChainId();
  const connectWithMetamask = useMetamask();
  const balanceQuery = evm.useBalance();
  const {
    onCopy,
    hasCopied
  } = useClipboard(walletAddress || "");
  const authConfig = evm.useThirdwebAuthContext();
  const {
    user,
    isLoading
  } = evm.useUser();
  const {
    login
  } = evm.useLogin();
  const {
    logout
  } = evm.useLogout();
  const requiresSignIn = auth?.loginOptional ? false : !!authConfig?.authUrl && !!walletAddress && !user?.address;
  return /*#__PURE__*/jsxRuntime.jsx(ThemeProvider, {
    ...themeProps,
    children: /*#__PURE__*/jsxRuntime.jsxs("div", {
      style: {
        position: "relative",
        width: "100%"
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(Button, {
        className: className,
        style: {
          height: "50px",
          minWidth: "200px",
          width: "100%"
        },
        onClick: async e => {
          if (requiresSignIn) {
            e.preventDefault();
            e.stopPropagation();
            authing = true;
            try {
              await login(auth?.loginOptions);
            } catch (err) {
              console.error("failed to log in", err);
            }
            authing = false;
          }
        },
        ...(requiresSignIn ? {} : api.triggerProps),
        leftElement: requiresSignIn ? isLoading ? /*#__PURE__*/jsxRuntime.jsx(Spinner, {}) : /*#__PURE__*/jsxRuntime.jsx(FiLock.FiLock, {}) : walletAddress && chainId && chainId in chainIdToCurrencyMap ? /*#__PURE__*/jsxRuntime.jsx(Icon, {
          boxSize: "1.5em",
          name: chainIdToCurrencyMap[chainId]
        }) : undefined,
        rightElement: requiresSignIn ? undefined : /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [connector && getIconForConnector(connector), /*#__PURE__*/jsxRuntime.jsx(FiChevronDown.FiChevronDown, {
            style: {
              transition: "transform 150ms ease",
              transform: `rotate(${api.isOpen ? "-180deg" : "0deg"})`
            }
          })]
        }),
        children: walletAddress ? requiresSignIn ? /*#__PURE__*/jsxRuntime.jsx("span", {
          style: {
            whiteSpace: "nowrap"
          },
          children: "Sign in"
        }) : /*#__PURE__*/jsxRuntime.jsxs("span", {
          style: {
            display: "flex",
            flexDirection: "column",
            fontWeight: 400,
            alignItems: "flex-start",
            fontSize: "0.8em"
          },
          children: [/*#__PURE__*/jsxRuntime.jsx("span", {
            style: {
              whiteSpace: "nowrap",
              fontWeight: 500
            },
            children: balanceQuery.isLoading ? "Loading..." : /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [balanceQuery.data?.displayValue.slice(0, 5), " ", balanceQuery.data?.symbol]
            })
          }), /*#__PURE__*/jsxRuntime.jsx("span", {
            style: {
              fontSize: "0.9em"
            },
            children: shortenIfAddress(walletAddress)
          })]
        }) : /*#__PURE__*/jsxRuntime.jsx("span", {
          style: {
            whiteSpace: "nowrap"
          },
          children: btnTitle || "Connect Wallet"
        })
      }), /*#__PURE__*/jsxRuntime.jsx(Portal, {
        children: /*#__PURE__*/jsxRuntime.jsx(Box, {
          ...api.positionerProps,
          style: {
            zIndex: 9999,
            fontFamily
          },
          children: /*#__PURE__*/jsxRuntime.jsx(Menu, {
            ...api.contentProps,
            children: !api.isOpen ? null : walletAddress ? /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [authConfig?.authUrl && !user?.address && !requiresSignIn ? /*#__PURE__*/jsxRuntime.jsx(MenuItem, {
                ...api.getItemProps({
                  id: "auth",
                  closeOnSelect: false
                }),
                leftElement: isLoading ? /*#__PURE__*/jsxRuntime.jsx(Spinner, {}) : /*#__PURE__*/jsxRuntime.jsx(FiLock.FiLock, {}),
                onClick: async () => {
                  if (isLoading || authing || user?.address) {
                    return;
                  }
                  authing = true;
                  try {
                    await login(auth?.loginOptions);
                  } catch (err) {
                    console.error("failed to log in", err);
                  }
                  authing = false;
                },
                children: "Sign in"
              }) : null, /*#__PURE__*/jsxRuntime.jsx(MenuItem, {
                ...api.getItemProps({
                  id: "copy",
                  closeOnSelect: false
                }),
                leftElement: hasCopied ? /*#__PURE__*/jsxRuntime.jsx(FiCheck.FiCheck, {
                  width: "1em",
                  height: "1em",
                  color: "#57ab5a"
                }) : /*#__PURE__*/jsxRuntime.jsx(FiCopy.FiCopy, {
                  width: "1em",
                  height: "1em"
                }),
                onClick: () => {
                  onCopy();
                },
                children: "Copy address"
              }), /*#__PURE__*/jsxRuntime.jsx(MenuItem, {
                ...api.getItemProps({
                  id: "switch-network",
                  closeOnSelect: false,
                  disabled: !switchNetwork
                }),
                isSelectable: false,
                leftElement: network.loading ? /*#__PURE__*/jsxRuntime.jsx(Spinner, {}) : network.error ? /*#__PURE__*/jsxRuntime.jsx(FiWifi.FiWifi, {
                  color: "#e5534b",
                  width: "1em",
                  height: "1em"
                }) : /*#__PURE__*/jsxRuntime.jsx(FiWifi.FiWifi, {
                  width: "1em",
                  height: "1em"
                }),
                children: /*#__PURE__*/jsxRuntime.jsx(SupportedNetworkSelect, {
                  value: chainId,
                  disabled: !switchNetwork,
                  onChange: async e => {
                    if (!switchingNetwork && switchNetwork) {
                      switchingNetwork = true;
                      const number = parseInt(e.target.value);
                      try {
                        await switchNetwork(number);
                      } catch (err) {
                        console.error("failed to switch network", err);
                      } finally {
                        switchingNetwork = false;
                      }
                    }
                  }
                })
              }), connector && connector.name === "MetaMask" && connector.id === "injected" ? /*#__PURE__*/jsxRuntime.jsx(MenuItem, {
                ...api.getItemProps({
                  id: "switch-wallet"
                }),
                leftElement: /*#__PURE__*/jsxRuntime.jsx(FiShuffle.FiShuffle, {
                  width: "1em",
                  height: "1em"
                }),
                onClick: async () => {
                  if (switchingWallet) {
                    return;
                  }
                  switchingWallet = true;
                  try {
                    await connector.getProvider().request({
                      method: "wallet_requestPermissions",
                      params: [{
                        eth_accounts: {}
                      }]
                    });
                    api.close();
                  } catch (err) {
                    console.error("failed to switch wallets", err);
                  }
                  switchingWallet = false;
                },
                children: "Switch Account"
              }) : null, /*#__PURE__*/jsxRuntime.jsx(MenuItem, {
                ...api.getItemProps({
                  id: "disconnect"
                }),
                leftElement: /*#__PURE__*/jsxRuntime.jsx(FiXCircle.FiXCircle, {
                  width: "1em",
                  height: "1em"
                }),
                onClick: () => {
                  disconnect();
                  if (authConfig?.authUrl) {
                    logout();
                  }
                  api.close();
                },
                children: "Disconnect"
              })]
            }) : /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [/*#__PURE__*/jsxRuntime.jsx(MenuItem, {
                ...api.getItemProps({
                  id: "metamask"
                }),
                onClick: async () => {
                  if (!connecting) {
                    try {
                      connecting = true;
                      await connectWithMetamask();
                      api.close();
                    } finally {
                      connecting = false;
                    }
                  }
                },
                leftElement: /*#__PURE__*/jsxRuntime.jsx(Icon, {
                  boxSize: "1.5em",
                  name: "metamask"
                }),
                children: "MetaMask"
              }), supportedConnectors.filter(c => c.name !== "MetaMask").sort((a, b) => a.name.localeCompare(b.name)).map(c => {
                if (!c.ready) {
                  return null;
                }
                return /*#__PURE__*/jsxRuntime.jsx(MenuItem, {
                  ...api.getItemProps({
                    id: c.id
                  }),
                  onClick: async () => {
                    if (!connecting) {
                      try {
                        connecting = true;
                        await connect(c);
                        api.close();
                      } finally {
                        connecting = false;
                      }
                    }
                  },
                  leftElement: getIconForConnector(c),
                  children: c.name
                }, c.id);
              })]
            })
          })
        })
      })]
    })
  });
};

/**
 * A component that allows the user to call an on-chain function on a contract.
 *
 * The button has to be wrapped in a `ThirdwebProvider` in order to function.
 *
 * @example
 * ```javascript
 * import { Web3Button } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *  return (
 *   <div>
 *     <Web3Button contractAddress="0x..." action={(contract) => contract.erc721.transfer("0x...", 1)} />
 *   </div>
 * )
 * }
 * ```
 *
 *
 * @beta
 */
const Web3Button = _ref => {
  let {
    contractAddress,
    onSuccess,
    onError,
    onSubmit,
    isDisabled,
    contractAbi,
    children,
    action,
    className,
    ...themeProps
  } = _ref;
  const address = evm.useAddress();
  const walletChainId = evm.useChainId();
  const sdkChainId = evm.useSDKChainId();
  const [, switchNetwork] = useNetwork();
  const hasMismatch = evm.useNetworkMismatch();
  const switchToChainId = React.useMemo(() => {
    if (sdkChainId && walletChainId && sdkChainId !== walletChainId) {
      return sdkChainId;
    }
    return null;
  }, [sdkChainId, walletChainId]);
  const {
    contract
  } = evm.useContract(contractAddress, contractAbi || "custom");

  // TODO move all of this logic to react-core, it's pure logic
  const mutation = reactQuery.useMutation(async () => {
    if (switchToChainId) {
      if (switchNetwork) {
        await switchNetwork(switchToChainId);
        return "__NETWORK_SWITCHED__";
      } else {
        throw new Error("need to switch chain but connected wallet does not support switching");
      }
    }
    invariant__default["default"](contract, "contract is not ready yet");
    if (onSubmit) {
      onSubmit();
    }
    return await action(contract);
  }, {
    onSuccess: res => {
      if (res === "__NETWORK_SWITCHED__") {
        return;
      }
      if (onSuccess) {
        onSuccess(res);
      }
    },
    onError: err => {
      if (onError) {
        onError(err);
      }
    }
    // TODO bring back invalidation
    // onSettled: () =>
    //   queryClient.invalidateQueries(
    //     createCacheKeyWithNetwork(
    //       createContractCacheKey(contractAddress),
    //       sdkChainId,
    //     ),
    //   ),
  });

  if (!address) {
    return /*#__PURE__*/jsxRuntime.jsx(ConnectWallet, {
      className: className,
      ...themeProps
    });
  }
  const willSwitchNetwork = hasMismatch && !!switchNetwork;
  return /*#__PURE__*/jsxRuntime.jsx(ThemeProvider, {
    ...themeProps,
    children: /*#__PURE__*/jsxRuntime.jsx(Button, {
      className: className,
      style: {
        height: "50px",
        minWidth: "200px",
        width: "100%"
      },
      isLoading: mutation.isLoading || !contract,
      onClick: () => mutation.mutate(),
      isDisabled: willSwitchNetwork ? false : isDisabled,
      leftElement: willSwitchNetwork ? /*#__PURE__*/jsxRuntime.jsx(FiWifi.FiWifi, {
        width: "1em",
        height: "1em"
      }) : undefined,
      children: willSwitchNetwork ? "Switch Network" : children
    })
  });
};

exports.ConnectWallet = ConnectWallet;
exports.MediaRenderer = MediaRenderer;
exports.ThirdwebNftMedia = ThirdwebNftMedia;
exports.ThirdwebProvider = ThirdwebProvider;
exports.Web3Button = Web3Button;
exports.useAccount = useAccount;
exports.useCoinbaseWallet = useCoinbaseWallet;
exports.useDisconnect = useDisconnect;
exports.useMetamask = useMetamask;
exports.useNetwork = useNetwork;
exports.useResolvedMediaType = useResolvedMediaType;
exports.useWalletConnect = useWalletConnect;
exports.useWalletLink = useWalletLink;
