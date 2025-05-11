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
 <div className="bg-[#f2ddda] w-full min-h-screen">
      <Header />
      <LeftCircle />
      <RightRect />

      <ContentWrapper className="bg-white" width="450px">
        <Contact />
        <Introduction />
        <Tokenomics />
        <RoadMap />
        <ClaimSOL />
        <Footer />
      </ContentWrapper>
    </div>
    </>
  )
}

export default App
