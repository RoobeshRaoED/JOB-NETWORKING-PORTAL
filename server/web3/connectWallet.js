// Wallet connection happens on frontend using MetaMask

export function placeholder() {
  return "web3 util placeholder";
}
export async function connectWallet() {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
  } else {
    alert('Install MetaMask');
  }
}
