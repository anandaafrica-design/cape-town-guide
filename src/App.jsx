import { days } from "./data/itinerary.js";
import Day from "./components/Day.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-400 selection:text-white">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1600" 
            alt="Cape Town"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white drop-shadow-xl">
            CAPE TOWN <span className="text-amber-400">GUIDE</span>
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-[0.3em] uppercase text-white/80 max-w-2xl mx-auto drop-shadow-md">
            A Curated Menu of Experiences
          </p>
          <div className="mt-12">
            <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent mx-auto" />
          </div>
        </div>
      </header>

      {/* Itinerary Sections */}
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {days.map((day, i) => (
          <Day key={i} day={day} index={i} />
        ))}
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-stone-200 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tighter mb-2">ANANDA AFRICA DESIGN</h2>
          <p className="text-stone-500 text-[10px] uppercase tracking-[0.2em] mb-6">Built for Beautiful Things</p>
          <div className="w-8 h-px bg-amber-400 mx-auto mb-6" />
          <p className="text-stone-400 text-[10px] uppercase tracking-widest">© 2026 • Cape Town, South Africa</p>
        </div>
      </footer>
    </div>
  );
}
