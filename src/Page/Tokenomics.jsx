const Tokenomics = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-pink-200 p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">TOKENOMICS</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Token Distribution</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Liquidity Pool</span>
                  <span>50%</span>
                </li>
                <li className="flex justify-between">
                  <span>Marketing</span>
                  <span>20%</span>
                </li>
                <li className="flex justify-between">
                  <span>Development</span>
                  <span>15%</span>
                </li>
                <li className="flex justify-between">
                  <span>Team</span>
                  <span>10%</span>
                </li>
                <li className="flex justify-between">
                  <span>Airdrops</span>
                  <span>5%</span>
                </li>
              </ul>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Transaction Fees</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Buy Tax</span>
                  <span>5%</span>
                </li>
                <li className="flex justify-between">
                  <span>Sell Tax</span>
                  <span>5%</span>
                </li>
                <li className="flex justify-between">
                  <span>Marketing</span>
                  <span>3%</span>
                </li>
                <li className="flex justify-between">
                  <span>Liquidity</span>
                  <span>2%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Tokenomics
  