import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

import heroImage from './assets/IMG_9684.JPG.jpeg'
import groupImage from './assets/IMG_9119.JPG.jpeg'
import portraitImage from './assets/IMG_9681.JPG.jpeg'
import friendsImage from './assets/IMG_9684.JPG.jpeg'
import flowerImage from './assets/IMG_9683.JPG.jpeg'
import stripsImage from './assets/Photo_strips.PNG'

export const assets = {
  boothHero: heroImage,
  eventHero: groupImage,
  portrait: portraitImage,
  friends: friendsImage,
  flower: flowerImage,
  strips: stripsImage,
  gallery: [groupImage, portraitImage, friendsImage, flowerImage],
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero image={assets.boothHero} />
        <About image={assets.eventHero} />
        <Features strips={assets.strips} />
        <Gallery assets={assets} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
