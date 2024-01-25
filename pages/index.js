import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
window.onload = function() {
  if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      window.ethereum
          .request({ method: 'eth_chainId' })
          .then(chainId => {
              console.log('Connected to Ethereum with chain ID:', chainId);
          })
          .catch(error => {
              console.error('Error connecting to Ethereum:', error.message);
          });
  } else {
      console.warn('MetaMask is not installed.');
  }
};

