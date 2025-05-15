import { useState } from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import Introduction from './components/Introduction'
import Tokenomics from './components/Tokenomics'
import RoadMap from './components/RoadMap'
import ClaimSOL from './components/ClaimSOL'
import Footer from './components/Footer'
import ContentWrapper from './components/ContentWrapper '
import LeftCircle from './components/LeftCircle'
import RightRect from './components/RightRect'
function App() {


  return (
    <>
 <div className="bg-[#D0D7E1] w-full min-h-screen">
      <Header />
      <LeftCircle />
      <RightRect />

      <ContentWrapper className="bg-[#dfe6ef]"maxWidth="md">
        <div id="contact">
          <Contact />
        </div>
        <div id="introduction">
          <Introduction />
        </div>
        <div id="tokenomics">
          <Tokenomics />
        </div>
        <div id="roadmap">
          <RoadMap />
        </div>
        <div id="claimsol">
          <ClaimSOL />
        </div>
        <Footer />
      </ContentWrapper>
    </div>
    </>
  )
}

export default App
