import { days } from "./data/itinerary.js";
import Day from "./components/Day.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-400 selection:text-white">
      {/* Hero Section */}
      <header className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1600" 
            alt="Cape Town"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-stone-900/10 to-stone-50" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 text-white drop-shadow-xl">
            CAPE TOWN <span className="text-amber-400">GUIDE</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-[0.3em] uppercase text-white/90 max-w-2xl mx-auto drop-shadow-md">
            A Curated Menu of Experiences
          </p>
          <div className="mt-16 animate-bounce">
            <div className="w-px h-20 bg-gradient-to-b from-amber-400 to-transparent mx-auto" />
          </div>
        </div>
      </header>

      {/* Itinerary Sections */}
      <main className="max-w-7xl mx-auto px-6 py-32 space-y-48">
        {days.map((day, i) => (
          <Day key={i} day={day} index={i} />
        ))}
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-stone-200 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold tracking-tighter mb-4">ANANDA AFRICA DESIGN</h2>
          <p className="text-stone-500 text-sm uppercase tracking-[0.2em] mb-8">Built for Beautiful Things</p>
          <div className="w-12 h-px bg-amber-400 mx-auto mb-8" />
          <p className="text-stone-400 text-xs uppercase tracking-widest">© 2026 • Cape Town, South Africa</p>
        </div>
      </footer>
    </div>
  );
}
