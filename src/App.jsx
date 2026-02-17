import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AdmakiSection from './components/AdmakiSection'
import Footer from './components/Footer'

import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'

function App() {
    return (
        <div className="min-h-screen bg-rubid-black text-rubid-white font-sans overflow-x-hidden relative selection:bg-rubid-red selection:text-white">
            {/* Global Background Grid */}
            <div className="fixed inset-0 bg-[url('/bg-grid.svg')] opacity-5 pointer-events-none z-0"></div>

            <Navbar />

            <main className="relative z-10">
                <Hero />
                <AdmakiSection />
                <Services />
                <AboutUs />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}

export default App
