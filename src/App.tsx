
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofInNumbers from './sections/ProofInNumbers'
import HomeAbout from './sections/About'
import WhatWeDo from './sections/WhatWeDo'
import OurImpact from './sections/OurImpact'
import VoicesOfChange from './sections/VoicesOfChange'
import Partnerships from './sections/PartnerShips'
import Footer from './components/Footer'
import About from './pages/about'
import WhatWeDoPage from './pages/WhatWeDo'
import OurImpactPage from './pages/OurImpact'
import GetInvolvedPage from './pages/GetInvolved'
import TeamPage from './pages/Team'
import NewsStories from './pages/NewsStories'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function Home() {
  return (
    <main>
      <Hero />
      <ProofInNumbers />
      <HomeAbout />
      <WhatWeDo />
      <OurImpact />
      <VoicesOfChange />
      <Partnerships />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/our-impact" element={<OurImpactPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/news-stories" element={<NewsStories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
