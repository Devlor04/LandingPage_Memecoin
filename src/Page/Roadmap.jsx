const Roadmap = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-pink-200 p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">ROADMAP</h1>
  
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-gray-400">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-600"></div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Phase 1: Launch</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Website Launch</li>
                <li>Social Media Setup</li>
                <li>Community Building</li>
                <li>Token Launch</li>
                <li>Initial Marketing Campaign</li>
              </ul>
            </div>
  
            <div className="relative pl-8 border-l-2 border-gray-400">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-600"></div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Phase 2: Growth</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Exchange Listings</li>
                <li>Partnership Announcements</li>
                <li>Community Expansion</li>
                <li>Enhanced Marketing Efforts</li>
              </ul>
            </div>
  
            <div className="relative pl-8 border-l-2 border-gray-400">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-600"></div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Phase 3: Expansion</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Platform Development</li>
                <li>NFT Collection Launch</li>
                <li>Major Exchange Listings</li>
                <li>Global Marketing Campaign</li>
              </ul>
            </div>
  
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-600"></div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Phase 4: Ecosystem</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Ecosystem Expansion</li>
                <li>Cross-Chain Integration</li>
                <li>Decentralized Applications</li>
                <li>Community Governance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Roadmap
  