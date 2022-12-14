import { useState } from 'react';
import './App.css';
import * as Web3 from '@solana/web3.js'
import AddressForm from './components/AddressForm'
import './styles/App.css';

const App = () => {
  const [balance, setBalance] = useState(0)
  const [address, setAddress] = useState('')
  const [executable, setExecutable] = useState(false)

  const addressSubmittedHandler = (address: string) => {
    try {
      setAddress(address)
      const key = new Web3.PublicKey(address)
      const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
      connection.getBalance(key).then(balance => {
        setBalance(balance / Web3.LAMPORTS_PER_SOL)
      })
      console.log("AccountInfo: ", connection.getAccountInfo(key));
      connection.getAccountInfo(key).then(info => {
        setExecutable(info?.executable ?? false)
      })
    } catch (error) {
      setAddress('')
      setBalance(0)
      alert(error)
    }
  }

  const sendTransaction = () => {
    // const secret = (process.env.PRIVATE_KEY ?? [0]) as number[];
    const secret = process.env.PRIVATE_KEY;
    console.log("secret: ", secret);
    // const secretKey = Uint8Array.from(secret);
    // console.log("secretKey: ", secretKey);
    // const keypairFromSecretKey = Web3.Keypair.fromSecretKey(secretKey);
    // console.log("keypairFromSecretKey: ", keypairFromSecretKey)
  }

  return (
    <div className="App">
      <header className="AppHeader">
        <p>
          Solana Explorer
        </p>
        <AddressForm handler={addressSubmittedHandler} />
        <p>{`Address: ${address}`}</p>
        <p>{`Balance: ${balance} SOL`}</p>
        <p>{`Is it executable? ${executable ? "Yep" : "Nope"}`}</p>
      </header>
    </div>
  );
}

export default App;

// DAoVJ3GqAnzMCjqNmLb559hZ2LbyBFWiKpPzCPJjHMkT - has SOL
// CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN - is executable
