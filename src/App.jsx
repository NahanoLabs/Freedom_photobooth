import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import PhotoStripRibbon from './components/PhotoStripRibbon'
import './App.css'

import heroImage from './assets/IMG_9684.JPG.jpeg'
import groupImage from './assets/IMG_9119.JPG.jpeg'
import portraitImage from './assets/IMG_9681.JPG.jpeg'
import friendsImage from './assets/IMG_9677.JPG.jpeg'
import flowerImage from './assets/IMG_9683.JPG.jpeg'
import stripsImage from './assets/Photo_strips.PNG'
import partyImage from './assets/IMG_9680.JPG.jpeg'
import candidImage from './assets/IMG_9125.JPG.jpeg'

const boothProductImage = 'https://image.made-in-china.com/2f0j00gPZBEbDMkwqA/Red-Oak-Wooden-12-9-iPad-Photo-Booth-with-Printer-DSLR-Vintage-Photobooth-Shell-for-Parties-Events-with-Flight-Case.webp'

const assets = {
  boothHero: heroImage,
  eventHero: groupImage,
  portrait: portraitImage,
  friends: friendsImage,
  flower: flowerImage,
  strips: stripsImage,
  boothProduct: boothProductImage,
  gallery: [groupImage, portraitImage, friendsImage, flowerImage, partyImage, candidImage],
}

const trust = ['Weddings', 'Birthdays', 'Graduations', 'Corporate Events', 'Brand Activations', 'Private Parties', 'Festivals', 'Instant Prints', 'Digital Sharing']

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <PhotoStripRibbon images={assets.gallery} />
      <Header />
      <main id="main">
        <Hero image={assets.boothHero} boothImage={assets.boothProduct} />
        <Marquee items={trust} />
        <About assets={assets} />
        <Features strips={assets.strips} />
        <Gallery assets={assets} />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
